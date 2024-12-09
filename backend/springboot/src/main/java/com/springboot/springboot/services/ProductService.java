package com.springboot.springboot.services;

import com.springboot.springboot.model.*;
import com.springboot.springboot.repository.ProductRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    private static final Logger logger = LoggerFactory.getLogger(ProductService.class);

    public ResponseEntity<?> getProducts(Integer limit, Integer offset) {
        try {
            List<Product> products = new ArrayList<>();
            if (limit != null && offset != null) {
                getAllProducts(limit, offset).forEach(products::add);
            } else {
                getAllProducts().forEach(products::add);
            }

            return new ResponseEntity<>(products, HttpStatus.OK);
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

    public ResponseEntity<?> createProduct(Product product) {
        try {
            product.setCreatedAt(new Timestamp(System.currentTimeMillis()));
            product.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
            productRepository.save(product);
            return new ResponseEntity<>(product, HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("Error creating product: {}", e.getMessage());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<?> updateProduct(Long id, Product updatedProduct) {
        try {
            Product product = getProduct(id);
            if (product == null) {
                return ResponseEntity.badRequest().body("Product not found");
            }
            if (updatedProduct.getName() != null) product.setName(updatedProduct.getName());
            if (updatedProduct.getDescription() != null) product.setDescription(updatedProduct.getDescription());
            if (updatedProduct.getPrice() != null) product.setPrice(updatedProduct.getPrice());
            if (updatedProduct.getAge() != null) product.setAge(updatedProduct.getAge());
            product.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
            productRepository.save(product);
            return ResponseEntity.ok(product);
        } catch (Exception e) {
            logger.error("Error updating product: {}", e.getMessage());
            return ResponseEntity.badRequest().body("Product update failed");
        }
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