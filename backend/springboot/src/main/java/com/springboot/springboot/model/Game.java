package com.springboot.springboot.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.Duration;

@Entity
@Table(name = "games")
public class Game extends Product {

    @Column(name = "author")
    private String author;

    @Column(name = "difficulty")
    private String difficulty;

    @Column(name = "launch_date")
    private String launchDate;

    @Column(name = "duration")
    private Integer duration;

    @Column(name = "min_players")
    private Integer minPlayers;

    @Column(name = "max_players")
    private Integer maxPlayers;

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