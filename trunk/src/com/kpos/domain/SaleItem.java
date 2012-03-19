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
    @JoinColumn(name = "category_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Category category;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "saleItem", orphanRemoval = true, fetch = FetchType.LAZY)
    @ForeignKey(name = "OPTION_2_ITEM_FK")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<SaleItemOption> optionList = new ArrayList<SaleItemOption>();

    @Column(name = "out_price")
    private double outPrice; //take-out price

    @Column(name = "single_option_only")
    private boolean singleOptionOnly = false; //whether user can select only a single option or multiple

    /*
    @ManyToMany
   @JoinTable(
           name = "REI_SHARED_WITH",
           joinColumns = @JoinColumn(name = "REI_ROW_INST"),
           inverseJoinColumns = @JoinColumn(name = "DART_USER_ROW_INST")
   )
   @ForeignKey(name = "REI_SHARED_WITH_2_REI_FK", inverseName = "REI_SHARED_WITH_2_USER_FK")
     */

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

    public double getOutPrice() {
        return outPrice;
    }

    public void setOutPrice(double outPrice) {
        this.outPrice = outPrice;
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
