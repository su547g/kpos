package com.kpos.ws.interceptors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.cxf.interceptor.Fault;
import org.apache.cxf.phase.AbstractPhaseInterceptor;
import org.apache.cxf.phase.Phase;
import org.apache.cxf.message.Message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/11/12 5:02 PM
 */
public class KPosSessionInterceptor extends AbstractPhaseInterceptor {

    private final static Logger log = LoggerFactory.getLogger(KPosSessionInterceptor.class);

    public KPosSessionInterceptor() {
        super(Phase.RECEIVE);
    }

    @Override
    public void handleMessage(Message message) throws Fault {
        HttpServletRequest req = (HttpServletRequest)message.get("HTTP.REQUEST");
        HttpSession session = req.getSession();
        log.debug("Session is null ? " + (session==null));
    }

}
