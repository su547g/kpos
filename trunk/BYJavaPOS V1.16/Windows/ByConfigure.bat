@echo off

set oldcp=%classpath%
set classpath=ByJpos192.jar
set classpath=%classpath%;jpos19.jar
set classpath=%classpath%;xerces.jar
set classpath=%classpath%;%cd%\
set classpath=%classpath%;log4j-1.2.14.jar

REM %lp% is the library path used when loading
REM java native methods

REM set lp=c:\windows\system32


REM set classpath=%classpath%;c:\path_to_service.jar
REM set classpath=%classpath%;sampleld.jar
REM set lp=%lp%;c:\path_to_native_methods
REM -Djava.library.path=%lp%

REM java -cp %classpath%  com.beiyang.jposcommon.utility.configuration.ConfigureMainFrame

java com.beiyang.jposcommon.utility.configuration.ConfigureMainFrame
set classpath=%oldcp%
