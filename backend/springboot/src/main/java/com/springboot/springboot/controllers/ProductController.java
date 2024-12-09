package com.springboot.springboot.controllers;

import com.springboot.springboot.model.Product;
import com.springboot.springboot.requests.accessory.NewAccessoryRequest;
import com.springboot.springboot.requests.game.NewGameRequest;
import com.springboot.springboot.requests.general.DeleteManyRequest;
import com.springboot.springboot.requests.puzzle.NewPuzzleRequest;
import com.springboot.springboot.services.AccessoryService;
import com.springboot.springboot.services.GameService;
import com.springboot.springboot.services.ProductService;
import com.springboot.springboot.services.PuzzleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    ProductService productService;

    @Autowired
    GameService gameService;

    @Autowired
    PuzzleService puzzleService;


    @GetMapping("/product")
    public ResponseEntity<?> getAllProducts(@RequestParam(value = "limit", required = false, defaultValue = "0") Integer limit,
                                            @RequestParam(value = "offset", required = false) Integer offset) {
        return productService.getProducts(limit, offset);
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<?> getProduct(@PathVariable(required = true) Long id) {
        try {
            Product product = productService.getProduct(id);
            if (product == null) {
                return new ResponseEntity<>("Product not found", HttpStatus.NOT_FOUND);
            }
            return ResponseEntity.ok(product);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Product not found");
        }
    }

    @DeleteMapping("/admin/product/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        try {
            Product product = productService.getProduct(id);
            if (product == null) {
                return new ResponseEntity<>("Product not found", HttpStatus.NOT_FOUND);
            }
            productService.deleteProduct(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Product deletion failed", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/admin/product/deleteMany")
    public ResponseEntity<?> deleteManyProducts(@RequestBody DeleteManyRequest manyProducts) {
        return productService.deleteManyProducts(manyProducts.getIds());
    }
}
