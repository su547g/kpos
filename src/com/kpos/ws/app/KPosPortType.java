package com.kpos.ws.app;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.xml.bind.annotation.XmlSeeAlso;

/**
 * This class was generated by Apache CXF 2.2.8
 * Sun Mar 18 23:19:59 EDT 2012
 * Generated source version: 2.2.8
 * 
 */
 
@WebService(targetNamespace = "http://ws.kpos.com/app", name = "KPosPortType")
@XmlSeeAlso({ObjectFactory.class})
@SOAPBinding(parameterStyle = SOAPBinding.ParameterStyle.BARE)
public interface KPosPortType {

    @WebResult(name = "DeleteCategoryResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "DeleteCategory", action = "http://ws.kpos.com/DeleteCategory")
    public DeleteCategoryResponseType deleteCategory(
        @WebParam(partName = "parameters", name = "DeleteCategoryType", targetNamespace = "http://ws.kpos.com/app")
        DeleteCategoryType parameters
    );

    @WebResult(name = "DeleteSaleItemResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "DeleteSaleItem", action = "http://ws.kpos.com/DeleteSaleItem")
    public DeleteSaleItemResponseType deleteSaleItem(
        @WebParam(partName = "parameters", name = "DeleteSaleItemType", targetNamespace = "http://ws.kpos.com/app")
        DeleteSaleItemType parameters
    );

    @WebResult(name = "ListCategoryResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "ListCategory", action = "http://ws.kpos.com/ListCategory")
    public ListCategoryResponseType listCategory(
        @WebParam(partName = "parameters", name = "ListCategoryType", targetNamespace = "http://ws.kpos.com/app")
        ListCategoryType parameters
    );

    @WebResult(name = "CreateCategoryResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "CreateCategory", action = "http://ws.kpos.com/CreateCategory")
    public CreateCategoryResponseType createCategory(
        @WebParam(partName = "parameters", name = "CreateCategoryType", targetNamespace = "http://ws.kpos.com/app")
        CreateCategoryType parameters
    );

    @WebResult(name = "UpdateSaleItemResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "UpdateSaleItem", action = "http://ws.kpos.com/UpdateSaleItem")
    public UpdateSaleItemResponseType updateSaleItem(
        @WebParam(partName = "parameters", name = "UpdateSaleItemType", targetNamespace = "http://ws.kpos.com/app")
        UpdateSaleItemType parameters
    );

    @WebResult(name = "FetchSaleItemResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "FetchSaleItem", action = "http://ws.kpos.com/FetchSaleItem")
    public FetchSaleItemResponseType fetchSaleItem(
        @WebParam(partName = "parameters", name = "FetchSaleItemType", targetNamespace = "http://ws.kpos.com/app")
        FetchSaleItemType parameters
    );

    @WebResult(name = "ListSaleItemsForCategoryResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "ListSaleItemsForCategory", action = "http://ws.kpos.com/ListSaleItemsForCategory")
    public ListSaleItemsForCategoryResponseType listSaleItemsForCategory(
        @WebParam(partName = "parameters", name = "ListSaleItemsForCategoryType", targetNamespace = "http://ws.kpos.com/app")
        ListSaleItemsForCategoryType parameters
    );

    @WebResult(name = "UpdateCategoryResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "UpdateCategory", action = "http://ws.kpos.com/UpdateCategory")
    public UpdateCategoryResponseType updateCategory(
        @WebParam(partName = "parameters", name = "UpdateCategoryType", targetNamespace = "http://ws.kpos.com/app")
        UpdateCategoryType parameters
    );

    @WebResult(name = "CreateSaleItemResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "CreateSaleItem", action = "http://ws.kpos.com/CreateSaleItem")
    public CreateSaleItemResponseType createSaleItem(
        @WebParam(partName = "parameters", name = "CreateSaleItemType", targetNamespace = "http://ws.kpos.com/app")
        CreateSaleItemType parameters
    );
}
