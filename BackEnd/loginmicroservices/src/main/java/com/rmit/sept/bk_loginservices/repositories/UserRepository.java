package com.rmit.sept.bk_loginservices.repositories;

import com.rmit.sept.bk_loginservices.model.User;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    @Query("SELECT x FROM User x WHERE x.username = :username")
    User findByUsername(@Param("username") String username);

    User getById(Long id);
}
