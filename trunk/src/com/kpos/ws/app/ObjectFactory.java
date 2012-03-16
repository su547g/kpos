
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

    private final static QName _CreateCategoryResponseType_QNAME = new QName("http://ws.kpos.com/app", "CreateCategoryResponseType");
    private final static QName _CreateCategoryType_QNAME = new QName("http://ws.kpos.com/app", "CreateCategoryType");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.kpos.ws.app
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link CreateCategoryType }
     * 
     */
    public CreateCategoryType createCreateCategoryType() {
        return new CreateCategoryType();
    }

    /**
     * Create an instance of {@link ResultType }
     * 
     */
    public ResultType createResultType() {
        return new ResultType();
    }

    /**
     * Create an instance of {@link CreateCategoryResponseType }
     * 
     */
    public CreateCategoryResponseType createCreateCategoryResponseType() {
        return new CreateCategoryResponseType();
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
     * Create an instance of {@link JAXBElement }{@code <}{@link CreateCategoryType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.kpos.com/app", name = "CreateCategoryType")
    public JAXBElement<CreateCategoryType> createCreateCategoryType(CreateCategoryType value) {
        return new JAXBElement<CreateCategoryType>(_CreateCategoryType_QNAME, CreateCategoryType.class, null, value);
    }

}
