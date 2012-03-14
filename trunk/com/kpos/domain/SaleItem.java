package com.kpos.domain;

import org.hibernate.annotations.ForeignKey;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * This class represents a sale item that a customer can order.
 *
 * Created by kpos.
 * Author: kkwang
 * Date: 3/9/12 10:47 PM
 */
@Entity
@Table(name = "SALE_ITEM")
public class SaleItem extends AbstractDomainObject {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "normal_price", nullable = false)
    private double price;

    @Column(name = "is_allowed_hh", nullable = false)
    private boolean isAllowedHH = false; //is item allowed for happy hour?

    @Column(name = "hh_rate", nullable = true)
    private double hhRate = 1; //happy hour rate

    @Column(name = "hh_price", nullable = true)
    private double hh_price;

    //owning entity
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Category category;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "saleItem", orphanRemoval = true, fetch = FetchType.LAZY)
    @ForeignKey(name = "OPTION_2_ITEM_FK")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<SaleItemOption> optionList = new ArrayList<SaleItemOption>();

    @Column(name = "large_in_price")
    private double largeInPrice;

    @Column(name = "medium_in_price")
    private double mediumInPrice;

    @Column(name = "small_in_price")
    private double smallInPrice;
    
    @Column(name = "large_out_price")
    private double largeOutPrice;
    
    @Column(name = "medium_out_price")
    private double mediumOutPrice;
    
    @Column(name = "small_out_price")
    private double smallOutPrice;
    
    @Column(name = "single_option_only")
    private boolean singleOptionOnly = false; //whether user can select only a single option or multiple

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

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public boolean isAllowedHH() {
        return isAllowedHH;
    }

    public void setAllowedHH(boolean allowedHH) {
        isAllowedHH = allowedHH;
    }

    public double getHhRate() {
        return hhRate;
    }

    public void setHhRate(double hhRate) {
        this.hhRate = hhRate;
    }

    public double getHh_price() {
        return hh_price;
    }

    public void setHh_price(double hh_price) {
        this.hh_price = hh_price;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<SaleItemOption> getOptionList() {
        return optionList;
    }

    public void setOptionList(List<SaleItemOption> optionList) {
        this.optionList = optionList;
    }

    public double getLargeInPrice() {
        return largeInPrice;
    }

    public void setLargeInPrice(double largeInPrice) {
        this.largeInPrice = largeInPrice;
    }

    public double getMediumInPrice() {
        return mediumInPrice;
    }

    public void setMediumInPrice(double mediumInPrice) {
        this.mediumInPrice = mediumInPrice;
    }

    public double getSmallInPrice() {
        return smallInPrice;
    }

    public void setSmallInPrice(double smallInPrice) {
        this.smallInPrice = smallInPrice;
    }

    public double getLargeOutPrice() {
        return largeOutPrice;
    }

    public void setLargeOutPrice(double largeOutPrice) {
        this.largeOutPrice = largeOutPrice;
    }

    public double getMediumOutPrice() {
        return mediumOutPrice;
    }

    public void setMediumOutPrice(double mediumOutPrice) {
        this.mediumOutPrice = mediumOutPrice;
    }

    public double getSmallOutPrice() {
        return smallOutPrice;
    }

    public void setSmallOutPrice(double smallOutPrice) {
        this.smallOutPrice = smallOutPrice;
    }

    public boolean isSingleOptionOnly() {
        return singleOptionOnly;
    }

    public void setSingleOptionOnly(boolean singleOptionOnly) {
        this.singleOptionOnly = singleOptionOnly;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SaleItem saleItem = (SaleItem) o;

        if (Double.compare(saleItem.hhRate, hhRate) != 0) return false;
        if (Double.compare(saleItem.hh_price, hh_price) != 0) return false;
        if (isAllowedHH != saleItem.isAllowedHH) return false;
        if (Double.compare(saleItem.price, price) != 0) return false;
        if (category != null ? !category.equals(saleItem.category) : saleItem.category != null) return false;
        if (id != null ? !id.equals(saleItem.id) : saleItem.id != null) return false;
        if (name != null ? !name.equals(saleItem.name) : saleItem.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        temp = price != +0.0d ? Double.doubleToLongBits(price) : 0L;
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (isAllowedHH ? 1 : 0);
        temp = hhRate != +0.0d ? Double.doubleToLongBits(hhRate) : 0L;
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        temp = hh_price != +0.0d ? Double.doubleToLongBits(hh_price) : 0L;
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (category != null ? category.hashCode() : 0);
        return result;
    }
}
