package com.springboot.springboot.repository;

import com.springboot.springboot.model.Accessory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccessoryRepository extends JpaRepository<Accessory, Long> {
}