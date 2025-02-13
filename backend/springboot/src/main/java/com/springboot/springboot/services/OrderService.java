package com.springboot.springboot.services;

import com.springboot.springboot.repository.OrderLineRepository;
import com.springboot.springboot.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderLineRepository orderLineRepository;
}
