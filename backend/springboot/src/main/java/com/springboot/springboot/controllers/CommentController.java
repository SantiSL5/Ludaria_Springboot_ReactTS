package com.springboot.springboot.controllers;

import com.springboot.springboot.requests.comment.NewCommentRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.springboot.springboot.services.CommentService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class CommentController {

    @Autowired
    CommentService commentService;

    @GetMapping("/comment")
    public ResponseEntity<?> getAllComments(@RequestParam(value = "limit", required = true) String limit,
                                            @RequestParam(value = "offset", required = true) String offset,
                                            @RequestParam(value = "product", required = true) String product) {
        return commentService.getAllComments(limit, offset, product);
    }

    @PostMapping("/client/comment")
    public ResponseEntity<?> createComment(@RequestBody NewCommentRequest newComment) {
        return commentService.createComment(newComment);
    }

    @DeleteMapping("/client/comment/{id}")
    public ResponseEntity<?> deleteComment(@PathVariable String id) {
        return commentService.deleteComment(id);
    }
}
