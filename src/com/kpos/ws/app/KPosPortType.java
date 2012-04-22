package com.kpos.ws.app;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.xml.bind.annotation.XmlSeeAlso;

/**
 * This class was generated by Apache CXF 2.2.8
 * Thu Apr 19 23:37:48 EDT 2012
 * Generated source version: 2.2.8
 * 
 */
 
@WebService(targetNamespace = "http://ws.kpos.com/app", name = "KPosPortType")
@XmlSeeAlso({ObjectFactory.class})
@SOAPBinding(parameterStyle = SOAPBinding.ParameterStyle.BARE)
public interface KPosPortType {

    @WebResult(name = "DeleteCategoryOptionResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "DeleteCategoryOption", action = "http://ws.kpos.com/DeleteCategoryOption")
    public DeleteCategoryOptionResponseType deleteCategoryOption(
        @WebParam(partName = "parameters", name = "DeleteCategoryOptionType", targetNamespace = "http://ws.kpos.com/app")
        DeleteCategoryOptionType parameters
    );

    @WebResult(name = "CreateCategoryOptionResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "CreateCategoryOption", action = "http://ws.kpos.com/CreateCategoryOption")
    public CreateCategoryOptionResponseType createCategoryOption(
        @WebParam(partName = "parameters", name = "CreateCategoryOptionType", targetNamespace = "http://ws.kpos.com/app")
        CreateCategoryOptionType parameters
    );

    @WebResult(name = "ListTablesResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "ListTables", action = "http://ws.kpos.com/ListTables")
    public ListTablesResponseType listTables(
        @WebParam(partName = "parameters", name = "ListTablesType", targetNamespace = "http://ws.kpos.com/app")
        ListTablesType parameters
    );

    @WebResult(name = "SaveTableResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "SaveTable", action = "http://ws.kpos.com/SaveTable")
    public SaveTableResponseType saveTable(
        @WebParam(partName = "parameters", name = "SaveTableType", targetNamespace = "http://ws.kpos.com/app")
        SaveTableType parameters
    );

    @WebResult(name = "ListPrintersResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "ListPrinters", action = "http://ws.kpos.com/ListPrinters")
    public ListPrintersResponseType listPrinters(
        @WebParam(partName = "parameters", name = "ListPrintersType", targetNamespace = "http://ws.kpos.com/app")
        ListPrintersType parameters
    );

    @WebResult(name = "UpdateCategoryOptionResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "UpdateCategoryOption", action = "http://ws.kpos.com/UpdateCategoryOption")
    public UpdateCategoryOptionResponseType updateCategoryOption(
        @WebParam(partName = "parameters", name = "UpdateCategoryOptionType", targetNamespace = "http://ws.kpos.com/app")
        UpdateCategoryOptionType parameters
    );

    @WebResult(name = "DeleteTableResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "DeleteTable", action = "http://ws.kpos.com/DeleteTable")
    public DeleteTableResponseType deleteTable(
        @WebParam(partName = "parameters", name = "DeleteTableType", targetNamespace = "http://ws.kpos.com/app")
        DeleteTableType parameters
    );

    @WebResult(name = "UpdateGlobalOptionResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "UpdateGlobalOption", action = "http://ws.kpos.com/UpdateGlobalOption")
    public UpdateGlobalOptionResponseType updateGlobalOption(
        @WebParam(partName = "parameters", name = "UpdateGlobalOptionType", targetNamespace = "http://ws.kpos.com/app")
        UpdateGlobalOptionType parameters
    );

    @WebResult(name = "DeleteGlobalOptionResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "DeleteGlobalOption", action = "http://ws.kpos.com/DeleteGlobalOption")
    public DeleteGlobalOptionResponseType deleteGlobalOption(
        @WebParam(partName = "parameters", name = "DeleteGlobalOptionType", targetNamespace = "http://ws.kpos.com/app")
        DeleteGlobalOptionType parameters
    );

    @WebResult(name = "DeleteCategoryResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "DeleteCategory", action = "http://ws.kpos.com/DeleteCategory")
    public DeleteCategoryResponseType deleteCategory(
        @WebParam(partName = "parameters", name = "DeleteCategoryType", targetNamespace = "http://ws.kpos.com/app")
        DeleteCategoryType parameters
    );

    @WebResult(name = "UpdateSaleItemOptionResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "UpdateSaleItemOption", action = "http://ws.kpos.com/UpdateSaleItemOption")
    public UpdateSaleItemOptionResponseType updateSaleItemOption(
        @WebParam(partName = "parameters", name = "UpdateSaleItemOptionType", targetNamespace = "http://ws.kpos.com/app")
        UpdateSaleItemOptionType parameters
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

    @WebResult(name = "DeleteSaleItemOptionResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "DeleteSaleItemOption", action = "http://ws.kpos.com/DeleteSaleItemOption")
    public DeleteSaleItemOptionResponseType deleteSaleItemOption(
        @WebParam(partName = "parameters", name = "DeleteSaleItemOptionType", targetNamespace = "http://ws.kpos.com/app")
        DeleteSaleItemOptionType parameters
    );

    @WebResult(name = "UpdateSaleItemResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "UpdateSaleItem", action = "http://ws.kpos.com/UpdateSaleItem")
    public UpdateSaleItemResponseType updateSaleItem(
        @WebParam(partName = "parameters", name = "UpdateSaleItemType", targetNamespace = "http://ws.kpos.com/app")
        UpdateSaleItemType parameters
    );

    @WebResult(name = "DeletePrinterResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "DeletePrinter", action = "http://ws.kpos.com/DeletePrinter")
    public DeletePrinterResponseType deletePrinter(
        @WebParam(partName = "parameters", name = "DeletePrinterType", targetNamespace = "http://ws.kpos.com/app")
        DeletePrinterType parameters
    );

    @WebResult(name = "CreateGlobalOptionResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "CreateGlobalOption", action = "http://ws.kpos.com/CreateGlobalOption")
    public CreateGlobalOptionResponseType createGlobalOption(
        @WebParam(partName = "parameters", name = "CreateGlobalOptionType", targetNamespace = "http://ws.kpos.com/app")
        CreateGlobalOptionType parameters
    );

    @WebResult(name = "ListGlobalOptionResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "ListGlobalOption", action = "http://ws.kpos.com/ListGlobalOption")
    public ListGlobalOptionResponseType listGlobalOption(
        @WebParam(partName = "parameters", name = "ListGlobalOptionType", targetNamespace = "http://ws.kpos.com/app")
        ListGlobalOptionType parameters
    );

    @WebResult(name = "CreateSaleItemOptionResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "CreateSaleItemOption", action = "http://ws.kpos.com/CreateSaleItemOption")
    public CreateSaleItemOptionResponseType createSaleItemOption(
        @WebParam(partName = "parameters", name = "CreateSaleItemOptionType", targetNamespace = "http://ws.kpos.com/app")
        CreateSaleItemOptionType parameters
    );

    @WebResult(name = "ListCategoryOptionResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "ListCategoryOption", action = "http://ws.kpos.com/ListCategoryOption")
    public ListCategoryOptionResponseType listCategoryOption(
        @WebParam(partName = "parameters", name = "ListCategoryOptionType", targetNamespace = "http://ws.kpos.com/app")
        ListCategoryOptionType parameters
    );

    @WebResult(name = "CreatePrinterResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "CreatePrinter", action = "http://ws.kpos.com/CreatePrinter")
    public CreatePrinterResponseType createPrinter(
        @WebParam(partName = "parameters", name = "CreatePrinterType", targetNamespace = "http://ws.kpos.com/app")
        CreatePrinterType parameters
    );

    @WebResult(name = "UpdatePrinterResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "UpdatePrinter", action = "http://ws.kpos.com/UpdatePrinter")
    public UpdatePrinterResponseType updatePrinter(
        @WebParam(partName = "parameters", name = "UpdatePrinterType", targetNamespace = "http://ws.kpos.com/app")
        UpdatePrinterType parameters
    );

    @WebResult(name = "FetchSaleItemResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "FetchSaleItem", action = "http://ws.kpos.com/FetchSaleItem")
    public FetchSaleItemResponseType fetchSaleItem(
        @WebParam(partName = "parameters", name = "FetchSaleItemType", targetNamespace = "http://ws.kpos.com/app")
        FetchSaleItemType parameters
    );

    @WebResult(name = "FetchTableResponseType", targetNamespace = "http://ws.kpos.com/app", partName = "parameters")
    @WebMethod(operationName = "FetchTable", action = "http://ws.kpos.com/FetchTable")
    public FetchTableResponseType fetchTable(
        @WebParam(partName = "parameters", name = "FetchTableType", targetNamespace = "http://ws.kpos.com/app")
        FetchTableType parameters
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
