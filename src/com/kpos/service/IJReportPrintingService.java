package com.kpos.service;

import com.kpos.domain.CompanyProfile;
import com.kpos.domain.Order;
import com.kpos.domain.Printer;

import javax.print.PrintService;
import java.util.List;

/**
 * Created for kpos
 * User: automne
 * Date: 12/13/12
 * Time: 11:36 PM
 */
public interface IJReportPrintingService {

    public boolean printReceipt(Printer printer, CompanyProfile companyProfile, Order order);

    public boolean printTicketToKitchen(Order order);

    public boolean printReport();

    public List<PrintService> findAllAvailablePrinters();

}
