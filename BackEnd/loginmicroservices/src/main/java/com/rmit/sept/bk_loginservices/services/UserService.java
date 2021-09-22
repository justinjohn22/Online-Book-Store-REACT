package com.rmit.sept.bk_loginservices.services;

import java.util.ArrayList;
import java.util.List;

import com.rmit.sept.bk_loginservices.exceptions.UsernameAlreadyExistsException;
import com.rmit.sept.bk_loginservices.model.User;
import com.rmit.sept.bk_loginservices.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser(User newUser) {

        /*
         * newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
         * //Username has to be unique (exception) // Make sure that password and
         * confirmPassword match // We don't persist or show the confirmPassword return
         * userRepository.save(newUser);
         */
        try {
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
            // Username has to be unique (exception)
            newUser.setUsername(newUser.getUsername());
            // Make sure that password and confirmPassword match
            // We don't persist or show the confirmPassword
            newUser.setConfirmPassword("");
            return userRepository.save(newUser);

        } catch (Exception e) {
            throw new UsernameAlreadyExistsException("Username '" + newUser.getUsername() + "' already exists");
        }

    }

    // Get a List of all users belonging with a certain account type
    public List<User> getUsersOfType(String accountType) {
        List<User> users = new ArrayList<User>();

        // Add all users with the desired account type to the list
        for (User user : userRepository.findAll()) {
            if (user.getAccountType().toLowerCase().equals(accountType)) {
                users.add(user);
            }
        }

        return users;
    }

}
