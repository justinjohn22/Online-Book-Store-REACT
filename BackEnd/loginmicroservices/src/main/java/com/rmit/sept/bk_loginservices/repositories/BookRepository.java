package com.rmit.sept.bk_loginservices.repositories;

import com.rmit.sept.bk_loginservices.model.Book;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {
  Book findByBookName(String bookName);

  Book getById(Long id);
}