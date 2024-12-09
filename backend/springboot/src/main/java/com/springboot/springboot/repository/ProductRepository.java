package com.springboot.springboot.repository;

import com.springboot.springboot.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}