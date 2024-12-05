package com.springboot.springboot.services;

import com.springboot.springboot.model.Category;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.springboot.springboot.repository.CategoryRepository;
import com.springboot.springboot.requests.category.NewCategoryRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    private static final Logger logger = LoggerFactory.getLogger(Category.class);

    @Autowired
    CategoryRepository categoryRepository;

    public ResponseEntity<?> getCategories() {
        try {
            List<Category> categories = categoryRepository.findAll();
            return new ResponseEntity<>(categories, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public Category getCategory(String id) throws Exception {
        try {
            return getCategory(Long.parseLong(id));
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    public Category getCategory(Long id) {
        Optional<Category> optional = categoryRepository.findById(id);
        return optional.isPresent() ? optional.get() : null;
    }
    public ResponseEntity<?> createCategory(NewCategoryRequest newCategory) {
        try {
            Category category = new Category();
            category.setName(newCategory.getName());
            category.setImg(newCategory.getImg());
            category.setCreatedAt(new Timestamp(System.currentTimeMillis()));
            category.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
            categoryRepository.save(category);
            return new ResponseEntity<>(category, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<?> updateCategory(String id, Category updatedCategory) {
        try {
            Category category = getCategory(id);
            if (category == null) {
                return ResponseEntity.badRequest().body("Category not found");
            }
            if (updatedCategory.getName() != null ) {
                category.setName(updatedCategory.getName());
            }
            if (updatedCategory.getImg() != null ) {
                category.setImg(updatedCategory.getImg());
            }

            category.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
            categoryRepository.save(category);
        } catch (Exception e) {
            logger.error("Error updating category: {}", e.getMessage());
            return ResponseEntity.badRequest().body("Category update failed");
        }
        return null;
    }

    public void deleteCategory(Long id) {
        try {
            categoryRepository.deleteById(id);
        } catch (Exception e) {
            logger.error("Error deleting category: {}", e.getMessage());
        }
    }
    public void deleteCategory(String id) {
        try {
            Long categoryId = Long.parseLong(id);
            deleteCategory(categoryId);
        } catch (Exception e) {
            logger.error("Error deleting category: {}", e.getMessage());
        }
    }

    public ResponseEntity<?> deleteManyCategories(List<Long> ids) {
        try {
            for (Long id : ids) {
                if (getCategory(id) == null) {
                    return new ResponseEntity<>("Category " + id + " not found", HttpStatus.BAD_REQUEST);
                }
            }
            for (Long id : ids) {
                deleteCategory(id);
            }
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error deleting categories: {}", e.getMessage());
            return new ResponseEntity<>("Categories deletion failed", HttpStatus.BAD_REQUEST);
        }
    }
}