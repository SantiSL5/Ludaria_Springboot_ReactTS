package com.springboot.springboot.controllers;

import com.springboot.springboot.requests.category.UpdateCategoryRequest;
import com.springboot.springboot.requests.game.NewGameRequest;
import com.springboot.springboot.requests.game.UpdateGameRequest;
import com.springboot.springboot.services.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class GameController {

    @Autowired
    GameService gameService;

    @PostMapping("/admin/game")
    public ResponseEntity<?> createGame(@RequestBody NewGameRequest game) {
        return gameService.createGame(game);
    }

    @PutMapping("/admin/game/{id}")
    public ResponseEntity<?> updateGame(@PathVariable String id, @RequestBody UpdateGameRequest game) {
        return gameService.updateGame(id, game);
    }

}
