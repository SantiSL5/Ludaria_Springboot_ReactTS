package com.springboot.springboot.services;

import com.springboot.springboot.model.*;
import com.springboot.springboot.model.Game;
import com.springboot.springboot.repository.GameRepository;
import com.springboot.springboot.requests.game.NewGameRequest;
import com.springboot.springboot.requests.game.UpdateGameRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Service
public class GameService {

    private static final Logger logger = LoggerFactory.getLogger(Category.class);

    @Autowired
    BrandService brandService;

    @Autowired
    GameRepository gameRepository;

    public Game getGame(String id) throws Exception {
        try {
            return getGame(Long.parseLong(id));
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    public Game getGame(Long id) {
        Optional<Game> optional = gameRepository.findById(id);
        return optional.isPresent() ? optional.get() : null;
    }

    public ResponseEntity<?> createGame(NewGameRequest newGame) {
        try {
            Game game = new Game();
            game.setName(newGame.getName());
            game.setDescription(newGame.getDescription());
            game.setPrice(newGame.getPrice());
            game.setImg(newGame.getImg());
            game.setAge(newGame.getAge());
            game.setType(ProductType.GAME);
            Brand brand = brandService.getBrand(newGame.getBrand());
            game.setBrand(brand);
            game.setAuthor(newGame.getAuthor());
            game.setDifficulty(newGame.getDifficulty());
            game.setLaunchDate(newGame.getLaunchDate());
            game.setDuration(newGame.getDuration());
            game.setMinPlayers(newGame.getMinPlayers());
            game.setMaxPlayers(newGame.getMaxPlayers());
            game.setCreatedAt(new Timestamp(System.currentTimeMillis()));
            game.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
            gameRepository.save(game);
            return new ResponseEntity<>(game, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<?> updateGame(String id, UpdateGameRequest updateGame) {
        try {
            Game game = getGame(id);

            if (game == null) {
                return ResponseEntity.badRequest().body("Game not found");
            }
            if (updateGame.getName() != null ) {
                game.setName(updateGame.getName());
            }
            if (updateGame.getDescription() != null ) {
                game.setDescription(updateGame.getDescription());
            }
            if (updateGame.getPrice() != null ) {
                game.setPrice(updateGame.getPrice());
            }
            if (updateGame.getImg() != null ) {
                game.setImg(updateGame.getImg());
            }
            if (updateGame.getAge() != null ) {
                game.setAge(updateGame.getAge());
            }
            if (updateGame.getBrand() != null ) {
                Brand brand = brandService.getBrand(updateGame.getBrand());
                game.setBrand(brand);
            }
            if (updateGame.getAuthor() != null ) {
                game.setAuthor(updateGame.getAuthor());
            }
            if (updateGame.getDifficulty() != null ) {
                game.setDifficulty(updateGame.getDifficulty());
            }
            if (updateGame.getLaunchDate() != null ) {
                game.setLaunchDate(updateGame.getLaunchDate());
            }
            if (updateGame.getDuration() != null ) {
                game.setDuration(updateGame.getDuration());
            }
            if (updateGame.getMinPlayers() != null ) {
                game.setMinPlayers(updateGame.getMinPlayers());
            }
            if (updateGame.getMaxPlayers() != null ) {
                game.setMaxPlayers(updateGame.getMaxPlayers());
            }

            game.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
            gameRepository.save(game);
        } catch (Exception e) {
            logger.error("Error updating game: {}", e.getMessage());
            return ResponseEntity.badRequest().body("Game update failed");
        }
        return null;
    }
}
