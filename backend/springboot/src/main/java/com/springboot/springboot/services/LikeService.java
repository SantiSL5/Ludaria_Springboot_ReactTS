package com.springboot.springboot.services;

import com.springboot.springboot.model.*;
import com.springboot.springboot.repository.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public class LikeService {
    @Autowired
    UserService userService;

    @Autowired
    ProductService productService;

    @Autowired
    LikeRepository likeRepository;


    public ResponseEntity<?> actionLike(String product_id) {
        try {
            User user = userService.token_user();
            Product product = productService.getProduct(Long.parseLong(product_id));
            Optional<Like> check_like = getLike(user.getId(), product.getId());
            if (check_like.isEmpty()) {
                Like like = new Like();
                like.setUser(user);
                like.setProduct(product);
            }else {
                likeRepository.delete(check_like.get());
            }
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    public Optional<Like> getLike(Long user_id, Long product_id) throws Exception {
        try {
            return likeRepository.checkLike(user_id, product_id);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

}
