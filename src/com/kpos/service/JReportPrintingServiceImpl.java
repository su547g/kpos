package com.kpos.service;

import com.kpos.domain.CompanyProfile;
import com.kpos.domain.Order;
import com.kpos.domain.OrderItem;
import com.kpos.domain.Printer;
import com.kpos.service.jreports.KitchenTicketItem;
import com.kpos.service.jreports.ReceiptItem;
import edu.emory.mathcs.backport.java.util.Arrays;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.export.JRPrintServiceExporter;
import net.sf.jasperreports.engine.export.JRPrintServiceExporterParameter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.print.PrintService;
import javax.print.attribute.HashPrintRequestAttributeSet;
import javax.print.attribute.HashPrintServiceAttributeSet;
import javax.print.attribute.PrintRequestAttributeSet;
import javax.print.attribute.PrintServiceAttributeSet;
import javax.print.attribute.standard.PrinterName;
import java.awt.print.PrinterJob;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created for kpos
 * User: automne
 * Date: 12/13/12
 * Time: 11:38 PM
 */

@Component
public class JReportPrintingServiceImpl implements IJReportPrintingService {

    private final static Logger log = LoggerFactory.getLogger(JReportPrintingServiceImpl.class);

    private JasperReport receiptJReport;
    private JasperReport printItemToKitchenJReport;

    private static DecimalFormat moneyFormat = new DecimalFormat("#.##");
    private static SimpleDateFormat dateFormat = new SimpleDateFormat("yy/MM/dd HH:mm");

    @Override
    public boolean printReceipt(Printer printer, CompanyProfile companyProfile, Order order) {
        HashMap map = new HashMap();
        map.put("headerLine1", companyProfile.getName());
        map.put("headerLine2", companyProfile.getAddress1());
        map.put("headerLine3", companyProfile.getAddress2());
        map.put("headerLine4", companyProfile.getAddress2());
        map.put("headerLine5", "TEL" + ": " + companyProfile.getTelephone1());

        map.put("checkNo", KposConstants.JREPORT_RECEIPT_ORDER_NO + order.getId().toString());
        map.put("tableNo", KposConstants.JREPORT_RECEIPT_TABLE_NO + order.getTable().getId().toString());
        map.put("guestCount", KposConstants.JREPORT_RECEIPT_GUEST_COUNT + order.getNumOfGuests().toString());
        map.put("serverName", KposConstants.JREPORT_RECEIPT_SERVER + order.getCreatedBy().getStaff().getName());
        map.put("reportDate", KposConstants.JREPORT_RECEIPT_DATE + dateFormat.format(order.getCreatedOn()));
        map.put("grandSubtotal", moneyFormat.format(order.getTotalPrice()));
        map.put("taxAmount", moneyFormat.format(order.getTax()));
        map.put("grandTotal", moneyFormat.format(order.getTotalPrice() + order.getTax()));
        if (order.getGratuity() != 0) {
            map.put("tipAmount", moneyFormat.format(order.getGratuity()));
        } else {
            map.put("tipAmount", "");
        }

        try {
            if (receiptJReport == null) {
                //JasperDesign receiptJDesign = JRXmlLoader.load("/com/kpos/service/jreports/TicketReceiptReport.jrxml");
                receiptJReport = JasperCompileManager.compileReport("../webapps/kpos/WEB-INF/resources/jreports/TicketReceiptReport.jrxml");
            }
            List<ReceiptItem> receiptItemList = populateReceiptData(order);
            JasperPrint jasperPrint = JasperFillManager.fillReport(receiptJReport, map, new JRBeanCollectionDataSource(receiptItemList));

            doPrint(printer, jasperPrint);

        } catch (JRException e) {
            log.error("ERROR printing", e);
            return false;
        } finally {
        }
        return true;
    }

    @Override
    public boolean printTicketToKitchen(Order order) {
        Map<String, Object> map = new HashMap<String, Object>();

        map.put("headerLine1", "Order");

        map.put("checkNo", KposConstants.JREPORT_RECEIPT_ORDER_NO + order.getId());
        map.put("tableNo", KposConstants.JREPORT_RECEIPT_TABLE_NO + order.getTable().getId());
        map.put("guestCount", KposConstants.JREPORT_RECEIPT_GUEST_COUNT + order.getNumOfGuests());
        map.put("serverName", KposConstants.JREPORT_RECEIPT_SERVER + order.getCreatedBy().getStaff().getName()); // TODO: Server ID
        map.put("reportDate", KposConstants.JREPORT_RECEIPT_DATE + dateFormat.format(order.getCreatedOn())); // TODO: Date

        Map<Printer, List<OrderItem>> orderItemsByPrinter = groupOrderItemsByPrinter(order.getOrderItems());
        try {
            if (printItemToKitchenJReport == null) {
                //JasperDesign receiptJDesign = JRXmlLoader.load("/com/kpos/service/jreports/TicketReceiptReport.jrxml");
                printItemToKitchenJReport = JasperCompileManager.compileReport("../webapps/kpos/WEB-INF/resources/jreports/TicketReceiptReport.jrxml");
            }

            for (Map.Entry<Printer, List<OrderItem>> entry : orderItemsByPrinter.entrySet()) {
                Printer printer = entry.getKey();
                List<OrderItem> orderItemList = entry.getValue();
                List<KitchenTicketItem> kitchenTicketItemList = populateKitchenTicketData(orderItemList);
                JasperPrint jasperPrint = JasperFillManager.fillReport(printItemToKitchenJReport, map, new JRBeanCollectionDataSource(kitchenTicketItemList));
                doPrint(printer, jasperPrint);
            }

        } catch (JRException e) {
            log.error("ERROR printing", e);
        } finally {
        }
        return true;
    }

    private void doPrint(Printer printer, JasperPrint jasperPrint) throws JRException {
        PrintRequestAttributeSet printRequestAttributeSet = new HashPrintRequestAttributeSet();

        PrintServiceAttributeSet printServiceAttributeSet = new HashPrintServiceAttributeSet();
        printServiceAttributeSet.add(new PrinterName(printer.getRealName(), null));
        //printServiceAttributeSet.add(new PrinterName("Star TSP143LAN Printer", null));

        JRPrintServiceExporter exporter = new JRPrintServiceExporter();
        //exporter.setParameter(JRExporterParameter.INPUT_FILE_NAME, "build/reports/PrintServiceReport.jrprint");
        exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
        exporter.setParameter(JRPrintServiceExporterParameter.PRINT_REQUEST_ATTRIBUTE_SET, printRequestAttributeSet);
        exporter.setParameter(JRPrintServiceExporterParameter.PRINT_SERVICE_ATTRIBUTE_SET, printServiceAttributeSet);
        exporter.setParameter(JRPrintServiceExporterParameter.DISPLAY_PAGE_DIALOG, Boolean.FALSE);
        exporter.setParameter(JRPrintServiceExporterParameter.DISPLAY_PRINT_DIALOG, Boolean.FALSE);

        exporter.exportReport();
    }

    private List<ReceiptItem> populateReceiptData(Order order) {
        List<ReceiptItem> receiptItemList = new ArrayList<ReceiptItem>();
        for (OrderItem item : order.getOrderItems()) {
            ReceiptItem receiptItem = new ReceiptItem();
            receiptItem.populateFrom(item);
            receiptItemList.add(receiptItem);
        }
        return receiptItemList;
    }

    private List<KitchenTicketItem> populateKitchenTicketData(List<OrderItem> orderItemList) {
        List<KitchenTicketItem> kitchenTicketItemList = new ArrayList<KitchenTicketItem>();
        for (OrderItem item : orderItemList) {
            KitchenTicketItem kitchenTicketItem = new KitchenTicketItem();
            kitchenTicketItem.populateFrom(item);
            kitchenTicketItemList.add(kitchenTicketItem);
        }
        return kitchenTicketItemList;
    }

    private Map<Printer, List<OrderItem>> groupOrderItemsByPrinter(List<OrderItem> orderItemList) {
        Map<Printer, List<OrderItem>> orderItemsByPrinter = new HashMap<Printer, List<OrderItem>>();
        for (OrderItem orderItem : orderItemList) {
            for (Printer printer : orderItem.getSaleItem().getPrinters()) {
                List<OrderItem> orderItems;
                if (orderItemsByPrinter.containsKey(printer)) {
                    orderItems = orderItemsByPrinter.get(printer);
                } else {
                    orderItems = new ArrayList<OrderItem>();
                    orderItemsByPrinter.put(printer, orderItems);
                }
                orderItems.add(orderItem);
            }
        }
        return orderItemsByPrinter;
    }

    @Override
    public List<PrintService> findAllAvailablePrinters() {
        return Arrays.asList(PrinterJob.lookupPrintServices());
    }


    @Override
    public boolean printReport() {
        throw new RuntimeException("Printing report is not implemented yet");
    }
}
