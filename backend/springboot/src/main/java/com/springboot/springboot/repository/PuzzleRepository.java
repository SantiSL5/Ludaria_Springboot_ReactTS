package com.springboot.springboot.repository;

import com.springboot.springboot.model.Puzzle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PuzzleRepository extends JpaRepository<Puzzle, Long> {
}