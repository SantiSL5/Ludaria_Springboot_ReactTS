package com.springboot.springboot.controllers;

import com.springboot.springboot.requests.accessory.NewAccessoryRequest;
import com.springboot.springboot.requests.accessory.UpdateAccessoryRequest;
import com.springboot.springboot.services.AccessoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AccessoryController {

    @Autowired
    AccessoryService accessoryService;

    @PostMapping("/admin/accessory")
    public ResponseEntity<?> createAccessory(@RequestBody NewAccessoryRequest product) {
        return accessoryService.createAccessory(product);
    }

    @PutMapping("/admin/accessory/{id}")
    public ResponseEntity<?> updateAccessory(@PathVariable String id, @RequestBody UpdateAccessoryRequest accessory) {
        return accessoryService.updateAccessory(id, accessory);
    }
}
