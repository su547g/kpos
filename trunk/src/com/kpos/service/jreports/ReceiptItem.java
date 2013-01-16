package com.kpos.service.jreports;

import com.kpos.domain.OrderItem;

import java.text.DecimalFormat;

/**
 * Created for kpos
 * User: automne
 * Date: 12/24/12
 * Time: 11:09 PM
 */
public class ReceiptItem {

    private static DecimalFormat moneyFormat = new DecimalFormat("#.##");

    private String itemName;
    private int quantity;
    private double unitPrice;
    private double itemSubtotal;

    public void populateFrom(OrderItem orderItem) {
        itemName = orderItem.getDisplayText();
        quantity = orderItem.getQuantity();
        unitPrice = orderItem.getSalePrice();
        itemSubtotal = unitPrice * quantity;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(double unitPrice) {
        this.unitPrice = unitPrice;
    }

    public double getItemSubtotal() {
        return itemSubtotal;
    }

    public void setItemSubtotal(double itemSubtotal) {
        this.itemSubtotal = itemSubtotal;
    }
}
