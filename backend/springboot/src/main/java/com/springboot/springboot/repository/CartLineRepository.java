package com.springboot.springboot.repository;

import com.springboot.springboot.model.CartLine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartLineRepository extends JpaRepository<CartLine, Long> {
}
