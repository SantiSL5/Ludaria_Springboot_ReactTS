package com.springboot.springboot.resources;
import com.springboot.springboot.model.Product;

import java.util.List;

public class ProductsResponse {
    private int pages;
    private List<Product> products;

    public ProductsResponse(int pages, List<Product> products) {
        this.pages = pages;
        this.products = products;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
