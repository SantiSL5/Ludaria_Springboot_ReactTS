package com.springboot.springboot.requests.comment;

public class NewCommentRequest {
    private String content;

    private Long product;

    private Integer rate;

    public NewCommentRequest(String content, Long product, Integer rate) {
        this.content = content;
        this.product = product;
        this.rate = rate;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getProduct() {
        return product;
    }

    public void setProduct(Long product) {
        this.product = product;
    }

    public Integer getRate() {
        return rate;
    }

    public void setRate(Integer rate) {
        this.rate = rate;
    }
}
