package com.kpos.domain;

import javax.persistence.*;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 6/8/12 12:33 AM
 */
@Entity
@Table(name = "company_tax")
public class CompanyTax extends AbstractDomainObject {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    
    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "tax_rate")
    private double rate;

    @Override
    public Long getId() {
        return id;
    }

    public void setId(Long aValue) {
        id = aValue;
    }

    public String getName() {
        return name;
    }

    public void setName(String tax) {
        this.name = tax;
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        CompanyTax that = (CompanyTax) o;

        if (Double.compare(that.rate, rate) != 0) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;
        return true;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        temp = rate != +0.0d ? Double.doubleToLongBits(rate) : 0L;
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        return result;
    }
}
