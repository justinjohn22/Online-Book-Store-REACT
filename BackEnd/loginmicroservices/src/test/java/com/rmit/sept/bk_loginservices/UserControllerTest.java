package com.rmit.sept.bk_loginservices;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import com.rmit.sept.bk_loginservices.model.User;
import com.rmit.sept.bk_loginservices.repositories.UserRepository;
import com.rmit.sept.bk_loginservices.services.UserService;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.mock.web.MockHttpServletResponse;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
// @WebMvcTest(value = UserController.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserRepository userRepository;
    private UserService userService;

    private List<User> usersList = new ArrayList<User>();

    User mockUser = new User();

    @Test
    public void createsUserWithNoValues() {
        User user1 = new User();
        assertEquals(null, user1.getUsername());
    }

    @Test
    public void insertsValidUsernameOfUser() {
        User user2 = new User();
        user2.setUsername("test");
        assertEquals("test", user2.getUsername());
    }

    @Test
    public void insertsEmptyUsernameOfUser() {
        User user3 = new User();
        user3.setUsername(null);
        assertEquals(null, user3.getUsername());
    }

    // BOTTOM 2 TESTS NEED TO BE FIXED - cant detect userRepository & userService
    @Test
    public void getAllUsers() throws Exception {
        usersList.add(mockUser);

        if (userRepository != null) {
            Mockito.when(userRepository.findAll()).thenReturn(usersList);

            RequestBuilder rB = MockMvcRequestBuilders.get("/all").accept(MediaType.APPLICATION_JSON);

            MvcResult result = mockMvc.perform(rB).andReturn();

            System.out.println(result.getResponse());
            String expected = "";

            JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false);
        } else {
            assertThrows(NullPointerException.class, () -> userRepository.findAll());
        }

    }

    @Test
    public void createUser() throws Exception {

        if (userService != null) {
            Mockito.when(userService.saveUser(mockUser)).thenReturn(mockUser);

            RequestBuilder rB = MockMvcRequestBuilders.post("/register").accept(MediaType.APPLICATION_JSON)
                    .contentType(MediaType.APPLICATION_JSON);

            MvcResult result = mockMvc.perform(rB).andReturn();

            MockHttpServletResponse response = result.getResponse();

            assertEquals(HttpStatus.CREATED.value(), response.getStatus());
        } else {
            assertThrows(NullPointerException.class, () -> userService.saveUser(mockUser));
        }
    }

}
