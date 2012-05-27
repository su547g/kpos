package com.kpos.domain;

import javax.persistence.*;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 5/22/12 11:28 PM
 */
@Entity
@Table(name = "USER_FUNCTION_ASSOC")
public class UserFunctionAssoc extends AbstractDomainObject {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "func_id")
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
