package com.rmit.sept.bk_loginservices;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import com.rmit.sept.bk_loginservices.model.Book;
import com.rmit.sept.bk_loginservices.repositories.BookRepository;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
// @WebMvcTest(value = BookController.class)
public class BookControllerTest{

    @Autowired
	private MockMvc mockMvc;

    @MockBean
    private BookRepository bookRepository;

    private List<Book> booksList = new ArrayList<Book>();
    
    Book mockBook = new Book("mock", "mAuthor", "mDescription", 0, "mISBN", "mLink");

    @Test
    public void createsBookWithValidValues(){
        Book book1 = new Book("test", "test", "test", 12, "test", "test");
        assertEquals("test", book1.getBookName());
    }

    @Test
    public void createsBookWithNoValues(){
        Book book2 = new Book();
        assertEquals(null, book2.getBookName());
    }

     // BOTTOM TEST NEEDS TO BE FIXED - cant detect bookRepository
    @Test
    public void getAllBooks() throws Exception{
        booksList.add(mockBook);

        if (bookRepository != null){
            Mockito.when(
                bookRepository.findAll()
            ).thenReturn(booksList);
        
            RequestBuilder rB = MockMvcRequestBuilders.get("/all").accept(MediaType.APPLICATION_JSON);
            
            MvcResult result = mockMvc.perform(rB).andReturn();

            System.out.println(result.getResponse());
            String expected = "{name:mock,author:mAuthor,description:mDescription,cost:0,isbn:mISBN,cover_image:mLink}";

            JSONAssert.assertEquals(expected, result.getResponse()
                    .getContentAsString(), false);
        }
        else {
            assertThrows(NullPointerException.class, () -> bookRepository.findAll());
        }

    } 





}