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
@NamedQueries({
        @NamedQuery(
                name = "listOrdersByTimeASC",
                query = "from Order order by createdOn ASC"
        ),
        @NamedQuery(
                name = "listOrdersByTimeDESC",
                query = "from Order order by createdOn DESC"
        ),
        @NamedQuery(
                name = "listOrdersForStatusByTimeASC",
                query = "from Order where status = :aStatus order by createdOn ASC"
        ),
        @NamedQuery(
                name = "listOrdersForStatusByTimeDESC",
                query = "from Order where status = :aStatus order by createdOn DESC"
        ),
        @NamedQuery(
                name = "listOrdersForTable",
                query = "from Order o where o.table.id = :aId and o.status = :aStatus order by createdOn ASC"
        ),
        /*@NamedQuery(
                name = "listOrdersForServer",
                query = ""
        ),*/
        @NamedQuery(
                name = "listOrdersForDateRange",
                query = "from Order o where o.createdOn between :aStart and :aEnd order by createdOn ASC"
        ),
        @NamedQuery(
                name = "listOrdersForDateRangeAndStatus",
                query = "from Order o where o.createdOn between :aStart and :aEnd and status = :aStatus order by createdOn ASC"
        )
})
@Entity
@Table(name = "ORDER_BILL")
public class Order extends AbstractDomainObject {
    public static enum OrderType {
        IN, OUT, DELIVERY, PICKUP;
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

    @Column(name = "tax")
    private double tax = 0;

    @Column(name = "gratuity")
    private double gratuity = 0;

    //owning entity
    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "table_id")
    private RestaurantTable table;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "customer_id")
    @ForeignKey(name = "ORDER_2_CUSTOMER_FK")
    private CustomerInfo customerInfo;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order", orphanRemoval = true, fetch = FetchType.LAZY)
    @ForeignKey(name = "PAYMENT_2_BILL_FK")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<PaymentRecord> paymentRecords = new ArrayList<PaymentRecord>();
    
    @Column(name = "num_guests")
    private Integer numOfGuests;

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

    public double getTax() {
        return tax;
    }

    public void setTax(double tax) {
        this.tax = tax;
    }

    public double getGratuity() {
        return gratuity;
    }

    public void setGratuity(double gratuity) {
        this.gratuity = gratuity;
    }

    public RestaurantTable getTable() {
        return table;
    }

    public void setTable(RestaurantTable table) {
        this.table = table;
    }

    public CustomerInfo getCustomerInfo() {
        return customerInfo;
    }

    public void setCustomerInfo(CustomerInfo customerInfo) {
        this.customerInfo = customerInfo;
    }

    public List<PaymentRecord> getPaymentRecords() {
        return paymentRecords;
    }

    public void setPaymentRecords(List<PaymentRecord> paymentRecords) {
        this.paymentRecords = paymentRecords;
    }

    public Integer getNumOfGuests() {
        return numOfGuests;
    }

    public void setNumOfGuests(Integer numOfGuests) {
        this.numOfGuests = numOfGuests;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Order order = (Order) o;

        if (Double.compare(order.totalPrice, totalPrice) != 0) return false;
        if (Double.compare(order.tax, tax) != 0) return false;
        if (Double.compare(order.gratuity, gratuity) != 0) return false;
        if (id != null ? !id.equals(order.id) : order.id != null) return false;
        if (notes != null ? !notes.equals(order.notes) : order.notes != null) return false;
        if (orderType != null ? !orderType.equals(order.orderType) : order.orderType != null) return false;
        if (status != order.status) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = id != null ? id.hashCode() : 0;
        result = 31 * result + (status != null ? status.hashCode() : 0);
        result = 31 * result + (orderType != null ? orderType.hashCode() : 0);
        result = 31 * result + (notes != null ? notes.hashCode() : 0);
        temp = totalPrice != +0.0d ? Double.doubleToLongBits(totalPrice) : 0L;
        temp = tax != +0.0d ? Double.doubleToLongBits(tax) : 0L;
        temp = gratuity != +0.0d ? Double.doubleToLongBits(gratuity) : 0L;
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        return result;
    }
}
