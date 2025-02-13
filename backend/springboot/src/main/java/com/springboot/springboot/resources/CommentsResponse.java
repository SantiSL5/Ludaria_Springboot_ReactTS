package com.springboot.springboot.resources;
import com.springboot.springboot.model.Comment;

import java.util.List;

public class CommentsResponse {
    private int pages;
    private List<Comment> comments;

    public CommentsResponse(int pages, List<Comment> comments) {
        this.pages = pages;
        this.comments = comments;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }
}
