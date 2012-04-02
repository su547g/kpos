package com.kpos.domain;

import javax.persistence.*;

/**
 * Created by IntelliJ IDEA.
 * User: kkwang
 * Date: 4/1/12
 * Time: 1:24 AM
 */
@Entity
@Table(name = "CUSTOMER_INFO")
public class CustomerInfo extends AbstractDomainObject {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;
    
    @Column(name = "phone")
    private String phone;
    
    @Column(name = "address")
    private String address;
    
    @Column(name = "buzz_number")
    private String buzz;
    
    @Column(name = "email")
    private String email;

    @Override
    public Long getId() {
        return id;
    }
    
    public void setId(long aId) {
        id = aId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getBuzz() {
        return buzz;
    }

    public void setBuzz(String buzz) {
        this.buzz = buzz;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        CustomerInfo that = (CustomerInfo) o;

        if (address != null ? !address.equals(that.address) : that.address != null) return false;
        if (buzz != null ? !buzz.equals(that.buzz) : that.buzz != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (phone != null ? !phone.equals(that.phone) : that.phone != null) return false;
        if (email != null ? !email.equals(that.email) : that.email != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (phone != null ? phone.hashCode() : 0);
        result = 31 * result + (address != null ? address.hashCode() : 0);
        result = 31 * result + (buzz != null ? buzz.hashCode() : 0);
        result = 31 * result + (email != null ? email.hashCode() : 0);
        return result;
    }
}
