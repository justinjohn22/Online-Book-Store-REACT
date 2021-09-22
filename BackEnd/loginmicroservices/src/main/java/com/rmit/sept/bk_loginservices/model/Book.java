package com.rmit.sept.bk_loginservices.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "books")
public class Book {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(name = "name")
  private String bookName;

  @Column(name = "author")
  private String author;

  @Lob
  @Column(name = "description", length = 512)
  private String description;

  @Column(name = "cost")
  private float cost;

  @Column(name = "isbn")
  private String isbn;

  @Column(name = "cover_image")
  private String coverImage;

  private Date createAt;
  private Date updateAt;

  public Book() {

  }

  public Book(String bookName, String author, String description, float cost, String isbn, String coverImage) {
    this.bookName = bookName;
    this.author = author;
    this.description = description;
    this.cost = cost;
    this.isbn = isbn;
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

  public void setIsbn(String isbn) {
    this.isbn = isbn;
  }

  public String getIsbn() {
    return isbn;
  }

  public void setCoverImage(String coverImage) {
    this.coverImage = coverImage;
  }

  public Date getCreateAt() {
    return createAt;
  }

  public void setCreateAt(Date createAt) {
    this.createAt = createAt;
  }

  public Date getUpdateAt() {
    return updateAt;
  }

  public void setUpdateAt(Date updateAt) {
    this.updateAt = updateAt;
  }

  @PrePersist
  protected void onCreate() {
    this.createAt = new Date();
  }

  @PreUpdate
  protected void onUpdate() {
    this.updateAt = new Date();
  }

}
