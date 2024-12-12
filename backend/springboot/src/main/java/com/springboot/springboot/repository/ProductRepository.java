package com.springboot.springboot.repository;

import com.springboot.springboot.model.Product;
import com.springboot.springboot.model.ProductType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query("SELECT p FROM Product p WHERE (:type IS NULL OR p.type = :type)")
    List<Product> findProductsByFilters(
            @Param("type") ProductType type);

    @Query("SELECT p FROM Product p WHERE (:type IS NULL OR p.type = :type)")
    Page<Product> findProductsByFiltersPag(
            Pageable pageable,
            @Param("type") ProductType type
    );
}