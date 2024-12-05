package com.springboot.springboot.controllers;

import com.springboot.springboot.model.Category;
import com.springboot.springboot.requests.category.NewCategoryRequest;
import com.springboot.springboot.requests.category.UpdateCategoryRequest;
import com.springboot.springboot.requests.general.DeleteManyRequest;
import com.springboot.springboot.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("/category")
    public ResponseEntity<?> getCategories() {
        return categoryService.getCategories();
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<?> getCategory(@PathVariable(required = true) String id) {
        try {
            Category category = categoryService.getCategory(id);
            if (category == null) {
                return new ResponseEntity<>("Category not found", HttpStatus.NOT_FOUND);
            }
            return ResponseEntity.ok(category);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Category not founded");
        }
    }

    @PostMapping("/admin/category")
    public ResponseEntity<?> createCategory(@RequestBody NewCategoryRequest category) {
        return categoryService.createCategory(category);
    }

    @PutMapping("/admin/category/{id}")
    public ResponseEntity<?> updateCategory(@PathVariable String id, @RequestBody UpdateCategoryRequest category) {
        return categoryService.updateCategory(id, category);
    }

    @DeleteMapping("/admin/category/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable String id) {
        try {
            Category category = categoryService.getCategory(id);
            if (category == null) {
                return new ResponseEntity<>("Category not found", HttpStatus.NOT_FOUND);
            }
            categoryService.deleteCategory(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Category deletion failed", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/admin/category/deleteMany")
    public ResponseEntity<?> deleteManyCategories(@RequestBody DeleteManyRequest manyAttractions) {
        return categoryService.deleteManyCategories(manyAttractions.getIds());
    }
}
