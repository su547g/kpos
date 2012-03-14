package com.kpos.ws.impl;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

import com.kpos.ws.app.KPosPortType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/11/12 4:54 PM
 */
public class KPosServiceProxy implements InvocationHandler {

    private final static Logger log = LoggerFactory.getLogger(KPosServiceProxy.class);

    private KPosPortType port;

    public KPosServiceProxy (KPosPortType aPort) {
        this.port = aPort;
    }

    public static Object getProxy (KPosPortType aPort) {
        log.info("Loading BizCardServiceProxy");
        return Proxy.newProxyInstance(
                aPort.getClass().getClassLoader(),
                new Class[]{KPosPortType.class},
                new KPosServiceProxy(aPort));
    }

    @Override
    public Object invoke (Object proxy, Method method, Object[] args) throws Throwable {
        //--- NOTE: the code for setting current thread identity has moved to DartAuthenticationInputInterceptor
        return method.invoke(port, args);
    }
}
