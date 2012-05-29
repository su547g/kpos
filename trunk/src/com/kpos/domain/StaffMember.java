package com.kpos.domain;

import org.hibernate.annotations.ForeignKey;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/28/12 11:46 PM
 */
@Entity
@Table(name = "STAFF_MEMBER")
public class StaffMember extends AbstractDomainObject {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "age")
    private int age;

    @Column(name = "home_phone")
    private String homePhone;

    @Column(name = "cell_phone")
    private String cellPhone;

    @Column(name = "street")
    private String street;

    @Column(name = "city")
    private String city;
    
    @Column(name = "state")
    private String state;
    
    @Column(name = "zipcode")
    private String zipcode;

    @Column(name = "join_date")
    private Date joinDate;

    @Column(name = "hourly_wage")
    private double hourlyWage;

    @Column(name = "notes")
    private String notes;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "staff", orphanRemoval = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @ForeignKey(name = "USER_2_STAFF_FK")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;

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

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getHomePhone() {
        return homePhone;
    }

    public void setHomePhone(String homePhone) {
        this.homePhone = homePhone;
    }

    public String getCellPhone() {
        return cellPhone;
    }

    public void setCellPhone(String cellPhone) {
        this.cellPhone = cellPhone;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public Date getJoinDate() {
        return joinDate;
    }

    public void setJoinDate(Date joinDate) {
        this.joinDate = joinDate;
    }

    public double getHourlyWage() {
        return hourlyWage;
    }

    public void setHourlyWage(double hourlyWage) {
        this.hourlyWage = hourlyWage;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        StaffMember member = (StaffMember) o;

        if (age != member.age) return false;
        if (Double.compare(member.hourlyWage, hourlyWage) != 0) return false;
        if (cellPhone != null ? !cellPhone.equals(member.cellPhone) : member.cellPhone != null) return false;
        if (city != null ? !city.equals(member.city) : member.city != null) return false;
        if (homePhone != null ? !homePhone.equals(member.homePhone) : member.homePhone != null) return false;
        if (id != null ? !id.equals(member.id) : member.id != null) return false;
        if (joinDate != null ? !joinDate.equals(member.joinDate) : member.joinDate != null) return false;
        if (name != null ? !name.equals(member.name) : member.name != null) return false;
        if (state != null ? !state.equals(member.state) : member.state != null) return false;
        if (street != null ? !street.equals(member.street) : member.street != null) return false;
        if (zipcode != null ? !zipcode.equals(member.zipcode) : member.zipcode != null) return false;
        if (notes != null ? !notes.equals(member.notes) : member.notes != null) return false;
        return true;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + age;
        result = 31 * result + (homePhone != null ? homePhone.hashCode() : 0);
        result = 31 * result + (cellPhone != null ? cellPhone.hashCode() : 0);
        result = 31 * result + (street != null ? street.hashCode() : 0);
        result = 31 * result + (city != null ? city.hashCode() : 0);
        result = 31 * result + (state != null ? state.hashCode() : 0);
        result = 31 * result + (notes != null ? notes.hashCode() : 0);
        result = 31 * result + (zipcode != null ? zipcode.hashCode() : 0);
        result = 31 * result + (joinDate != null ? joinDate.hashCode() : 0);
        temp = hourlyWage != +0.0d ? Double.doubleToLongBits(hourlyWage) : 0L;
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        return result;
    }
}
