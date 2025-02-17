package com.springboot.springboot.services;

import com.springboot.springboot.model.*;
import com.springboot.springboot.repository.CartRepository;
import com.springboot.springboot.repository.OrderLineRepository;
import com.springboot.springboot.repository.OrderRepository;
import com.springboot.springboot.repository.ProductRepository;
import com.springboot.springboot.resources.ResponseResource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderLineRepository orderLineRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CartService cartService;

    @Autowired
    CartRepository cartRepository;

    @Autowired
    UserService userService;

    private static final Logger logger = LoggerFactory.getLogger(OrderService.class);


    public Order getOrder() {
        try {
            User user = userService.token_user();
            return orderRepository.findByUserId(user.getId()).orElse(null);
        } catch (Exception e) {
            logger.error("Error getting cart: {}", e.getMessage());
            return null;
        }
    }

    public List<Order> getAllOrders() {
        try {
            User user = userService.token_user();
            return orderRepository.findAllByUserId(user.getId());
        } catch (Exception e) {
            logger.error("Error getting cart: {}", e.getMessage());
            return null;
        }
    }

    public ResponseEntity<?> postOrder() {
        try {
            Cart cart = cartService.getCart();
            Order order = new Order();
            order.setUser(cart.getUser());

            List<OrderLine> orderLines = new ArrayList<>();
            for (CartLine cartLine : cart.getCartLines()) {
                Product product = cartLine.getProduct();

                product.setStock(product.getStock() - cartLine.getCant().intValue());
                productRepository.save(product);

                OrderLine orderLine = new OrderLine();
                orderLine.setOrder(order);
                orderLine.setProduct(product);
                orderLine.setCant(cartLine.getCant());
                orderLine.setUnitaryPrice(cartLine.getUnitaryPrice());
                orderLine.setCreated_at(new Timestamp(System.currentTimeMillis()));
                orderLine.setUpdated_at(new Timestamp(System.currentTimeMillis()));

                orderLines.add(orderLine);
            }

            order.setOrderLines(orderLines);

            BigDecimal total = orderLines.stream()
                    .map(line -> line.getUnitaryPrice().multiply(BigDecimal.valueOf(line.getCant())))
                    .reduce(BigDecimal.valueOf(0), BigDecimal::add);

            order.setTotal(total);

            order.setCreated_at(new Timestamp(System.currentTimeMillis()));
            order.setUpdated_at(new Timestamp(System.currentTimeMillis()));

            orderRepository.save(order);
            cartRepository.delete(cart);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error creating cart: {}", e.getMessage());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}
