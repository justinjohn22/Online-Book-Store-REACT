package com.rmit.sept.bk_loginservices.web;

import com.rmit.sept.bk_loginservices.exceptions.ResourceNotFoundException;
import com.rmit.sept.bk_loginservices.model.User;
import com.rmit.sept.bk_loginservices.payload.JWTLoginSucessReponse;
import com.rmit.sept.bk_loginservices.payload.LoginRequest;
import com.rmit.sept.bk_loginservices.repositories.UserRepository;
import com.rmit.sept.bk_loginservices.security.JwtTokenProvider;
import com.rmit.sept.bk_loginservices.services.MapValidationErrorService;
import com.rmit.sept.bk_loginservices.services.UserService;
import com.rmit.sept.bk_loginservices.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import javax.validation.Valid;

import static com.rmit.sept.bk_loginservices.security.SecurityConstant.TOKEN_PREFIX;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private UserService userService;

    @Autowired
    private UserValidator userValidator;

    // Get all users in the database
    @GetMapping("/all")
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Get a user by their ID number
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserByID(@PathVariable Long id) {
        User user = userRepository.findById(id).orElseThrow(
            () -> new ResourceNotFoundException("ERROR: No user could be found with ID " + id));
        
        return ResponseEntity.ok(user);
    }
    
    // Update the details of an existing employee
    // NOTE: cannot yet update passwords
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        // Find user in database
        User user = userRepository.findById(id).orElseThrow(
            () -> new ResourceNotFoundException("ERROR: No user could be found with ID " + id));
        
        // Update user's details
        user.setUsername(updatedUser.getUsername());
        user.setAccountType(updatedUser.getAccountType());
        user.setFullName(updatedUser.getFullName());
        user.setAddress(updatedUser.getAddress());
        user.setPhoneNumber(updatedUser.getPhoneNumber());
        // At the moment, passwords are not updated
        user.setAbn(updatedUser.getAbn());

        // Save the updated user in the database
        // NOTE: The new user details are not being validated here - some validation should either
        // be added here or from where these requests are being generated
        User savedUser = userRepository.save(user);

        return ResponseEntity.ok(savedUser);
    }

    // Get all users with accountType 'pendingpublisher'
    @GetMapping("/pendingpublishers")
    public List<User> getPendingPublisherUsers() {
        return userService.getUsersOfType("pendingpublisher");
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result) {
        // Validate passwords match
        userValidator.validate(user, result);

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null)
            return errorMap;

        User newUser = userService.saveUser(user);

        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, BindingResult result) {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null)
            return errorMap;

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX + tokenProvider.generateToken(authentication);

        return ResponseEntity.ok(new JWTLoginSucessReponse(true, jwt));
    }

}
