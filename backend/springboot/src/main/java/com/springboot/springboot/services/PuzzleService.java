package com.springboot.springboot.services;

import com.springboot.springboot.model.*;
import com.springboot.springboot.repository.PuzzleRepository;
import com.springboot.springboot.requests.accessory.UpdateAccessoryRequest;
import com.springboot.springboot.requests.puzzle.NewPuzzleRequest;
import com.springboot.springboot.requests.puzzle.UpdatePuzzleRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Optional;

@Service
public class PuzzleService {

    private static final Logger logger = LoggerFactory.getLogger(Category.class);

    @Autowired
    PuzzleRepository puzzleRepository;

    @Autowired
    BrandService brandService;
    
    public Puzzle getPuzzle(String id) throws Exception {
        try {
            return getPuzzle(Long.parseLong(id));
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    public Puzzle getPuzzle(Long id) {
        Optional<Puzzle> optional = puzzleRepository.findById(id);
        return optional.isPresent() ? optional.get() : null;
    }

    public ResponseEntity<?> createPuzzle(NewPuzzleRequest newPuzzle) {
        try {
            Puzzle puzzle = new Puzzle();
            puzzle.setName(newPuzzle.getName());
            puzzle.setDescription(newPuzzle.getDescription());
            puzzle.setPrice(newPuzzle.getPrice());
            puzzle.setImg(newPuzzle.getImg());
            puzzle.setAge(newPuzzle.getAge());
            puzzle.setType(ProductType.PUZZLE);
            Brand brand = brandService.getBrand(newPuzzle.getBrand());
            puzzle.setBrand(brand);
            puzzle.setAuthor(newPuzzle.getAuthor());
            puzzle.setNumPieces(newPuzzle.getNumPieces());
            puzzle.setDifficulty(newPuzzle.getDifficulty());
            puzzle.setCreatedAt(new Timestamp(System.currentTimeMillis()));
            puzzle.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
            puzzleRepository.save(puzzle);
            return new ResponseEntity<>(puzzle, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<?> updatePuzzle(String id, UpdatePuzzleRequest updatePuzzle) {
        try {
            Puzzle puzzle = getPuzzle(id);

            if (puzzle == null) {
                return ResponseEntity.badRequest().body("Puzzle not found");
            }
            if (updatePuzzle.getName() != null ) {
                puzzle.setName(updatePuzzle.getName());
            }
            if (updatePuzzle.getDescription() != null ) {
                puzzle.setDescription(updatePuzzle.getDescription());
            }
            if (updatePuzzle.getPrice() != null ) {
                puzzle.setPrice(updatePuzzle.getPrice());
            }
            if (updatePuzzle.getImg() != null ) {
                puzzle.setImg(updatePuzzle.getImg());
            }
            if (updatePuzzle.getAge() != null ) {
                puzzle.setAge(updatePuzzle.getAge());
            }
            if (updatePuzzle.getBrand() != null ) {
                Brand brand = brandService.getBrand(updatePuzzle.getBrand());
                puzzle.setBrand(brand);
            }
            if (updatePuzzle.getAuthor() != null ) {
                puzzle.setAuthor(updatePuzzle.getAuthor());
            }
            if (updatePuzzle.getDifficulty() != null ) {
                puzzle.setDifficulty(updatePuzzle.getDifficulty());
            }

            puzzle.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
            puzzleRepository.save(puzzle);
        } catch (Exception e) {
            logger.error("Error updating puzzle: {}", e.getMessage());
            return ResponseEntity.badRequest().body("Puzzle update failed");
        }
        return null;
    }

}
