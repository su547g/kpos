package com.kpos.service;

import com.kpos.service.IPrintingService;
import com.sun.org.apache.xml.internal.serialize.Printer;

import javax.print.*;
import javax.print.attribute.AttributeSet;
import javax.print.attribute.HashAttributeSet;
import javax.print.attribute.standard.PrinterName;
import javax.print.event.PrintJobAdapter;
import javax.print.event.PrintJobEvent;
import java.awt.*;
import java.awt.print.PageFormat;
import java.awt.print.Printable;
import java.awt.print.PrinterException;
import java.awt.print.PrinterJob;
import java.io.*;

public class PrintingServiceImpl implements IPrintingService {
    private static String page = "<table><tr><td><h1>Hello World!</h1></td></tr><td></table><table><tr><td align='left'>Object 1</td><td align='right'>10</td></tr></table><p/><strong>Thank You!</strong>";
    static String page2 = "Hello World\n\rToday is a warm day!\n\rObject 1         10";
    public static void main(String[] args) {
        InputStream in = null;
        try {
            System.out.println("preparing input stream");
            String str = "Hello World!";
            in = new BufferedInputStream(new ByteArrayInputStream(page2.getBytes()));
            DocFlavor flavor = DocFlavor.INPUT_STREAM.AUTOSENSE;

            // find the printing service
            System.out.println("fetching print service");
            AttributeSet attributeSet = new HashAttributeSet();
            attributeSet.add(new PrinterName("\\\\NYPRINT04\\NY731-3W-S153AP", null));
            PrintService[] services = PrintServiceLookup.lookupPrintServices(null, attributeSet);
            DocFlavor[] supportedFlavors = services[0].getSupportedDocFlavors();
            for(int i = 0; i < supportedFlavors.length; i++) {
                System.out.print(supportedFlavors[i].getMediaType() + ": ");
                System.out.println(supportedFlavors[i].getMimeType());
            }
            // create the print job
            System.out.println("creating print job");
            //DocPrintJob job = services[0].createPrintJob();
            Doc doc = new SimpleDoc(in, flavor, null);

            // monitor print job events
            System.out.println("preparing print job monitor");
            //PrintJobWatcher watcher = new PrintJobWatcher(job);

            // print it
            System.out.println("start printing");
            //job.print(doc, null);

            // wait for the print job is done
            System.out.println("waiting for the printing to finish");
            //watcher.waitForDone();

            System.out.println("done !");

            PrinterJob jobTest = PrinterJob.getPrinterJob(); //Use default printer
            jobTest.setPrintable(new Printable(){
                public int print(Graphics graphics, PageFormat pageFormat, int pageIndex) {
                    if(pageIndex != 0)
                        return NO_SUCH_PAGE;
                    //draw to graphics
                    Graphics2D g2d= (Graphics2D)graphics;
                    g2d.translate(pageFormat.getImageableX(), pageFormat.getImageableY());
                    g2d.setColor(Color.black);
                    g2d.drawString("example string", 250, 250);
                    return PAGE_EXISTS;
                }
            });
            jobTest.setJobName("<Name of Job>");

            try {
                jobTest.print();

                AttributeSet attributeSet2 = new HashAttributeSet();
                attributeSet.add(new PrinterName("\\\\NYPRINT04\\NY731-3W-S135BP", null));
                PrintService[] services2 = PrintServiceLookup.lookupPrintServices(null, attributeSet);
                jobTest.setPrintService(services2[0]);
                jobTest.print();
            } catch(PrinterException e) {
                e.printStackTrace();
            }

        } catch(Exception e) {
            e.printStackTrace();
        } finally {
            if (in != null) try { in.close(); } catch(Exception e) {e.printStackTrace();}
        }
    }
}

class PrintJobWatcher {
    // true iff it is safe to close the print job's input stream
    boolean done = false;

    PrintJobWatcher(DocPrintJob job) {
        // Add a listener to the print job
        job.addPrintJobListener(new PrintJobAdapter() {
            public void printJobCanceled(PrintJobEvent pje) {
                allDone();
            }
            public void printJobCompleted(PrintJobEvent pje) {
                allDone();
            }
            public void printJobFailed(PrintJobEvent pje) {
                allDone();
            }
            public void printJobNoMoreEvents(PrintJobEvent pje) {
                allDone();
            }
            void allDone() {
                synchronized (PrintJobWatcher.this) {
                    done = true;
                    PrintJobWatcher.this.notify();
                }
            }
        });
    }
    public synchronized void waitForDone() {
        try {
            while (!done) {
                wait();
            }
        } catch (InterruptedException e) {
        }
    }
}