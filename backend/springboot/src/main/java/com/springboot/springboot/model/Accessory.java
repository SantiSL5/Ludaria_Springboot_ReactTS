package com.springboot.springboot.model;

import jakarta.persistence.*;

@Entity
@Table(name = "accessories")
public class Accessory extends Product {

    @ManyToOne
    @JoinColumn(name = "game_id", nullable = true)
    private Game game;

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }
}