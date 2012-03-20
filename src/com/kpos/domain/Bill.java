package com.kpos.domain;

import org.hibernate.annotations.ForeignKey;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/10/12 12:17 AM
 */
@Entity
@Table(name = "BILL")
public class Bill extends AbstractDomainObject {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    
    @Column(name = "amount")
    private double amount;

    //owning entity
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Order order;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "bill", orphanRemoval = true, fetch = FetchType.LAZY)
    @ForeignKey(name = "PAYMENT_2_BILL_FK")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<PaymentRecord> paymentRecords = new ArrayList<PaymentRecord>();
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public List<PaymentRecord> getPaymentRecords() {
        return paymentRecords;
    }

    public void setPaymentRecords(List<PaymentRecord> paymentRecords) {
        this.paymentRecords = paymentRecords;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Bill bill = (Bill) o;

        if (Double.compare(bill.amount, amount) != 0) return false;
        if (id != null ? !id.equals(bill.id) : bill.id != null) return false;
        if (order != null ? !order.equals(bill.order) : bill.order != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = id != null ? id.hashCode() : 0;
        temp = amount != +0.0d ? Double.doubleToLongBits(amount) : 0L;
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (order != null ? order.hashCode() : 0);

        return result;
    }
}
