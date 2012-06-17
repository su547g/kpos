package com.kpos.domain;

import org.hibernate.annotations.ForeignKey;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 6/12/12 11:15 PM
 */
@Entity
@Table(name = "ROLE")
public class Roles  extends AbstractDomainObject {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @ManyToMany
    @JoinTable(
            name = "ROLE_FUNCTION_ASSOC",
            joinColumns = @JoinColumn(name = "ROLE_ID"),
            inverseJoinColumns = @JoinColumn(name = "FUNC_ID")
    )
    @ForeignKey(name = "ROLE_2_FUNC_FK", inverseName = "FUNC_2_ROLE_FK")
    private Set<FunctionModule> functions = new HashSet<FunctionModule>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<FunctionModule> getFunctions() {
        return functions;
    }

    public void setFunctions(Set<FunctionModule> functions) {
        this.functions = functions;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Roles roles = (Roles) o;

        if (id != null ? !id.equals(roles.id) : roles.id != null) return false;
        if (name != null ? !name.equals(roles.name) : roles.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }
}
