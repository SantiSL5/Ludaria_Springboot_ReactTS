package com.springboot.springboot.controllers;

import com.springboot.springboot.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class OrderController {
    @Autowired
    OrderService orderService;

    @GetMapping("/client/order")
    public ResponseEntity<?> getOrder() {
        return new ResponseEntity<> (orderService.getOrder(), HttpStatus.OK);
    }

    @PostMapping("/client/order")
    public ResponseEntity<?> postOrder() {
        return orderService.postOrder();
    }
}
