package com.kpos.service.jreports;

import com.kpos.domain.OrderItem;

/**
 * Created for kpos
 * User: automne
 * Date: 1/2/12
 * Time: 11:38 PM
 */
public class KitchenTicketItem {

    private String itemName;
    private int quantity;

    public void populateFrom(OrderItem orderItem) {
        itemName = orderItem.getDisplayText();
        quantity = orderItem.getQuantity();
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


}
