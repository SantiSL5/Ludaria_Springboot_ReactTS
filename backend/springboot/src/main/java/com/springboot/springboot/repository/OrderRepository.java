package com.springboot.springboot.repository;

import com.springboot.springboot.model.Cart;
import com.springboot.springboot.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {
    Optional<Order> findByUserId(Long userId);
}