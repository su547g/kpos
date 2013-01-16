package com.kpos.service;

import jpos.CashDrawer;
import jpos.JposException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

/**
 * Created for kpos
 * User: automne
 * Date: 1/2/12
 * Time: 10:36 PM
 */
@Component
public class JPosServiceImpl implements JPosService {

    private final static Logger log = LoggerFactory.getLogger(JReportPrintingServiceImpl.class);

    public void pullCashDrawer(String cashDrawerName) {
        CashDrawer cashDrawer = new CashDrawer();

        try {
            cashDrawer.open(cashDrawerName);
            cashDrawer.claim(1);
            cashDrawer.setDeviceEnabled(true);
            if (cashDrawer.getDrawerOpened() == true) {
                log.info("Cash Drawer is already opened");
            } else {
                log.info("Cash Drawer is closed");
            }
            log.info("Opening Cash Drawer");
            cashDrawer.openDrawer();
        } catch (JposException ex) {
            ex.printStackTrace();
        } finally {
            try {
                cashDrawer.close();
            } catch (Exception e) {}
        }
    }
}
