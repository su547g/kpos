package com.kpos.domain;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

/**
 * This class represents a global option item.
 *
 * Created by kpos.
 * Author: kkwang
 * Date: 3/10/12 9:49 PM
 */
public class GlobalOption extends AbstractDomainObject {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    protected String name;

    @Column(name = "dine_in_price")
    protected double dineInPrice;

    @Column(name = "out_price")
    protected double takeOutPrice;

    @Column(name = "is_taxable")
    protected boolean isTaxable;

    //owning entity
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private GlobalOptionCategory optionCategory;

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

    public double getDineInPrice() {
        return dineInPrice;
    }

    public void setDineInPrice(double dineInPrice) {
        this.dineInPrice = dineInPrice;
    }

    public double getTakeOutPrice() {
        return takeOutPrice;
    }

    public void setTakeOutPrice(double takeOutPrice) {
        this.takeOutPrice = takeOutPrice;
    }

    public boolean isTaxable() {
        return isTaxable;
    }

    public void setTaxable(boolean taxable) {
        isTaxable = taxable;
    }

    public GlobalOptionCategory getOptionCategory() {
        return optionCategory;
    }

    public void setOptionCategory(GlobalOptionCategory optionCategory) {
        this.optionCategory = optionCategory;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        GlobalOption that = (GlobalOption) o;

        if (Double.compare(that.dineInPrice, dineInPrice) != 0) return false;
        if (isTaxable != that.isTaxable) return false;
        if (Double.compare(that.takeOutPrice, takeOutPrice) != 0) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (optionCategory != null ? !optionCategory.equals(that.optionCategory) : that.optionCategory != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        temp = dineInPrice != +0.0d ? Double.doubleToLongBits(dineInPrice) : 0L;
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        temp = takeOutPrice != +0.0d ? Double.doubleToLongBits(takeOutPrice) : 0L;
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (isTaxable ? 1 : 0);
        result = 31 * result + (optionCategory != null ? optionCategory.hashCode() : 0);
        return result;
    }
}
