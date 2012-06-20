
1 Introduction
      SNBC JavaPOS ADK is developed based on UPOS1.9 specification .Users can develop applications
      that are compatible with UPOS1.9 specification with SNBC JavaPOS ADK.

      Operation of SNBC JavaPOS ADK has been confirmed in the following environment.
        ---Computer
           IBM PC/AT compatible
        ---Supported Operating systems
           Windows XP Professional Service Pack 2
           Windows 2000 Service Pack 4
           Windows 98 SE2
           Red Hat Linux 9.0  
        ---Java Virtual Machine
           Java2 Standard Edition 1.4.2_1
        ---Hard disk
           In addition to the capacity recommended for the OS, the hard disk must
           have at least 60 MB spare capacity.
        ---Memory
           Minimum of 128 MB of memory is required, and 256 MB or more is recommended. 
         

2 Software package Contents:
    
    . ByJpos192.jar   ---Device service software of SNBC JavaPOS software package
      (In the directory where services of JavaPOS are installed. directory "jre/lib/ext/lib" is recommended) 

    . jpos191.jar  ---Middle ware of JavaPOS1.9
            Same as above

    . jcl_editor.jar  ---Jpos ConFigandLoader Editor
            Same as above

    . Sameplejpos.xml ---Sample of jpos configuration file
            Same as above

    . Sample/POSPrinterTest.java ---Testing sample of printer
            Same as above

    . Sample/DirectIOTest.java   ---Testing sample of DirectIO
            Same as above

    . Sample/CashDrawerTest.java ---Testing sample of cash drawer 
            Same as above

    . readme.txt          --- Help file 
            Same as above

    . ByConfigure.bat     ---Batch file of Configuration Kit
            Same as above

    . WindowsIOLib.rar---JNL Dll file of interface under Windows system
            Same as above
   
    . WinSystemPortLib.rar---DLL file of interface under Windows system
       Copy it into the directory "system32" under Windows2000/XP and 
       copy it into the directory "system" under Windows98 .
    
    
    . xercesImpl.jar  ---Xml parse software package
        copy it into directory "jre/lib/ext" 

    . xml-apis.jar    ---Xml parse software package
           copy it into the directory "jre/lib/ext"   
    
    . LinuxPortLib.tar    ---DLL file of interface under Linux system
         Uncompress and copy it into the directory "/usr/lib". In profile,define LD_LIBRARY_PATH = /USR/LIB
         or
         Uncompress and copy it into the directory "/jre/lib/ext".

    .  port95nt.exe---the Driver of parallel interface under Windows system which is only need when using parallel 
                      printer under Windows system.

    . USBDriver2.20.rar--USB device driver under Windows system

    . JAI folder includes Linux and Windows edition of JAI which can be installed directly. User can't use SNBC 
       JavaPOS normally until this software package is installed Because SNBC JavaPOS software package make JAI 
       as the kit of image manipulation.
            
3 Installation
    
     Software package needs to be installed 
        1) JDK  JDK1.4.2_01
                http://java.sun.com/j2se/1.4.2/
        2) JAI  Imaging API
     		Java Advanced Imaging 1.1.2
      		http://java.sun.com/products/java-media/jai/
        3) XML software package(included in the release package)
               xercesImpl.jar
               xml-apis.jar

     1. Uncompress software package
             Use WinRar software under Windows system 
             Use tar -xvf *.tar command under Linux system

     2. Copy file

     Copy file into the corresponding directory,Pls refers to the file in the       
     software package listed in the step 2.

     The following items need to be noted:

     1)Windows98£º
     Uncompress WinSystemPortLib.rar file and copy *.dll file into the directory 
     "windows\system" 
      Uncompress WindowsIOLib.rar file and copy *.dll file into the directory 
      where services of JavaPOS are installed
     In parallel interface mode, port95.exe file should be run and installed. 
     In USB interface mode,driver for USB interface should be installed.

     2)Windows2000/xp/2003Server£º
     Uncompress WinSystemPortLib.rar file and copy *.dll file into the directory 
     "windows\system32".
     Uncompress WindowsIOLib.rar file and copy *.dll file into the directory 
      where services of JavaPOS are installed
     In parallel interface mode, port95.exe file should be run and installed.
     In USB interface mode,driver for USB interface should be installed. 
   
     3)Linux£º
     Compress LinuxPortLib.tar file and copy *.so file into the directory "/usr/lib"
     In Profile, define LD_LIBRARY_PATH = /USR/LIB. define the directory used for Java 
     virtual machine to load share library.   
     or copy *.so files into the directory "/jre/lib/ext"   
     In USB interface mode, libusb interface libraries is used and pls confirm the
     libusb.a is in the operation system.
          
     Copy other files into the directory "jre/lib/ext".
 

4 Configuration
     
     javapos need user define the name of logical device and the parameter of correlative 
     device.
     
     SNBC JavaPOS uses the JCL - Java Configuration and Loader system for configuring logical 
     device.  The file samplejpos.xml contained in this package has been initialized with 
     device entries for SNBC's printer and cashdrawer products.User can copy this file's content 
     into configuration file existed directly. Or user also use it as an default configuration file.   
     
    Remarks for configuration tools:
    
    1)In order to make user configure device easily,a configuration tool is provides for 
      user to configue device by calling ByConfigure.bat file. and copy the content produced in
      the file into configuration file existed(jpos.xml) or use the file as your configuration
      file.
   
    2)Pls take note every logical device begin with line <JposEntry logicalName="byprn"> and 
      end with line </JposEntry> in the configuration file created. So users need to copy the 
      content between this two lines(Include these two lines),and logicalName should to be 
      modified to usr's defined logicalName.  
      
    3)If configure file doesn't be created before installing SNBC JavaPOS software package. 
      under "j2sdk1.4.2" platform,users only need to copy "jpos.xml" file into the directory
      "j2sdk1.4.2_01\jre\lib\ext". Then "jpos191.jar" will orient in the file automatically.      
      If it can't orient the file, firstly Pls uncompress jpos191.jar file. secondly edit 
      "jpos.properties" file in the directory "jpos\res". Thirdly pls find and define the 
       attributes of "jpos.config.populatorFile"        
       according to the below format:
       jpos.config.populatorFile=D\:\\Program Files\\JavaPOS\\SetupPOS\\Jpos.xml
             
    4)Pls note the "jpos.config.populatorFile" value need to be modified to your own directory 
       plus file name.
      Then please repackage  using command below:
              jar -cvf jpos191.jar jpos


5 Operating system / port notes:

      There is different parameter configuration of port under different operation system£º

      Under Windows operation system, configuration information as follows:

      Seial£º
      <prop name="portName" type="String" value="COM1"/>
      <prop name="portSettings" type="String" value="19200,1,0"/>
      The meaning of value in the portSettings:
            19200 ---Baud rate
            1     ---Stop bits
            0     ---Hardware flow control
            Users only need to modify baud rate

      Parallel£º
      <prop name="portName" type="String" value="LPT1"/>
      <prop name="portSettings" type="String" value="888"/>
      The meaning of value in the portSettings:
      The base address of parallel interface in the system. the value is generally 888(0x378). 
      And it should be modified according to condition of system

      USB:
      <prop name="portName" type="String" value="USB1"/>
      <prop name="portSettings" type="String" value="224"/>
      The meaning of value in the portSettings:
      The interal ID number of USB Printer. The ID number of BTP-2002NP printer increase by 
      degrees from 224.

      Ethernet
      <prop name="portName" type="String" value="SOCKET:192.168.19.206"/>
      <prop name="portSettings" type="String" value="224"/> 
      The value hasn't any actual meaning in the portSettings.
            
     Under Linux operation system, configuration information as follows:

     Serial 
     <prop name="portName" type="String" value="/dev/ttyS0"/>
     <prop name="portSettings" type="String" value="19200,1,0"/>
     The meaning of value in the portSettings:
            19200 ---Baud rate
            1     ---Stop bits
            0     ---Hardware flow control
            Users only need to modify baud rate

     Parallel 
     <prop name="portName" type="String" value="/dev/lp0"/>
     <prop name="portSettings" type="String" value="888"/>
     The meaning of value in the portSettings:
     The base address of parallel interface in the system. the value is generally 888(0x378). 
      And it should be modified according to the condition of system

     USB 
     <prop name="portName" type="String" value="USB1"/>
     <prop name="portSettings" type="String" value="BY2002NP"/>
     The meaning of value in the portSettings:
     The model of USB printer. The meaning of value is BY2002NP printer for above operation 

     Ethernet 
     <prop name="portName" type="String" value="SOCKET:192.168.19.206"/>
     <prop name="portSettings" type="String" value="224"/>
                
     The value hasn't any actual meaning in the portSettings.
         
     
6 Sample configuring file:
         For details pls refer to samplejpos.xml file
  
