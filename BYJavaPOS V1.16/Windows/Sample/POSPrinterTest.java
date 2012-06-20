// usage instructions
// 1. compile from command line - javac POSPrinterTest.java
// 2. execute from command line - java  POSPrinterTest

// NOTE: CHANGE THE PRINTER NAME IN THE printer.open STATEMENT BELOW TO MATCH YOUR USAGE SCENARIO


import jpos.JposConst;
import jpos.JposException;
import jpos.POSPrinter;
import jpos.POSPrinterConst;

import jpos.util.JposPropertiesConst;

public class POSPrinterTest
{
    public static void main(String[] args)
    {   
        /*
            Normally, the JavaPOS Configuration Loader or JCL will locate the jpos.xml file if it is in the same
            directory as starjavapos.jar.  If this setup is acceptable then leave the following lines commented
            out.
         
            If you want to place the jpos.xml file elsewhere on your local file system then uncomment the
            following line and specify the full path to jpos.xml.
         
            If you want to place the jpos.xml file on a webserver for access over the internet then uncomment
            the second System.setProperty line below and specify the full URL to jpos.xml.
        */
        //System.setProperty(JposPropertiesConst.JPOS_POPULATOR_FILE_PROP_NAME, "/some/where/local/jpos.xml");
        //System.setProperty(JposPropertiesConst.JPOS_POPULATOR_FILE_URL_PROP_NAME, "http://some-where-remote.com/jpos.xml");
        
        
        // constants defined for convience sake (could be inlined)
        String ESC    = ((char) 0x1b) + "";
        String LF     = ((char) 0x0a) + "";
        String SPACES = "                                                                      ";
        
        // instantiate a new jpos.POSPrinter object
        POSPrinter printer = new POSPrinter();
        
        try
        {
           //open the printer by logical device name
            printer.open("byprn");         
            
            //claim exclsive usage of the printer object
            printer.claim(1);
            
            // enable the device for input and output
            printer.setDeviceEnabled(true);
            
            // set map mode to metric - all dimensions specified in 1/100mm units
            printer.setMapMode(POSPrinterConst.PTR_MM_METRIC);  // unit = 1/100 mm - i.e. 1 cm = 10 mm = 10 * 100 units
            
            do
            {
               
                // check if the cover is open
                if (printer.getCoverOpen() == true)
                {
                    System.out.println("printer.getCoverOpen() == true");
                    // the printer is CoverOpen so do not attempt printing
                    break;
                }
                
                // check if the printer is out of paper
                if (printer.getRecEmpty() == true)
                {
                    System.out.println("printer.getRecEmpty() == true");
                    // the printer is out of paper so do not attempt printing
                    break;
                }
                
                printer.transactionPrint(POSPrinterConst.PTR_S_RECEIPT, POSPrinterConst.PTR_TP_TRANSACTION);
                
                // call printNormal repeatedly to generate out receipt
                //   the following JavaPOS-POSPrinter control code sequences are used here
                //   ESC + "|cA"          -> center alignment
                //   ESC + "|4C"          -> double high double wide character printing
                //   ESC + "|bC"          -> bold character printing
                //   ESC + "|uC"          -> underline character printing
                //   ESC + "|rA"          -> right alignment
                
                printer.printNormal(POSPrinterConst.PTR_S_RECEIPT, ESC + "|cA" + ESC + "|4C" + ESC + "|bC" + "Demo  Store "  + LF);
                printer.printNormal(POSPrinterConst.PTR_S_RECEIPT, ESC + "|cA" + ESC + "|bC" + "Tel:033-333-3333"    + LF);

                printer.printNormal(POSPrinterConst.PTR_S_RECEIPT, ESC + "|uC" + "Qnty Unit Tx Description" + SPACES.substring(0, printer.getRecLineChars() - "Qnty Unit Tx Description".length()) + LF);
                
                printer.printNormal(POSPrinterConst.PTR_S_RECEIPT,               "   1  830    Banana xx"        + LF);
                printer.printNormal(POSPrinterConst.PTR_S_RECEIPT,               "   1  180    Apple South"       + LF);
                printer.printNormal(POSPrinterConst.PTR_S_RECEIPT,               "   1  350    Haier Green "    + LF);
                printer.printNormal(POSPrinterConst.PTR_S_RECEIPT,               "   1   80    Bike Like Cycle "   + LF);
                printer.printNormal(POSPrinterConst.PTR_S_RECEIPT,               "   1  100    Child  Horse Radio" + LF);
                printer.printNormal(POSPrinterConst.PTR_S_RECEIPT,               "   2  200 Tx Hashi Chop Sticks"   + LF);
                printer.printNormal(POSPrinterConst.PTR_S_RECEIPT, LF);
                
                printer.printNormal(POSPrinterConst.PTR_S_RECEIPT,               ESC + "|rA" +               "Subtotal:  2160" + LF);
                printer.printNormal(POSPrinterConst.PTR_S_RECEIPT,               ESC + "|rA" +               "Tax:         24" + LF);
                printer.printNormal(POSPrinterConst.PTR_S_RECEIPT,               ESC + "|rA" + ESC + "|bC" + "Total:     2184" + LF);
                printer.printNormal(POSPrinterConst.PTR_S_RECEIPT,               ESC + "|rA" +               "Tender:    2200" + LF);
                printer.printNormal(POSPrinterConst.PTR_S_RECEIPT,               ESC + "|rA" + ESC + "|bC" + "Change:      16" + LF);
                printer.printNormal(POSPrinterConst.PTR_S_RECEIPT, LF);
                                
                if (printer.getCapRecBarCode() == true)
                {
                    // print a Code 3 of 9 barcode with the data "123456789012" encoded
                    //   the 10 * 100, 60 * 100 parameters below specify the barcode's height and width
                    //   in the metric map mode (1cm tall, 6cm wide)
                    printer.printBarCode(POSPrinterConst.PTR_S_RECEIPT, "123456789012", POSPrinterConst.PTR_BCS_Code39, 10 * 100, 60 * 100, POSPrinterConst.PTR_BC_CENTER, POSPrinterConst.PTR_BC_TEXT_BELOW);
                }
                
                printer.printNormal(POSPrinterConst.PTR_S_RECEIPT, ESC + "|cA" + ESC + "|4C" + ESC + "|bC" + "Thank you" + LF);

                // the ESC + "|100fP" control code causes the printer to execute a paper cut
                // after feeding to the cutter position
                printer.printNormal(POSPrinterConst.PTR_S_RECEIPT, ESC + "|100fP");

                // terminate the transaction causing all of the above buffered data to be sent to the printer
                printer.transactionPrint(POSPrinterConst.PTR_S_RECEIPT, POSPrinterConst.PTR_TP_NORMAL);
                
                // exit our printing loop
            } while (false);
        }
        catch(JposException e)
        {
            // display any errors that come up
            e.printStackTrace();
        }
        finally
        {
            // close the printer object
            try
            {
                printer.close();
            }
            catch (Exception e) {}
        }
        
        System.out.println("POSPrinter Test Finished.");
        System.exit(0);
    }
}
