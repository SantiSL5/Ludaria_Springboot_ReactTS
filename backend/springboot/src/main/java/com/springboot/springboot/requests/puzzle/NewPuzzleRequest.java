package com.springboot.springboot.requests.puzzle;

import jakarta.persistence.Column;

import java.math.BigDecimal;

public class NewPuzzleRequest {
    private String name;

    private String description;

    private BigDecimal price;

    private String img;

    private Integer age;

    private String type;

    private Long brand;

    private String author;

    private Integer numPieces;

    private String difficulty;

    public NewPuzzleRequest(String name, String description, BigDecimal price, String img, Integer age, String type, Long brand, String author, Integer numPieces, String difficulty) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.img = img;
        this.age = age;
        this.type = type;
        this.brand = brand;
        this.author = author;
        this.numPieces = numPieces;
        this.difficulty = difficulty;
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

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Integer getNumPieces() {
        return numPieces;
    }

    public void setNumPieces(Integer numPieces) {
        this.numPieces = numPieces;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }
}