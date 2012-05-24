function highlightRow(row, highLight) {
    row.style.cursor = 'pointer';
    var cell = row.cells[0];
    var bgColor = "background-color:" + cell.style.background;

    if(highLight) {
        cell.style.borderWidth = "1px";
        cell.style.borderColor = "blue";
    } else {
        cell.style.borderWidth = "1px";
        cell.style.borderColor = "#B3B1B1";
    }
}
        
function obj2str(o){
	var r = [];
	if(typeof o == "string" || o == null || o == '' || o == '?') {
		return "'" + o + "'";
	}
	if(typeof o == "object"){
	 	if(!o.sort){
	   		r[0] = "{";
	   		for(var i in o){
	     		r[r.length] = i;
	     		r[r.length] = ":";
	     		r[r.length] = obj2str(o[i]);
	     		r[r.length] = ",";
	   		}
	   		if(r.length > 1) {
	   			r[r.length-1] = "}";
	   		} else {
	   			r[0] = "'";
	   			r[1] = "'";
	   		}
	 	} else {
	   		r[0] = "[";
	   		for(var i = 0; i < o.length; i++) {
	     		r[r.length] = obj2str(o[i]);
	     		r[r.length] = ",";
	   		}
	   		r[r.length-1] = "]";
	 	}
		return r.join("");
	}
	return o.toString();
}
function strToObj(json){
	if(json != undefined && json != null && json != "") {
		return eval("("+json+")");
	}
}
function handleLoginFailed() {
	var errorDiv = document.getElementById("errorDiv");
	errorDiv.innerText = "Couldn't authenticate user. Please go to Settings to set login information.";
	errorDiv.style.display = "block";
}

var soapXMLBegin = '<?xml version="1.0" encoding="UTF-8"?>' +
					  '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:app="http://ws.kpos.com/app">' +
					  '<soapenv:Header/><soapenv:Body>';
var soapXMLEnd = '</soapenv:Body></soapenv:Envelope>';

function callWebService(soapXML, responseHandler) {
	var parser;
	
	var symbol = "MSFT"; 
	var xmlhttp = null;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		// Internet Explorer
		try
		{
		  xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
		  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	xmlhttp.open("POST", "http://localhost:22080/kpos/ws/kposService", false);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			var responseText = xmlhttp.responseText;
			
			var start = responseText.indexOf("<soap:Body>");
			var end = responseText.indexOf("</soap:Body>");
			responseText = responseText.substring(start+11, end);

			var myJsonObject = xml2json.parser(responseText);
			responseHandler(myJsonObject);
		}
	}
	xmlhttp.send(soapXML);
}
function call_web_service(soapType, handler) {
    var soapXML = soapType.getXML();
    //alert(soapXML);
    callWebService(soapXML, handler);
}

function Printer(id, name, ip) {
    this.myId = id;
    this.myName = name;
    this.myIP = ip;
    this.tag = "<app:printer>";
    this.endTag = "</app:printer>";
    this.getXML = function() {
        var xml = this.tag;
        if(this.myId != null && this.myId != "") {
            xml += "<app:id>" + this.myId + "</app:id>";
        }
        xml += "<app:name>" + this.myName + "</app:name>";
        xml += "<app:ipAddr>" + this.myIP + "</app:ipAddr>";
        xml += this.endTag;
        return xml;
    };
}

function AddPrinterType(id, name, ip) {
    this.myPrinter = new Printer(id, name, ip);
    this.tag = "<app:CreatePrinterType>";
    this.endTag = "</app:CreatePrinterType>";
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += this.tag + this.myPrinter.getXML() + this.endTag;
        xml += soapXMLEnd;
        return xml;
    };
}

function ws_add_printer(addPrinterType, handler) {
    var soapXML = addPrinterType.getXML();
    alert(soapXML);
    callWebService(soapXML, handler);
}

function ListPrintersType() {
    this.tag = "<app:ListPrintersType/>";
    this.getXML = function() {
        var xml = soapXMLBegin + this.tag + soapXMLEnd;
        return xml;
    };
}

function ws_list_printers(handler) {
    var soapType = new ListPrintersType();
    var soapXML = soapType.getXML();
    callWebService(soapXML, handler);
}

function UpdatePrinterType(id, name, ip) {
	this.myPrinter = new Printer(id, name, ip);
    this.tag = "<app:UpdatePrinterType>";
    this.endTag = "</app:UpdatePrinterType>";
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += this.tag + this.myPrinter.getXML() + this.endTag;
        xml += soapXMLEnd;
        return xml;
    };
}
function ws_update_printer(updatePrinterType, handler) {
	var soapXML = updatePrinterType.getXML();
	alert(soapXML);
	callWebService(soapXML, handler);
}

function DeletePrinterType(id) {
	this.tag = "<app:DeletePrinterType>";
    this.endTag = "</app:DeletePrinterType>";
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += this.tag + "<app:id>"+id+"</app:id>" + this.endTag;
        xml += soapXMLEnd;
        return xml;
    };
}
function ws_delete_printer(deletePrinterType, handler) {
	var soapXML = deletePrinterType.getXML();
	alert(soapXML);
	callWebService(soapXML, handler);
}

function Category(id, name, notes, thumb, printerIds) {
	this.myId = id;
	this.myName = name;
	this.myNotes = notes;
	this.myThumb = thumb;
	this.myPrinterIds = printerIds;
	this.tag = "<app:category>";
	this.endTag = "</app:category>";
	this.getXML = function() {
		var xml = this.tag;
		if(this.myId != null && this.myId != "") {
            xml += "<app:id>" + this.myId + "</app:id>";
        }
        xml += "<app:name>" + this.myName + "</app:name>";
        if(this.myNotes != null && this.myNotes != "") {
        	xml += "<app:notes>" + this.myNotes + "</app:notes>";
        }
        if(this.myThumb != null && this.myThumb != "") {
        	xml += "<app:thumbPath>" + this.myThumb + "</app:thumbPath>";
        }
        if(this.myPrinterIds != null) {
        	for(var i = 0; i < this.myPrinterIds.length; i++){
        		xml += "<app:printerIds>" + this.myPrinterIds[i] + "</app:printerIds>";
        	}
        }
		xml += this.endTag;
		return xml;
	};
}
function CreateCategoryType(name, notes, thumb, printerIds) {
	this.myCategory = new Category(null, name, notes, thumb, printerIds);
	this.tag = "<app:CreateCategoryType>";
    this.endTag = "</app:CreateCategoryType>";
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += this.tag + this.myCategory.getXML() + this.endTag;
        xml += soapXMLEnd;
        return xml;
    };
}
function ws_create_category(createCategoryType, handler) {
	var soapXML = createCategoryType.getXML();
	//alert(soapXML);
	callWebService(soapXML, handler);
}

function UpdateCategoryType(id, name, notes, thumb, printerIds) {
    this.myCategory = new Category(id, name, notes, thumb, printerIds);
    this.tag = "<app:UpdateCategoryType>";
    this.endTag = "</app:UpdateCategoryType>";
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += this.tag + this.myCategory.getXML() + this.endTag;
        xml += soapXMLEnd;
        return xml;
    };
}
function ws_update_category(updateCategoryType, handler) {
    var soapXML = updateCategoryType.getXML();
    alert(soapXML);
    callWebService(soapXML, handler);
}

function ListPrintersHTMLType(id) {
	this.myId = id;
	this.tag = "<app:ListPrintersHTMLType>";
	this.endTag = "</app:ListPrintersHTMLType>";
	this.getXML = function() {
		var xml = soapXMLBegin;
		xml += this.tag + "<app:prefix>" + this.myId + "</app:prefix>" + this.endTag;
		xml += soapXMLEnd;
		return xml;
	};
}
function ws_list_printer_html(listPrintersHTMLType, handler) {
	var soapXML = listPrintersHTMLType.getXML();
	//alert(soapXML);
	callWebService(soapXML, handler);
}

function ListCategoriesType() {
    this.tag = "<app:ListCategoryType/>";
    this.getXML = function() {
        var xml = soapXMLBegin + this.tag + soapXMLEnd;
        return xml;
    };
}

function ws_list_categories(handler) {
    var soapType = new ListCategoriesType();
    var soapXML = soapType.getXML();
    callWebService(soapXML, handler);
}
function DeleteCategoryType(id) {
    this.tag = "<app:DeleteCategoryType>";
    this.endTag = "</app:DeleteCategoryType>";
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += this.tag + "<app:categoryId>"+id+"</app:categoryId>" + this.endTag;
        xml += soapXMLEnd;
        return xml;
    };
}
function ws_delete_category(deleteCategoryType, handler) {
    var soapXML = deleteCategoryType.getXML();
    alert(soapXML);
    callWebService(soapXML, handler);
}

function SaleItem(id, catId, name, description, thumb, printerIds, isSingleOption, price, outPrice, isTaxable, priceSmall, priceMedium, priceLarge, outSmall, outMedium, outLarge, seasonPrice) {
    this.myId = id;
    this.myCatId = catId;
    this.myName = name;
    this.myDescription = description;
    this.myThumb = thumb;
    this.myPrinterIds = printerIds;
    this.myIsSingleOption = isSingleOption;
    this.myPrice = price;
    this.myOutPrice = outPrice;
    this.myTaxable = isTaxable;
    this.myPriceSmall = priceSmall;
    this.myPriceMedium = priceMedium;
    this.myPriceLarge = priceLarge;
    this.myOutSmall = outSmall;
    this.myOutMedium = outMedium;
    this.myOutLarge = outLarge;
    this.mySeasonPrice = seasonPrice;
    //this.myHappyPrice = happyPrice;
    this.tag = "<app:saleItem>";
    this.endTag = "</app:saleItem>";
    this.getXML = function() {
        var xml = this.tag;
        if(this.myId != null && this.myId != "") {
            xml += "<app:id>" + this.myId + "</app:id>";
        }
        if(this.myCatId != null && this.myCatId != "") {
            xml += "<app:catId>" + this.myCatId + "</app:catId>";
        }
        xml += "<app:name>" + this.myName + "</app:name>";
        if(this.myDescription != null && this.myDescription != "") {
            xml += "<app:description>" + this.myDescription + "</app:description>";
        }
        xml += "<app:normalPrice>" + this.myPrice + "</app:normalPrice>";
        if(this.myPriceSmall != null) {
            xml += "<app:priceSmall>" + this.myPriceSmall + "</app:priceSmall>";
        }
        if(this.myPriceMedium != null) {
            xml += "<app:priceMed>" + this.myPriceMedium + "</app:priceMed>";
        }
        if(this.myPriceLarge != null) {
            xml += "<app:priceLarge>" + this.myPriceLarge + "</app:priceLarge>";
        }
        if(this.myOutPrice != null) {
            xml += "<app:takeoutPrice>" + this.myOutPrice + "</app:takeoutPrice>";
        }
        if(this.myOutSmall != null) {
            xml += "<app:outPriceSmall>" + this.myOutSmall + "</app:outPriceSmall>";
        }
        if(this.myOutMedium != null) {
            xml += "<app:outPriceSmall>" + this.myOutMedium + "</app:outPriceSmall>";
        }
        if(this.myOutSmall != null) {
            xml += "<app:outPriceMedium>" + this.myOutSmall + "</app:outPriceMedium>";
        }
        if(this.myOutLarge != null) {
            xml += "<app:outPriceLarge>" + this.myOutLarge + "</app:outPriceLarge>";
        }
        if(this.mySeasonPrice != null && this.mySeasonPrice != "") {
            xml += "<app:seasonPrice>" + this.mySeasonPrice + "</app:seasonPrice>";
        }
        xml += "<app:isTaxable>" + (this.myTaxable==null||this.myTaxable==false?'false':'true') + "</app:isTaxable>";
        xml += "<app:isSingleOption>" + (this.myIsSingleOption==null||this.myIsSingleOption==false?'false':'true') + "</app:isSingleOption>";
        
        if(this.myThumb != null && this.myThumb != "") {
            xml += "<app:thumbPath>" + this.myThumb + "</app:thumbPath>";
        }
        if(this.myPrinterIds != null) {
            for(var i = 0; i < this.myPrinterIds.length; i++){
                xml += "<app:printerIds>" + this.myPrinterIds[i] + "</app:printerIds>";
            }
        }
        xml += this.endTag;
        return xml;
    };
}
function CreateItemType(catId, name, description, thumb, printerIds, isSingleOption, price, outPrice, isTaxable, priceSmall, priceMedium, priceLarge, outSmall, outMedium, outLarge, seasonPrice) {
    this.myItem = new SaleItem(null, catId, name, description, thumb, printerIds, isSingleOption,price, outPrice, isTaxable, priceSmall, priceMedium, priceLarge, outSmall, outMedium, outLarge, seasonPrice);
    this.tag = "<app:CreateSaleItemType>";
    this.endTag = "</app:CreateSaleItemType>";
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += this.tag + this.myItem.getXML() + this.endTag;
        xml += soapXMLEnd;
        return xml;
    };
}
function ws_create_item(createItemType, handler) {
    var soapXML = createItemType.getXML();
    alert(soapXML);
    callWebService(soapXML, handler);
}
function UpdateItemType(id, catId, name, description, thumb, printerIds, isSingleOption, price, outPrice, isTaxable, priceSmall, priceMedium, priceLarge, outSmall, outMedium, outLarge, seasonPrice) {
    this.myItem = new SaleItem(id, catId, name, description, thumb, printerIds, isSingleOption,price, outPrice, isTaxable, priceSmall, priceMedium, priceLarge, outSmall, outMedium, outLarge, seasonPrice);
    this.tag = "<app:UpdateSaleItemType>";
    this.endTag = "</app:UpdateSaleItemType>";
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += this.tag + this.myItem.getXML() + this.endTag;
        xml += soapXMLEnd;
        return xml;
    };
}
function ListSaleItemsForCategoryType(catId) {
    this.myCatId = catId;
    this.tag = "<app:ListSaleItemsForCategoryType>";
    this.endTag = "</app:ListSaleItemsForCategoryType>";
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += this.tag + "<app:categoryId>" + this.myCatId + "</app:categoryId>" + this.endTag;
        xml += soapXMLEnd;
        return xml;
    };
}
function FetchSaleItemType(itemId, fetchOptions) {
    this.myId = itemId;
    this.myFetchOptions = fetchOptions;
    this.tag = "<app:FetchSaleItemType>";
    this.endTag = "</app:FetchSaleItemType>";
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += this.tag + "<app:itemId>"+this.myId+"</app:itemId><app:fetchOptions>" + this.myFetchOptions + "</app:fetchOptions>" + this.endTag;
        xml += soapXMLEnd;
        return xml;
    }
}
function DeleteSaleItemType(itemId) {
    this.myId = itemId;
    this.tag = "<app:DeleteSaleItemType>";
    this.endTag = "</app:DeleteSaleItemType>";
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += this.tag + "<app:itemId>"+this.myId+"</app:itemId>" + this.endTag;
        xml += soapXMLEnd;
        return xml;
    }
}
function CategoryOptionType(id, catId, name, description, price, thumb, taxable) {
    this.myId = id;
    this.myCatId = catId;
    this.myName = name;
    this.myDescription = description;
    this.myPrice = price;
    this.myThumb = thumb;
    this.myTaxable = taxable;
    this.getXML = function() {
        var xml = "<app:categoryOption>" + "<app:categoryId>" + this.myCatId + "</app:categoryId>";
        xml += "<app:name>" + this.myName + "</app:name>";
        if(this.myId != null) {
            xml += "<app:id>" + this.myId + "</app:id>";
        }
        if(this.myDescription != null) {
            xml += "<app:description>" + this.myDescription + "</app:description>";
        }
        if(this.myPrice != null) {
            xml += "<app:price>" + this.myPrice + "</app:price>";
        }
        if(this.myThumb != null) {
            xml += "<app:thumb>" + this.myThumb +"</app:thumb>";
        }
        if(this.myTaxable != null) {
            xml += "<app:taxable>" + this.myTaxable + "</app:taxable>";
        }
        xml += "</app:categoryOption>";
        return xml;
    }
}
function CreateCategoryOptionType(catId, name, description, price, thumb, taxable) {
    this.catOptionType = new CategoryOptionType(null, catId, name, description, price, thumb, taxable);
    this.tag = "<app:CreateCategoryOptionType>";
    this.endTag = "</app:CreateCategoryOptionType>";
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += this.tag + this.catOptionType.getXML() + this.endTag;
        xml += soapXMLEnd;
        return xml;
    }
}
function UpdateCategoryOptionType(id, catId, name, description, price, thumb, taxable) {
    this.catOptionType = new CategoryOptionType(id, catId, name, description, price, thumb, taxable);
    this.tag = "<app:UpdateCategoryOptionType>";
    this.endTag = "</app:UpdateCategoryOptionType>";
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += this.tag + this.catOptionType.getXML() + this.endTag;
        xml += soapXMLEnd;
        return xml;
    }
}
function ListCategoryOptionType(catId) {
    this.myCatId = catId;
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:ListCategoryOptionType>"+"<app:categoryId>"+this.myCatId+"</app:categoryId></app:ListCategoryOptionType>";
        xml += soapXMLEnd;
        return xml;
    }
}
function DeleteCategoryOptionType(id) {
    this.myId = id;
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml = "<app:DeleteCategoryOptionType><app:id>" + this.myId + "</app:id></app:DeleteCategoryOptionType>";
        xml += soapXMLEnd;
        return xml;
    }
}
function FetchCategoryOptionType(id) {
    this.myId = id;
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:FetchCategoryOptionType><app:id>" + this.myId + "</app:id></app:FetchCategoryOptionType>";
        xml += soapXMLEnd;
        return xml;
    }
}
function GlobalOptionType(id, name, price, outPrice) {
    this.myId = id;
    this.myName = name;
    this.myPrice = price;
    this.myOutPrice = outPrice;
    this.getXML = function() {
        var xml = "<app:globalOption>";
        if(this.myId != null && this.myId != "") {
            xml += "<app:id>" + this.myId + "</app:id>";
        }
        xml += "<app:name>" + this.myName + "</app:name>";
        if(this.myPrice != null && this.myPrice != "") {
            xml += "<app:price>" + this.myPrice + "</app:price>";
        }
        if(this.myOutPrice != null && this.myOutPrice != "") {
            xml += "<app:outPrice>" + this.myOutPrice + "</app:outPrice>";
        }
        xml += "</app:globalOption>";
        return xml;
    }
}
function ListGlobalOptionsType() {
    this.getXML = function() {
        var xml = soapXMLBegin + "<app:ListGlobalOptionType/>" + soapXMLEnd;
        return xml;
    }
}
function CreateGlobalOptionType(name, price, outPrice) {
    this.optionType = new GlobalOptionType(null, name, price, outPrice);
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:CreateGlobalOptionType>";
        xml += this.optionType.getXML();
        xml += "</app:CreateGlobalOptionType>";
        xml += soapXMLEnd;
        return xml;
    }
}
function UpdateGlobalOptionType(id, name, price, outPrice) {
    this.optionType = new GlobalOptionType(id, name, price, outPrice);
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:UpdateGlobalOptionType>";
        xml += this.optionType.getXML();
        xml += "</app:UpdateGlobalOptionType>";
        xml += soapXMLEnd;
        return xml;
    }
}
function DeleteGlobalOptionType(id) {
    this.myId = id;
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:DeleteGlobalOptionType>";
        xml += "<app:id>" + this.myId + "</app:id>";
        xml += "</app:DeleteGlobalOptionType>";
        xml += soapXMLEnd;
        return xml;
    }
}
function FetchGlobalOptionType(id) {
    this.myId = id;
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:FetchGlobalOptionType>" + "<app:id>" + this.myId + "</app:id>";
        xml += "</app:FetchGlobalOptionType>";
        xml += soapXMLEnd;
        return xml;
    }
}
function SaleItemOptionType(id, itemId, name, desc, price, outPrice, thumb, required, taxable) {
    this.myId = id;
    this.myItemId = itemId;
    this.myName = name;
    this.myDesc = desc;
    this.myPrice = price;
    this.myOutPrice = outPrice;
    this.myThumb = thumb;
    this.myRequired = required;
    this.myTaxable = taxable;
    this.getXML = function() {
        var xml = "<app:saleItemId>"+this.myItemId+"</app:saleItemId>";
        if(this.myId != null && this.myId != "") {
            xml += "<app:id>" + this.myId + "</app:id>";
        }
        xml += "<app:name>"+this.myName+"</app:name>";
        if(this.myDesc != null && this.myDesc != "") {
            xml += "<app:description>" + this.myDesc + "</app:description>";
        }
        if(this.myPrice != null && this.myPrice != "") {
            xml += "<app:price>" + this.myPrice + "</app:price>";
        }
        if(this.myOutPrice != null && this.myOutPrice != "") {
            xml += "<app:takeoutPrice>"+this.myOutPrice+"</app:takeoutPrice>";
        }
        if(this.myThumb != null && this.myThumb != "") {
            xml += "<app:thumbPath>"+this.myThumb+"</app:thumbPath>";
        }
        if(this.myRequired != null) {
            xml += "<app:isRequired>" + this.myRequired + "</app:isRequired>";
        }
        if(this.myTaxable != null) {
            xml += "<app:taxable>" + this.myTaxable + "</app:taxable>";
        }
        return xml;
    }
}
function CreateItemOptionType(itemId, name, desc, price, outPrice, thumb, required, taxable) {
    this.myOption = new SaleItemOptionType(null, itemId, name, desc, price, outPrice, thumb, required, taxable);
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:CreateSaleItemOptionType>";
        xml += "<app:itemOption>" + this.myOption.getXML() + "</app:itemOption>";
        xml += "</app:CreateSaleItemOptionType>";
        xml += soapXMLEnd;
        return xml;
    }
}
function UpdateItemOptionType(id, itemId, name, desc, price, outPrice, thumb, required, taxable) {
    this.myOption = new SaleItemOptionType(id, itemId, name, desc, price, outPrice, thumb, required, taxable);
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:UpdateSaleItemOptionType>";
        xml += "<app:itemOption>" + this.myOption.getXML() + "</app:itemOption>";
        xml += "</app:UpdateSaleItemOptionType>";
        xml += soapXMLEnd;
        return xml;
    }
}
function FetchItemOptionType(id) {
    this.myId = id;
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:FetchSaleItemOptionType>";
        xml += "<app:id>"+this.myId + "</app:id>";
        xml += "</app:FetchSaleItemOptionType>";
        xml += soapXMLEnd;
        return xml;
    }
}
function DeleteItemOptionType(id) {
    this.myId = id;
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:DeleteSaleItemOptionType>";
        xml += "<app:id>"+this.myId + "</app:id>";
        xml += "</app:DeleteSaleItemOptionType>";
        xml += soapXMLEnd;
        return xml;
    }
}
function ListSaleItemOptionsType(itemId) {
    this.myItemId = itemId;
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:ListSaleItemOptionsType>";
        xml += "<app:itemId>"+this.myItemId+"</app:itemId>";
        xml += "</app:ListSaleItemOptionsType>";
        xml += soapXMLEnd;
        return xml;
    }
}
function ListCategoryHTMLType(begin, maxSize, onclick) {
    this.myBegin = begin;
    this.myMax = maxSize;
    this.myOnclick = onclick;
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:ListCategoryHTMLType>";
        xml += "<app:rowSize>2</app:rowSize>";
        xml += "<app:begin>" + this.myBegin + "</app:begin>";
        xml += "<app:maxSize>" + this.myMax + "</app:maxSize>";
        xml += "<app:onclick>" + this.myOnclick + "</app:onclick>";
        xml += "</app:ListCategoryHTMLType>";
        xml += soapXMLEnd;
        return xml;
    } 
}
function ListGlobalOptionHTMLType(rowSize, begin, maxSize, onclick) {
    this.myRowSize = rowSize;
    this.myBegin = begin;
    this.myMax = maxSize;
    this.myOnclick = onclick;
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:ListGlobalOptionHTMLType>";
        xml += "<app:rowSize>"+ this.myRowSize + "</app:rowSize>";
        xml += "<app:begin>" + this.myBegin + "</app:begin>";
        xml += "<app:maxSize>" + this.myMax + "</app:maxSize>";
        xml += "<app:onclick>" + this.myOnclick + "</app:onclick>";
        xml += "</app:ListGlobalOptionHTMLType>";
        xml += soapXMLEnd;
        return xml;
    }
}
function ListCategoryOptionHTMLType(catId, rowSize, begin, maxSize, onclick) {
    this.myCatId = catId;
    this.myRowSize = rowSize;
    this.myBegin = begin;
    this.myMax = maxSize;
    this.myOnclick = onclick;
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:ListCategoryOptionHTMLType>";
        xml += "<app:categoryId>" + this.myCatId + "</app:categoryId>";
        xml += "<app:rowSize>"+ this.myRowSize + "</app:rowSize>";
        xml += "<app:begin>" + this.myBegin + "</app:begin>";
        xml += "<app:maxSize>" + this.myMax + "</app:maxSize>";
        xml += "<app:onclick>" + this.myOnclick + "</app:onclick>";
        xml += "</app:ListCategoryOptionHTMLType>";
        xml += soapXMLEnd;
        return xml;
    }
}
function ListSaleItemsForCategoryHTMLType(catId, rowSize, begin, maxSize, onclick) {
    this.myCatId = catId;
    this.myRowSize = rowSize;
    this.myBegin = begin;
    this.myMax = maxSize;
    this.myOnclick = onclick;
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:ListSaleItemsForCategoryHTMLType>";
        xml += "<app:categoryId>" + this.myCatId + "</app:categoryId>";
        xml += "<app:rowSize>"+ this.myRowSize + "</app:rowSize>";
        xml += "<app:begin>" + this.myBegin + "</app:begin>";
        xml += "<app:maxSize>" + this.myMax + "</app:maxSize>";
        xml += "<app:onclick>" + this.myOnclick + "</app:onclick>";
        xml += "</app:ListSaleItemsForCategoryHTMLType>";
        xml += soapXMLEnd;
        return xml;
    }
}

function OrderItem(aDisplayText, aPrice, aQuantity, aSaleItemId) {
    this.id = null;
    this.orderId = null;
    this.saleItemId = aSaleItemId;
    this.displayText = aDisplayText;
    this.price = parseFloat(aPrice);
    this.quantity = parseInt(aQuantity);
    this.childItems = new Array();
    this.getXML = function() {
        var xml = "<app:orderItems>";
        if(this.id != null && this.id != "") {
            xml += "<app:id>"+ this.id + "</app:id>";
        }
        if(this.orderId != null && this.orderId != "") {
            xml += "<app:orderId>"+ this.orderId + "</app:orderId>";
        }
        xml += "<app:saleItemId>"+this.saleItemId+"</app:saleItemId>";
        if(this.price != null && this.price != "") {
            xml += "<app:price>" + this.price + "</app:price>";
        }
        xml += "<app:quantity>"+this.quantity+"</app:quantity>";
        xml += "<app:displayText>"+this.displayText+"</app:displayText>";
        for(var i = 0; i < this.childItems.length; i++) {
            xml += this.childItems[i].getXML();
        } 
        xml += "</app:orderItems>";
        return xml;
    }
}
function OrderOption(aDisplayText, aPrice, aQuantity, aId, aType) {
    this.id = null;
    this.optionId = aId;
    this.type = aType;
    this.displayText = aDisplayText;
    this.price = parseFloat(aPrice);
    this.quantity = parseInt(aQuantity);
    this.getXML = function() {
        xml = "<app:options>";
        if(this.id != null && this.id != "") {
            xml += "<app:id>"+ this.id + "</app:id>";
        }
        xml += "<app:displayText>"+this.displayText+"</app:displayText>";
        xml += "<app:optionId>"+this.optionId+"</app:optionId>";
        xml += "<app:optionType>"+this.type+"</app:optionType>";
        if(this.price != null && this.price != "") {
            xml += "<app:price>" + this.price + "</app:price>";
        }
        xml += "<app:quantity>"+this.quantity+"</app:quantity>";
        xml += "</app:options>";
        return xml;
    }
}
function Order(aId, aType, aPrice, aStatus, aNumGuests, aCustomer) {
    this.id = aId;
    this.type = aType;
    this.tableId = null;
    this.tableName = null;
    this.totalPrice = aPrice;
    this.status = aStatus;
    this.numOfGuests = aNumGuests;
    this.customer = aCustomer;
    this.orderItems = new Array();
    this.getXML = function() {
        var xml = "<app:order>";
        if(this.id != null && this.id != "") {
            xml += "<app:id>" + this.id + "</app:id>";
        }
        xml += "<app:type>" + this.type + "</app:type>";
        if(this.tableId != null && this.tableId != "") {
            xml += "<app:tableId>" + this.tableId + "</app:tableId>";
        }
        if(this.tableName != null && this.tableName != "") {
            xml += "<app:tableName>" + this.tableName + "</app:tableName>";
        }
        xml += "<app:totalPrice>" + this.totalPrice + "</app:totalPrice>";
        xml += "<app:status>" + this.status + "</app:status>";
        xml += "<app:numOfGuests>" + this.numOfGuests + "</app:numOfGuests>";
        for(var i = 0; i < this.orderItems.length; i++) {
            xml += this.orderItems[i].getXML();
        }
        if(this.customer != null) {
            xml += this.customer.getXML();
        }
        xml += "</app:order>";
        return xml;
    }
}
function SaveOrderType(aId, aType, aPrice, aStatus, aNumGuests, aCustomer) {
    this.order = new Order(aId, aType, aPrice, aStatus, aNumGuests);
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:SaveOrderType>";
        xml += this.order.getXML();
        xml += "</app:SaveOrderType>";
        xml += soapXMLEnd;
        return xml;
    }
}
function DeleteOrderType(aId) {
    this.id = aId;
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:DeleteOrderType>";
        xml += "<app:orderId>" + this.id + "</app:orderId>";
        xml += "</app:DeleteOrderType>";
        xml += soapXMLEnd;
        return xml;
    }
}
function Table(aId, aName, aX, aY, aAreaId) {
    this.id = aId;
    this.name = aName;
    this.x = aX;
    this.y = aY;
    this.areaId = aAreaId;
    this.getXML = function() {
        var xml = "<app:table>";
        xml += "<app:name>"+this.name+"</app:name>";
        xml += "<app:x>" + this.x + "</app:x>";
        xml += "<app:y>" + this.y + "</app:y>";
        if(this.areaId != null && parseInt(this.areaId) > 0) {
            xml += "<app:areaId>" + this.areaId + "</app:areaId>";
        }
        xml += "</app:table>";
        return xml;
    }
}
function SaveTableType(aTable) {
    this.table = aTable;
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:SaveTableType>";
        xml += this.table.getXML();
        xml += "</app:SaveTableType>";
        xml += soapXMLEnd;
        return xml;
    }
}
function DeleteTableType(aId) {
    this.id = aId;
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:DeleteTableType><app:id>"+this.id+"</app:id></app:DeleteTableType>";
        xml += soapXMLEnd;
        return xml;
    }
}
function ListAreasType() {
    this.getXML = function() {
        var xml = soapXMLBegin + "<app:ListAreasType/>" + soapXMLEnd;
        return xml;
    }
}
function SaveAreaType(aName, aId) {
    this.name = aName;
    this.id = aId
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:SaveSeatingAreaType>";
        xml += "<app:areaType><app:name>" + this.name + "</app:name>";
        if(this.id != null && this.id != "") {
            xml += "<app:id>" + tis.id + "</app:id>";
        }
        xml += "</app:areaType></app:SaveSeatingAreaType>";
        xml += soapXMLEnd;
        return xml;
    }
}
function DeleteAreaType(aId) {
    this.id = aId;
    this.getXML = function() {
        var xml = soapXMLBegin;
        xml += "<app:DeleteSeatingAreaType>"
        xml += "<app:id>" + aId + "</app:id>";
        xml += "</app:DeleteSeatingAreaType>";
        xml += soapXMLEnd;
        return xml;
    }
}
