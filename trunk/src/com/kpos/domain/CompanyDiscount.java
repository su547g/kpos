package com.kpos.domain;

import javax.persistence.*;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 6/8/12 12:35 AM
 */
@NamedQueries({
        @NamedQuery(
                name = "CompanyDiscount.findDiscountRate",
                query = "from CompanyDiscount where rate = :aRate"
        ),
        @NamedQuery(
                name = "CompanyDiscount.findDiscountByName",
                query = "from CompanyDiscount where name=:aName"
        )
})
@Entity
@Table(name = "company_discount")
public class CompanyDiscount extends AbstractDomainObject {
    public static enum DiscountTypeEnum {
        AMOUNT(1),
        PERCENT(2);
        
        private int statusCode;
        DiscountTypeEnum(int val) {
            statusCode = val;
        }
        public int getStatusCode(){
            return statusCode;
        }
        public static DiscountTypeEnum getType(int val) {
            if(val == 1) return AMOUNT;
            else return PERCENT;
        }
    }
    
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "rate")
    private double rate;
    
    @Column(name = "type")
    private int type;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

        CompanyDiscount that = (CompanyDiscount) o;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;
        if (Double.compare(that.type, type) != 0) return false;
        if (Double.compare(that.rate, rate) != 0) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;

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
        temp = type != +0.0d ? Double.doubleToLongBits(type) : 0L;
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        return result;
    }
}
