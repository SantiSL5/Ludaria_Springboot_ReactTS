package com.springboot.springboot.repository;

import com.springboot.springboot.model.Product;
import com.springboot.springboot.model.ProductType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.math.BigDecimal;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query( "SELECT p, " +
            "(SELECT COUNT(c) FROM Comment c WHERE c.product.id = p.id) AS comments, " +
            "(SELECT ROUND(AVG(c.rate), 1) FROM Comment c WHERE c.product.id = p.id) AS rating, " +
            "(SELECT COUNT(l) FROM Like l WHERE l.product.id = p.id) AS likes " +
            "FROM Product p " +
            "WHERE " +
            "(:type IS NULL OR p.type = :type) AND " +
            "(:category IS NULL OR p.category.id = :category) AND " +
            "(:brand IS NULL OR p.brand.id = :brand) AND " +
            "(:minPrice IS NULL OR p.price >= :minPrice) AND " +
            "(:maxPrice IS NULL OR p.price <= :maxPrice) AND " +
            "(:search IS NULL OR LOWER(p.name) LIKE LOWER(:search))")
    List<Object[]> findProductsByFilters(
            @Param("type") ProductType type,
            @Param("category") Long category,
            @Param("brand") Long brand,
            @Param("minPrice") BigDecimal minPrice,
            @Param("maxPrice") BigDecimal maxPrice,
            @Param("search") String search
    );
    @Query( "SELECT p, " +
            "(SELECT COUNT(c) FROM Comment c WHERE c.product.id = p.id) AS comments, " +
            "(SELECT ROUND(AVG(c.rate), 1) FROM Comment c WHERE c.product.id = p.id) AS rating, " +
            "(SELECT COUNT(l) FROM Like l WHERE l.product.id = p.id) AS likes " +
            "FROM Product p " +
            "WHERE " +
            "(:type IS NULL OR p.type = :type) AND " +
            "(:category IS NULL OR p.category.id = :category) AND " +
            "(:brand IS NULL OR p.brand.id = :brand) AND " +
            "(:minPrice IS NULL OR p.price >= :minPrice) AND " +
            "(:maxPrice IS NULL OR p.price <= :maxPrice) AND " +
            "(:search IS NULL OR LOWER(p.name) LIKE LOWER(:search))")
    Page<Object[]> findProductsByFiltersPag(
            Pageable pageable,
            @Param("type") ProductType type,
            @Param("category") Long category,
            @Param("brand") Long brand,
            @Param("minPrice") BigDecimal minPrice,
            @Param("maxPrice") BigDecimal maxPrice,
            @Param("search") String search
    );
    @Query( "SELECT p, " +
            "(SELECT COUNT(c) FROM Comment c WHERE c.product.id = p.id) AS comments, " +
            "(SELECT ROUND(AVG(c.rate), 1) FROM Comment c WHERE c.product.id = p.id) AS rating, " +
            "(SELECT COUNT(l) FROM Like l WHERE l.product.id = p.id) AS likes, " +
            "(SELECT COUNT(l) > 0 FROM Like l WHERE l.product.id = p.id AND l.user.id = :user) AS liked " +
            "FROM Product p " +
            "WHERE " +
            "(:type IS NULL OR p.type = :type) AND " +
            "(:category IS NULL OR p.category.id = :category) AND " +
            "(:brand IS NULL OR p.brand.id = :brand) AND " +
            "(:minPrice IS NULL OR p.price >= :minPrice) AND " +
            "(:maxPrice IS NULL OR p.price <= :maxPrice) AND " +
            "(:search IS NULL OR LOWER(p.name) LIKE LOWER(:search))")
    Page<Object[]> findProductsByFiltersPagAuth(
            Pageable pageable,
            @Param("type") ProductType type,
            @Param("category") Long category,
            @Param("brand") Long brand,
            @Param("minPrice") BigDecimal minPrice,
            @Param("maxPrice") BigDecimal maxPrice,
            @Param("search") String search,
            @Param("user") Long user
    );
}
