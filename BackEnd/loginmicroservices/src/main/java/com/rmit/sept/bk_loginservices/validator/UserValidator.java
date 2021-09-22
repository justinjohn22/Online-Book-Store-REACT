package com.rmit.sept.bk_loginservices.validator;

import com.rmit.sept.bk_loginservices.model.User;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
public class UserValidator implements Validator {

    @Override
    public boolean supports(Class<?> aClass) {
        return User.class.equals(aClass);
    }

    @Override
    public void validate(Object object, Errors errors) {
        User user = (User) object;

        // Validate password
        if(user.getPassword().length() <6){
            errors.rejectValue("password","Length", "Password must be at least 6 characters");
        }

        if(!user.getPassword().equals(user.getConfirmPassword())){
            errors.rejectValue("confirmPassword","Match", "Passwords must match");

        }

        // Validate phone number
        if (user.getPhoneNumber().length() != 10) {
            errors.rejectValue("phoneNumber", "Length", "Phone number must be exactly 10 digits");
        }
    }
}
