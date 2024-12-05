package com.springboot.springboot.controllers;

import com.springboot.springboot.model.Brand;
import com.springboot.springboot.requests.brand.NewBrandRequest;
import com.springboot.springboot.requests.brand.UpdateBrandRequest;
import com.springboot.springboot.requests.general.DeleteManyRequest;
import com.springboot.springboot.services.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BrandController {

    @Autowired
    BrandService brandService;

    @GetMapping("/brand")
    public ResponseEntity<?> getBrands() {
        return brandService.getBrands();
    }

    @GetMapping("/brand/{id}")
    public ResponseEntity<?> getBrand(@PathVariable(required = true) String id) {
        try {
            Brand brand = brandService.getBrand(id);
            if (brand == null) {
                return new ResponseEntity<>("Brand not found", HttpStatus.NOT_FOUND);
            }
            return ResponseEntity.ok(brand);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Brand not found");
        }
    }

    @PostMapping("/admin/brand")
    public ResponseEntity<?> createBrand(@RequestBody NewBrandRequest brand) {
        return brandService.createBrand(brand);
    }

    @PutMapping("/admin/brand/{id}")
    public ResponseEntity<?> updateBrand(@PathVariable String id, @RequestBody UpdateBrandRequest brand) {
        return brandService.updateBrand(id, brand);
    }

    @DeleteMapping("/admin/brand/{id}")
    public ResponseEntity<?> deleteBrand(@PathVariable String id) {
        try {
            Brand brand = brandService.getBrand(id);
            if (brand == null) {
                return new ResponseEntity<>("Brand not found", HttpStatus.NOT_FOUND);
            }
            brandService.deleteBrand(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Brand deletion failed", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/admin/brand/deleteMany")
    public ResponseEntity<?> deleteManyBrands(@RequestBody DeleteManyRequest manyAttractions) {
        return brandService.deleteManyBrands(manyAttractions.getIds());
    }
}