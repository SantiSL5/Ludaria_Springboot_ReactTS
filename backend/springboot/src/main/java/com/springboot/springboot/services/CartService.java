package com.springboot.springboot.services;

import com.springboot.springboot.model.*;
import com.springboot.springboot.repository.CartLineRepository;
import com.springboot.springboot.repository.CartRepository;
import com.springboot.springboot.requests.cartLine.NewCartLineRequest;
import com.springboot.springboot.requests.cartLine.UpdateCartLineRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Optional;

@Service
public class CartService {
    @Autowired
    CartRepository cartRepository;

    @Autowired
    CartLineRepository cartLineRepository;

    @Autowired
    ProductService productService;

    @Autowired
    UserService userService;

    private static final Logger logger = LoggerFactory.getLogger(BrandService.class);


    // Cart

    public Cart getCart() {
        try {
            User user = userService.token_user();
            return cartRepository.findByUserId(user.getId()).orElse(null);
        } catch (Exception e) {
            logger.error("Error getting cart: {}", e.getMessage());
            return null;
        }
    }

    public void cleanCart() {
        try {
            Cart cart = getCart();
            cartRepository.delete(cart);
        } catch (Exception e) {
            logger.error("Error deleting cart: {}", e.getMessage());
        }
    }


    //Cart Line

    public CartLine getCartLine(Long id) {
        Optional<CartLine> optional = cartLineRepository.findById(id);
        return optional.isPresent() ? optional.get() : null;
    }

    public CartLine getCartLine(String id) throws Exception {
        try {
            return getCartLine(Long.parseLong(id));
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    public ResponseEntity<?> addCartLine(NewCartLineRequest newCartLineRequest) {
        try {
            User user = userService.token_user();
            Cart cart = getCart();
            Product product = productService.getProduct(newCartLineRequest.getProduct());
            if (cart == null) {
                Cart newCart = new Cart();
                newCart.setUser(user);
                newCart.setCreated_at(new Timestamp(System.currentTimeMillis()));
                newCart.setUpdated_at(new Timestamp(System.currentTimeMillis()));
                cartRepository.save(newCart);
                CartLine cartLine = new CartLine();
                cartLine.setCart(newCart);
                cartLine.setProduct(product);
                cartLine.setUnitaryPrice(product.getPrice());
                cartLine.setCant(newCartLineRequest.getCant());
                cartLine.setCreated_at(new Timestamp(System.currentTimeMillis()));
                cartLine.setUpdated_at(new Timestamp(System.currentTimeMillis()));
                cartLineRepository.save(cartLine);
                return new ResponseEntity<>(newCart, HttpStatus.OK);
            } else {
                cart.setUpdated_at(new Timestamp(System.currentTimeMillis()));
                CartLine cartLine = new CartLine();
                cartLine.setCart(cart);
                cartLine.setProduct(product);
                cartLine.setCant(newCartLineRequest.getCant());
                cartLine.setUnitaryPrice(product.getPrice());
                cartLine.setCreated_at(new Timestamp(System.currentTimeMillis()));
                cartLine.setUpdated_at(new Timestamp(System.currentTimeMillis()));
                cartLineRepository.save(cartLine);
                return new ResponseEntity<>(cart, HttpStatus.OK);
            }
        } catch (Exception e) {
            logger.error("Error getting cart: {}", e.getMessage());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public void updateCardLine(UpdateCartLineRequest updateCartLineRequest, String id) {
        try {
            CartLine cartLine = getCartLine(id);
            if (updateCartLineRequest.getCant() != null && updateCartLineRequest.getCant() <= cartLine.getProduct().getStock() ) {
                cartLine.setCant(updateCartLineRequest.getCant());
            }
            cartLine.setUpdated_at(new Timestamp(System.currentTimeMillis()));
            cartLineRepository.save(cartLine);
        } catch (Exception e) {
            logger.error("Error deleting CartLine: {}", e.getMessage());
        }
    }

    public void deleteCartLine(String id) {
        try {
            CartLine cartLine = getCartLine(id);
            cartLineRepository.delete(cartLine);
        } catch (Exception e) {
            logger.error("Error deleting CartLine: {}", e.getMessage());
        }
    }



}
