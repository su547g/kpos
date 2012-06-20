// usage instructions
// 1. compile from command line - javac  CashDrawerTest.java
// 2. execute from command line - java   CashDrawerTest


import jpos.CashDrawer;
import jpos.JposException;

public class CashDrawerTest
{
    public static void main(String[] args)
    {
        // instantiate a new jpos.CashDrawer object
        CashDrawer cashDrawer = new CashDrawer();
        
        try
        {
            
            cashDrawer.open("bycash");                 

            
            // claim exclsive usage of the cashDrawer object
            cashDrawer.claim(1);
            
            // enable the device for input and output
            cashDrawer.setDeviceEnabled(true);
            
            // check if the drawer is currently opened
            // if this check returns true when the drawer is ACTUALLY CLOSED,
            //    set the drawerClosedOnSignalLow property of this device's entry
            //    in the jpos.xml file to true
            if (cashDrawer.getDrawerOpened() == true)
            {
                System.out.println("cashDrawer.getDrawerOpened() == true");
            }
            else
            {
                System.out.println("cashDrawer.getDrawerOpened() == false");
            }
            
            // open the cash drawer
             cashDrawer.openDrawer();
        }
        catch(JposException e)
        {
            // display any errors that come up
            e.printStackTrace();
        }
        finally
        {
            // close the cashDrawer object
            try
            {
                cashDrawer.close();
            }
            catch (Exception e) {}
        }
        
        System.out.println("CashDrawerTest finished.");
        System.exit(0);
    }
}
