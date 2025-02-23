package com.springboot.springboot.services;

import com.springboot.springboot.model.*;
import com.springboot.springboot.repository.CommentRepository;
import com.springboot.springboot.repository.LikeRepository;
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

import java.util.List;
import java.util.Optional;
import java.math.BigDecimal;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserService userService;

    private BigDecimal parseBigDecimal(String value) {
        return value == null ? null : new BigDecimal(value);
    }

    private static final Logger logger = LoggerFactory.getLogger(ProductService.class);

    public ResponseEntity<?> getProducts(String limit, String offset, String type, String category, String brand, String minPrice, String maxPrice, String search) {
        try {
            ProductType typeFilter = type == null ? null : ProductType.valueOf(type);
            Long categoryFilter = category == null ? null : Long.parseLong(category);
            Long brandFilter = brand == null ? null : Long.parseLong(brand);
            BigDecimal minPriceFilter = minPrice == null ? null : parseBigDecimal(minPrice);
            BigDecimal maxPriceFilter = maxPrice == null ? null : parseBigDecimal(maxPrice);
            String searchFilter = (search == null || search.isBlank()) ? null : "%" + search.toLowerCase() + "%";

            if (limit != null && offset != null) {
                Pageable pageable = PageRequest.of(Integer.parseInt(offset), Integer.parseInt(limit));
                Page<Object[]> productPage;
                if (userService.isAuthenticated()) {
                    User user = userService.token_user();
                    productPage = productRepository.findProductsByFiltersPagAuth(
                            pageable,
                            typeFilter,
                            categoryFilter,
                            brandFilter,
                            minPriceFilter,
                            maxPriceFilter,
                            searchFilter,
                            user.getId()
                    );
                    List<Product> products = productPage.getContent().stream()
                            .map(result -> {
                                Product product = (Product) result[0];
                                Long numComments = (Long) result[1];
                                Double rating = (Double) result[2];
                                Long likes = (Long) result[3];
                                Boolean liked = (result.length > 4) ? (Boolean) result[4] : false;
                                product.setNumComments(numComments);
                                product.setRating(rating);
                                product.setLikes(likes);
                                product.setLiked(liked);
                                return product;
                            })
                            .toList();
                    ProductsResponse response = new ProductsResponse(productPage.getTotalPages(), products);
                    return new ResponseEntity<>(response, HttpStatus.OK);
                } else {
                    productPage = productRepository.findProductsByFiltersPag(
                            pageable,
                            typeFilter,
                            categoryFilter,
                            brandFilter,
                            minPriceFilter,
                            maxPriceFilter,
                            searchFilter
                    );
                    List<Product> products = productPage.getContent().stream()
                            .map(result -> {
                                Product product = (Product) result[0];
                                Long numComments = (Long) result[1];
                                Double rating = (Double) result[2];
                                Long likes = (Long) result[3];
                                product.setNumComments(numComments);
                                product.setRating(rating);
                                product.setLikes(likes);
                                return product;
                            })
                            .toList();
                    ProductsResponse response = new ProductsResponse(productPage.getTotalPages(), products);
                    return new ResponseEntity<>(response, HttpStatus.OK);
                }
            }else {
                List<Object[]> rawProducts = productRepository.findProductsByFilters(
                        typeFilter,
                        categoryFilter,
                        brandFilter,
                        minPriceFilter,
                        maxPriceFilter,
                        searchFilter
                );
                List<Product> products = rawProducts.stream()
                        .map(result -> {
                            Product product = (Product) result[0];
                            Long numComments = (Long) result[1];
                            Double rating = (Double) result[2];
                            Long likes = (Long) result[3];
                            product.setNumComments(numComments);
                            product.setRating(rating);
                            product.setLikes(likes);
                            return product;
                        })
                        .toList();
                return new ResponseEntity<>(products, HttpStatus.OK);
            }

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
        try {
            Product product= productRepository.findById(id).orElse(null);
            if (product != null) {
                if (userService.isAuthenticated()) {
                    User user = userService.token_user();
                    product.setLikes(likeRepository.countLikesByProduct(product.getId()));
                    product.setLiked(likeRepository.checkLike(user.getId(), product.getId()).isPresent());
                    Optional<Comment> comment = commentRepository.checkComment(user.getId(), product.getId());
                    product.setNumComments(commentRepository.numComments(product.getId()));
                    product.setRating(commentRepository.productRating(product.getId()));
                    comment.ifPresent(product::setComment);
                }else {
                    product.setLikes(likeRepository.countLikesByProduct(product.getId()));
                    product.setNumComments(commentRepository.numComments(product.getId()));
                    product.setRating(commentRepository.productRating(product.getId()));
                }
                return product;
            }else {
                return null;
            }
        } catch (Exception e) {
            logger.error("Error getting product: {}", e.getMessage());
        }
        return null;
    }

    public void deleteProduct(Long id) {
        try {
            productRepository.deleteById(id);
        } catch (Exception e) {
            logger.error("Error deleting product: {}", e.getMessage());
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
