package com.kpos.ws.impl;

import com.kpos.ws.app.CreateCategoryResponseType;
import com.kpos.ws.app.CreateCategoryType;
import com.kpos.ws.app.KPosPortType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jws.WebParam;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/11/12 4:55 PM
 */
public class KPosPortImpl implements KPosPortType {
    private final static Logger log = LoggerFactory.getLogger(KPosServlet.class);

    public final static String NS = "http://ws.kpos.com/app";

    @Override
    public CreateCategoryResponseType createCategory(
            @WebParam(partName = "parameters", name = "CreateCategoryType", targetNamespace = NS) CreateCategoryType parameters) {
        return null;
    }
}
