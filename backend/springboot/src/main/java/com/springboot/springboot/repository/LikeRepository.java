package com.springboot.springboot.repository;

import com.springboot.springboot.model.Like;
import com.springboot.springboot.model.Product;
import com.springboot.springboot.model.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public interface LikeRepository extends JpaRepository<Like, Long> {
    @Query("SELECT l FROM Like l WHERE l.user.id = :user AND l.product.id = :product")
    Optional<Like> checkLike(
            @Param("user") Long user,
            @Param("product") Long product
    );

    @Query("SELECT COUNT(l) FROM Like l WHERE l.product.id = :productId")
    Long countLikesByProduct(
            @Param("productId") Long productId
    );

}

