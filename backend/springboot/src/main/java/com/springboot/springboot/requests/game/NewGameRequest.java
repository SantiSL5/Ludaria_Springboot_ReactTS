package com.springboot.springboot.requests.game;



import java.math.BigDecimal;
import java.time.Duration;

public class NewGameRequest {

    private String name;

    private String description;

    private BigDecimal price;

    private String img;

    private Integer age;

    private Integer stock;

    private Long brand;

    private Long category;

    private String author;

    private String difficulty;

    private String launchDate;

    private Integer duration;

    private Integer minPlayers;

    private Integer maxPlayers;

    public NewGameRequest(String name, String description, BigDecimal price, String img, Integer age, Integer stock, Long brand, Long category, String author, String difficulty, String launchDate, Integer duration, Integer minPlayers, Integer maxPlayers) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.img = img;
        this.age = age;
        this.stock = stock;
        this.brand = brand;
        this.author = author;
        this.difficulty = difficulty;
        this.launchDate = launchDate;
        this.duration = duration;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
        this.category = category;
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

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
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

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public String getLaunchDate() {
        return launchDate;
    }

    public void setLaunchDate(String launchDate) {
        this.launchDate = launchDate;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public Integer getMinPlayers() {
        return minPlayers;
    }

    public void setMinPlayers(Integer minPlayers) {
        this.minPlayers = minPlayers;
    }

    public Integer getMaxPlayers() {
        return maxPlayers;
    }

    public void setMaxPlayers(Integer maxPlayers) {
        this.maxPlayers = maxPlayers;
    }
}