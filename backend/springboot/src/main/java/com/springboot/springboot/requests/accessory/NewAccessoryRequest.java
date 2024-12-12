package com.springboot.springboot.requests.accessory;

import java.math.BigDecimal;

public class NewAccessoryRequest {
    private String name;

    private String description;

    private BigDecimal price;

    private String img;

    private Integer age;

    private String type;

    private Long brand;

    private Long category;

    private Long gameId;

    public NewAccessoryRequest(String name, String description, BigDecimal price, String img, Integer age, String type, Long brand, Long category, Long gameId) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.img = img;
        this.age = age;
        this.type = type;
        this.brand = brand;
        this.gameId = gameId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getBrand() {
        return brand;
    }

    public void setBrand(Long brand) {
        this.brand = brand;
    }

    public Long getCategory() {
        return category;
    }

    public void setCategory(Long category) {
        this.category = category;
    }

    public Long getGameId() {
        return gameId;
    }

    public void setGameId(Long gameId) {
        this.gameId = gameId;
    }
}