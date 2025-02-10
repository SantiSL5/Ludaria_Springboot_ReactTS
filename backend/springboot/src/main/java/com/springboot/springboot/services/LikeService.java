package com.springboot.springboot.services;

import com.springboot.springboot.model.*;
import com.springboot.springboot.repository.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LikeService {
    @Autowired
    LikeRepository likeRepository;

    @Autowired
    UserService userService;

    @Autowired
    ProductService productService;


    public ResponseEntity<?> actionLike(Long product_id) throws Exception {
        try {
            User user = userService.token_user();
            Product product = productService.getProduct(product_id);
            Optional<Like> check_like = getLike(user.getId(), product.getId());
            if (check_like.isEmpty()) {
                Like like = new Like();
                like.setUser(user);
                like.setProduct(product);
                likeRepository.save(like);
            } else {
                likeRepository.deleteById(check_like.get().getId());
            }
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
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
