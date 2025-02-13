package com.springboot.springboot.repository;

import com.springboot.springboot.model.Comment;
import com.springboot.springboot.model.Like;
import com.springboot.springboot.model.ProductType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Query("SELECT c FROM Comment c WHERE c.product.id = :product ORDER BY c.createdAt DESC")
    Page<Comment> findCommentsByProduct(
            Pageable pageable,
            @Param("product") Long product
    );

    @Query("SELECT c FROM Comment c WHERE c.user.id = :user AND c.product.id = :product")
    Optional<Comment> checkComment(
            @Param("user") Long user,
            @Param("product") Long product
    );
}