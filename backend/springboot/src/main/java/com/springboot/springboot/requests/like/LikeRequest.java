package com.springboot.springboot.requests.like;

public class LikeRequest {
    private Long productId;

    public LikeRequest() {
    }

    public LikeRequest(Long productId) {
        this.productId = productId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }
}