package com.kpos.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.ForeignKey;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/9/12 9:56 PM
 */
@Entity
@Table(name = "user")
public class User extends AbstractDomainObject {

    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @OneToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "staff_id")
    private StaffMember staff;

    @Column(name = "passcode")
    private String passcode;

    @ManyToMany
    @JoinTable(
            name = "USER_FUNCTION_ASSOC",
            joinColumns = @JoinColumn(name = "USER_ID"),
            inverseJoinColumns = @JoinColumn(name = "FUNC_ID")
    )
    @ForeignKey(name = "USER_2_FUNC_FK", inverseName = "FUNC_2_USER_FK")
    private Set<FunctionModule> functions;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setPasscode(String passcode) {
        this.passcode = passcode;
    }

    public String getPassword() {
        return passcode;
    }

    public StaffMember getStaff() {
        return staff;
    }

    public void setStaff(StaffMember staff) {
        this.staff = staff;
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

        User user = (User) o;

        if (id != null ? !id.equals(user.id) : user.id != null) return false;
        if (passcode != null ? !passcode.equals(user.passcode) : user.passcode != null) return false;
        if (staff != null ? !staff.equals(user.staff) : user.staff != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (passcode != null ? passcode.hashCode() : 0);
        result = 31 * result + (createdOn != null ? createdOn.hashCode() : 0);
        result = 31 * result + (lastUpdated != null ? lastUpdated.hashCode() : 0);
        return result;
    }
}
