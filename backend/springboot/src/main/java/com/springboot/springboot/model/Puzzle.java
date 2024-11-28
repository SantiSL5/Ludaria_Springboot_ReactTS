package com.springboot.springboot.model;

import jakarta.persistence.*;

@Entity
@Table(name = "puzzles")
public class Puzzle extends Product {

    @Column(name = "author")
    private String author;

    @Column(name = "num_pieces")
    private Integer numPieces;

    @Column(name = "difficulty")
    private String difficulty;

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