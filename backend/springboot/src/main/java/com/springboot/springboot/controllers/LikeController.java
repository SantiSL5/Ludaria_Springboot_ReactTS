package com.springboot.springboot.controllers;

import com.springboot.springboot.requests.like.LikeRequest;
import com.springboot.springboot.services.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class LikeController {

    @Autowired
    LikeService likeService;

    @PostMapping("/client/like")
    public ResponseEntity<?> likeAction(@RequestBody LikeRequest likeRequest) throws Exception {
        return likeService.actionLike(likeRequest.getProductId());
    }
}
