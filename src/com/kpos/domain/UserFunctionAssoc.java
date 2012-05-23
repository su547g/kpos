package com.kpos.domain;

import javax.persistence.*;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 5/22/12 11:28 PM
 */
@Entity
@Table(name = "USER_FUNCTION_ASSOC")
public class UserFunctionAssoc {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private User user;

    private FunctionModule functionModule;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public FunctionModule getFunctionModule() {
        return functionModule;
    }

    public void setFunctionModule(FunctionModule functionModule) {
        this.functionModule = functionModule;
    }
}
