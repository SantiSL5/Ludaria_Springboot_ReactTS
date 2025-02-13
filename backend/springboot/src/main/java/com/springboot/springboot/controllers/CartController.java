package com.springboot.springboot.controllers;


import com.springboot.springboot.model.Brand;
import com.springboot.springboot.model.CartLine;
import com.springboot.springboot.requests.cartLine.NewCartLineRequest;
import com.springboot.springboot.requests.cartLine.UpdateCartLineRequest;
import com.springboot.springboot.services.CartService;
import com.springboot.springboot.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class CartController {
    @Autowired
    CartService cartService;

    @GetMapping("/client/cart")
    public ResponseEntity<?> getCart() {
        return new ResponseEntity<> (cartService.getCart(), HttpStatus.OK);
    }

    @DeleteMapping("/client/cart")
    public void cleanCart() {
        cartService.cleanCart();
    }

    @PostMapping("/client/cartLine")
    public ResponseEntity<?> addCartLine(@RequestBody NewCartLineRequest newCartLineRequest) {
        return cartService.addCartLine(newCartLineRequest);
    }

    @PutMapping("/client/cartLine/{id}")
    public void updateCartLine(@RequestBody UpdateCartLineRequest updateCartLineRequest, @PathVariable String id) {
        cartService.updateCardLine(updateCartLineRequest,id);
    }

    @DeleteMapping("/client/cartLine/{id}")
    public ResponseEntity<?> deleteCartLine(@PathVariable String id) {
        try {
            CartLine cartLine = cartService.getCartLine(id);
            if (cartLine == null) {
                return new ResponseEntity<>("Cart is not found", HttpStatus.NOT_FOUND);
            }
            cartService.deleteCartLine(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Brand deletion failed", HttpStatus.BAD_REQUEST);
        }
    }
}
