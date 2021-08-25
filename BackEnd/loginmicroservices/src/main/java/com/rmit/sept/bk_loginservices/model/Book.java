package com.rmit.sept.bk_loginservices.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.Collection;

@Entity
@Table(name = "books")
public class Book {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(name = "book_name")
  private String bookName;

  @Column(name = "book_author")
  private String author;

  @Column(name = "book_description")
  private String description;

  @Column(name = "book_cost")
  private float cost;

  @Column(name = "book_ISBN")
  private String ISBN;

  @Column(name = "cover_image")
  private String coverImage;

  private Date create_At;
  private Date update_At;

  public Book() {

  }

  public Book(String bookName, String author, String description, float cost, String ISBN, String coverImage) {
    this.bookName = bookName;
    this.author = author;
    this.description = description;
    this.cost = cost;
    this.ISBN = ISBN;
    this.coverImage = coverImage;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getBookName() {
    return bookName;
  }

  public void setBookName(String bookName) {
    this.bookName = bookName;
  }

  public String getAuthor() {
    return author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public float getCost() {
    return cost;
  }

  public void setCost(float cost) {
    this.cost = cost;
  }

  public String getCoverImage() {
    return coverImage;
  }

  public void setISBM(String ISBN) {
    this.ISBN = ISBN;
  }

  public String getISBN() {
    return ISBN;
  }

  public void setCoverImage(String coverImage) {
    this.coverImage = coverImage;
  }

  public Date getCreate_At() {
    return create_At;
  }

  public void setCreate_At(Date create_At) {
    this.create_At = create_At;
  }

  public Date getUpdate_At() {
    return update_At;
  }

  public void setUpdate_At(Date update_At) {
    this.update_At = update_At;
  }

  @PrePersist
  protected void onCreate() {
    this.create_At = new Date();
  }

  @PreUpdate
  protected void onUpdate() {
    this.update_At = new Date();
  }

}
