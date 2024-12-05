package com.springboot.springboot.services;

import com.springboot.springboot.model.Brand;
import com.springboot.springboot.repository.BrandRepository;
import com.springboot.springboot.requests.brand.NewBrandRequest;
import com.springboot.springboot.requests.brand.UpdateBrandRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Service
public class BrandService {
    @Autowired
    private BrandRepository brandRepository;

    private static final Logger logger = LoggerFactory.getLogger(BrandService.class);

    public ResponseEntity<?> getBrands() {
        try {
            List<Brand> brands = brandRepository.findAll();
            return new ResponseEntity<>(brands, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error getting brands: {}", e.getMessage());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public Brand getBrand(String id) throws Exception {
        try {
            return getBrand(Long.parseLong(id));
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    public Brand getBrand(Long id) {
        Optional<Brand> optional = brandRepository.findById(id);
        return optional.isPresent() ? optional.get() : null;
    }

    public ResponseEntity<?> createBrand(NewBrandRequest newBrand) {
        try {
            Brand brand = new Brand();
            brand.setName(newBrand.getName());
            brand.setImg(newBrand.getImg());
            brand.setCreatedAt(new Timestamp(System.currentTimeMillis()));
            brand.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
            brandRepository.save(brand);
            return new ResponseEntity<>(brand, HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("Error creating brand: {}", e.getMessage());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<?> updateBrand(String id, UpdateBrandRequest updatedBrand) {
        try {
            Brand brand = getBrand(id);
            if (brand == null) {
                return ResponseEntity.badRequest().body("Brand not found");
            }
            if (updatedBrand.getName() != null ) {
                brand.setName(updatedBrand.getName());
            }
            if (updatedBrand.getImg() != null ) {
                brand.setImg(updatedBrand.getImg());
            }

            brand.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
            brandRepository.save(brand);
            return ResponseEntity.ok(brand);
        } catch (Exception e) {
            logger.error("Error updating brand: {}", e.getMessage());
            return ResponseEntity.badRequest().body("Brand update failed");
        }
    }

    public void deleteBrand(Long id) {
        try {
            brandRepository.deleteById(id);
        } catch (Exception e) {
            logger.error("Error deleting brand: {}", e.getMessage());
        }
    }
    public void deleteBrand(String id) {
        try {
            Long brandId = Long.parseLong(id);
            deleteBrand(brandId);
        } catch (Exception e) {
            logger.error("Error deleting brand: {}", e.getMessage());
        }
    }

    public ResponseEntity<?> deleteManyBrands(List<Long> ids) {
        try {
            for (Long id : ids) {
                if (getBrand(id) == null) {
                    return new ResponseEntity<>("Brand " + id + " not found", HttpStatus.BAD_REQUEST);
                }
            }
            for (Long id : ids) {
                deleteBrand(id);
            }
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error deleting brands: {}", e.getMessage());
            return new ResponseEntity<>("Brands deletion failed", HttpStatus.BAD_REQUEST);
        }
    }
}
