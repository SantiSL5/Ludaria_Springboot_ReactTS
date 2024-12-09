package com.springboot.springboot.repository;

import com.springboot.springboot.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
}