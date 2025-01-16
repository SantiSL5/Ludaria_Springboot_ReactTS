package com.springboot.springboot.controllers;

import com.springboot.springboot.model.Category;
import com.springboot.springboot.model.Like;
import com.springboot.springboot.requests.category.NewCategoryRequest;
import com.springboot.springboot.requests.category.UpdateCategoryRequest;
import com.springboot.springboot.requests.general.DeleteManyRequest;
import com.springboot.springboot.services.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public class LikeController {

    @Autowired
    LikeService likeService;

    @PostMapping("/user/like")
    public ResponseEntity<?> likeAction(@RequestParam(value = "product", required = true) String product) {
        return likeService.actionLike(product);
    }
}
