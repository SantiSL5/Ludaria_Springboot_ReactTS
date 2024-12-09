package com.springboot.springboot.controllers;

import com.springboot.springboot.requests.game.UpdateGameRequest;
import com.springboot.springboot.requests.puzzle.NewPuzzleRequest;
import com.springboot.springboot.requests.puzzle.UpdatePuzzleRequest;
import com.springboot.springboot.services.PuzzleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class PuzzleController {

    @Autowired
    PuzzleService puzzleService;

    @PostMapping("/admin/puzzle")
    public ResponseEntity<?> createPuzzle(@RequestBody NewPuzzleRequest puzzle) {
        return puzzleService.createPuzzle(puzzle);
    }

    @PutMapping("/admin/puzzle/{id}")
    public ResponseEntity<?> updatePuzzle(@PathVariable String id, @RequestBody UpdatePuzzleRequest puzzle) {
        return puzzleService.updatePuzzle(id, puzzle);
    }
}
