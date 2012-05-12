package com.kpos.domain;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/9/12 11:06 PM
 */
@Entity
@Table(name = "SALE_ITEM_OPTION")
public class SaleItemOption extends AbstractDomainObject {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "price", nullable = true)
    private double price;

    @Column(name = "out_price", nullable = true)
    private double outPrice;

    //owning entity
    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "sale_item_id")
    private SaleItem saleItem;

    @Column(name = "is_required", nullable = true)
    private boolean isRequired = false;

    @Column(name = "description")
    private String description;
    
    @Column(name = "thumb_path")
    private String thumbPath;

    @Column(name = "taxable", nullable = true)
    private Boolean taxable = true;

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

    public double getOutPrice() {
        return outPrice;
    }

    public void setOutPrice(double outPrice) {
        this.outPrice = outPrice;
    }

    public SaleItem getSaleItem() {
        return saleItem;
    }

    public void setSaleItem(SaleItem saleItem) {
        this.saleItem = saleItem;
    }

    public boolean isRequired() {
        return isRequired;
    }

    public void setRequired(boolean required) {
        isRequired = required;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getThumPath() {
        return thumbPath;
    }

    public void setThumPath(String thumPath) {
        this.thumbPath = thumPath;
    }

    public String getThumbPath() {
        return thumbPath;
    }

    public void setThumbPath(String thumbPath) {
        this.thumbPath = thumbPath;
    }

    public Boolean getTaxable() {
        return taxable;
    }

    public void setTaxable(Boolean taxable) {
        this.taxable = taxable;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SaleItemOption option = (SaleItemOption) o;

        if (isRequired != option.isRequired) return false;
        if (Double.compare(option.outPrice, outPrice) != 0) return false;
        if (Double.compare(option.price, price) != 0) return false;
        if (description != null ? !description.equals(option.description) : option.description != null) return false;
        if (id != null ? !id.equals(option.id) : option.id != null) return false;
        if (name != null ? !name.equals(option.name) : option.name != null) return false;
        if (saleItem != null ? !saleItem.equals(option.saleItem) : option.saleItem != null) return false;
        if (taxable != null ? !taxable.equals(option.taxable) : option.taxable != null) return false;
        if (thumbPath != null ? !thumbPath.equals(option.thumbPath) : option.thumbPath != null) return false;

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
        temp = outPrice != +0.0d ? Double.doubleToLongBits(outPrice) : 0L;
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (saleItem != null ? saleItem.hashCode() : 0);
        result = 31 * result + (isRequired ? 1 : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (thumbPath != null ? thumbPath.hashCode() : 0);
        result = 31 * result + (taxable != null ? taxable.hashCode() : 0);
        return result;
    }
}
