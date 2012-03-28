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
//////////////////////////////////////////////////////////////////////////////////////////

//This is the AuthenticateUserType class.
function AuthenticateUserType(email, password) {
	this.myCredential = new LoginCredential(email, password);
	this.tag = "<app:AuthenticateUserType>";
	this.endTag = "</app:AuthenticateUserType>";
	this.getXML = function() {
		var xml = soapXMLBegin;
		xml += this.tag + this.myCredential.getXML() + this.endTag;
		xml += soapXMLEnd;
		return xml;
	};
}
//This is the LoginCredential class.
function LoginCredential(email, password) {
	this.myEmail = email;
	this.myPassword = password;
	this.tag = "<app:LoginCredential>";
	this.endTag = "</app:LoginCredential>";
	this.getXML = function() {
		var xml = this.tag + "<app:UserEmail>" + this.myEmail + "</app:UserEmail>";
		xml += "<app:Password>" + this.myPassword + "</app:Password>" + this.endTag;
		return xml;
	};
}

//This is the invoking method of AuthenticateUser web service.
function authenticateUser(authenticateUserType) {
	var soapXML = authenticateUserType.getXML();
	//alert(soapXML);
	callWebService(soapXML, authenticateUserHandler);
}

//This is the ListFriendCardsFullType class.
function ListFriendCardsType(sessionKey, userId, isAscending, pageNum) {
	this.mySessionKey = sessionKey;
	this.myUserId = userId;
	this.myIsAsc = isAscending;
	this.myPage = pageNum;
	this.tag = "<app:ListFriendCardsFullType>";
	this.endTag = "</app:ListFriendCardsFullType>";
	this.getXML = function() {
		var xml = soapXMLBegin + this.tag + "<app:SessionKey>" + this.mySessionKey + "</app:SessionKey>";
		xml += "<app:UserId>" + this.myUserId + "</app:UserId>";
		xml += "<app:IsAscending>" + (isAscending==true?"true":"false") + "</app:IsAscending>";
		xml += "<app:PageNum>" + this.myPage + "</app:PageNum>";
		xml += this.endTag + soapXMLEnd;
		return xml;
	};
}
//This is the invoking method of ListFriendCards web service.
function listFriendCards(request) { //request is a ListFriendCardsType object.
	var soapXML = request.getXML();
	//alert(soapXML);
	callWebService(soapXML, listFriendCardsHandler);
}

//This is is the class for web service ListFriendCardRequestsType.
function ListFriendCardRequestsType(sessionKey, userId, pageNum) {
	this.mySessionKey = sessionKey;
	this.myUserId = userId;
	this.myPage = pageNum;
	this.tag = "<app:ListFriendCardRequestsSecureType>";
	this.endTag = "</app:ListFriendCardRequestsSecureType>";
	this.getXML = function() {
		var xml = soapXMLBegin + this.tag + "<app:SessionKey>" + this.mySessionKey + "</app:SessionKey>";
		xml += "<app:UserId>" + this.myUserId + "</app:UserId>";
		xml += "<app:PageNum"> + this.myPage + "</app:PageNum>";
		xml += this.endTag + soapXMLEnd;
		return xml;
	};
}
//This is the invoking method of ListFriendCardRequests web service.
function listFriendCardRequests(request) { //request must an object of ListFriendCardRequestsType.
	var soapXML = request.getXML();
	//alert(soapXML);
	callWebService(soapXML, listFriendCardRequestsHandler);
}

//This is the class for web request GetOwnCardType.
function GetOwnCardType(sessionKey, userId) {
	this.mySessionKey = sessionKey;
	this.myUserId = userId;
	this.tag = "<app:GetOwnCardType>";
	this.endTag = "</app:GetOwnCardType>";
	this.getXML = function() {
		var xml = soapXMLBegin + this.tag + "<app:SessionKey>" + this.mySessionKey + "</app:SessionKey>";
		xml += "<app:UserId>" + this.myUserId + "</app:UserId>";
		xml += this.endTag + soapXMLEnd;
		return xml;
	};
}
//This is the invoking method of GetOwnCard web service.
function getOwnCard(request) { //request must an object of GetOwnCardType
	var soapXML = request.getXML();
	//alert(soapXML);
	callWebService(soapXML, getOwnCardHandler);
}

function AddressType(street1, street2, street3, city, state, country, zipcode) {
	this.s1 = street1;
	this.s2 = street2;
	this.s3 = street3;
	this.myCity = city;
	this.myState = state;
	this.myCountry = country;
	this.myZipcode = zipcode;
	this.getXML = function() {
		var xml = "<app:address1>" + this.s1 + "</app:address1>";
		if(this.s2 != undefined && this.s2 != null && this.s2 != "") {
			xml += "<app:address2>" + this.s2 + "</app:address2>";
		}
		if(this.s3 != undefined && this.s3 != null && this.s3 != "") {
			xml += "<app:address3>" + this.s3 + "</app:address3>";
		}
		xml += "<app:city>" + this.myCity + "</app:city>";
		if(this.myState != undefined && this.myState != null && this.myState != "") {
			xml += "<app:state>" + this.myState + "</app:state>";
		}
		if(this.myCountry != undefined && this.myCountry != null && this.myCountry != "") {
			xml += "<app:country>" + this.myCountry + "</app:country>";
		}	
		xml += "<app:zipcode>" + this.myZipcode + "</app:zipcode>";
		return xml;
	};
}
function UserType(userId, email, password, externalId, lastLogin) {
	this.myUserId = userId;
	this.myEmail = email;
	this.myPassword = password;
	this.myExternalId = externalId;
	this.myLastLogin = lastLogin;
	//this.tag = "<app:UserType>";
	//this.endTag = "</app:UserType>";
	this.getXML = function() {
		var xml = "<app:UserId>" + this.myUserId + "</app:UserId>";
		xml += "<app:Email>" + this.myEmail + "</app:Email>";
		xml += "<app:Password>" + this.myPassword + "</app:Password>";
		if(this.myExternalId != undefined && this.myExternalId != null && this.myExternalId != "") {
			xml += "<app:ExternalId>" + this.myExternalId + "</app:ExternalId>";
		}
		xml += "<app:LastLoginTS>" + this.myLastLogin + "</app:LastLoginTS>";
		return xml;
	};
}

function BizCardType(cardId, name, owner, firstName, middleName, lastName, title, employer, workPhone,
					homePhone, cellPhone, fax, address, email, url, cardTemplateId) {
	this.myCardId = cardId;
	this.myName = name;
	this.myOwner = owner;
	this.myFirst = firstName;
	this.myMiddle = middleName;
	this.myLast = lastName;
	this.myTitle = title;
	this.myEmployer = employer;
	this.myWorkPhone = workPhone;
	this.myHomePhone = homePhone;
	this.myCellPhone = cellPhone;
	this.myFax = fax;
	this.myAddress = address;
	this.myEmail = email;
	this.myUrl = url;
	this.templateId = cardTemplateId;
	this.getXML = function() {
		var xml = "<app:CardId>" + this.myCardId + "</app:CardId>";
		xml += "<app:Name>" + this.myName + "</app:Name>";
		if(this.myOwner != undefined && this.myOwner != null) {
			xml += "<app:Owner>" + this.myOwner.getXML() + "</app:Owner>";
		}
		xml += "<app:FirstName>" + this.myFirst + "</app:FirstName>";
		if(this.myMiddle != undefined && this.myMiddle != null && this.myMiddle != "") {
			xml += "<app:MiddleName>" + this.myMiddle + "</app:MiddleName>";
		}
		xml += "<app:LastName>" + this.myLast + "</app:LastName>";
		if(this.myTitle != undefined && this.myTitle != null && this.myTitle != "") {
			xml += "<app:JobTitle>" + this.myTitle + "</app:JobTitle>";
		}
		if(this.myEmployer != undefined && this.myEmployer != null && this.myEmployer != "") {
			xml += "<app:Employer>" + this.myEmployer + "</app:Employer>";
		}
		if(this.myWorkPhone != undefined && this.myWorkPhone != null && this.myWorkPhone != "") {
			xml += "<app:BizTelephone>" + this.myWorkPhone + "</app:BizTelephone>";
		}
		if(this.myHomePhone != undefined && this.myHomePhone != null && this.myHomePhone != "") {
			xml += "<app:HomeTelephone>" + this.myHomePhone + "</app:HomeTelephone>";
		}
		if(this.myCellPhone != undefined && this.myCellPhone != null && this.myCellPhone != "") {
			xml += "<app:MobileTelephone>" + this.myCellPhone + "</app:MobileTelephone>";
		}
		if(this.myFax != null && this.myFax != undefined && this.myFax != "") {
			xml += "<app:Fax>" + this.myFax + "</app:Fax>";
		}
		if(this.myAddress != undefined && this.myAddress != null) {
			xml += "<app:Address>" + this.myAddress.getXML() + "</app:Address>";
		}
		if(this.myEmail != undefined && this.myEmail != null && this.myEmail != "") {
			xml += "<app:Email>" + this.myEmail + "</app:Email>";
		}
		if(this.myUrl != undefined && this.myUrl != null && this.myUrl != "") {
			xml += "<app:URL>" + this.myUrl + "</app:URL>";
		}
		xml += "<app:CardTemplateId>" + this.templateId + "</app:CardTemplateId>";
		return xml;
	};	
}

function UserInfoType(name, firstName, middleName, lastName, title, employer, workPhone,
					homePhone, cellPhone, fax, address, email, url) {
	this.myName = name;
	this.myFirst = firstName;
	this.myMiddle = middleName;
	this.myLast = lastName;
	this.myTitle = title;
	this.myEmployer = employer;
	this.myWorkPhone = workPhone;
	this.myHomePhone = homePhone;
	this.myCellPhone = cellPhone;
	this.myFax = fax;
	this.myAddress = address;
	this.myEmail = email;
	this.myUrl = url;
	this.isPublic = true;
	this.isRequestable = false;
	//this.tag = "<app:UserInfoType>";
	//this.endTag = "</app:UserInfoType>";
	this.getXML = function() {
		var xml = "<app:Name>" + this.myName + "</app:Name>";
		
		xml += "<app:FirstName>" + this.myFirst + "</app:FirstName>";
		if(this.myMiddle != undefined && this.myMiddle != null && this.myMiddle != "") {
			xml += "<app:MiddleName>" + this.myMiddle + "</app:MiddleName>";
		}
		xml += "<app:LastName>" + this.myLast + "</app:LastName>";
		if(this.myTitle != undefined && this.myTitle != null && this.myTitle != "") {
			xml += "<app:JobTitle>" + this.myTitle + "</app:JobTitle>";
		}
		if(this.myEmployer != undefined && this.myEmployer != null && this.myEmployer != "") {
			xml += "<app:Employer>" + this.myEmployer + "</app:Employer>";
		}
		if(this.myWorkPhone != undefined && this.myWorkPhone != null && this.myWorkPhone != "") {
			xml += "<app:BizTelephone>" + this.myWorkPhone + "</app:BizTelephone>";
		}
		if(this.myHomePhone != undefined && this.myHomePhone != null && this.myHomePhone != "") {
			xml += "<app:HomeTelephone>" + this.myHomePhone + "</app:HomeTelephone>";
		}
		if(this.myCellPhone != undefined && this.myCellPhone != null && this.myCellPhone != "") {
			xml += "<app:MobileTelephone>" + this.myCellPhone + "</app:MobileTelephone>";
		}
		if(this.myFax != null && this.myFax != undefined && this.myFax != "") {
			xml += "<app:Fax>" + this.myFax + "</app:Fax>";
		}
		if(this.myAddress != undefined && this.myAddress != null) {
			xml += "<app:Address>" + this.myAddress.getXML() + "</app:Address>";
		}
		if(this.myEmail != undefined && this.myEmail != null && this.myEmail != "") {
			xml += "<app:Email>" + this.myEmail + "</app:Email>";
		}
		if(this.myUrl != undefined && this.myUrl != null && this.myUrl != "") {
			xml += "<app:URL>" + this.myUrl + "</app:URL>";
		}
		xml += "<app:IsPublic>true</app:IsPublic>";
		xml += "<app:IsRequestable>false</app:IsRequestable>";
		return xml;
	};	
}

function UpdateFriendCardType(sessionKey, userId, card) {//card is an object of BizCardType
	this.mySessionKey = sessionKey;
	this.myUserId = userId;
	this.myCard = card;
	this.tag = "<app:UpdateFriendCardType>";
	this.endTag = "</app:UpdateFriendCardType>";
	this.getXML = function() {
		var xml = soapXMLBegin + this.tag + "<app:SessionKey>" + this.mySessionKey + "</app:SessionKey>";
		xml += "<app:UserId>" + this.myUserId + "</app:UserId>";
		xml += "<app:Card>" + this.myCard.getXML() + "</app:Card>";
		xml += this.endTag + soapXMLEnd;
		return xml;
	};
}
function updateFriendCard(request) { //request is an object of UpdateFriendCardType
	var soapXML = request.getXML();
	//alert(soapXML);
	callWebService(soapXML, updateFriendCardHandler);
}

function UpdateOwnCardType(sessionKey, userId, userInfo) { //userInfo is an object of UserInfoType
	this.mySessionKey = sessionKey;
	this.myUserId = userId;
	this.myUserInfo = userInfo;
	this.tag = "<app:UpdateOwnCardType>";
	this.endTag = "</app:UpdateOwnCardType>";
	this.getXML = function() {
		var xml = soapXMLBegin + this.tag + "<app:SessionKey>" + this.mySessionKey + "</app:SessionKey>";
		xml += "<app:UserId>" + this.myUserId + "</app:UserId>";
		xml += "<app:UserInfo>" + this.myUserInfo.getXML() + "</app:UserInfo>";
		xml += this.endTag + soapXMLEnd;
		return xml;
	};
}
function updateOwnCard(request) { //request is an object of UpdateOwnCardType
	var soapXML = request.getXML();
	//alert(soapXML);
	callWebService(soapXML, updateOwnCardHandler);
}

//This is the DeleteFriendCardType class.
function DeleteFriendCardType(sessionKey, userId, cardIdArray) {
	this.mySessionKey = sessionKey;
	this.myUserId = userId;
	this.myCardIds = cardIdArray;
	this.tag = "<app:DeleteFriendCardType>";
	this.endTag = "</app:DeleteFriendCardType>";
	this.getXML = function() {
		var xml = soapXMLBegin + this.tag + "<app:SessionKey>" + this.mySessionKey + "</app:SessionKey>";
		xml += "<app:UserId>" + this.myUserId + "</app:UserId>";
		if(this.myCardIds.length != undefined) {
			for(var i = 0; i < this.myCardIds.length; i++) {
				xml += "<app:CardId>" + this.myCardIds[i] + "</app:CardId>";
			}
		} else {
			xml += "<app:CardId>" + this.myCardIds + "</app:CardId>";
		}
		xml += this.endTag + soapXMLEnd;
		return xml;
	}
}
//This is the invoking method for DeleteFriendCard web service.
function deleteFriendCards(request) { //request is a DeleteFriendCardType object.
	var soapXML = request.getXML();
	//alert(soapXML);
	callWebService(soapXML, deleteFriendCardsHandler);
}

function UserIdType(userId, email, externalId) {
	this.myUserId = userId;
	this.myEmail = email;
	this.myExternalId = externalId;
	this.getXML = function() {
		var xml = "";
		if(this.myUserId != undefined && this.myUserId != null && this.myUserId != "") {
			xml = "<app:UserId>" + this.myUserId + "</app:UserId>";
		} else if(this.myEmail != undefined && this.myEmail != null && this.myEmail != "") {
			xml = "<app:EmailAddress>" + this.myEmail + "</app:EmailAddress>";
		} else if(this.myExternalId != undefined && this.myExternalId != null && this.myExternalId != "") {
			xml = "<app:ExternalId>" + this.myExternalId + "</app:ExternalId>";
		}
		return xml;
	};
}

function GetUserType(sessionKey, searchKey) { //searchKey is an object of UserIdType
	this.mySessionKey = sessionKey;
	this.mySearchKey = searchKey;
	this.tag = "<app:GetUserType>";
	this.endTag = "</app:GetUserType>";
	this.getXML = function() {
		var xml = soapXMLBegin + this.tag + "<app:SessionKey>" + this.mySessionKey + "</app:SessionKey>";
		xml += "<app:SearchKey>" + this.mySearchKey.getXML() + "</app:SearchKey>";
		xml += this.endTag + soapXMLEnd;
		return xml;
	};
}
function getUser(request) { //request is an object of GetUserType
	var soapXML = request.getXML();
	//alert(soapXML);
	callWebService(soapXML, getUserHandler);
}

//This is the class for data structure CardRequestType in the wsdl.
function CardRequestType(requesterId, targetUserId, message, isAutoAccept, isRequestReturn) { //targetUserId is an object of UserIdType
	this.myRequesterId = requesterId;
	this.myTargetUserId = targetUserId;
	this.myMessage = message;
	this._isAutoAccept = isAutoAccept;
	this._isRequestReturn = isRequestReturn;
	this.getXML = function() {
		var xml = "<app:RequesterId>" + this.myRequesterId + "</app:RequesterId>";
		xml += "<app:TargetUserId>" + this.myTargetUserId.getXML() + "</app:TargetUserId>";
		xml += "<app:Message>" + this.myMessage + "</app:Message>";
		xml += "<app:AutoAccepts>" + (this._isAutoAccept==true?"true":"false") + "</app:AutoAccepts>";
		xml += "<app:RequestsReturnCard>" + (this._isRequestReturn==true?"true":"false") + "</app:RequestsReturnCard>";
		return xml;
	}
}
//This is the class for web service ExchangeCardType in the wsdl.
function ExchangeCardType(sessionKey, userId, cardRequests) { //cardRequests is an array of CardRequestType objects
	this.mySessionKey = sessionKey;
	this.myUserId = userId;
	this.myRequests = cardRequests;
	this.tag = "<app:ExchangeCardType>";
	this.endTag = "</app:ExchangeCardType>";
	this.getXML = function() {
		var xml = soapXMLBegin + this.tag + "<app:SessionKey>" + this.mySessionKey + "</app:SessionKey>";
		xml += "<app:UserId>" + this.myUserId + "</app:UserId>";
		for(var i = 0; i < cardRequests.length && i < 50; i++) {
			xml += "<app:Requests>" + cardRequests[i].getXML() + "</app:Requests>";
		}
		xml += this.endTag + soapXMLEnd;
		return xml;
	}
}
//This is the invoking method for web service exchangeCardType.
function exchangeCard(request) { //request is an object of ExchangeCardType
	var soapXML = request.getXML();
	//alert(soapXML);
	callWebService(soapXML, exchangeCardHandler);
}

//This is the class for web service AcceptFriendCardRequestType in the wsdl.
function AcceptFriendCardRequestType(sessionKey, userId, cardRequestId, isAccepted) {
	this.mySessionKey = sessionKey;
	this.myUserId = userId;
	this.myRequestId = cardRequestId;
	this._isAccepted = isAccepted;
	this.tag = "<app:AcceptFriendCardRequestType>";
	this.endTag = "</app:AcceptFriendCardRequestType>";
	this.getXML = function() {
		var xml = soapXMLBegin + this.tag + "<app:SessionKey>" + this.mySessionKey + "</app:SessionKey>";
		xml += "<app:UserId>" + this.myUserId + "</app:UserId>";
		xml += "<app:CardRequestId>" + this.myRequestId + "</app:CardRequestId>";
		xml += "<app:isAccepted>" + (this._isAccepted==true?"true":"false") + "</app:isAccepted>";
		xml += "<app:isRejected>" + (this._isAccepted==true?"false":"true") + "</app:isRejected>";
		xml += "<app:isIgnored>" + (this._isAccepted==true?"false":"true") + "</app:isIgnored>";
		xml += this.endTag + soapXMLEnd;
		return xml;
	}
}
//This is the invoking method for web service AcceptFriendCardRequest
function acceptFriendCardRequest(request) { //request is an object of AcceptFriendCardRequestType
	var soapXML = request.getXML();
	//alert(soapXML);
	callWebService(soapXML, acceptCardRequestHandler);
}
