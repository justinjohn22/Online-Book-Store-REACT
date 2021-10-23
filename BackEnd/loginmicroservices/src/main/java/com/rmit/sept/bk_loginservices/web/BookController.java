package com.rmit.sept.bk_loginservices.web;

import com.rmit.sept.bk_loginservices.model.Book;
import com.rmit.sept.bk_loginservices.repositories.BookRepository;
import com.rmit.sept.bk_loginservices.services.BookService;
import com.rmit.sept.bk_loginservices.services.MapValidationErrorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/books")
public class BookController {

  @Autowired
  private BookRepository bookRepository;

  @Autowired
  private BookService bookService;

  @Autowired
  private MapValidationErrorService mapValidationErrorService;

  // get all books
  @GetMapping("/all")
  public Iterable<Book> getAllBooks() {
    return bookRepository.findAll();
  }

  @PostMapping("/newBook")
  public ResponseEntity<?> addBook(@Valid @RequestBody Book book, BindingResult result) {

    ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
    if (errorMap != null)
      return errorMap;

    Book newBook = bookService.saveBook(book);
    return new ResponseEntity<Book>(newBook, HttpStatus.CREATED);
  }

}
