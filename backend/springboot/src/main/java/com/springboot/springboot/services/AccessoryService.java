package com.springboot.springboot.services;

import com.springboot.springboot.model.*;
import com.springboot.springboot.repository.AccessoryRepository;
import com.springboot.springboot.requests.accessory.NewAccessoryRequest;
import com.springboot.springboot.requests.accessory.UpdateAccessoryRequest;
import com.springboot.springboot.requests.game.UpdateGameRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Optional;

@Service
public class AccessoryService {

    private static final Logger logger = LoggerFactory.getLogger(Category.class);

    @Autowired
    BrandService brandService;

    @Autowired
    GameService gameService;

    @Autowired
    CategoryService categoryService;

    @Autowired
    AccessoryRepository accessoryRepository;

    public Accessory getAccessory(String id) throws Exception {
        try {
            return getAccessory(Long.parseLong(id));
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    public Accessory getAccessory(Long id) {
        Optional<Accessory> optional = accessoryRepository.findById(id);
        return optional.isPresent() ? optional.get() : null;
    }

    public ResponseEntity<?> createAccessory(NewAccessoryRequest newAccessory) {
        try {
            Accessory accessory = new Accessory();
            accessory.setName(newAccessory.getName());
            accessory.setDescription(newAccessory.getDescription());
            accessory.setPrice(newAccessory.getPrice());
            accessory.setImg(newAccessory.getImg());
            accessory.setAge(newAccessory.getAge());
            accessory.setType(ProductType.ACCESSORY);
            Brand brand = brandService.getBrand(newAccessory.getBrand());
            accessory.setBrand(brand);
            if (newAccessory.getGameId() != null) {
                Game game = gameService.getGame(newAccessory.getGameId());
                accessory.setGame(game);
            } else {
                accessory.setGame(null);
            }
            Category category = categoryService.getCategory(newAccessory.getCategory());
            accessory.setCategory(category);
            accessory.setCreatedAt(new Timestamp(System.currentTimeMillis()));
            accessory.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
            accessoryRepository.save(accessory);
            return new ResponseEntity<>(accessory, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<?> updateAccessory(String id, UpdateAccessoryRequest updateAccessory) {
        try {
            Accessory accessory = getAccessory(id);

            if (accessory == null) {
                return ResponseEntity.badRequest().body("Accessory not found");
            }
            if (updateAccessory.getName() != null ) {
                accessory.setName(updateAccessory.getName());
            }
            if (updateAccessory.getDescription() != null ) {
                accessory.setDescription(updateAccessory.getDescription());
            }
            if (updateAccessory.getPrice() != null ) {
                accessory.setPrice(updateAccessory.getPrice());
            }
            if (updateAccessory.getImg() != null ) {
                accessory.setImg(updateAccessory.getImg());
            }
            if (updateAccessory.getAge() != null ) {
                accessory.setAge(updateAccessory.getAge());
            }
            if (updateAccessory.getBrand() != null ) {
                Brand brand = brandService.getBrand(updateAccessory.getBrand());
                accessory.setBrand(brand);
            }
            if (updateAccessory.getGameId() != null ) {
                Game game = gameService.getGame(updateAccessory.getGameId());
                accessory.setGame(game);
            } else {
                accessory.setGame(null);
            }
            if (updateAccessory.getCategory() != null ) {
                Category category = categoryService.getCategory(updateAccessory.getCategory());
                accessory.setCategory(category);
            }

            accessory.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
            accessoryRepository.save(accessory);
        } catch (Exception e) {
            logger.error("Error updating accessory: {}", e.getMessage());
            return ResponseEntity.badRequest().body("Accessory update failed");
        }
        return null;
    }
}
