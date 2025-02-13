package com.springboot.springboot.services;

import com.springboot.springboot.model.*;
import com.springboot.springboot.repository.CommentRepository;
import com.springboot.springboot.repository.ProductRepository;
import com.springboot.springboot.requests.comment.NewCommentRequest;
import com.springboot.springboot.resources.CommentsResponse;
import com.springboot.springboot.resources.ProductsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Service
public class CommentService {

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    UserService userService;

    public ResponseEntity<?> getAllComments(String limit, String offset, String product) {
        Pageable pageable = PageRequest.of(Integer.parseInt(offset), Integer.parseInt(limit));
        Page<Comment> commentPage;
        Long productFilter = Long.parseLong(product);
        commentPage = commentRepository.findCommentsByProduct(
                pageable,
                productFilter
        );
        List<Comment> comments = commentPage.getContent();
        CommentsResponse response = new CommentsResponse(commentPage.getTotalPages(), comments);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    public Comment getComment(String id) throws Exception {
        try {
            return getComment(Long.parseLong(id));
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    public Comment getComment(Long id) {
        Optional<Comment> optional = commentRepository.findById(id);
        return optional.isPresent() ? optional.get() : null;
    }

    public ResponseEntity<?> createComment(NewCommentRequest newComment) {
        try {
            User user = userService.token_user();
            Comment comment = new Comment();
            comment.setContent(newComment.getContent());
            comment.setProduct(productRepository.findById(newComment.getProduct()).get());
            comment.setUser(user);
            comment.setRate(newComment.getRate());
            comment.setCreatedAt(new Timestamp(System.currentTimeMillis()));
            comment.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
            commentRepository.save(comment);
            return new ResponseEntity<>(comment, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    public ResponseEntity<?> deleteComment(String id) {
        try {
            User user = userService.token_user();
            Comment comment = getComment(id);
            if (user == comment.getUser() || user.getRole().equals("ROLE_ADMIN")) {
                commentRepository.deleteById(Long.parseLong(id));
                return new ResponseEntity<>(comment, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
}
