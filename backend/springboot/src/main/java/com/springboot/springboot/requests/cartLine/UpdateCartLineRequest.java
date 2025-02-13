package com.springboot.springboot.requests.cartLine;

public class UpdateCartLineRequest {
    private Long cant;

    public UpdateCartLineRequest() {
    }

    public UpdateCartLineRequest(Long cant) {
        this.cant = cant;
    }

    public Long getCant() {
        return cant;
    }

    public void setCant(Long cant) {
        this.cant = cant;
    }
}
