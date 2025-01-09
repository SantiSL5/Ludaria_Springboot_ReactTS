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
    @Query("SELECT p FROM Product p WHERE " +
            "(:type IS NULL OR p.type = :type) AND " +
            "(:category IS NULL OR p.category.id = :category) AND " +
            "(:brand IS NULL OR p.brand.id = :brand) AND " +
            "(:minPrice IS NULL OR p.price >= :minPrice) AND " +
            "(:maxPrice IS NULL OR p.price <= :maxPrice)")
    List<Product> findProductsByFilters(
            @Param("type") ProductType type,
            @Param("category") Long category,
            @Param("brand") Long brand,
            @Param("minPrice") BigDecimal minPrice,
            @Param("maxPrice") BigDecimal maxPrice
    );

    @Query("SELECT p FROM Product p WHERE " +
            "(:type IS NULL OR p.type = :type) AND " +
            "(:category IS NULL OR p.category.id = :category) AND " +
            "(:brand IS NULL OR p.brand.id = :brand) AND " +
            "(:minPrice IS NULL OR p.price >= :minPrice) AND " +
            "(:maxPrice IS NULL OR p.price <= :maxPrice)")
    Page<Product> findProductsByFiltersPag(
            Pageable pageable,
            @Param("type") ProductType type,
            @Param("category") Long category,
            @Param("brand") Long brand,
            @Param("minPrice") BigDecimal minPrice,
            @Param("maxPrice") BigDecimal maxPrice
    );
}