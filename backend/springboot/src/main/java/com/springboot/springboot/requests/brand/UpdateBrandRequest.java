package com.springboot.springboot.requests.brand;

public class UpdateBrandRequest {
    private String name;
    private String img;

    public UpdateBrandRequest() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

}