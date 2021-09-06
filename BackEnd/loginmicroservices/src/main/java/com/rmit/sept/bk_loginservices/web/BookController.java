package com.rmit.sept.bk_loginservices.web;

import com.rmit.sept.bk_loginservices.Repositories.BookRepository;
import com.rmit.sept.bk_loginservices.model.Book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class BookController {

  @Autowired
  private BookRepository bookRepository;

  // get all employees
  @GetMapping("/books")
  public List<Book> getAllBooks() {
    return bookRepository.findAll();
  }

}
