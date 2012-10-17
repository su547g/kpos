package com.kpos.service;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 10/15/12 11:05 PM
 */
public class SaleSummary {
    private double totalSale;
    private double tax;
    private double tips;

    public void setTotalSale(double val) {
        totalSale = val;
    }

    public double getTotalSale() {
        return totalSale;
    }

    public void setTax(double val) {
        tax = val;
    }

    public double getTax() {
        return tax;
    }

    public void setTips(double val) {
        tips = val;
    }

    public double getTips() {
        return tips;
    }
}
