#!/bin/bash
cd "/usr/java/j2sdk1.4.2_01/jre/lib/ext/"
"/usr/java/j2sdk1.4.2_01/jre/bin/java" -classpath "/usr/java/j2sdk1.4.2_01/jre/lib/ext/ByJpos192.jar":"/usr/java/j2sdk1.4.2_01/jre/lib/ext/jpos19.jar":"/usr/java/j2sdk1.4.2_01/jre/lib/ext/xercesImpl.jar":"/usr/java/j2sdk1.4.2_01/jre/lib/ext/lib/ext/xml-apis.jar" com.beiyang.jposcommon.utility.configuration.ConfigureMainFrame
