package com.kpos.domain;

import org.hibernate.annotations.ForeignKey;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 4/26/12 11:39 PM
 */
@Entity
@Table(name = "ORDER_ITEM_OPTION")
public class OrderItemOption extends AbstractDomainObject {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "price")
    private double price;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "order_item_id")
    @ForeignKey(name = "ORDER_OPTION_2_ITEM_FK")
    private OrderItem orderItem;

    @OneToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "sale_item_option_id")
    @ForeignKey(name = "ORD_OPT_2_SALEI_OPT_FK")
    @OnDelete(action = OnDeleteAction.NO_ACTION)
    private SaleItemOption saleItem;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public OrderItem getOrderItem() {
        return orderItem;
    }

    public void setOrderItem(OrderItem orderItem) {
        this.orderItem = orderItem;
    }

    public SaleItemOption getSaleItem() {
        return saleItem;
    }

    public void setSaleItem(SaleItemOption saleItem) {
        this.saleItem = saleItem;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        OrderItemOption that = (OrderItemOption) o;

        if (Double.compare(that.price, price) != 0) return false;
        if (quantity != that.quantity) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = id != null ? id.hashCode() : 0;
        result = 31 * result + quantity;
        temp = price != +0.0d ? Double.doubleToLongBits(price) : 0L;
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        return result;
    }
}
