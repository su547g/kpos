package com.kpos.domain;

import org.hibernate.annotations.ForeignKey;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * This is an actual item on a customer order.
 *
 * Created by kpos.
 * Author: kkwang
 * Date: 3/9/12 11:49 PM
 */
@Entity
@Table(name = "ORDER_ITEM")
public class OrderItem extends AbstractDomainObject {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    
    @OneToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "sale_item_id")
    @ForeignKey(name = "ORDER_ITEM_2_SALEITEM_FK")
    @OnDelete(action = OnDeleteAction.NO_ACTION)
    private SaleItem saleItem;
    
    @Column(name = "quantity")
    private int quantity;

    //owning entity
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id")
    @ForeignKey(name = "ITEM_2_ORDER_FK")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Order order;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "orderItem", orphanRemoval = true, fetch = FetchType.LAZY)
    @ForeignKey(name = "ORDER_OPTION_2_ITEM_FK")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<OrderItemOption> options = new ArrayList<OrderItemOption>();
    
    @Column(name = "displayText")
    private String displayText = "";

    @Column(name = "sale_price")
    private double salePrice;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public SaleItem getSaleItem() {
        return saleItem;
    }

    public void setSaleItem(SaleItem saleItem) {
        this.saleItem = saleItem;
    }
    
    public float getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public String getDisplayText() {
        return displayText;
    }

    public void setDisplayText(String displayText) {
        this.displayText = displayText;
    }

    public double getSalePrice() {
        return salePrice;
    }

    public void setSalePrice(double salePrice) {
        this.salePrice = salePrice;
    }

    public List<OrderItemOption> getOptions() {
        return options;
    }

    public void setOptions(List<OrderItemOption> options) {
        this.options = options;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        OrderItem orderItem = (OrderItem) o;

        if (Float.compare(orderItem.quantity, quantity) != 0) return false;
        if (id != null ? !id.equals(orderItem.id) : orderItem.id != null) return false;
        //if (saleItem != null ? !saleItem.equals(orderItem.saleItem) : orderItem.saleItem != null) return false;
        if (displayText != null ? !displayText.equals(orderItem.displayText) : orderItem.displayText != null) return false;
        //if (overrideText != null ? !overrideText.equals(orderItem.overrideText) : orderItem.overrideText != null) return false;
        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        //result = 31 * result + (saleItem != null ? saleItem.hashCode() : 0);
        result = 31 * result + (quantity != +0.0f ? Float.floatToIntBits(quantity) : 0);
        result = 31 * result + (displayText != null ? displayText.hashCode() : 0);
        //result = 31 * result + (overrideText != null ? overrideText.hashCode() : 0);
        return result;
    }
}
