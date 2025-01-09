package com.springboot.springboot.services;

import com.springboot.springboot.model.*;
import com.springboot.springboot.repository.ProductRepository;
import com.springboot.springboot.resources.ProductsResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.math.BigDecimal;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    private BigDecimal parseBigDecimal(String value) {
        return value == null ? null : new BigDecimal(value);
    }

    private static final Logger logger = LoggerFactory.getLogger(ProductService.class);

    public ResponseEntity<?> getProducts(String limit, String offset, String type, String category, String brand, String minPrice, String maxPrice) {
        try {
            Pageable pageable = null;
            if (limit != null && offset != null) {
                pageable = PageRequest.of(Integer.parseInt(offset), Integer.parseInt(limit));
            }

            Page<Product> productPage = null;
            if (pageable != null) {
                productPage = productRepository.findProductsByFiltersPag(pageable,
                        type == null ? null : ProductType.valueOf(type),
                        category == null ? null : Long.parseLong(category),
                        brand == null ? null : Long.parseLong(brand),
                        minPrice == null ? null : parseBigDecimal(minPrice),
                        maxPrice == null ? null : parseBigDecimal(maxPrice)
                );
            } else {
                List<Product> products = productRepository.findProductsByFilters(
                        type == null ? null : ProductType.valueOf(type),
                        category == null ? null : Long.parseLong(category),
                        brand == null ? null : Long.parseLong(brand),
                        minPrice == null ? null : parseBigDecimal(minPrice),
                        maxPrice == null ? null : parseBigDecimal(maxPrice)
                );
                return new ResponseEntity<>(products, HttpStatus.OK);
            }

            List<Product> products = productPage.getContent();
            ProductsResponse response = new ProductsResponse(productPage.getTotalPages(), products);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error getting products: {}", e.getMessage());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getAllProducts(Integer limit, Integer offset) {
        return productRepository.findAll().subList(offset, Math.min(offset + limit, productRepository.findAll().size()));
    }

    public Product getProduct(Long id) {
        Optional<Product> optional = productRepository.findById(id);
        return optional.orElse(null);
    }

    public void deleteProduct(Long id) {
        try {
            productRepository.deleteById(id);
        } catch (Exception e) {
            logger.error("Error deleting category: {}", e.getMessage());
        }
    }

    public void deleteProduct(String id) {
        try {
            Long productId = Long.parseLong(id);
            deleteProduct(productId);
        } catch (Exception e) {
            logger.error("Error deleting product: {}", e.getMessage());
        }
    }

    public ResponseEntity<?> deleteManyProducts(List<Long> ids) {
        try {
            for (Long id : ids) {
                if (getProduct(id) == null) {
                    return new ResponseEntity<>("Product " + id + " not found", HttpStatus.BAD_REQUEST);
                }
            }
            for (Long id : ids) {
                deleteProduct(id);
            }
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error deleting products: {}", e.getMessage());
            return new ResponseEntity<>("Products deletion failed", HttpStatus.BAD_REQUEST);
        }
    }
}