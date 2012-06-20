// usage instructions
// 1. compile from command line - javac -classpath  DirectIOTest.java
// 2. execute from command line - java -classpath  DirectIOTest

import jpos.JposException;
import jpos.POSPrinter;
import jpos.POSPrinterConst;

import jpos.util.JposPropertiesConst;

public class DirectIOTest
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
        
        String ESC    = ((char) 0x1b) + "";
        String LF     = ((char) 0x0a) + "";
        
        // instantiate a new jpos.POSPrinter object
        POSPrinter printer = new POSPrinter();
        
        try
        {
            
            printer.open("byprn");                 
             
            
            // claim exclsive usage of the printer object
            printer.claim(1);
            
            // enable the device for input and output
            printer.setDeviceEnabled(true);
            
            // set map mode to metric - all dimensions specified in 1/100mm units
            printer.setMapMode(POSPrinterConst.PTR_MM_METRIC);  // unit = 1/100 mm - i.e. 1 cm = 10 mm = 10 * 100 units
            
            do
            {
                // poll for printer status
                //   a javax.swing based application would be best to both poll for status
                //   AND register for asynchronous StatusUpdateEvent notification
                //   see the JavaPOS specification for details on this
                
                // check if the cover is open
                if (printer.getCoverOpen() == true)
                {
                    System.out.println("printer.getCoverOpen() == true");
                    
                    // cover open so do not attempt printing
                    break;
                }
                
                // check if the printer is out of paper
                if (printer.getRecEmpty() == true)
                {
                    System.out.println("printer.getRecEmpty() == true");
                    
                    // the printer is out of paper so do not attempt printing
                    break;
                }
                
                // being a transaction
                // transaction mode causes all output to be buffered
                // once transaction mode is terminated, the buffered data is
                // outputted to the printer in one shot - increased reliability
                printer.transactionPrint(POSPrinterConst.PTR_S_RECEIPT, POSPrinterConst.PTR_TP_TRANSACTION);
                
                if (printer.getCapRecBitmap() == true)
                {
                      int command = 100;
                      byte data[]=new byte[3];
                      data[0]    = 0x33;
                      data[1]    = 0x33;
                      data[2]    = 0x0a;
                      
                      printer.directIO(command,null, data );
                }

                // the ESC + "|100fP" control code causes the printer to execute a paper cut
                //   after feeding to the cutter position
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
        
        System.out.println("DirectIOTest finished.");
        System.exit(0);
    }
}
