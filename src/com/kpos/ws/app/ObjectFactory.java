
package com.kpos.ws.app;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.kpos.ws.app package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _CreateSaleItemType_QNAME = new QName("http://ws.kpos.com/app", "CreateSaleItemType");
    private final static QName _DeleteCategoryResponseType_QNAME = new QName("http://ws.kpos.com/app", "DeleteCategoryResponseType");
    private final static QName _CreateSaleItemResponseType_QNAME = new QName("http://ws.kpos.com/app", "CreateSaleItemResponseType");
    private final static QName _ListCategoryType_QNAME = new QName("http://ws.kpos.com/app", "ListCategoryType");
    private final static QName _CreateCategoryResponseType_QNAME = new QName("http://ws.kpos.com/app", "CreateCategoryResponseType");
    private final static QName _DeleteCategoryType_QNAME = new QName("http://ws.kpos.com/app", "DeleteCategoryType");
    private final static QName _ListCategoryResponseType_QNAME = new QName("http://ws.kpos.com/app", "ListCategoryResponseType");
    private final static QName _ListSaleItemsForCategoryType_QNAME = new QName("http://ws.kpos.com/app", "ListSaleItemsForCategoryType");
    private final static QName _UpdateCategoryResponseType_QNAME = new QName("http://ws.kpos.com/app", "UpdateCategoryResponseType");
    private final static QName _UpdateCategoryType_QNAME = new QName("http://ws.kpos.com/app", "UpdateCategoryType");
    private final static QName _ListSaleItemsForCategoryResponseType_QNAME = new QName("http://ws.kpos.com/app", "ListSaleItemsForCategoryResponseType");
    private final static QName _CreateCategoryType_QNAME = new QName("http://ws.kpos.com/app", "CreateCategoryType");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.kpos.ws.app
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link ListSaleItemsForCategoryResponseType }
     * 
     */
    public ListSaleItemsForCategoryResponseType createListSaleItemsForCategoryResponseType() {
        return new ListSaleItemsForCategoryResponseType();
    }

    /**
     * Create an instance of {@link DeleteCategoryType }
     * 
     */
    public DeleteCategoryType createDeleteCategoryType() {
        return new DeleteCategoryType();
    }

    /**
     * Create an instance of {@link CreateSaleItemType }
     * 
     */
    public CreateSaleItemType createCreateSaleItemType() {
        return new CreateSaleItemType();
    }

    /**
     * Create an instance of {@link ListCategoryResponseType }
     * 
     */
    public ListCategoryResponseType createListCategoryResponseType() {
        return new ListCategoryResponseType();
    }

    /**
     * Create an instance of {@link UpdateCategoryType }
     * 
     */
    public UpdateCategoryType createUpdateCategoryType() {
        return new UpdateCategoryType();
    }

    /**
     * Create an instance of {@link ListSaleItemsForCategoryType }
     * 
     */
    public ListSaleItemsForCategoryType createListSaleItemsForCategoryType() {
        return new ListSaleItemsForCategoryType();
    }

    /**
     * Create an instance of {@link ListCategoryType }
     * 
     */
    public ListCategoryType createListCategoryType() {
        return new ListCategoryType();
    }

    /**
     * Create an instance of {@link CreateSaleItemResponseType }
     * 
     */
    public CreateSaleItemResponseType createCreateSaleItemResponseType() {
        return new CreateSaleItemResponseType();
    }

    /**
     * Create an instance of {@link UpdateCategoryResponseType }
     * 
     */
    public UpdateCategoryResponseType createUpdateCategoryResponseType() {
        return new UpdateCategoryResponseType();
    }

    /**
     * Create an instance of {@link CreateCategoryResponseType }
     * 
     */
    public CreateCategoryResponseType createCreateCategoryResponseType() {
        return new CreateCategoryResponseType();
    }

    /**
     * Create an instance of {@link CreateCategoryType }
     * 
     */
    public CreateCategoryType createCreateCategoryType() {
        return new CreateCategoryType();
    }

    /**
     * Create an instance of {@link DeleteCategoryResponseType }
     * 
     */
    public DeleteCategoryResponseType createDeleteCategoryResponseType() {
        return new DeleteCategoryResponseType();
    }

    /**
     * Create an instance of {@link SaleItemType }
     * 
     */
    public SaleItemType createSaleItemType() {
        return new SaleItemType();
    }

    /**
     * Create an instance of {@link ResultType }
     * 
     */
    public ResultType createResultType() {
        return new ResultType();
    }

    /**
     * Create an instance of {@link CategoryType }
     * 
     */
    public CategoryType createCategoryType() {
        return new CategoryType();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CreateSaleItemType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.kpos.com/app", name = "CreateSaleItemType")
    public JAXBElement<CreateSaleItemType> createCreateSaleItemType(CreateSaleItemType value) {
        return new JAXBElement<CreateSaleItemType>(_CreateSaleItemType_QNAME, CreateSaleItemType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link DeleteCategoryResponseType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.kpos.com/app", name = "DeleteCategoryResponseType")
    public JAXBElement<DeleteCategoryResponseType> createDeleteCategoryResponseType(DeleteCategoryResponseType value) {
        return new JAXBElement<DeleteCategoryResponseType>(_DeleteCategoryResponseType_QNAME, DeleteCategoryResponseType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CreateSaleItemResponseType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.kpos.com/app", name = "CreateSaleItemResponseType")
    public JAXBElement<CreateSaleItemResponseType> createCreateSaleItemResponseType(CreateSaleItemResponseType value) {
        return new JAXBElement<CreateSaleItemResponseType>(_CreateSaleItemResponseType_QNAME, CreateSaleItemResponseType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ListCategoryType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.kpos.com/app", name = "ListCategoryType")
    public JAXBElement<ListCategoryType> createListCategoryType(ListCategoryType value) {
        return new JAXBElement<ListCategoryType>(_ListCategoryType_QNAME, ListCategoryType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CreateCategoryResponseType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.kpos.com/app", name = "CreateCategoryResponseType")
    public JAXBElement<CreateCategoryResponseType> createCreateCategoryResponseType(CreateCategoryResponseType value) {
        return new JAXBElement<CreateCategoryResponseType>(_CreateCategoryResponseType_QNAME, CreateCategoryResponseType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link DeleteCategoryType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.kpos.com/app", name = "DeleteCategoryType")
    public JAXBElement<DeleteCategoryType> createDeleteCategoryType(DeleteCategoryType value) {
        return new JAXBElement<DeleteCategoryType>(_DeleteCategoryType_QNAME, DeleteCategoryType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ListCategoryResponseType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.kpos.com/app", name = "ListCategoryResponseType")
    public JAXBElement<ListCategoryResponseType> createListCategoryResponseType(ListCategoryResponseType value) {
        return new JAXBElement<ListCategoryResponseType>(_ListCategoryResponseType_QNAME, ListCategoryResponseType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ListSaleItemsForCategoryType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.kpos.com/app", name = "ListSaleItemsForCategoryType")
    public JAXBElement<ListSaleItemsForCategoryType> createListSaleItemsForCategoryType(ListSaleItemsForCategoryType value) {
        return new JAXBElement<ListSaleItemsForCategoryType>(_ListSaleItemsForCategoryType_QNAME, ListSaleItemsForCategoryType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UpdateCategoryResponseType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.kpos.com/app", name = "UpdateCategoryResponseType")
    public JAXBElement<UpdateCategoryResponseType> createUpdateCategoryResponseType(UpdateCategoryResponseType value) {
        return new JAXBElement<UpdateCategoryResponseType>(_UpdateCategoryResponseType_QNAME, UpdateCategoryResponseType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UpdateCategoryType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.kpos.com/app", name = "UpdateCategoryType")
    public JAXBElement<UpdateCategoryType> createUpdateCategoryType(UpdateCategoryType value) {
        return new JAXBElement<UpdateCategoryType>(_UpdateCategoryType_QNAME, UpdateCategoryType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ListSaleItemsForCategoryResponseType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.kpos.com/app", name = "ListSaleItemsForCategoryResponseType")
    public JAXBElement<ListSaleItemsForCategoryResponseType> createListSaleItemsForCategoryResponseType(ListSaleItemsForCategoryResponseType value) {
        return new JAXBElement<ListSaleItemsForCategoryResponseType>(_ListSaleItemsForCategoryResponseType_QNAME, ListSaleItemsForCategoryResponseType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CreateCategoryType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.kpos.com/app", name = "CreateCategoryType")
    public JAXBElement<CreateCategoryType> createCreateCategoryType(CreateCategoryType value) {
        return new JAXBElement<CreateCategoryType>(_CreateCategoryType_QNAME, CreateCategoryType.class, null, value);
    }

}
