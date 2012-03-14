package com.kpos.domain;

import org.hibernate.annotations.ForeignKey;
import org.hibernate.annotations.Index;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * This class represents an order that the customer placed.
 *
 * Created by kpos.
 * Author: kkwang
 * Date: 3/9/12 11:53 PM
 */
@Entity
@Table(name = "ORDER")
public class Order extends AbstractDomainObject {
    public static enum OrderType {
        IN, OUT;
        @Override public String toString() {
            return super.toString().toUpperCase();
        }
    }

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order", orphanRemoval = true, fetch = FetchType.LAZY)
    @ForeignKey(name = "ITEM_2_ORDER_FK")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<OrderItem> orderItems = new ArrayList<OrderItem>();

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order", orphanRemoval = true, fetch = FetchType.LAZY)
    @ForeignKey(name = "BILL_2_ORDER_FK")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<Bill> billList = new ArrayList<Bill>();

    @Column(name = "status")
    @org.hibernate.annotations.Type(type = "com.kpos.domain.OrderStatusEnumAdaptor")
    @Index(name = "ORDER_FK2")
    private OrderStatusEnum status = OrderStatusEnum.INITIAL;

    @Column(name = "order_type")
    private String orderType;
    
    @Column(name = "notes")
    private String notes;

    @Column(name = "total_price")
    private double totalPrice;

    //owning entity
    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "id")
    private RestaurantTable table;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<OrderItem> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<OrderItem> orderItems) {
        this.orderItems = orderItems;
    }

    public OrderStatusEnum getStatus() {
        return status;
    }

    public void setStatus(OrderStatusEnum status) {
        this.status = status;
    }

    public String getOrderType() {
        return orderType;
    }

    public void setOrderType(String orderType) {
        this.orderType = orderType;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
}
