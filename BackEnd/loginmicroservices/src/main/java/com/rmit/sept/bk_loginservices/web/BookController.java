package com.rmit.sept.bk_loginservices.web;

import com.rmit.sept.bk_loginservices.model.Book;
import com.rmit.sept.bk_loginservices.repositories.BookRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/books")
public class BookController {

  @Autowired
  private BookRepository bookRepository;

  // get all books
  @GetMapping("/all")
  public Iterable<Book> getAllBooks() {
    return bookRepository.findAll();
  }

  // get a book by it's id
  @GetMapping("/all/{id}")
  public Optional<Book> getBookById(@PathVariable Long id) {
    Optional<Book> tempBook = bookRepository.findById(id);
    return tempBook;
  }

}
