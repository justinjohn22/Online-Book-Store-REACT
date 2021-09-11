package com.rmit.sept.bk_loginservices.repositories;

import com.rmit.sept.bk_loginservices.model.Book;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

}