package com.springboot.springboot.requests.cartLine;

public class NewCartLineRequest {
    private Long cant;
    private Long product;

    public NewCartLineRequest() {
    }

    public NewCartLineRequest(Long cant, Long product) {
        this.cant = cant;
        this.product = product;
    }

    public Long getCant() {
        return cant;
    }

    public void setCant(Long cant) {
        this.cant = cant;
    }

    public Long getProduct() {
        return product;
    }

    public void setProduct(Long product) {
        this.product = product;
    }
}
