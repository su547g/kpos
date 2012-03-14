//
// Definitions for schema: http://ws.ebizcard.com/app
//  file:/C:/Projects/eBizCard/trunk/wsdl/ebizcard.wsdl#types1
//
//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}CardRequestType
//
function ws_ebizcard_com_app_CardRequestType () {
    this.typeMarker = 'ws_ebizcard_com_app_CardRequestType';
    this._Id = null;
    this._RequesterId = 0;
    this._TargetUserId = null;
    this._Message = '';
    this._AutoAccepts = 'false';
    this._RequestsReturnCard = 'false';
}

//
// accessor is ws_ebizcard_com_app_CardRequestType.prototype.getId
// element get for Id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - optional element
//
// element set for Id
// setter function is is ws_ebizcard_com_app_CardRequestType.prototype.setId
//
function ws_ebizcard_com_app_CardRequestType_getId() { return this._Id;}

ws_ebizcard_com_app_CardRequestType.prototype.getId = ws_ebizcard_com_app_CardRequestType_getId;

function ws_ebizcard_com_app_CardRequestType_setId(value) { this._Id = value;}

ws_ebizcard_com_app_CardRequestType.prototype.setId = ws_ebizcard_com_app_CardRequestType_setId;
//
// accessor is ws_ebizcard_com_app_CardRequestType.prototype.getRequesterId
// element get for RequesterId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for RequesterId
// setter function is is ws_ebizcard_com_app_CardRequestType.prototype.setRequesterId
//
function ws_ebizcard_com_app_CardRequestType_getRequesterId() { return this._RequesterId;}

ws_ebizcard_com_app_CardRequestType.prototype.getRequesterId = ws_ebizcard_com_app_CardRequestType_getRequesterId;

function ws_ebizcard_com_app_CardRequestType_setRequesterId(value) { this._RequesterId = value;}

ws_ebizcard_com_app_CardRequestType.prototype.setRequesterId = ws_ebizcard_com_app_CardRequestType_setRequesterId;
//
// accessor is ws_ebizcard_com_app_CardRequestType.prototype.getTargetUserId
// element get for TargetUserId
// - element type is {http://ws.ebizcard.com/app}UserIdType
// - required element
//
// element set for TargetUserId
// setter function is is ws_ebizcard_com_app_CardRequestType.prototype.setTargetUserId
//
function ws_ebizcard_com_app_CardRequestType_getTargetUserId() { return this._TargetUserId;}

ws_ebizcard_com_app_CardRequestType.prototype.getTargetUserId = ws_ebizcard_com_app_CardRequestType_getTargetUserId;

function ws_ebizcard_com_app_CardRequestType_setTargetUserId(value) { this._TargetUserId = value;}

ws_ebizcard_com_app_CardRequestType.prototype.setTargetUserId = ws_ebizcard_com_app_CardRequestType_setTargetUserId;
//
// accessor is ws_ebizcard_com_app_CardRequestType.prototype.getMessage
// element get for Message
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for Message
// setter function is is ws_ebizcard_com_app_CardRequestType.prototype.setMessage
//
function ws_ebizcard_com_app_CardRequestType_getMessage() { return this._Message;}

ws_ebizcard_com_app_CardRequestType.prototype.getMessage = ws_ebizcard_com_app_CardRequestType_getMessage;

function ws_ebizcard_com_app_CardRequestType_setMessage(value) { this._Message = value;}

ws_ebizcard_com_app_CardRequestType.prototype.setMessage = ws_ebizcard_com_app_CardRequestType_setMessage;
//
// accessor is ws_ebizcard_com_app_CardRequestType.prototype.getAutoAccepts
// element get for AutoAccepts
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for AutoAccepts
// setter function is is ws_ebizcard_com_app_CardRequestType.prototype.setAutoAccepts
//
function ws_ebizcard_com_app_CardRequestType_getAutoAccepts() { return this._AutoAccepts;}

ws_ebizcard_com_app_CardRequestType.prototype.getAutoAccepts = ws_ebizcard_com_app_CardRequestType_getAutoAccepts;

function ws_ebizcard_com_app_CardRequestType_setAutoAccepts(value) { this._AutoAccepts = value;}

ws_ebizcard_com_app_CardRequestType.prototype.setAutoAccepts = ws_ebizcard_com_app_CardRequestType_setAutoAccepts;
//
// accessor is ws_ebizcard_com_app_CardRequestType.prototype.getRequestsReturnCard
// element get for RequestsReturnCard
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for RequestsReturnCard
// setter function is is ws_ebizcard_com_app_CardRequestType.prototype.setRequestsReturnCard
//
function ws_ebizcard_com_app_CardRequestType_getRequestsReturnCard() { return this._RequestsReturnCard;}

ws_ebizcard_com_app_CardRequestType.prototype.getRequestsReturnCard = ws_ebizcard_com_app_CardRequestType_getRequestsReturnCard;

function ws_ebizcard_com_app_CardRequestType_setRequestsReturnCard(value) { this._RequestsReturnCard = value;}

ws_ebizcard_com_app_CardRequestType.prototype.setRequestsReturnCard = ws_ebizcard_com_app_CardRequestType_setRequestsReturnCard;
//
// Serialize {http://ws.ebizcard.com/app}CardRequestType
//
function ws_ebizcard_com_app_CardRequestType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Id != null) {
      xml = xml + '<jns0:Id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Id);
      xml = xml + '</jns0:Id>';
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:RequesterId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._RequesterId);
     xml = xml + '</jns0:RequesterId>';
    }
    // block for local variables
    {
     xml = xml + this._TargetUserId.serialize(cxfjsutils, 'jns0:TargetUserId', null);
    }
    // block for local variables
    {
     xml = xml + '<jns0:Message>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._Message);
     xml = xml + '</jns0:Message>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:AutoAccepts>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._AutoAccepts);
     xml = xml + '</jns0:AutoAccepts>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:RequestsReturnCard>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._RequestsReturnCard);
     xml = xml + '</jns0:RequestsReturnCard>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_CardRequestType.prototype.serialize = ws_ebizcard_com_app_CardRequestType_serialize;

function ws_ebizcard_com_app_CardRequestType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_CardRequestType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'Id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing RequesterId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setRequesterId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing TargetUserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_UserIdType_deserialize(cxfjsutils, curElement);
    }
    newobject.setTargetUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Message');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setMessage(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing AutoAccepts');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setAutoAccepts(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing RequestsReturnCard');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setRequestsReturnCard(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}UserIdType
//
function ws_ebizcard_com_app_UserIdType () {
    this.typeMarker = 'ws_ebizcard_com_app_UserIdType';
    this._UserId = 0;
    this._EmailAddress = '';
    this._ExternalId = '';
}

//
// accessor is ws_ebizcard_com_app_UserIdType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_UserIdType.prototype.setUserId
//
function ws_ebizcard_com_app_UserIdType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_UserIdType.prototype.getUserId = ws_ebizcard_com_app_UserIdType_getUserId;

function ws_ebizcard_com_app_UserIdType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_UserIdType.prototype.setUserId = ws_ebizcard_com_app_UserIdType_setUserId;
//
// accessor is ws_ebizcard_com_app_UserIdType.prototype.getEmailAddress
// element get for EmailAddress
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for EmailAddress
// setter function is is ws_ebizcard_com_app_UserIdType.prototype.setEmailAddress
//
function ws_ebizcard_com_app_UserIdType_getEmailAddress() { return this._EmailAddress;}

ws_ebizcard_com_app_UserIdType.prototype.getEmailAddress = ws_ebizcard_com_app_UserIdType_getEmailAddress;

function ws_ebizcard_com_app_UserIdType_setEmailAddress(value) { this._EmailAddress = value;}

ws_ebizcard_com_app_UserIdType.prototype.setEmailAddress = ws_ebizcard_com_app_UserIdType_setEmailAddress;
//
// accessor is ws_ebizcard_com_app_UserIdType.prototype.getExternalId
// element get for ExternalId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for ExternalId
// setter function is is ws_ebizcard_com_app_UserIdType.prototype.setExternalId
//
function ws_ebizcard_com_app_UserIdType_getExternalId() { return this._ExternalId;}

ws_ebizcard_com_app_UserIdType.prototype.getExternalId = ws_ebizcard_com_app_UserIdType_getExternalId;

function ws_ebizcard_com_app_UserIdType_setExternalId(value) { this._ExternalId = value;}

ws_ebizcard_com_app_UserIdType.prototype.setExternalId = ws_ebizcard_com_app_UserIdType_setExternalId;
//
// Serialize {http://ws.ebizcard.com/app}UserIdType
//
function ws_ebizcard_com_app_UserIdType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:EmailAddress>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._EmailAddress);
     xml = xml + '</jns0:EmailAddress>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:ExternalId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._ExternalId);
     xml = xml + '</jns0:ExternalId>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_UserIdType.prototype.serialize = ws_ebizcard_com_app_UserIdType_serialize;

function ws_ebizcard_com_app_UserIdType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_UserIdType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing EmailAddress');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setEmailAddress(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ExternalId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setExternalId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}CardRequestResponseType
//
function ws_ebizcard_com_app_CardRequestResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_CardRequestResponseType';
    this._CardRequest = null;
    this._Card = null;
}

//
// accessor is ws_ebizcard_com_app_CardRequestResponseType.prototype.getCardRequest
// element get for CardRequest
// - element type is {http://ws.ebizcard.com/app}CardRequestType
// - required element
//
// element set for CardRequest
// setter function is is ws_ebizcard_com_app_CardRequestResponseType.prototype.setCardRequest
//
function ws_ebizcard_com_app_CardRequestResponseType_getCardRequest() { return this._CardRequest;}

ws_ebizcard_com_app_CardRequestResponseType.prototype.getCardRequest = ws_ebizcard_com_app_CardRequestResponseType_getCardRequest;

function ws_ebizcard_com_app_CardRequestResponseType_setCardRequest(value) { this._CardRequest = value;}

ws_ebizcard_com_app_CardRequestResponseType.prototype.setCardRequest = ws_ebizcard_com_app_CardRequestResponseType_setCardRequest;
//
// accessor is ws_ebizcard_com_app_CardRequestResponseType.prototype.getCard
// element get for Card
// - element type is {http://ws.ebizcard.com/app}BizCardType
// - required element
//
// element set for Card
// setter function is is ws_ebizcard_com_app_CardRequestResponseType.prototype.setCard
//
function ws_ebizcard_com_app_CardRequestResponseType_getCard() { return this._Card;}

ws_ebizcard_com_app_CardRequestResponseType.prototype.getCard = ws_ebizcard_com_app_CardRequestResponseType_getCard;

function ws_ebizcard_com_app_CardRequestResponseType_setCard(value) { this._Card = value;}

ws_ebizcard_com_app_CardRequestResponseType.prototype.setCard = ws_ebizcard_com_app_CardRequestResponseType_setCard;
//
// Serialize {http://ws.ebizcard.com/app}CardRequestResponseType
//
function ws_ebizcard_com_app_CardRequestResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._CardRequest.serialize(cxfjsutils, 'jns0:CardRequest', null);
    }
    // block for local variables
    {
     xml = xml + this._Card.serialize(cxfjsutils, 'jns0:Card', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_CardRequestResponseType.prototype.serialize = ws_ebizcard_com_app_CardRequestResponseType_serialize;

function ws_ebizcard_com_app_CardRequestResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_CardRequestResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing CardRequest');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_CardRequestType_deserialize(cxfjsutils, curElement);
    }
    newobject.setCardRequest(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Card');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_BizCardType_deserialize(cxfjsutils, curElement);
    }
    newobject.setCard(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}UpdateOwnCardType
//
function ws_ebizcard_com_app_UpdateOwnCardType () {
    this.typeMarker = 'ws_ebizcard_com_app_UpdateOwnCardType';
    this._SessionKey = '';
    this._UserId = 0;
    this._UserInfo = null;
}

//
// accessor is ws_ebizcard_com_app_UpdateOwnCardType.prototype.getSessionKey
// element get for SessionKey
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for SessionKey
// setter function is is ws_ebizcard_com_app_UpdateOwnCardType.prototype.setSessionKey
//
function ws_ebizcard_com_app_UpdateOwnCardType_getSessionKey() { return this._SessionKey;}

ws_ebizcard_com_app_UpdateOwnCardType.prototype.getSessionKey = ws_ebizcard_com_app_UpdateOwnCardType_getSessionKey;

function ws_ebizcard_com_app_UpdateOwnCardType_setSessionKey(value) { this._SessionKey = value;}

ws_ebizcard_com_app_UpdateOwnCardType.prototype.setSessionKey = ws_ebizcard_com_app_UpdateOwnCardType_setSessionKey;
//
// accessor is ws_ebizcard_com_app_UpdateOwnCardType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_UpdateOwnCardType.prototype.setUserId
//
function ws_ebizcard_com_app_UpdateOwnCardType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_UpdateOwnCardType.prototype.getUserId = ws_ebizcard_com_app_UpdateOwnCardType_getUserId;

function ws_ebizcard_com_app_UpdateOwnCardType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_UpdateOwnCardType.prototype.setUserId = ws_ebizcard_com_app_UpdateOwnCardType_setUserId;
//
// accessor is ws_ebizcard_com_app_UpdateOwnCardType.prototype.getUserInfo
// element get for UserInfo
// - element type is {http://ws.ebizcard.com/app}UserInfoType
// - required element
//
// element set for UserInfo
// setter function is is ws_ebizcard_com_app_UpdateOwnCardType.prototype.setUserInfo
//
function ws_ebizcard_com_app_UpdateOwnCardType_getUserInfo() { return this._UserInfo;}

ws_ebizcard_com_app_UpdateOwnCardType.prototype.getUserInfo = ws_ebizcard_com_app_UpdateOwnCardType_getUserInfo;

function ws_ebizcard_com_app_UpdateOwnCardType_setUserInfo(value) { this._UserInfo = value;}

ws_ebizcard_com_app_UpdateOwnCardType.prototype.setUserInfo = ws_ebizcard_com_app_UpdateOwnCardType_setUserInfo;
//
// Serialize {http://ws.ebizcard.com/app}UpdateOwnCardType
//
function ws_ebizcard_com_app_UpdateOwnCardType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:SessionKey>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._SessionKey);
     xml = xml + '</jns0:SessionKey>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    // block for local variables
    {
     xml = xml + this._UserInfo.serialize(cxfjsutils, 'jns0:UserInfo', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_UpdateOwnCardType.prototype.serialize = ws_ebizcard_com_app_UpdateOwnCardType_serialize;

function ws_ebizcard_com_app_UpdateOwnCardType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_UpdateOwnCardType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing SessionKey');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserInfo');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_UserInfoType_deserialize(cxfjsutils, curElement);
    }
    newobject.setUserInfo(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}GetOwnCardResponseType
//
function ws_ebizcard_com_app_GetOwnCardResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_GetOwnCardResponseType';
    this._Result = null;
    this._UserInfo = null;
}

//
// accessor is ws_ebizcard_com_app_GetOwnCardResponseType.prototype.getResult
// element get for Result
// - element type is {http://ws.ebizcard.com/app}ResultType
// - required element
//
// element set for Result
// setter function is is ws_ebizcard_com_app_GetOwnCardResponseType.prototype.setResult
//
function ws_ebizcard_com_app_GetOwnCardResponseType_getResult() { return this._Result;}

ws_ebizcard_com_app_GetOwnCardResponseType.prototype.getResult = ws_ebizcard_com_app_GetOwnCardResponseType_getResult;

function ws_ebizcard_com_app_GetOwnCardResponseType_setResult(value) { this._Result = value;}

ws_ebizcard_com_app_GetOwnCardResponseType.prototype.setResult = ws_ebizcard_com_app_GetOwnCardResponseType_setResult;
//
// accessor is ws_ebizcard_com_app_GetOwnCardResponseType.prototype.getUserInfo
// element get for UserInfo
// - element type is {http://ws.ebizcard.com/app}UserInfoType
// - required element
//
// element set for UserInfo
// setter function is is ws_ebizcard_com_app_GetOwnCardResponseType.prototype.setUserInfo
//
function ws_ebizcard_com_app_GetOwnCardResponseType_getUserInfo() { return this._UserInfo;}

ws_ebizcard_com_app_GetOwnCardResponseType.prototype.getUserInfo = ws_ebizcard_com_app_GetOwnCardResponseType_getUserInfo;

function ws_ebizcard_com_app_GetOwnCardResponseType_setUserInfo(value) { this._UserInfo = value;}

ws_ebizcard_com_app_GetOwnCardResponseType.prototype.setUserInfo = ws_ebizcard_com_app_GetOwnCardResponseType_setUserInfo;
//
// Serialize {http://ws.ebizcard.com/app}GetOwnCardResponseType
//
function ws_ebizcard_com_app_GetOwnCardResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
    }
    // block for local variables
    {
     xml = xml + this._UserInfo.serialize(cxfjsutils, 'jns0:UserInfo', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_GetOwnCardResponseType.prototype.serialize = ws_ebizcard_com_app_GetOwnCardResponseType_serialize;

function ws_ebizcard_com_app_GetOwnCardResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_GetOwnCardResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_ResultType_deserialize(cxfjsutils, curElement);
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserInfo');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_UserInfoType_deserialize(cxfjsutils, curElement);
    }
    newobject.setUserInfo(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}LogoutType
//
function ws_ebizcard_com_app_LogoutType () {
    this.typeMarker = 'ws_ebizcard_com_app_LogoutType';
    this._SessionKey = '';
    this._UserId = 0;
}

//
// accessor is ws_ebizcard_com_app_LogoutType.prototype.getSessionKey
// element get for SessionKey
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for SessionKey
// setter function is is ws_ebizcard_com_app_LogoutType.prototype.setSessionKey
//
function ws_ebizcard_com_app_LogoutType_getSessionKey() { return this._SessionKey;}

ws_ebizcard_com_app_LogoutType.prototype.getSessionKey = ws_ebizcard_com_app_LogoutType_getSessionKey;

function ws_ebizcard_com_app_LogoutType_setSessionKey(value) { this._SessionKey = value;}

ws_ebizcard_com_app_LogoutType.prototype.setSessionKey = ws_ebizcard_com_app_LogoutType_setSessionKey;
//
// accessor is ws_ebizcard_com_app_LogoutType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_LogoutType.prototype.setUserId
//
function ws_ebizcard_com_app_LogoutType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_LogoutType.prototype.getUserId = ws_ebizcard_com_app_LogoutType_getUserId;

function ws_ebizcard_com_app_LogoutType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_LogoutType.prototype.setUserId = ws_ebizcard_com_app_LogoutType_setUserId;
//
// Serialize {http://ws.ebizcard.com/app}LogoutType
//
function ws_ebizcard_com_app_LogoutType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:SessionKey>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._SessionKey);
     xml = xml + '</jns0:SessionKey>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_LogoutType.prototype.serialize = ws_ebizcard_com_app_LogoutType_serialize;

function ws_ebizcard_com_app_LogoutType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_LogoutType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing SessionKey');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}SearchCardsByNameResponseType
//
function ws_ebizcard_com_app_SearchCardsByNameResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_SearchCardsByNameResponseType';
    this._Result = null;
    this._Size = 0;
    this._CardSummaries = [];
}

//
// accessor is ws_ebizcard_com_app_SearchCardsByNameResponseType.prototype.getResult
// element get for Result
// - element type is {http://ws.ebizcard.com/app}ResultType
// - required element
//
// element set for Result
// setter function is is ws_ebizcard_com_app_SearchCardsByNameResponseType.prototype.setResult
//
function ws_ebizcard_com_app_SearchCardsByNameResponseType_getResult() { return this._Result;}

ws_ebizcard_com_app_SearchCardsByNameResponseType.prototype.getResult = ws_ebizcard_com_app_SearchCardsByNameResponseType_getResult;

function ws_ebizcard_com_app_SearchCardsByNameResponseType_setResult(value) { this._Result = value;}

ws_ebizcard_com_app_SearchCardsByNameResponseType.prototype.setResult = ws_ebizcard_com_app_SearchCardsByNameResponseType_setResult;
//
// accessor is ws_ebizcard_com_app_SearchCardsByNameResponseType.prototype.getSize
// element get for Size
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for Size
// setter function is is ws_ebizcard_com_app_SearchCardsByNameResponseType.prototype.setSize
//
function ws_ebizcard_com_app_SearchCardsByNameResponseType_getSize() { return this._Size;}

ws_ebizcard_com_app_SearchCardsByNameResponseType.prototype.getSize = ws_ebizcard_com_app_SearchCardsByNameResponseType_getSize;

function ws_ebizcard_com_app_SearchCardsByNameResponseType_setSize(value) { this._Size = value;}

ws_ebizcard_com_app_SearchCardsByNameResponseType.prototype.setSize = ws_ebizcard_com_app_SearchCardsByNameResponseType_setSize;
//
// accessor is ws_ebizcard_com_app_SearchCardsByNameResponseType.prototype.getCardSummaries
// element get for CardSummaries
// - element type is {http://ws.ebizcard.com/app}CardSummaryType
// - required element
// - array
//
// element set for CardSummaries
// setter function is is ws_ebizcard_com_app_SearchCardsByNameResponseType.prototype.setCardSummaries
//
function ws_ebizcard_com_app_SearchCardsByNameResponseType_getCardSummaries() { return this._CardSummaries;}

ws_ebizcard_com_app_SearchCardsByNameResponseType.prototype.getCardSummaries = ws_ebizcard_com_app_SearchCardsByNameResponseType_getCardSummaries;

function ws_ebizcard_com_app_SearchCardsByNameResponseType_setCardSummaries(value) { this._CardSummaries = value;}

ws_ebizcard_com_app_SearchCardsByNameResponseType.prototype.setCardSummaries = ws_ebizcard_com_app_SearchCardsByNameResponseType_setCardSummaries;
//
// Serialize {http://ws.ebizcard.com/app}SearchCardsByNameResponseType
//
function ws_ebizcard_com_app_SearchCardsByNameResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
    }
    // block for local variables
    {
     xml = xml + '<jns0:Size>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._Size);
     xml = xml + '</jns0:Size>';
    }
    // block for local variables
    {
     if (this._CardSummaries != null) {
      for (var ax = 0;ax < this._CardSummaries.length;ax ++) {
       if (this._CardSummaries[ax] == null) {
        xml = xml + '<jns0:CardSummaries/>';
       } else {
        xml = xml + this._CardSummaries[ax].serialize(cxfjsutils, 'jns0:CardSummaries', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_SearchCardsByNameResponseType.prototype.serialize = ws_ebizcard_com_app_SearchCardsByNameResponseType_serialize;

function ws_ebizcard_com_app_SearchCardsByNameResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_SearchCardsByNameResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_ResultType_deserialize(cxfjsutils, curElement);
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Size');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setSize(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing CardSummaries');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'CardSummaries')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = ws_ebizcard_com_app_CardSummaryType_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'CardSummaries'));
     newobject.setCardSummaries(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}ListFriendCardsFullResponseType
//
function ws_ebizcard_com_app_ListFriendCardsFullResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_ListFriendCardsFullResponseType';
    this._Result = null;
    this._Cards = [];
    this._TotalPage = 0;
    this._CurrentPage = 0;
}

//
// accessor is ws_ebizcard_com_app_ListFriendCardsFullResponseType.prototype.getResult
// element get for Result
// - element type is {http://ws.ebizcard.com/app}ResultType
// - required element
//
// element set for Result
// setter function is is ws_ebizcard_com_app_ListFriendCardsFullResponseType.prototype.setResult
//
function ws_ebizcard_com_app_ListFriendCardsFullResponseType_getResult() { return this._Result;}

ws_ebizcard_com_app_ListFriendCardsFullResponseType.prototype.getResult = ws_ebizcard_com_app_ListFriendCardsFullResponseType_getResult;

function ws_ebizcard_com_app_ListFriendCardsFullResponseType_setResult(value) { this._Result = value;}

ws_ebizcard_com_app_ListFriendCardsFullResponseType.prototype.setResult = ws_ebizcard_com_app_ListFriendCardsFullResponseType_setResult;
//
// accessor is ws_ebizcard_com_app_ListFriendCardsFullResponseType.prototype.getCards
// element get for Cards
// - element type is {http://ws.ebizcard.com/app}BizCardType
// - required element
// - array
//
// element set for Cards
// setter function is is ws_ebizcard_com_app_ListFriendCardsFullResponseType.prototype.setCards
//
function ws_ebizcard_com_app_ListFriendCardsFullResponseType_getCards() { return this._Cards;}

ws_ebizcard_com_app_ListFriendCardsFullResponseType.prototype.getCards = ws_ebizcard_com_app_ListFriendCardsFullResponseType_getCards;

function ws_ebizcard_com_app_ListFriendCardsFullResponseType_setCards(value) { this._Cards = value;}

ws_ebizcard_com_app_ListFriendCardsFullResponseType.prototype.setCards = ws_ebizcard_com_app_ListFriendCardsFullResponseType_setCards;
//
// accessor is ws_ebizcard_com_app_ListFriendCardsFullResponseType.prototype.getTotalPage
// element get for TotalPage
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for TotalPage
// setter function is is ws_ebizcard_com_app_ListFriendCardsFullResponseType.prototype.setTotalPage
//
function ws_ebizcard_com_app_ListFriendCardsFullResponseType_getTotalPage() { return this._TotalPage;}

ws_ebizcard_com_app_ListFriendCardsFullResponseType.prototype.getTotalPage = ws_ebizcard_com_app_ListFriendCardsFullResponseType_getTotalPage;

function ws_ebizcard_com_app_ListFriendCardsFullResponseType_setTotalPage(value) { this._TotalPage = value;}

ws_ebizcard_com_app_ListFriendCardsFullResponseType.prototype.setTotalPage = ws_ebizcard_com_app_ListFriendCardsFullResponseType_setTotalPage;
//
// accessor is ws_ebizcard_com_app_ListFriendCardsFullResponseType.prototype.getCurrentPage
// element get for CurrentPage
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for CurrentPage
// setter function is is ws_ebizcard_com_app_ListFriendCardsFullResponseType.prototype.setCurrentPage
//
function ws_ebizcard_com_app_ListFriendCardsFullResponseType_getCurrentPage() { return this._CurrentPage;}

ws_ebizcard_com_app_ListFriendCardsFullResponseType.prototype.getCurrentPage = ws_ebizcard_com_app_ListFriendCardsFullResponseType_getCurrentPage;

function ws_ebizcard_com_app_ListFriendCardsFullResponseType_setCurrentPage(value) { this._CurrentPage = value;}

ws_ebizcard_com_app_ListFriendCardsFullResponseType.prototype.setCurrentPage = ws_ebizcard_com_app_ListFriendCardsFullResponseType_setCurrentPage;
//
// Serialize {http://ws.ebizcard.com/app}ListFriendCardsFullResponseType
//
function ws_ebizcard_com_app_ListFriendCardsFullResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
    }
    // block for local variables
    {
     if (this._Cards != null) {
      for (var ax = 0;ax < this._Cards.length;ax ++) {
       if (this._Cards[ax] == null) {
        xml = xml + '<jns0:Cards/>';
       } else {
        xml = xml + this._Cards[ax].serialize(cxfjsutils, 'jns0:Cards', null);
       }
      }
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:TotalPage>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._TotalPage);
     xml = xml + '</jns0:TotalPage>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:CurrentPage>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._CurrentPage);
     xml = xml + '</jns0:CurrentPage>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_ListFriendCardsFullResponseType.prototype.serialize = ws_ebizcard_com_app_ListFriendCardsFullResponseType_serialize;

function ws_ebizcard_com_app_ListFriendCardsFullResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_ListFriendCardsFullResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_ResultType_deserialize(cxfjsutils, curElement);
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Cards');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'Cards')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = ws_ebizcard_com_app_BizCardType_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'Cards'));
     newobject.setCards(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing TotalPage');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setTotalPage(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing CurrentPage');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setCurrentPage(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}UpdateFriendCardType
//
function ws_ebizcard_com_app_UpdateFriendCardType () {
    this.typeMarker = 'ws_ebizcard_com_app_UpdateFriendCardType';
    this._SessionKey = '';
    this._UserId = 0;
    this._Card = null;
}

//
// accessor is ws_ebizcard_com_app_UpdateFriendCardType.prototype.getSessionKey
// element get for SessionKey
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for SessionKey
// setter function is is ws_ebizcard_com_app_UpdateFriendCardType.prototype.setSessionKey
//
function ws_ebizcard_com_app_UpdateFriendCardType_getSessionKey() { return this._SessionKey;}

ws_ebizcard_com_app_UpdateFriendCardType.prototype.getSessionKey = ws_ebizcard_com_app_UpdateFriendCardType_getSessionKey;

function ws_ebizcard_com_app_UpdateFriendCardType_setSessionKey(value) { this._SessionKey = value;}

ws_ebizcard_com_app_UpdateFriendCardType.prototype.setSessionKey = ws_ebizcard_com_app_UpdateFriendCardType_setSessionKey;
//
// accessor is ws_ebizcard_com_app_UpdateFriendCardType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_UpdateFriendCardType.prototype.setUserId
//
function ws_ebizcard_com_app_UpdateFriendCardType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_UpdateFriendCardType.prototype.getUserId = ws_ebizcard_com_app_UpdateFriendCardType_getUserId;

function ws_ebizcard_com_app_UpdateFriendCardType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_UpdateFriendCardType.prototype.setUserId = ws_ebizcard_com_app_UpdateFriendCardType_setUserId;
//
// accessor is ws_ebizcard_com_app_UpdateFriendCardType.prototype.getCard
// element get for Card
// - element type is {http://ws.ebizcard.com/app}BizCardType
// - required element
//
// element set for Card
// setter function is is ws_ebizcard_com_app_UpdateFriendCardType.prototype.setCard
//
function ws_ebizcard_com_app_UpdateFriendCardType_getCard() { return this._Card;}

ws_ebizcard_com_app_UpdateFriendCardType.prototype.getCard = ws_ebizcard_com_app_UpdateFriendCardType_getCard;

function ws_ebizcard_com_app_UpdateFriendCardType_setCard(value) { this._Card = value;}

ws_ebizcard_com_app_UpdateFriendCardType.prototype.setCard = ws_ebizcard_com_app_UpdateFriendCardType_setCard;
//
// Serialize {http://ws.ebizcard.com/app}UpdateFriendCardType
//
function ws_ebizcard_com_app_UpdateFriendCardType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:SessionKey>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._SessionKey);
     xml = xml + '</jns0:SessionKey>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    // block for local variables
    {
     xml = xml + this._Card.serialize(cxfjsutils, 'jns0:Card', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_UpdateFriendCardType.prototype.serialize = ws_ebizcard_com_app_UpdateFriendCardType_serialize;

function ws_ebizcard_com_app_UpdateFriendCardType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_UpdateFriendCardType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing SessionKey');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Card');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_BizCardType_deserialize(cxfjsutils, curElement);
    }
    newobject.setCard(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}LogoutResponseType
//
function ws_ebizcard_com_app_LogoutResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_LogoutResponseType';
    this._Result = null;
}

//
// accessor is ws_ebizcard_com_app_LogoutResponseType.prototype.getResult
// element get for Result
// - element type is {http://ws.ebizcard.com/app}ResultType
// - required element
//
// element set for Result
// setter function is is ws_ebizcard_com_app_LogoutResponseType.prototype.setResult
//
function ws_ebizcard_com_app_LogoutResponseType_getResult() { return this._Result;}

ws_ebizcard_com_app_LogoutResponseType.prototype.getResult = ws_ebizcard_com_app_LogoutResponseType_getResult;

function ws_ebizcard_com_app_LogoutResponseType_setResult(value) { this._Result = value;}

ws_ebizcard_com_app_LogoutResponseType.prototype.setResult = ws_ebizcard_com_app_LogoutResponseType_setResult;
//
// Serialize {http://ws.ebizcard.com/app}LogoutResponseType
//
function ws_ebizcard_com_app_LogoutResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_LogoutResponseType.prototype.serialize = ws_ebizcard_com_app_LogoutResponseType_serialize;

function ws_ebizcard_com_app_LogoutResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_LogoutResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_ResultType_deserialize(cxfjsutils, curElement);
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}UserType
//
function ws_ebizcard_com_app_UserType () {
    this.typeMarker = 'ws_ebizcard_com_app_UserType';
    this._UserId = 0;
    this._Email = '';
    this._Password = '';
    this._ExternalId = null;
    this._LastLoginTS = '';
}

//
// accessor is ws_ebizcard_com_app_UserType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_UserType.prototype.setUserId
//
function ws_ebizcard_com_app_UserType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_UserType.prototype.getUserId = ws_ebizcard_com_app_UserType_getUserId;

function ws_ebizcard_com_app_UserType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_UserType.prototype.setUserId = ws_ebizcard_com_app_UserType_setUserId;
//
// accessor is ws_ebizcard_com_app_UserType.prototype.getEmail
// element get for Email
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for Email
// setter function is is ws_ebizcard_com_app_UserType.prototype.setEmail
//
function ws_ebizcard_com_app_UserType_getEmail() { return this._Email;}

ws_ebizcard_com_app_UserType.prototype.getEmail = ws_ebizcard_com_app_UserType_getEmail;

function ws_ebizcard_com_app_UserType_setEmail(value) { this._Email = value;}

ws_ebizcard_com_app_UserType.prototype.setEmail = ws_ebizcard_com_app_UserType_setEmail;
//
// accessor is ws_ebizcard_com_app_UserType.prototype.getPassword
// element get for Password
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for Password
// setter function is is ws_ebizcard_com_app_UserType.prototype.setPassword
//
function ws_ebizcard_com_app_UserType_getPassword() { return this._Password;}

ws_ebizcard_com_app_UserType.prototype.getPassword = ws_ebizcard_com_app_UserType_getPassword;

function ws_ebizcard_com_app_UserType_setPassword(value) { this._Password = value;}

ws_ebizcard_com_app_UserType.prototype.setPassword = ws_ebizcard_com_app_UserType_setPassword;
//
// accessor is ws_ebizcard_com_app_UserType.prototype.getExternalId
// element get for ExternalId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for ExternalId
// setter function is is ws_ebizcard_com_app_UserType.prototype.setExternalId
//
function ws_ebizcard_com_app_UserType_getExternalId() { return this._ExternalId;}

ws_ebizcard_com_app_UserType.prototype.getExternalId = ws_ebizcard_com_app_UserType_getExternalId;

function ws_ebizcard_com_app_UserType_setExternalId(value) { this._ExternalId = value;}

ws_ebizcard_com_app_UserType.prototype.setExternalId = ws_ebizcard_com_app_UserType_setExternalId;
//
// accessor is ws_ebizcard_com_app_UserType.prototype.getLastLoginTS
// element get for LastLoginTS
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for LastLoginTS
// setter function is is ws_ebizcard_com_app_UserType.prototype.setLastLoginTS
//
function ws_ebizcard_com_app_UserType_getLastLoginTS() { return this._LastLoginTS;}

ws_ebizcard_com_app_UserType.prototype.getLastLoginTS = ws_ebizcard_com_app_UserType_getLastLoginTS;

function ws_ebizcard_com_app_UserType_setLastLoginTS(value) { this._LastLoginTS = value;}

ws_ebizcard_com_app_UserType.prototype.setLastLoginTS = ws_ebizcard_com_app_UserType_setLastLoginTS;
//
// Serialize {http://ws.ebizcard.com/app}UserType
//
function ws_ebizcard_com_app_UserType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:Email>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._Email);
     xml = xml + '</jns0:Email>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:Password>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._Password);
     xml = xml + '</jns0:Password>';
    }
    // block for local variables
    {
     if (this._ExternalId != null) {
      xml = xml + '<jns0:ExternalId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._ExternalId);
      xml = xml + '</jns0:ExternalId>';
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:LastLoginTS>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._LastLoginTS);
     xml = xml + '</jns0:LastLoginTS>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_UserType.prototype.serialize = ws_ebizcard_com_app_UserType_serialize;

function ws_ebizcard_com_app_UserType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_UserType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Email');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setEmail(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Password');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPassword(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ExternalId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'ExternalId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setExternalId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing LastLoginTS');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setLastLoginTS(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}CardSummaryType
//
function ws_ebizcard_com_app_CardSummaryType () {
    this.typeMarker = 'ws_ebizcard_com_app_CardSummaryType';
    this._CardId = 0;
    this._PersonName = '';
    this._Phone = '';
    this._Email = '';
}

//
// accessor is ws_ebizcard_com_app_CardSummaryType.prototype.getCardId
// element get for CardId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for CardId
// setter function is is ws_ebizcard_com_app_CardSummaryType.prototype.setCardId
//
function ws_ebizcard_com_app_CardSummaryType_getCardId() { return this._CardId;}

ws_ebizcard_com_app_CardSummaryType.prototype.getCardId = ws_ebizcard_com_app_CardSummaryType_getCardId;

function ws_ebizcard_com_app_CardSummaryType_setCardId(value) { this._CardId = value;}

ws_ebizcard_com_app_CardSummaryType.prototype.setCardId = ws_ebizcard_com_app_CardSummaryType_setCardId;
//
// accessor is ws_ebizcard_com_app_CardSummaryType.prototype.getPersonName
// element get for PersonName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for PersonName
// setter function is is ws_ebizcard_com_app_CardSummaryType.prototype.setPersonName
//
function ws_ebizcard_com_app_CardSummaryType_getPersonName() { return this._PersonName;}

ws_ebizcard_com_app_CardSummaryType.prototype.getPersonName = ws_ebizcard_com_app_CardSummaryType_getPersonName;

function ws_ebizcard_com_app_CardSummaryType_setPersonName(value) { this._PersonName = value;}

ws_ebizcard_com_app_CardSummaryType.prototype.setPersonName = ws_ebizcard_com_app_CardSummaryType_setPersonName;
//
// accessor is ws_ebizcard_com_app_CardSummaryType.prototype.getPhone
// element get for Phone
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for Phone
// setter function is is ws_ebizcard_com_app_CardSummaryType.prototype.setPhone
//
function ws_ebizcard_com_app_CardSummaryType_getPhone() { return this._Phone;}

ws_ebizcard_com_app_CardSummaryType.prototype.getPhone = ws_ebizcard_com_app_CardSummaryType_getPhone;

function ws_ebizcard_com_app_CardSummaryType_setPhone(value) { this._Phone = value;}

ws_ebizcard_com_app_CardSummaryType.prototype.setPhone = ws_ebizcard_com_app_CardSummaryType_setPhone;
//
// accessor is ws_ebizcard_com_app_CardSummaryType.prototype.getEmail
// element get for Email
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for Email
// setter function is is ws_ebizcard_com_app_CardSummaryType.prototype.setEmail
//
function ws_ebizcard_com_app_CardSummaryType_getEmail() { return this._Email;}

ws_ebizcard_com_app_CardSummaryType.prototype.getEmail = ws_ebizcard_com_app_CardSummaryType_getEmail;

function ws_ebizcard_com_app_CardSummaryType_setEmail(value) { this._Email = value;}

ws_ebizcard_com_app_CardSummaryType.prototype.setEmail = ws_ebizcard_com_app_CardSummaryType_setEmail;
//
// Serialize {http://ws.ebizcard.com/app}CardSummaryType
//
function ws_ebizcard_com_app_CardSummaryType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:CardId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._CardId);
     xml = xml + '</jns0:CardId>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:PersonName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._PersonName);
     xml = xml + '</jns0:PersonName>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:Phone>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._Phone);
     xml = xml + '</jns0:Phone>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:Email>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._Email);
     xml = xml + '</jns0:Email>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_CardSummaryType.prototype.serialize = ws_ebizcard_com_app_CardSummaryType_serialize;

function ws_ebizcard_com_app_CardSummaryType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_CardSummaryType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing CardId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setCardId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing PersonName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPersonName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Phone');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPhone(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Email');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setEmail(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}GetFriendCardResponseType
//
function ws_ebizcard_com_app_GetFriendCardResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_GetFriendCardResponseType';
    this._Result = null;
    this._Card = null;
}

//
// accessor is ws_ebizcard_com_app_GetFriendCardResponseType.prototype.getResult
// element get for Result
// - element type is {http://ws.ebizcard.com/app}ResultType
// - required element
//
// element set for Result
// setter function is is ws_ebizcard_com_app_GetFriendCardResponseType.prototype.setResult
//
function ws_ebizcard_com_app_GetFriendCardResponseType_getResult() { return this._Result;}

ws_ebizcard_com_app_GetFriendCardResponseType.prototype.getResult = ws_ebizcard_com_app_GetFriendCardResponseType_getResult;

function ws_ebizcard_com_app_GetFriendCardResponseType_setResult(value) { this._Result = value;}

ws_ebizcard_com_app_GetFriendCardResponseType.prototype.setResult = ws_ebizcard_com_app_GetFriendCardResponseType_setResult;
//
// accessor is ws_ebizcard_com_app_GetFriendCardResponseType.prototype.getCard
// element get for Card
// - element type is {http://ws.ebizcard.com/app}BizCardType
// - required element
//
// element set for Card
// setter function is is ws_ebizcard_com_app_GetFriendCardResponseType.prototype.setCard
//
function ws_ebizcard_com_app_GetFriendCardResponseType_getCard() { return this._Card;}

ws_ebizcard_com_app_GetFriendCardResponseType.prototype.getCard = ws_ebizcard_com_app_GetFriendCardResponseType_getCard;

function ws_ebizcard_com_app_GetFriendCardResponseType_setCard(value) { this._Card = value;}

ws_ebizcard_com_app_GetFriendCardResponseType.prototype.setCard = ws_ebizcard_com_app_GetFriendCardResponseType_setCard;
//
// Serialize {http://ws.ebizcard.com/app}GetFriendCardResponseType
//
function ws_ebizcard_com_app_GetFriendCardResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
    }
    // block for local variables
    {
     xml = xml + this._Card.serialize(cxfjsutils, 'jns0:Card', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_GetFriendCardResponseType.prototype.serialize = ws_ebizcard_com_app_GetFriendCardResponseType_serialize;

function ws_ebizcard_com_app_GetFriendCardResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_GetFriendCardResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_ResultType_deserialize(cxfjsutils, curElement);
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Card');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_BizCardType_deserialize(cxfjsutils, curElement);
    }
    newobject.setCard(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}UserSummaryType
//
function ws_ebizcard_com_app_UserSummaryType () {
    this.typeMarker = 'ws_ebizcard_com_app_UserSummaryType';
    this._UserId = 0;
    this._FirstName = '';
    this._MiddleName = null;
    this._LastName = null;
    this._Company = null;
}

//
// accessor is ws_ebizcard_com_app_UserSummaryType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_UserSummaryType.prototype.setUserId
//
function ws_ebizcard_com_app_UserSummaryType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_UserSummaryType.prototype.getUserId = ws_ebizcard_com_app_UserSummaryType_getUserId;

function ws_ebizcard_com_app_UserSummaryType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_UserSummaryType.prototype.setUserId = ws_ebizcard_com_app_UserSummaryType_setUserId;
//
// accessor is ws_ebizcard_com_app_UserSummaryType.prototype.getFirstName
// element get for FirstName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for FirstName
// setter function is is ws_ebizcard_com_app_UserSummaryType.prototype.setFirstName
//
function ws_ebizcard_com_app_UserSummaryType_getFirstName() { return this._FirstName;}

ws_ebizcard_com_app_UserSummaryType.prototype.getFirstName = ws_ebizcard_com_app_UserSummaryType_getFirstName;

function ws_ebizcard_com_app_UserSummaryType_setFirstName(value) { this._FirstName = value;}

ws_ebizcard_com_app_UserSummaryType.prototype.setFirstName = ws_ebizcard_com_app_UserSummaryType_setFirstName;
//
// accessor is ws_ebizcard_com_app_UserSummaryType.prototype.getMiddleName
// element get for MiddleName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for MiddleName
// setter function is is ws_ebizcard_com_app_UserSummaryType.prototype.setMiddleName
//
function ws_ebizcard_com_app_UserSummaryType_getMiddleName() { return this._MiddleName;}

ws_ebizcard_com_app_UserSummaryType.prototype.getMiddleName = ws_ebizcard_com_app_UserSummaryType_getMiddleName;

function ws_ebizcard_com_app_UserSummaryType_setMiddleName(value) { this._MiddleName = value;}

ws_ebizcard_com_app_UserSummaryType.prototype.setMiddleName = ws_ebizcard_com_app_UserSummaryType_setMiddleName;
//
// accessor is ws_ebizcard_com_app_UserSummaryType.prototype.getLastName
// element get for LastName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for LastName
// setter function is is ws_ebizcard_com_app_UserSummaryType.prototype.setLastName
//
function ws_ebizcard_com_app_UserSummaryType_getLastName() { return this._LastName;}

ws_ebizcard_com_app_UserSummaryType.prototype.getLastName = ws_ebizcard_com_app_UserSummaryType_getLastName;

function ws_ebizcard_com_app_UserSummaryType_setLastName(value) { this._LastName = value;}

ws_ebizcard_com_app_UserSummaryType.prototype.setLastName = ws_ebizcard_com_app_UserSummaryType_setLastName;
//
// accessor is ws_ebizcard_com_app_UserSummaryType.prototype.getCompany
// element get for Company
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for Company
// setter function is is ws_ebizcard_com_app_UserSummaryType.prototype.setCompany
//
function ws_ebizcard_com_app_UserSummaryType_getCompany() { return this._Company;}

ws_ebizcard_com_app_UserSummaryType.prototype.getCompany = ws_ebizcard_com_app_UserSummaryType_getCompany;

function ws_ebizcard_com_app_UserSummaryType_setCompany(value) { this._Company = value;}

ws_ebizcard_com_app_UserSummaryType.prototype.setCompany = ws_ebizcard_com_app_UserSummaryType_setCompany;
//
// Serialize {http://ws.ebizcard.com/app}UserSummaryType
//
function ws_ebizcard_com_app_UserSummaryType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:FirstName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._FirstName);
     xml = xml + '</jns0:FirstName>';
    }
    // block for local variables
    {
     if (this._MiddleName != null) {
      xml = xml + '<jns0:MiddleName>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._MiddleName);
      xml = xml + '</jns0:MiddleName>';
     }
    }
    // block for local variables
    {
     if (this._LastName != null) {
      xml = xml + '<jns0:LastName>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._LastName);
      xml = xml + '</jns0:LastName>';
     }
    }
    // block for local variables
    {
     if (this._Company != null) {
      xml = xml + '<jns0:Company>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Company);
      xml = xml + '</jns0:Company>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_UserSummaryType.prototype.serialize = ws_ebizcard_com_app_UserSummaryType_serialize;

function ws_ebizcard_com_app_UserSummaryType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_UserSummaryType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing FirstName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setFirstName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing MiddleName');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'MiddleName')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setMiddleName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing LastName');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'LastName')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setLastName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Company');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'Company')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setCompany(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}AcceptFriendCardRequestType
//
function ws_ebizcard_com_app_AcceptFriendCardRequestType () {
    this.typeMarker = 'ws_ebizcard_com_app_AcceptFriendCardRequestType';
    this._SessionKey = '';
    this._UserId = 0;
    this._CardRequestId = 0;
    this._isAccepted = '';
    this._isRejected = '';
    this._isIgnored = '';
}

//
// accessor is ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.getSessionKey
// element get for SessionKey
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for SessionKey
// setter function is is ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.setSessionKey
//
function ws_ebizcard_com_app_AcceptFriendCardRequestType_getSessionKey() { return this._SessionKey;}

ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.getSessionKey = ws_ebizcard_com_app_AcceptFriendCardRequestType_getSessionKey;

function ws_ebizcard_com_app_AcceptFriendCardRequestType_setSessionKey(value) { this._SessionKey = value;}

ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.setSessionKey = ws_ebizcard_com_app_AcceptFriendCardRequestType_setSessionKey;
//
// accessor is ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.setUserId
//
function ws_ebizcard_com_app_AcceptFriendCardRequestType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.getUserId = ws_ebizcard_com_app_AcceptFriendCardRequestType_getUserId;

function ws_ebizcard_com_app_AcceptFriendCardRequestType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.setUserId = ws_ebizcard_com_app_AcceptFriendCardRequestType_setUserId;
//
// accessor is ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.getCardRequestId
// element get for CardRequestId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for CardRequestId
// setter function is is ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.setCardRequestId
//
function ws_ebizcard_com_app_AcceptFriendCardRequestType_getCardRequestId() { return this._CardRequestId;}

ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.getCardRequestId = ws_ebizcard_com_app_AcceptFriendCardRequestType_getCardRequestId;

function ws_ebizcard_com_app_AcceptFriendCardRequestType_setCardRequestId(value) { this._CardRequestId = value;}

ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.setCardRequestId = ws_ebizcard_com_app_AcceptFriendCardRequestType_setCardRequestId;
//
// accessor is ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.getIsAccepted
// element get for isAccepted
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for isAccepted
// setter function is is ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.setIsAccepted
//
function ws_ebizcard_com_app_AcceptFriendCardRequestType_getIsAccepted() { return this._isAccepted;}

ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.getIsAccepted = ws_ebizcard_com_app_AcceptFriendCardRequestType_getIsAccepted;

function ws_ebizcard_com_app_AcceptFriendCardRequestType_setIsAccepted(value) { this._isAccepted = value;}

ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.setIsAccepted = ws_ebizcard_com_app_AcceptFriendCardRequestType_setIsAccepted;
//
// accessor is ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.getIsRejected
// element get for isRejected
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for isRejected
// setter function is is ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.setIsRejected
//
function ws_ebizcard_com_app_AcceptFriendCardRequestType_getIsRejected() { return this._isRejected;}

ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.getIsRejected = ws_ebizcard_com_app_AcceptFriendCardRequestType_getIsRejected;

function ws_ebizcard_com_app_AcceptFriendCardRequestType_setIsRejected(value) { this._isRejected = value;}

ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.setIsRejected = ws_ebizcard_com_app_AcceptFriendCardRequestType_setIsRejected;
//
// accessor is ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.getIsIgnored
// element get for isIgnored
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for isIgnored
// setter function is is ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.setIsIgnored
//
function ws_ebizcard_com_app_AcceptFriendCardRequestType_getIsIgnored() { return this._isIgnored;}

ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.getIsIgnored = ws_ebizcard_com_app_AcceptFriendCardRequestType_getIsIgnored;

function ws_ebizcard_com_app_AcceptFriendCardRequestType_setIsIgnored(value) { this._isIgnored = value;}

ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.setIsIgnored = ws_ebizcard_com_app_AcceptFriendCardRequestType_setIsIgnored;
//
// Serialize {http://ws.ebizcard.com/app}AcceptFriendCardRequestType
//
function ws_ebizcard_com_app_AcceptFriendCardRequestType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:SessionKey>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._SessionKey);
     xml = xml + '</jns0:SessionKey>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:CardRequestId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._CardRequestId);
     xml = xml + '</jns0:CardRequestId>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:isAccepted>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._isAccepted);
     xml = xml + '</jns0:isAccepted>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:isRejected>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._isRejected);
     xml = xml + '</jns0:isRejected>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:isIgnored>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._isIgnored);
     xml = xml + '</jns0:isIgnored>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_AcceptFriendCardRequestType.prototype.serialize = ws_ebizcard_com_app_AcceptFriendCardRequestType_serialize;

function ws_ebizcard_com_app_AcceptFriendCardRequestType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_AcceptFriendCardRequestType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing SessionKey');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing CardRequestId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setCardRequestId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing isAccepted');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setIsAccepted(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing isRejected');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setIsRejected(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing isIgnored');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setIsIgnored(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}ListFriendCardRequestsSecureType
//
function ws_ebizcard_com_app_ListFriendCardRequestsSecureType () {
    this.typeMarker = 'ws_ebizcard_com_app_ListFriendCardRequestsSecureType';
    this._SessionKey = '';
    this._UserId = 0;
    this._PageNum = 0;
}

//
// accessor is ws_ebizcard_com_app_ListFriendCardRequestsSecureType.prototype.getSessionKey
// element get for SessionKey
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for SessionKey
// setter function is is ws_ebizcard_com_app_ListFriendCardRequestsSecureType.prototype.setSessionKey
//
function ws_ebizcard_com_app_ListFriendCardRequestsSecureType_getSessionKey() { return this._SessionKey;}

ws_ebizcard_com_app_ListFriendCardRequestsSecureType.prototype.getSessionKey = ws_ebizcard_com_app_ListFriendCardRequestsSecureType_getSessionKey;

function ws_ebizcard_com_app_ListFriendCardRequestsSecureType_setSessionKey(value) { this._SessionKey = value;}

ws_ebizcard_com_app_ListFriendCardRequestsSecureType.prototype.setSessionKey = ws_ebizcard_com_app_ListFriendCardRequestsSecureType_setSessionKey;
//
// accessor is ws_ebizcard_com_app_ListFriendCardRequestsSecureType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_ListFriendCardRequestsSecureType.prototype.setUserId
//
function ws_ebizcard_com_app_ListFriendCardRequestsSecureType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_ListFriendCardRequestsSecureType.prototype.getUserId = ws_ebizcard_com_app_ListFriendCardRequestsSecureType_getUserId;

function ws_ebizcard_com_app_ListFriendCardRequestsSecureType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_ListFriendCardRequestsSecureType.prototype.setUserId = ws_ebizcard_com_app_ListFriendCardRequestsSecureType_setUserId;
//
// accessor is ws_ebizcard_com_app_ListFriendCardRequestsSecureType.prototype.getPageNum
// element get for PageNum
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for PageNum
// setter function is is ws_ebizcard_com_app_ListFriendCardRequestsSecureType.prototype.setPageNum
//
function ws_ebizcard_com_app_ListFriendCardRequestsSecureType_getPageNum() { return this._PageNum;}

ws_ebizcard_com_app_ListFriendCardRequestsSecureType.prototype.getPageNum = ws_ebizcard_com_app_ListFriendCardRequestsSecureType_getPageNum;

function ws_ebizcard_com_app_ListFriendCardRequestsSecureType_setPageNum(value) { this._PageNum = value;}

ws_ebizcard_com_app_ListFriendCardRequestsSecureType.prototype.setPageNum = ws_ebizcard_com_app_ListFriendCardRequestsSecureType_setPageNum;
//
// Serialize {http://ws.ebizcard.com/app}ListFriendCardRequestsSecureType
//
function ws_ebizcard_com_app_ListFriendCardRequestsSecureType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:SessionKey>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._SessionKey);
     xml = xml + '</jns0:SessionKey>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:PageNum>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._PageNum);
     xml = xml + '</jns0:PageNum>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_ListFriendCardRequestsSecureType.prototype.serialize = ws_ebizcard_com_app_ListFriendCardRequestsSecureType_serialize;

function ws_ebizcard_com_app_ListFriendCardRequestsSecureType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_ListFriendCardRequestsSecureType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing SessionKey');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing PageNum');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setPageNum(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}RegisterUserType
//
function ws_ebizcard_com_app_RegisterUserType () {
    this.typeMarker = 'ws_ebizcard_com_app_RegisterUserType';
    this._Credentials = null;
    this._FacebookId = null;
    this._UserInfo = null;
}

//
// accessor is ws_ebizcard_com_app_RegisterUserType.prototype.getCredentials
// element get for Credentials
// - element type is {http://ws.ebizcard.com/app}LoginCredentialType
// - required element
//
// element set for Credentials
// setter function is is ws_ebizcard_com_app_RegisterUserType.prototype.setCredentials
//
function ws_ebizcard_com_app_RegisterUserType_getCredentials() { return this._Credentials;}

ws_ebizcard_com_app_RegisterUserType.prototype.getCredentials = ws_ebizcard_com_app_RegisterUserType_getCredentials;

function ws_ebizcard_com_app_RegisterUserType_setCredentials(value) { this._Credentials = value;}

ws_ebizcard_com_app_RegisterUserType.prototype.setCredentials = ws_ebizcard_com_app_RegisterUserType_setCredentials;
//
// accessor is ws_ebizcard_com_app_RegisterUserType.prototype.getFacebookId
// element get for FacebookId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for FacebookId
// setter function is is ws_ebizcard_com_app_RegisterUserType.prototype.setFacebookId
//
function ws_ebizcard_com_app_RegisterUserType_getFacebookId() { return this._FacebookId;}

ws_ebizcard_com_app_RegisterUserType.prototype.getFacebookId = ws_ebizcard_com_app_RegisterUserType_getFacebookId;

function ws_ebizcard_com_app_RegisterUserType_setFacebookId(value) { this._FacebookId = value;}

ws_ebizcard_com_app_RegisterUserType.prototype.setFacebookId = ws_ebizcard_com_app_RegisterUserType_setFacebookId;
//
// accessor is ws_ebizcard_com_app_RegisterUserType.prototype.getUserInfo
// element get for UserInfo
// - element type is {http://ws.ebizcard.com/app}UserInfoType
// - required element
//
// element set for UserInfo
// setter function is is ws_ebizcard_com_app_RegisterUserType.prototype.setUserInfo
//
function ws_ebizcard_com_app_RegisterUserType_getUserInfo() { return this._UserInfo;}

ws_ebizcard_com_app_RegisterUserType.prototype.getUserInfo = ws_ebizcard_com_app_RegisterUserType_getUserInfo;

function ws_ebizcard_com_app_RegisterUserType_setUserInfo(value) { this._UserInfo = value;}

ws_ebizcard_com_app_RegisterUserType.prototype.setUserInfo = ws_ebizcard_com_app_RegisterUserType_setUserInfo;
//
// Serialize {http://ws.ebizcard.com/app}RegisterUserType
//
function ws_ebizcard_com_app_RegisterUserType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._Credentials.serialize(cxfjsutils, 'jns0:Credentials', null);
    }
    // block for local variables
    {
     if (this._FacebookId != null) {
      xml = xml + '<jns0:FacebookId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._FacebookId);
      xml = xml + '</jns0:FacebookId>';
     }
    }
    // block for local variables
    {
     xml = xml + this._UserInfo.serialize(cxfjsutils, 'jns0:UserInfo', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_RegisterUserType.prototype.serialize = ws_ebizcard_com_app_RegisterUserType_serialize;

function ws_ebizcard_com_app_RegisterUserType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_RegisterUserType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Credentials');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_LoginCredentialType_deserialize(cxfjsutils, curElement);
    }
    newobject.setCredentials(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing FacebookId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'FacebookId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setFacebookId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserInfo');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_UserInfoType_deserialize(cxfjsutils, curElement);
    }
    newobject.setUserInfo(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}GetFriendCardType
//
function ws_ebizcard_com_app_GetFriendCardType () {
    this.typeMarker = 'ws_ebizcard_com_app_GetFriendCardType';
    this._SessionKey = '';
    this._UserId = 0;
    this._CardId = 0;
}

//
// accessor is ws_ebizcard_com_app_GetFriendCardType.prototype.getSessionKey
// element get for SessionKey
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for SessionKey
// setter function is is ws_ebizcard_com_app_GetFriendCardType.prototype.setSessionKey
//
function ws_ebizcard_com_app_GetFriendCardType_getSessionKey() { return this._SessionKey;}

ws_ebizcard_com_app_GetFriendCardType.prototype.getSessionKey = ws_ebizcard_com_app_GetFriendCardType_getSessionKey;

function ws_ebizcard_com_app_GetFriendCardType_setSessionKey(value) { this._SessionKey = value;}

ws_ebizcard_com_app_GetFriendCardType.prototype.setSessionKey = ws_ebizcard_com_app_GetFriendCardType_setSessionKey;
//
// accessor is ws_ebizcard_com_app_GetFriendCardType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_GetFriendCardType.prototype.setUserId
//
function ws_ebizcard_com_app_GetFriendCardType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_GetFriendCardType.prototype.getUserId = ws_ebizcard_com_app_GetFriendCardType_getUserId;

function ws_ebizcard_com_app_GetFriendCardType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_GetFriendCardType.prototype.setUserId = ws_ebizcard_com_app_GetFriendCardType_setUserId;
//
// accessor is ws_ebizcard_com_app_GetFriendCardType.prototype.getCardId
// element get for CardId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for CardId
// setter function is is ws_ebizcard_com_app_GetFriendCardType.prototype.setCardId
//
function ws_ebizcard_com_app_GetFriendCardType_getCardId() { return this._CardId;}

ws_ebizcard_com_app_GetFriendCardType.prototype.getCardId = ws_ebizcard_com_app_GetFriendCardType_getCardId;

function ws_ebizcard_com_app_GetFriendCardType_setCardId(value) { this._CardId = value;}

ws_ebizcard_com_app_GetFriendCardType.prototype.setCardId = ws_ebizcard_com_app_GetFriendCardType_setCardId;
//
// Serialize {http://ws.ebizcard.com/app}GetFriendCardType
//
function ws_ebizcard_com_app_GetFriendCardType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:SessionKey>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._SessionKey);
     xml = xml + '</jns0:SessionKey>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:CardId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._CardId);
     xml = xml + '</jns0:CardId>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_GetFriendCardType.prototype.serialize = ws_ebizcard_com_app_GetFriendCardType_serialize;

function ws_ebizcard_com_app_GetFriendCardType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_GetFriendCardType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing SessionKey');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing CardId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setCardId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}ListFriendCardsResponseType
//
function ws_ebizcard_com_app_ListFriendCardsResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_ListFriendCardsResponseType';
    this._Result = null;
    this._Cards = [];
    this._TotalPage = 0;
    this._CurrentPage = 0;
}

//
// accessor is ws_ebizcard_com_app_ListFriendCardsResponseType.prototype.getResult
// element get for Result
// - element type is {http://ws.ebizcard.com/app}ResultType
// - required element
//
// element set for Result
// setter function is is ws_ebizcard_com_app_ListFriendCardsResponseType.prototype.setResult
//
function ws_ebizcard_com_app_ListFriendCardsResponseType_getResult() { return this._Result;}

ws_ebizcard_com_app_ListFriendCardsResponseType.prototype.getResult = ws_ebizcard_com_app_ListFriendCardsResponseType_getResult;

function ws_ebizcard_com_app_ListFriendCardsResponseType_setResult(value) { this._Result = value;}

ws_ebizcard_com_app_ListFriendCardsResponseType.prototype.setResult = ws_ebizcard_com_app_ListFriendCardsResponseType_setResult;
//
// accessor is ws_ebizcard_com_app_ListFriendCardsResponseType.prototype.getCards
// element get for Cards
// - element type is {http://ws.ebizcard.com/app}CardSummaryType
// - required element
// - array
//
// element set for Cards
// setter function is is ws_ebizcard_com_app_ListFriendCardsResponseType.prototype.setCards
//
function ws_ebizcard_com_app_ListFriendCardsResponseType_getCards() { return this._Cards;}

ws_ebizcard_com_app_ListFriendCardsResponseType.prototype.getCards = ws_ebizcard_com_app_ListFriendCardsResponseType_getCards;

function ws_ebizcard_com_app_ListFriendCardsResponseType_setCards(value) { this._Cards = value;}

ws_ebizcard_com_app_ListFriendCardsResponseType.prototype.setCards = ws_ebizcard_com_app_ListFriendCardsResponseType_setCards;
//
// accessor is ws_ebizcard_com_app_ListFriendCardsResponseType.prototype.getTotalPage
// element get for TotalPage
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for TotalPage
// setter function is is ws_ebizcard_com_app_ListFriendCardsResponseType.prototype.setTotalPage
//
function ws_ebizcard_com_app_ListFriendCardsResponseType_getTotalPage() { return this._TotalPage;}

ws_ebizcard_com_app_ListFriendCardsResponseType.prototype.getTotalPage = ws_ebizcard_com_app_ListFriendCardsResponseType_getTotalPage;

function ws_ebizcard_com_app_ListFriendCardsResponseType_setTotalPage(value) { this._TotalPage = value;}

ws_ebizcard_com_app_ListFriendCardsResponseType.prototype.setTotalPage = ws_ebizcard_com_app_ListFriendCardsResponseType_setTotalPage;
//
// accessor is ws_ebizcard_com_app_ListFriendCardsResponseType.prototype.getCurrentPage
// element get for CurrentPage
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for CurrentPage
// setter function is is ws_ebizcard_com_app_ListFriendCardsResponseType.prototype.setCurrentPage
//
function ws_ebizcard_com_app_ListFriendCardsResponseType_getCurrentPage() { return this._CurrentPage;}

ws_ebizcard_com_app_ListFriendCardsResponseType.prototype.getCurrentPage = ws_ebizcard_com_app_ListFriendCardsResponseType_getCurrentPage;

function ws_ebizcard_com_app_ListFriendCardsResponseType_setCurrentPage(value) { this._CurrentPage = value;}

ws_ebizcard_com_app_ListFriendCardsResponseType.prototype.setCurrentPage = ws_ebizcard_com_app_ListFriendCardsResponseType_setCurrentPage;
//
// Serialize {http://ws.ebizcard.com/app}ListFriendCardsResponseType
//
function ws_ebizcard_com_app_ListFriendCardsResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
    }
    // block for local variables
    {
     if (this._Cards != null) {
      for (var ax = 0;ax < this._Cards.length;ax ++) {
       if (this._Cards[ax] == null) {
        xml = xml + '<jns0:Cards/>';
       } else {
        xml = xml + this._Cards[ax].serialize(cxfjsutils, 'jns0:Cards', null);
       }
      }
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:TotalPage>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._TotalPage);
     xml = xml + '</jns0:TotalPage>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:CurrentPage>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._CurrentPage);
     xml = xml + '</jns0:CurrentPage>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_ListFriendCardsResponseType.prototype.serialize = ws_ebizcard_com_app_ListFriendCardsResponseType_serialize;

function ws_ebizcard_com_app_ListFriendCardsResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_ListFriendCardsResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_ResultType_deserialize(cxfjsutils, curElement);
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Cards');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'Cards')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = ws_ebizcard_com_app_CardSummaryType_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'Cards'));
     newobject.setCards(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing TotalPage');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setTotalPage(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing CurrentPage');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setCurrentPage(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}ExchangeCardResponseType
//
function ws_ebizcard_com_app_ExchangeCardResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_ExchangeCardResponseType';
    this._Result = null;
}

//
// accessor is ws_ebizcard_com_app_ExchangeCardResponseType.prototype.getResult
// element get for Result
// - element type is {http://ws.ebizcard.com/app}ResultType
// - required element
//
// element set for Result
// setter function is is ws_ebizcard_com_app_ExchangeCardResponseType.prototype.setResult
//
function ws_ebizcard_com_app_ExchangeCardResponseType_getResult() { return this._Result;}

ws_ebizcard_com_app_ExchangeCardResponseType.prototype.getResult = ws_ebizcard_com_app_ExchangeCardResponseType_getResult;

function ws_ebizcard_com_app_ExchangeCardResponseType_setResult(value) { this._Result = value;}

ws_ebizcard_com_app_ExchangeCardResponseType.prototype.setResult = ws_ebizcard_com_app_ExchangeCardResponseType_setResult;
//
// Serialize {http://ws.ebizcard.com/app}ExchangeCardResponseType
//
function ws_ebizcard_com_app_ExchangeCardResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_ExchangeCardResponseType.prototype.serialize = ws_ebizcard_com_app_ExchangeCardResponseType_serialize;

function ws_ebizcard_com_app_ExchangeCardResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_ExchangeCardResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_ResultType_deserialize(cxfjsutils, curElement);
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}GetOwnCardType
//
function ws_ebizcard_com_app_GetOwnCardType () {
    this.typeMarker = 'ws_ebizcard_com_app_GetOwnCardType';
    this._SessionKey = '';
    this._UserId = 0;
}

//
// accessor is ws_ebizcard_com_app_GetOwnCardType.prototype.getSessionKey
// element get for SessionKey
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for SessionKey
// setter function is is ws_ebizcard_com_app_GetOwnCardType.prototype.setSessionKey
//
function ws_ebizcard_com_app_GetOwnCardType_getSessionKey() { return this._SessionKey;}

ws_ebizcard_com_app_GetOwnCardType.prototype.getSessionKey = ws_ebizcard_com_app_GetOwnCardType_getSessionKey;

function ws_ebizcard_com_app_GetOwnCardType_setSessionKey(value) { this._SessionKey = value;}

ws_ebizcard_com_app_GetOwnCardType.prototype.setSessionKey = ws_ebizcard_com_app_GetOwnCardType_setSessionKey;
//
// accessor is ws_ebizcard_com_app_GetOwnCardType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_GetOwnCardType.prototype.setUserId
//
function ws_ebizcard_com_app_GetOwnCardType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_GetOwnCardType.prototype.getUserId = ws_ebizcard_com_app_GetOwnCardType_getUserId;

function ws_ebizcard_com_app_GetOwnCardType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_GetOwnCardType.prototype.setUserId = ws_ebizcard_com_app_GetOwnCardType_setUserId;
//
// Serialize {http://ws.ebizcard.com/app}GetOwnCardType
//
function ws_ebizcard_com_app_GetOwnCardType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:SessionKey>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._SessionKey);
     xml = xml + '</jns0:SessionKey>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_GetOwnCardType.prototype.serialize = ws_ebizcard_com_app_GetOwnCardType_serialize;

function ws_ebizcard_com_app_GetOwnCardType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_GetOwnCardType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing SessionKey');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}SearchCardsByNameType
//
function ws_ebizcard_com_app_SearchCardsByNameType () {
    this.typeMarker = 'ws_ebizcard_com_app_SearchCardsByNameType';
    this._SessionKey = '';
    this._UserId = 0;
    this._FirstName = '';
    this._LastName = null;
    this._IsAsc = 'true';
    this._startPage = 0;
}

//
// accessor is ws_ebizcard_com_app_SearchCardsByNameType.prototype.getSessionKey
// element get for SessionKey
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for SessionKey
// setter function is is ws_ebizcard_com_app_SearchCardsByNameType.prototype.setSessionKey
//
function ws_ebizcard_com_app_SearchCardsByNameType_getSessionKey() { return this._SessionKey;}

ws_ebizcard_com_app_SearchCardsByNameType.prototype.getSessionKey = ws_ebizcard_com_app_SearchCardsByNameType_getSessionKey;

function ws_ebizcard_com_app_SearchCardsByNameType_setSessionKey(value) { this._SessionKey = value;}

ws_ebizcard_com_app_SearchCardsByNameType.prototype.setSessionKey = ws_ebizcard_com_app_SearchCardsByNameType_setSessionKey;
//
// accessor is ws_ebizcard_com_app_SearchCardsByNameType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_SearchCardsByNameType.prototype.setUserId
//
function ws_ebizcard_com_app_SearchCardsByNameType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_SearchCardsByNameType.prototype.getUserId = ws_ebizcard_com_app_SearchCardsByNameType_getUserId;

function ws_ebizcard_com_app_SearchCardsByNameType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_SearchCardsByNameType.prototype.setUserId = ws_ebizcard_com_app_SearchCardsByNameType_setUserId;
//
// accessor is ws_ebizcard_com_app_SearchCardsByNameType.prototype.getFirstName
// element get for FirstName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for FirstName
// setter function is is ws_ebizcard_com_app_SearchCardsByNameType.prototype.setFirstName
//
function ws_ebizcard_com_app_SearchCardsByNameType_getFirstName() { return this._FirstName;}

ws_ebizcard_com_app_SearchCardsByNameType.prototype.getFirstName = ws_ebizcard_com_app_SearchCardsByNameType_getFirstName;

function ws_ebizcard_com_app_SearchCardsByNameType_setFirstName(value) { this._FirstName = value;}

ws_ebizcard_com_app_SearchCardsByNameType.prototype.setFirstName = ws_ebizcard_com_app_SearchCardsByNameType_setFirstName;
//
// accessor is ws_ebizcard_com_app_SearchCardsByNameType.prototype.getLastName
// element get for LastName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for LastName
// setter function is is ws_ebizcard_com_app_SearchCardsByNameType.prototype.setLastName
//
function ws_ebizcard_com_app_SearchCardsByNameType_getLastName() { return this._LastName;}

ws_ebizcard_com_app_SearchCardsByNameType.prototype.getLastName = ws_ebizcard_com_app_SearchCardsByNameType_getLastName;

function ws_ebizcard_com_app_SearchCardsByNameType_setLastName(value) { this._LastName = value;}

ws_ebizcard_com_app_SearchCardsByNameType.prototype.setLastName = ws_ebizcard_com_app_SearchCardsByNameType_setLastName;
//
// accessor is ws_ebizcard_com_app_SearchCardsByNameType.prototype.getIsAsc
// element get for IsAsc
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for IsAsc
// setter function is is ws_ebizcard_com_app_SearchCardsByNameType.prototype.setIsAsc
//
function ws_ebizcard_com_app_SearchCardsByNameType_getIsAsc() { return this._IsAsc;}

ws_ebizcard_com_app_SearchCardsByNameType.prototype.getIsAsc = ws_ebizcard_com_app_SearchCardsByNameType_getIsAsc;

function ws_ebizcard_com_app_SearchCardsByNameType_setIsAsc(value) { this._IsAsc = value;}

ws_ebizcard_com_app_SearchCardsByNameType.prototype.setIsAsc = ws_ebizcard_com_app_SearchCardsByNameType_setIsAsc;
//
// accessor is ws_ebizcard_com_app_SearchCardsByNameType.prototype.getStartPage
// element get for startPage
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for startPage
// setter function is is ws_ebizcard_com_app_SearchCardsByNameType.prototype.setStartPage
//
function ws_ebizcard_com_app_SearchCardsByNameType_getStartPage() { return this._startPage;}

ws_ebizcard_com_app_SearchCardsByNameType.prototype.getStartPage = ws_ebizcard_com_app_SearchCardsByNameType_getStartPage;

function ws_ebizcard_com_app_SearchCardsByNameType_setStartPage(value) { this._startPage = value;}

ws_ebizcard_com_app_SearchCardsByNameType.prototype.setStartPage = ws_ebizcard_com_app_SearchCardsByNameType_setStartPage;
//
// Serialize {http://ws.ebizcard.com/app}SearchCardsByNameType
//
function ws_ebizcard_com_app_SearchCardsByNameType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:SessionKey>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._SessionKey);
     xml = xml + '</jns0:SessionKey>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:FirstName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._FirstName);
     xml = xml + '</jns0:FirstName>';
    }
    // block for local variables
    {
     if (this._LastName != null) {
      xml = xml + '<jns0:LastName>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._LastName);
      xml = xml + '</jns0:LastName>';
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:IsAsc>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._IsAsc);
     xml = xml + '</jns0:IsAsc>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:startPage>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._startPage);
     xml = xml + '</jns0:startPage>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_SearchCardsByNameType.prototype.serialize = ws_ebizcard_com_app_SearchCardsByNameType_serialize;

function ws_ebizcard_com_app_SearchCardsByNameType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_SearchCardsByNameType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing SessionKey');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing FirstName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setFirstName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing LastName');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'LastName')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setLastName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing IsAsc');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setIsAsc(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing startPage');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setStartPage(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}RegisterUserResponseType
//
function ws_ebizcard_com_app_RegisterUserResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_RegisterUserResponseType';
    this._UserId = 0;
    this._Result = null;
}

//
// accessor is ws_ebizcard_com_app_RegisterUserResponseType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_RegisterUserResponseType.prototype.setUserId
//
function ws_ebizcard_com_app_RegisterUserResponseType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_RegisterUserResponseType.prototype.getUserId = ws_ebizcard_com_app_RegisterUserResponseType_getUserId;

function ws_ebizcard_com_app_RegisterUserResponseType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_RegisterUserResponseType.prototype.setUserId = ws_ebizcard_com_app_RegisterUserResponseType_setUserId;
//
// accessor is ws_ebizcard_com_app_RegisterUserResponseType.prototype.getResult
// element get for Result
// - element type is {http://ws.ebizcard.com/app}ResultType
// - required element
//
// element set for Result
// setter function is is ws_ebizcard_com_app_RegisterUserResponseType.prototype.setResult
//
function ws_ebizcard_com_app_RegisterUserResponseType_getResult() { return this._Result;}

ws_ebizcard_com_app_RegisterUserResponseType.prototype.getResult = ws_ebizcard_com_app_RegisterUserResponseType_getResult;

function ws_ebizcard_com_app_RegisterUserResponseType_setResult(value) { this._Result = value;}

ws_ebizcard_com_app_RegisterUserResponseType.prototype.setResult = ws_ebizcard_com_app_RegisterUserResponseType_setResult;
//
// Serialize {http://ws.ebizcard.com/app}RegisterUserResponseType
//
function ws_ebizcard_com_app_RegisterUserResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    // block for local variables
    {
     xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_RegisterUserResponseType.prototype.serialize = ws_ebizcard_com_app_RegisterUserResponseType_serialize;

function ws_ebizcard_com_app_RegisterUserResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_RegisterUserResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_ResultType_deserialize(cxfjsutils, curElement);
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}AuthenticateUserType
//
function ws_ebizcard_com_app_AuthenticateUserType () {
    this.typeMarker = 'ws_ebizcard_com_app_AuthenticateUserType';
    this._LoginCredential = null;
}

//
// accessor is ws_ebizcard_com_app_AuthenticateUserType.prototype.getLoginCredential
// element get for LoginCredential
// - element type is {http://ws.ebizcard.com/app}LoginCredentialType
// - required element
//
// element set for LoginCredential
// setter function is is ws_ebizcard_com_app_AuthenticateUserType.prototype.setLoginCredential
//
function ws_ebizcard_com_app_AuthenticateUserType_getLoginCredential() { return this._LoginCredential;}

ws_ebizcard_com_app_AuthenticateUserType.prototype.getLoginCredential = ws_ebizcard_com_app_AuthenticateUserType_getLoginCredential;

function ws_ebizcard_com_app_AuthenticateUserType_setLoginCredential(value) { this._LoginCredential = value;}

ws_ebizcard_com_app_AuthenticateUserType.prototype.setLoginCredential = ws_ebizcard_com_app_AuthenticateUserType_setLoginCredential;
//
// Serialize {http://ws.ebizcard.com/app}AuthenticateUserType
//
function ws_ebizcard_com_app_AuthenticateUserType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._LoginCredential.serialize(cxfjsutils, 'jns0:LoginCredential', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_AuthenticateUserType.prototype.serialize = ws_ebizcard_com_app_AuthenticateUserType_serialize;

function ws_ebizcard_com_app_AuthenticateUserType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_AuthenticateUserType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing LoginCredential');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_LoginCredentialType_deserialize(cxfjsutils, curElement);
    }
    newobject.setLoginCredential(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}RequestCardResponseType
//
function ws_ebizcard_com_app_RequestCardResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_RequestCardResponseType';
    this._Result = null;
}

//
// accessor is ws_ebizcard_com_app_RequestCardResponseType.prototype.getResult
// element get for Result
// - element type is {http://ws.ebizcard.com/app}ResultType
// - required element
//
// element set for Result
// setter function is is ws_ebizcard_com_app_RequestCardResponseType.prototype.setResult
//
function ws_ebizcard_com_app_RequestCardResponseType_getResult() { return this._Result;}

ws_ebizcard_com_app_RequestCardResponseType.prototype.getResult = ws_ebizcard_com_app_RequestCardResponseType_getResult;

function ws_ebizcard_com_app_RequestCardResponseType_setResult(value) { this._Result = value;}

ws_ebizcard_com_app_RequestCardResponseType.prototype.setResult = ws_ebizcard_com_app_RequestCardResponseType_setResult;
//
// Serialize {http://ws.ebizcard.com/app}RequestCardResponseType
//
function ws_ebizcard_com_app_RequestCardResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_RequestCardResponseType.prototype.serialize = ws_ebizcard_com_app_RequestCardResponseType_serialize;

function ws_ebizcard_com_app_RequestCardResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_RequestCardResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_ResultType_deserialize(cxfjsutils, curElement);
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}GetUserProfileCardType
//
function ws_ebizcard_com_app_GetUserProfileCardType () {
    this.typeMarker = 'ws_ebizcard_com_app_GetUserProfileCardType';
    this._SessionKey = '';
    this._UserId = 0;
    this._TargetUserId = 0;
}

//
// accessor is ws_ebizcard_com_app_GetUserProfileCardType.prototype.getSessionKey
// element get for SessionKey
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for SessionKey
// setter function is is ws_ebizcard_com_app_GetUserProfileCardType.prototype.setSessionKey
//
function ws_ebizcard_com_app_GetUserProfileCardType_getSessionKey() { return this._SessionKey;}

ws_ebizcard_com_app_GetUserProfileCardType.prototype.getSessionKey = ws_ebizcard_com_app_GetUserProfileCardType_getSessionKey;

function ws_ebizcard_com_app_GetUserProfileCardType_setSessionKey(value) { this._SessionKey = value;}

ws_ebizcard_com_app_GetUserProfileCardType.prototype.setSessionKey = ws_ebizcard_com_app_GetUserProfileCardType_setSessionKey;
//
// accessor is ws_ebizcard_com_app_GetUserProfileCardType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_GetUserProfileCardType.prototype.setUserId
//
function ws_ebizcard_com_app_GetUserProfileCardType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_GetUserProfileCardType.prototype.getUserId = ws_ebizcard_com_app_GetUserProfileCardType_getUserId;

function ws_ebizcard_com_app_GetUserProfileCardType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_GetUserProfileCardType.prototype.setUserId = ws_ebizcard_com_app_GetUserProfileCardType_setUserId;
//
// accessor is ws_ebizcard_com_app_GetUserProfileCardType.prototype.getTargetUserId
// element get for TargetUserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for TargetUserId
// setter function is is ws_ebizcard_com_app_GetUserProfileCardType.prototype.setTargetUserId
//
function ws_ebizcard_com_app_GetUserProfileCardType_getTargetUserId() { return this._TargetUserId;}

ws_ebizcard_com_app_GetUserProfileCardType.prototype.getTargetUserId = ws_ebizcard_com_app_GetUserProfileCardType_getTargetUserId;

function ws_ebizcard_com_app_GetUserProfileCardType_setTargetUserId(value) { this._TargetUserId = value;}

ws_ebizcard_com_app_GetUserProfileCardType.prototype.setTargetUserId = ws_ebizcard_com_app_GetUserProfileCardType_setTargetUserId;
//
// Serialize {http://ws.ebizcard.com/app}GetUserProfileCardType
//
function ws_ebizcard_com_app_GetUserProfileCardType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:SessionKey>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._SessionKey);
     xml = xml + '</jns0:SessionKey>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:TargetUserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._TargetUserId);
     xml = xml + '</jns0:TargetUserId>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_GetUserProfileCardType.prototype.serialize = ws_ebizcard_com_app_GetUserProfileCardType_serialize;

function ws_ebizcard_com_app_GetUserProfileCardType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_GetUserProfileCardType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing SessionKey');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing TargetUserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setTargetUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}DeleteFriendCardResponseType
//
function ws_ebizcard_com_app_DeleteFriendCardResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_DeleteFriendCardResponseType';
    this._Result = null;
}

//
// accessor is ws_ebizcard_com_app_DeleteFriendCardResponseType.prototype.getResult
// element get for Result
// - element type is {http://ws.ebizcard.com/app}ResultType
// - required element
//
// element set for Result
// setter function is is ws_ebizcard_com_app_DeleteFriendCardResponseType.prototype.setResult
//
function ws_ebizcard_com_app_DeleteFriendCardResponseType_getResult() { return this._Result;}

ws_ebizcard_com_app_DeleteFriendCardResponseType.prototype.getResult = ws_ebizcard_com_app_DeleteFriendCardResponseType_getResult;

function ws_ebizcard_com_app_DeleteFriendCardResponseType_setResult(value) { this._Result = value;}

ws_ebizcard_com_app_DeleteFriendCardResponseType.prototype.setResult = ws_ebizcard_com_app_DeleteFriendCardResponseType_setResult;
//
// Serialize {http://ws.ebizcard.com/app}DeleteFriendCardResponseType
//
function ws_ebizcard_com_app_DeleteFriendCardResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_DeleteFriendCardResponseType.prototype.serialize = ws_ebizcard_com_app_DeleteFriendCardResponseType_serialize;

function ws_ebizcard_com_app_DeleteFriendCardResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_DeleteFriendCardResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_ResultType_deserialize(cxfjsutils, curElement);
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}RetrievePasswordType
//
function ws_ebizcard_com_app_RetrievePasswordType () {
    this.typeMarker = 'ws_ebizcard_com_app_RetrievePasswordType';
    this._Email = '';
}

//
// accessor is ws_ebizcard_com_app_RetrievePasswordType.prototype.getEmail
// element get for Email
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for Email
// setter function is is ws_ebizcard_com_app_RetrievePasswordType.prototype.setEmail
//
function ws_ebizcard_com_app_RetrievePasswordType_getEmail() { return this._Email;}

ws_ebizcard_com_app_RetrievePasswordType.prototype.getEmail = ws_ebizcard_com_app_RetrievePasswordType_getEmail;

function ws_ebizcard_com_app_RetrievePasswordType_setEmail(value) { this._Email = value;}

ws_ebizcard_com_app_RetrievePasswordType.prototype.setEmail = ws_ebizcard_com_app_RetrievePasswordType_setEmail;
//
// Serialize {http://ws.ebizcard.com/app}RetrievePasswordType
//
function ws_ebizcard_com_app_RetrievePasswordType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:Email>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._Email);
     xml = xml + '</jns0:Email>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_RetrievePasswordType.prototype.serialize = ws_ebizcard_com_app_RetrievePasswordType_serialize;

function ws_ebizcard_com_app_RetrievePasswordType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_RetrievePasswordType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Email');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setEmail(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}AddressType
//
function ws_ebizcard_com_app_AddressType () {
    this.typeMarker = 'ws_ebizcard_com_app_AddressType';
    this._address1 = '';
    this._address2 = null;
    this._address3 = null;
    this._city = '';
    this._state = null;
    this._country = null;
    this._zipcode = '';
}

//
// accessor is ws_ebizcard_com_app_AddressType.prototype.getAddress1
// element get for address1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for address1
// setter function is is ws_ebizcard_com_app_AddressType.prototype.setAddress1
//
function ws_ebizcard_com_app_AddressType_getAddress1() { return this._address1;}

ws_ebizcard_com_app_AddressType.prototype.getAddress1 = ws_ebizcard_com_app_AddressType_getAddress1;

function ws_ebizcard_com_app_AddressType_setAddress1(value) { this._address1 = value;}

ws_ebizcard_com_app_AddressType.prototype.setAddress1 = ws_ebizcard_com_app_AddressType_setAddress1;
//
// accessor is ws_ebizcard_com_app_AddressType.prototype.getAddress2
// element get for address2
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for address2
// setter function is is ws_ebizcard_com_app_AddressType.prototype.setAddress2
//
function ws_ebizcard_com_app_AddressType_getAddress2() { return this._address2;}

ws_ebizcard_com_app_AddressType.prototype.getAddress2 = ws_ebizcard_com_app_AddressType_getAddress2;

function ws_ebizcard_com_app_AddressType_setAddress2(value) { this._address2 = value;}

ws_ebizcard_com_app_AddressType.prototype.setAddress2 = ws_ebizcard_com_app_AddressType_setAddress2;
//
// accessor is ws_ebizcard_com_app_AddressType.prototype.getAddress3
// element get for address3
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for address3
// setter function is is ws_ebizcard_com_app_AddressType.prototype.setAddress3
//
function ws_ebizcard_com_app_AddressType_getAddress3() { return this._address3;}

ws_ebizcard_com_app_AddressType.prototype.getAddress3 = ws_ebizcard_com_app_AddressType_getAddress3;

function ws_ebizcard_com_app_AddressType_setAddress3(value) { this._address3 = value;}

ws_ebizcard_com_app_AddressType.prototype.setAddress3 = ws_ebizcard_com_app_AddressType_setAddress3;
//
// accessor is ws_ebizcard_com_app_AddressType.prototype.getCity
// element get for city
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for city
// setter function is is ws_ebizcard_com_app_AddressType.prototype.setCity
//
function ws_ebizcard_com_app_AddressType_getCity() { return this._city;}

ws_ebizcard_com_app_AddressType.prototype.getCity = ws_ebizcard_com_app_AddressType_getCity;

function ws_ebizcard_com_app_AddressType_setCity(value) { this._city = value;}

ws_ebizcard_com_app_AddressType.prototype.setCity = ws_ebizcard_com_app_AddressType_setCity;
//
// accessor is ws_ebizcard_com_app_AddressType.prototype.getState
// element get for state
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for state
// setter function is is ws_ebizcard_com_app_AddressType.prototype.setState
//
function ws_ebizcard_com_app_AddressType_getState() { return this._state;}

ws_ebizcard_com_app_AddressType.prototype.getState = ws_ebizcard_com_app_AddressType_getState;

function ws_ebizcard_com_app_AddressType_setState(value) { this._state = value;}

ws_ebizcard_com_app_AddressType.prototype.setState = ws_ebizcard_com_app_AddressType_setState;
//
// accessor is ws_ebizcard_com_app_AddressType.prototype.getCountry
// element get for country
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for country
// setter function is is ws_ebizcard_com_app_AddressType.prototype.setCountry
//
function ws_ebizcard_com_app_AddressType_getCountry() { return this._country;}

ws_ebizcard_com_app_AddressType.prototype.getCountry = ws_ebizcard_com_app_AddressType_getCountry;

function ws_ebizcard_com_app_AddressType_setCountry(value) { this._country = value;}

ws_ebizcard_com_app_AddressType.prototype.setCountry = ws_ebizcard_com_app_AddressType_setCountry;
//
// accessor is ws_ebizcard_com_app_AddressType.prototype.getZipcode
// element get for zipcode
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for zipcode
// setter function is is ws_ebizcard_com_app_AddressType.prototype.setZipcode
//
function ws_ebizcard_com_app_AddressType_getZipcode() { return this._zipcode;}

ws_ebizcard_com_app_AddressType.prototype.getZipcode = ws_ebizcard_com_app_AddressType_getZipcode;

function ws_ebizcard_com_app_AddressType_setZipcode(value) { this._zipcode = value;}

ws_ebizcard_com_app_AddressType.prototype.setZipcode = ws_ebizcard_com_app_AddressType_setZipcode;
//
// Serialize {http://ws.ebizcard.com/app}AddressType
//
function ws_ebizcard_com_app_AddressType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:address1>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._address1);
     xml = xml + '</jns0:address1>';
    }
    // block for local variables
    {
     if (this._address2 != null) {
      xml = xml + '<jns0:address2>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._address2);
      xml = xml + '</jns0:address2>';
     }
    }
    // block for local variables
    {
     if (this._address3 != null) {
      xml = xml + '<jns0:address3>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._address3);
      xml = xml + '</jns0:address3>';
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:city>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._city);
     xml = xml + '</jns0:city>';
    }
    // block for local variables
    {
     if (this._state != null) {
      xml = xml + '<jns0:state>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._state);
      xml = xml + '</jns0:state>';
     }
    }
    // block for local variables
    {
     if (this._country != null) {
      xml = xml + '<jns0:country>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._country);
      xml = xml + '</jns0:country>';
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:zipcode>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._zipcode);
     xml = xml + '</jns0:zipcode>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_AddressType.prototype.serialize = ws_ebizcard_com_app_AddressType_serialize;

function ws_ebizcard_com_app_AddressType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_AddressType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing address1');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setAddress1(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing address2');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'address2')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAddress2(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing address3');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'address3')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAddress3(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing city');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setCity(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing state');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'state')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setState(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing country');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'country')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setCountry(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing zipcode');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setZipcode(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}DeleteFriendCardType
//
function ws_ebizcard_com_app_DeleteFriendCardType () {
    this.typeMarker = 'ws_ebizcard_com_app_DeleteFriendCardType';
    this._SessionKey = '';
    this._UserId = 0;
    this._CardId = [];
}

//
// accessor is ws_ebizcard_com_app_DeleteFriendCardType.prototype.getSessionKey
// element get for SessionKey
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for SessionKey
// setter function is is ws_ebizcard_com_app_DeleteFriendCardType.prototype.setSessionKey
//
function ws_ebizcard_com_app_DeleteFriendCardType_getSessionKey() { return this._SessionKey;}

ws_ebizcard_com_app_DeleteFriendCardType.prototype.getSessionKey = ws_ebizcard_com_app_DeleteFriendCardType_getSessionKey;

function ws_ebizcard_com_app_DeleteFriendCardType_setSessionKey(value) { this._SessionKey = value;}

ws_ebizcard_com_app_DeleteFriendCardType.prototype.setSessionKey = ws_ebizcard_com_app_DeleteFriendCardType_setSessionKey;
//
// accessor is ws_ebizcard_com_app_DeleteFriendCardType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_DeleteFriendCardType.prototype.setUserId
//
function ws_ebizcard_com_app_DeleteFriendCardType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_DeleteFriendCardType.prototype.getUserId = ws_ebizcard_com_app_DeleteFriendCardType_getUserId;

function ws_ebizcard_com_app_DeleteFriendCardType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_DeleteFriendCardType.prototype.setUserId = ws_ebizcard_com_app_DeleteFriendCardType_setUserId;
//
// accessor is ws_ebizcard_com_app_DeleteFriendCardType.prototype.getCardId
// element get for CardId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
//
// element set for CardId
// setter function is is ws_ebizcard_com_app_DeleteFriendCardType.prototype.setCardId
//
function ws_ebizcard_com_app_DeleteFriendCardType_getCardId() { return this._CardId;}

ws_ebizcard_com_app_DeleteFriendCardType.prototype.getCardId = ws_ebizcard_com_app_DeleteFriendCardType_getCardId;

function ws_ebizcard_com_app_DeleteFriendCardType_setCardId(value) { this._CardId = value;}

ws_ebizcard_com_app_DeleteFriendCardType.prototype.setCardId = ws_ebizcard_com_app_DeleteFriendCardType_setCardId;
//
// Serialize {http://ws.ebizcard.com/app}DeleteFriendCardType
//
function ws_ebizcard_com_app_DeleteFriendCardType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:SessionKey>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._SessionKey);
     xml = xml + '</jns0:SessionKey>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    // block for local variables
    {
     if (this._CardId != null) {
      for (var ax = 0;ax < this._CardId.length;ax ++) {
       if (this._CardId[ax] == null) {
        xml = xml + '<jns0:CardId/>';
       } else {
        xml = xml + '<jns0:CardId>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._CardId[ax]);
        xml = xml + '</jns0:CardId>';
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_DeleteFriendCardType.prototype.serialize = ws_ebizcard_com_app_DeleteFriendCardType_serialize;

function ws_ebizcard_com_app_DeleteFriendCardType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_DeleteFriendCardType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing SessionKey');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing CardId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'CardId')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'CardId'));
     newobject.setCardId(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}UpdateUserAccountType
//
function ws_ebizcard_com_app_UpdateUserAccountType () {
    this.typeMarker = 'ws_ebizcard_com_app_UpdateUserAccountType';
    this._SessionKey = '';
    this._Login = null;
    this._UserId = 0;
    this._NewEmail = null;
    this._NewPassword = null;
}

//
// accessor is ws_ebizcard_com_app_UpdateUserAccountType.prototype.getSessionKey
// element get for SessionKey
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for SessionKey
// setter function is is ws_ebizcard_com_app_UpdateUserAccountType.prototype.setSessionKey
//
function ws_ebizcard_com_app_UpdateUserAccountType_getSessionKey() { return this._SessionKey;}

ws_ebizcard_com_app_UpdateUserAccountType.prototype.getSessionKey = ws_ebizcard_com_app_UpdateUserAccountType_getSessionKey;

function ws_ebizcard_com_app_UpdateUserAccountType_setSessionKey(value) { this._SessionKey = value;}

ws_ebizcard_com_app_UpdateUserAccountType.prototype.setSessionKey = ws_ebizcard_com_app_UpdateUserAccountType_setSessionKey;
//
// accessor is ws_ebizcard_com_app_UpdateUserAccountType.prototype.getLogin
// element get for Login
// - element type is {http://ws.ebizcard.com/app}LoginCredentialType
// - required element
//
// element set for Login
// setter function is is ws_ebizcard_com_app_UpdateUserAccountType.prototype.setLogin
//
function ws_ebizcard_com_app_UpdateUserAccountType_getLogin() { return this._Login;}

ws_ebizcard_com_app_UpdateUserAccountType.prototype.getLogin = ws_ebizcard_com_app_UpdateUserAccountType_getLogin;

function ws_ebizcard_com_app_UpdateUserAccountType_setLogin(value) { this._Login = value;}

ws_ebizcard_com_app_UpdateUserAccountType.prototype.setLogin = ws_ebizcard_com_app_UpdateUserAccountType_setLogin;
//
// accessor is ws_ebizcard_com_app_UpdateUserAccountType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_UpdateUserAccountType.prototype.setUserId
//
function ws_ebizcard_com_app_UpdateUserAccountType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_UpdateUserAccountType.prototype.getUserId = ws_ebizcard_com_app_UpdateUserAccountType_getUserId;

function ws_ebizcard_com_app_UpdateUserAccountType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_UpdateUserAccountType.prototype.setUserId = ws_ebizcard_com_app_UpdateUserAccountType_setUserId;
//
// accessor is ws_ebizcard_com_app_UpdateUserAccountType.prototype.getNewEmail
// element get for NewEmail
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for NewEmail
// setter function is is ws_ebizcard_com_app_UpdateUserAccountType.prototype.setNewEmail
//
function ws_ebizcard_com_app_UpdateUserAccountType_getNewEmail() { return this._NewEmail;}

ws_ebizcard_com_app_UpdateUserAccountType.prototype.getNewEmail = ws_ebizcard_com_app_UpdateUserAccountType_getNewEmail;

function ws_ebizcard_com_app_UpdateUserAccountType_setNewEmail(value) { this._NewEmail = value;}

ws_ebizcard_com_app_UpdateUserAccountType.prototype.setNewEmail = ws_ebizcard_com_app_UpdateUserAccountType_setNewEmail;
//
// accessor is ws_ebizcard_com_app_UpdateUserAccountType.prototype.getNewPassword
// element get for NewPassword
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for NewPassword
// setter function is is ws_ebizcard_com_app_UpdateUserAccountType.prototype.setNewPassword
//
function ws_ebizcard_com_app_UpdateUserAccountType_getNewPassword() { return this._NewPassword;}

ws_ebizcard_com_app_UpdateUserAccountType.prototype.getNewPassword = ws_ebizcard_com_app_UpdateUserAccountType_getNewPassword;

function ws_ebizcard_com_app_UpdateUserAccountType_setNewPassword(value) { this._NewPassword = value;}

ws_ebizcard_com_app_UpdateUserAccountType.prototype.setNewPassword = ws_ebizcard_com_app_UpdateUserAccountType_setNewPassword;
//
// Serialize {http://ws.ebizcard.com/app}UpdateUserAccountType
//
function ws_ebizcard_com_app_UpdateUserAccountType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:SessionKey>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._SessionKey);
     xml = xml + '</jns0:SessionKey>';
    }
    // block for local variables
    {
     xml = xml + this._Login.serialize(cxfjsutils, 'jns0:Login', null);
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    // block for local variables
    {
     if (this._NewEmail != null) {
      xml = xml + '<jns0:NewEmail>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._NewEmail);
      xml = xml + '</jns0:NewEmail>';
     }
    }
    // block for local variables
    {
     if (this._NewPassword != null) {
      xml = xml + '<jns0:NewPassword>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._NewPassword);
      xml = xml + '</jns0:NewPassword>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_UpdateUserAccountType.prototype.serialize = ws_ebizcard_com_app_UpdateUserAccountType_serialize;

function ws_ebizcard_com_app_UpdateUserAccountType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_UpdateUserAccountType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing SessionKey');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Login');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_LoginCredentialType_deserialize(cxfjsutils, curElement);
    }
    newobject.setLogin(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing NewEmail');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'NewEmail')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNewEmail(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing NewPassword');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'NewPassword')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNewPassword(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}UpdateFriendCardResponseType
//
function ws_ebizcard_com_app_UpdateFriendCardResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_UpdateFriendCardResponseType';
    this._Result = null;
    this._Card = null;
}

//
// accessor is ws_ebizcard_com_app_UpdateFriendCardResponseType.prototype.getResult
// element get for Result
// - element type is {http://ws.ebizcard.com/app}ResultType
// - required element
//
// element set for Result
// setter function is is ws_ebizcard_com_app_UpdateFriendCardResponseType.prototype.setResult
//
function ws_ebizcard_com_app_UpdateFriendCardResponseType_getResult() { return this._Result;}

ws_ebizcard_com_app_UpdateFriendCardResponseType.prototype.getResult = ws_ebizcard_com_app_UpdateFriendCardResponseType_getResult;

function ws_ebizcard_com_app_UpdateFriendCardResponseType_setResult(value) { this._Result = value;}

ws_ebizcard_com_app_UpdateFriendCardResponseType.prototype.setResult = ws_ebizcard_com_app_UpdateFriendCardResponseType_setResult;
//
// accessor is ws_ebizcard_com_app_UpdateFriendCardResponseType.prototype.getCard
// element get for Card
// - element type is {http://ws.ebizcard.com/app}BizCardType
// - required element
//
// element set for Card
// setter function is is ws_ebizcard_com_app_UpdateFriendCardResponseType.prototype.setCard
//
function ws_ebizcard_com_app_UpdateFriendCardResponseType_getCard() { return this._Card;}

ws_ebizcard_com_app_UpdateFriendCardResponseType.prototype.getCard = ws_ebizcard_com_app_UpdateFriendCardResponseType_getCard;

function ws_ebizcard_com_app_UpdateFriendCardResponseType_setCard(value) { this._Card = value;}

ws_ebizcard_com_app_UpdateFriendCardResponseType.prototype.setCard = ws_ebizcard_com_app_UpdateFriendCardResponseType_setCard;
//
// Serialize {http://ws.ebizcard.com/app}UpdateFriendCardResponseType
//
function ws_ebizcard_com_app_UpdateFriendCardResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
    }
    // block for local variables
    {
     xml = xml + this._Card.serialize(cxfjsutils, 'jns0:Card', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_UpdateFriendCardResponseType.prototype.serialize = ws_ebizcard_com_app_UpdateFriendCardResponseType_serialize;

function ws_ebizcard_com_app_UpdateFriendCardResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_UpdateFriendCardResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_ResultType_deserialize(cxfjsutils, curElement);
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Card');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_BizCardType_deserialize(cxfjsutils, curElement);
    }
    newobject.setCard(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}ExchangeCardType
//
function ws_ebizcard_com_app_ExchangeCardType () {
    this.typeMarker = 'ws_ebizcard_com_app_ExchangeCardType';
    this._SessionKey = '';
    this._UserId = 0;
    this._Requests = [];
}

//
// accessor is ws_ebizcard_com_app_ExchangeCardType.prototype.getSessionKey
// element get for SessionKey
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for SessionKey
// setter function is is ws_ebizcard_com_app_ExchangeCardType.prototype.setSessionKey
//
function ws_ebizcard_com_app_ExchangeCardType_getSessionKey() { return this._SessionKey;}

ws_ebizcard_com_app_ExchangeCardType.prototype.getSessionKey = ws_ebizcard_com_app_ExchangeCardType_getSessionKey;

function ws_ebizcard_com_app_ExchangeCardType_setSessionKey(value) { this._SessionKey = value;}

ws_ebizcard_com_app_ExchangeCardType.prototype.setSessionKey = ws_ebizcard_com_app_ExchangeCardType_setSessionKey;
//
// accessor is ws_ebizcard_com_app_ExchangeCardType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_ExchangeCardType.prototype.setUserId
//
function ws_ebizcard_com_app_ExchangeCardType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_ExchangeCardType.prototype.getUserId = ws_ebizcard_com_app_ExchangeCardType_getUserId;

function ws_ebizcard_com_app_ExchangeCardType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_ExchangeCardType.prototype.setUserId = ws_ebizcard_com_app_ExchangeCardType_setUserId;
//
// accessor is ws_ebizcard_com_app_ExchangeCardType.prototype.getRequests
// element get for Requests
// - element type is {http://ws.ebizcard.com/app}CardRequestType
// - required element
// - array
//
// element set for Requests
// setter function is is ws_ebizcard_com_app_ExchangeCardType.prototype.setRequests
//
function ws_ebizcard_com_app_ExchangeCardType_getRequests() { return this._Requests;}

ws_ebizcard_com_app_ExchangeCardType.prototype.getRequests = ws_ebizcard_com_app_ExchangeCardType_getRequests;

function ws_ebizcard_com_app_ExchangeCardType_setRequests(value) { this._Requests = value;}

ws_ebizcard_com_app_ExchangeCardType.prototype.setRequests = ws_ebizcard_com_app_ExchangeCardType_setRequests;
//
// Serialize {http://ws.ebizcard.com/app}ExchangeCardType
//
function ws_ebizcard_com_app_ExchangeCardType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:SessionKey>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._SessionKey);
     xml = xml + '</jns0:SessionKey>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    // block for local variables
    {
     if (this._Requests != null) {
      for (var ax = 0;ax < this._Requests.length;ax ++) {
       if (this._Requests[ax] == null) {
        xml = xml + '<jns0:Requests/>';
       } else {
        xml = xml + this._Requests[ax].serialize(cxfjsutils, 'jns0:Requests', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_ExchangeCardType.prototype.serialize = ws_ebizcard_com_app_ExchangeCardType_serialize;

function ws_ebizcard_com_app_ExchangeCardType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_ExchangeCardType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing SessionKey');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Requests');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'Requests')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = ws_ebizcard_com_app_CardRequestType_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'Requests'));
     newobject.setRequests(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}UpdateUserAccountResponseType
//
function ws_ebizcard_com_app_UpdateUserAccountResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_UpdateUserAccountResponseType';
    this._Result = null;
}

//
// accessor is ws_ebizcard_com_app_UpdateUserAccountResponseType.prototype.getResult
// element get for Result
// - element type is {http://ws.ebizcard.com/app}ResultType
// - required element
//
// element set for Result
// setter function is is ws_ebizcard_com_app_UpdateUserAccountResponseType.prototype.setResult
//
function ws_ebizcard_com_app_UpdateUserAccountResponseType_getResult() { return this._Result;}

ws_ebizcard_com_app_UpdateUserAccountResponseType.prototype.getResult = ws_ebizcard_com_app_UpdateUserAccountResponseType_getResult;

function ws_ebizcard_com_app_UpdateUserAccountResponseType_setResult(value) { this._Result = value;}

ws_ebizcard_com_app_UpdateUserAccountResponseType.prototype.setResult = ws_ebizcard_com_app_UpdateUserAccountResponseType_setResult;
//
// Serialize {http://ws.ebizcard.com/app}UpdateUserAccountResponseType
//
function ws_ebizcard_com_app_UpdateUserAccountResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_UpdateUserAccountResponseType.prototype.serialize = ws_ebizcard_com_app_UpdateUserAccountResponseType_serialize;

function ws_ebizcard_com_app_UpdateUserAccountResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_UpdateUserAccountResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_ResultType_deserialize(cxfjsutils, curElement);
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}RetrievePasswordResponseType
//
function ws_ebizcard_com_app_RetrievePasswordResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_RetrievePasswordResponseType';
    this._Result = null;
}

//
// accessor is ws_ebizcard_com_app_RetrievePasswordResponseType.prototype.getResult
// element get for Result
// - element type is {http://ws.ebizcard.com/app}ResultType
// - required element
//
// element set for Result
// setter function is is ws_ebizcard_com_app_RetrievePasswordResponseType.prototype.setResult
//
function ws_ebizcard_com_app_RetrievePasswordResponseType_getResult() { return this._Result;}

ws_ebizcard_com_app_RetrievePasswordResponseType.prototype.getResult = ws_ebizcard_com_app_RetrievePasswordResponseType_getResult;

function ws_ebizcard_com_app_RetrievePasswordResponseType_setResult(value) { this._Result = value;}

ws_ebizcard_com_app_RetrievePasswordResponseType.prototype.setResult = ws_ebizcard_com_app_RetrievePasswordResponseType_setResult;
//
// Serialize {http://ws.ebizcard.com/app}RetrievePasswordResponseType
//
function ws_ebizcard_com_app_RetrievePasswordResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_RetrievePasswordResponseType.prototype.serialize = ws_ebizcard_com_app_RetrievePasswordResponseType_serialize;

function ws_ebizcard_com_app_RetrievePasswordResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_RetrievePasswordResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_ResultType_deserialize(cxfjsutils, curElement);
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}GetUserResponseType
//
function ws_ebizcard_com_app_GetUserResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_GetUserResponseType';
    this._ResultUser = null;
    this._Result = null;
}

//
// accessor is ws_ebizcard_com_app_GetUserResponseType.prototype.getResultUser
// element get for ResultUser
// - element type is {http://ws.ebizcard.com/app}UserType
// - optional element
//
// element set for ResultUser
// setter function is is ws_ebizcard_com_app_GetUserResponseType.prototype.setResultUser
//
function ws_ebizcard_com_app_GetUserResponseType_getResultUser() { return this._ResultUser;}

ws_ebizcard_com_app_GetUserResponseType.prototype.getResultUser = ws_ebizcard_com_app_GetUserResponseType_getResultUser;

function ws_ebizcard_com_app_GetUserResponseType_setResultUser(value) { this._ResultUser = value;}

ws_ebizcard_com_app_GetUserResponseType.prototype.setResultUser = ws_ebizcard_com_app_GetUserResponseType_setResultUser;
//
// accessor is ws_ebizcard_com_app_GetUserResponseType.prototype.getResult
// element get for Result
// - element type is {http://ws.ebizcard.com/app}ResultType
// - required element
//
// element set for Result
// setter function is is ws_ebizcard_com_app_GetUserResponseType.prototype.setResult
//
function ws_ebizcard_com_app_GetUserResponseType_getResult() { return this._Result;}

ws_ebizcard_com_app_GetUserResponseType.prototype.getResult = ws_ebizcard_com_app_GetUserResponseType_getResult;

function ws_ebizcard_com_app_GetUserResponseType_setResult(value) { this._Result = value;}

ws_ebizcard_com_app_GetUserResponseType.prototype.setResult = ws_ebizcard_com_app_GetUserResponseType_setResult;
//
// Serialize {http://ws.ebizcard.com/app}GetUserResponseType
//
function ws_ebizcard_com_app_GetUserResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._ResultUser != null) {
      xml = xml + this._ResultUser.serialize(cxfjsutils, 'jns0:ResultUser', null);
     }
    }
    // block for local variables
    {
     xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_GetUserResponseType.prototype.serialize = ws_ebizcard_com_app_GetUserResponseType_serialize;

function ws_ebizcard_com_app_GetUserResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_GetUserResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ResultUser');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'ResultUser')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = ws_ebizcard_com_app_UserType_deserialize(cxfjsutils, curElement);
     }
     newobject.setResultUser(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_ResultType_deserialize(cxfjsutils, curElement);
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}UserInfoType
//
function ws_ebizcard_com_app_UserInfoType () {
    this.typeMarker = 'ws_ebizcard_com_app_UserInfoType';
    this._Name = '';
    this._FirstName = '';
    this._MiddleName = null;
    this._LastName = '';
    this._JobTitle = null;
    this._Employer = null;
    this._BizTelephone = null;
    this._HomeTelephone = null;
    this._MobileTelephone = null;
    this._Fax = null;
    this._Address = null;
    this._Email = null;
    this._URL = null;
    this._IsPublic = 'true';
    this._IsRequestable = 'false';
}

//
// accessor is ws_ebizcard_com_app_UserInfoType.prototype.getName
// element get for Name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for Name
// setter function is is ws_ebizcard_com_app_UserInfoType.prototype.setName
//
function ws_ebizcard_com_app_UserInfoType_getName() { return this._Name;}

ws_ebizcard_com_app_UserInfoType.prototype.getName = ws_ebizcard_com_app_UserInfoType_getName;

function ws_ebizcard_com_app_UserInfoType_setName(value) { this._Name = value;}

ws_ebizcard_com_app_UserInfoType.prototype.setName = ws_ebizcard_com_app_UserInfoType_setName;
//
// accessor is ws_ebizcard_com_app_UserInfoType.prototype.getFirstName
// element get for FirstName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for FirstName
// setter function is is ws_ebizcard_com_app_UserInfoType.prototype.setFirstName
//
function ws_ebizcard_com_app_UserInfoType_getFirstName() { return this._FirstName;}

ws_ebizcard_com_app_UserInfoType.prototype.getFirstName = ws_ebizcard_com_app_UserInfoType_getFirstName;

function ws_ebizcard_com_app_UserInfoType_setFirstName(value) { this._FirstName = value;}

ws_ebizcard_com_app_UserInfoType.prototype.setFirstName = ws_ebizcard_com_app_UserInfoType_setFirstName;
//
// accessor is ws_ebizcard_com_app_UserInfoType.prototype.getMiddleName
// element get for MiddleName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for MiddleName
// setter function is is ws_ebizcard_com_app_UserInfoType.prototype.setMiddleName
//
function ws_ebizcard_com_app_UserInfoType_getMiddleName() { return this._MiddleName;}

ws_ebizcard_com_app_UserInfoType.prototype.getMiddleName = ws_ebizcard_com_app_UserInfoType_getMiddleName;

function ws_ebizcard_com_app_UserInfoType_setMiddleName(value) { this._MiddleName = value;}

ws_ebizcard_com_app_UserInfoType.prototype.setMiddleName = ws_ebizcard_com_app_UserInfoType_setMiddleName;
//
// accessor is ws_ebizcard_com_app_UserInfoType.prototype.getLastName
// element get for LastName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for LastName
// setter function is is ws_ebizcard_com_app_UserInfoType.prototype.setLastName
//
function ws_ebizcard_com_app_UserInfoType_getLastName() { return this._LastName;}

ws_ebizcard_com_app_UserInfoType.prototype.getLastName = ws_ebizcard_com_app_UserInfoType_getLastName;

function ws_ebizcard_com_app_UserInfoType_setLastName(value) { this._LastName = value;}

ws_ebizcard_com_app_UserInfoType.prototype.setLastName = ws_ebizcard_com_app_UserInfoType_setLastName;
//
// accessor is ws_ebizcard_com_app_UserInfoType.prototype.getJobTitle
// element get for JobTitle
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for JobTitle
// setter function is is ws_ebizcard_com_app_UserInfoType.prototype.setJobTitle
//
function ws_ebizcard_com_app_UserInfoType_getJobTitle() { return this._JobTitle;}

ws_ebizcard_com_app_UserInfoType.prototype.getJobTitle = ws_ebizcard_com_app_UserInfoType_getJobTitle;

function ws_ebizcard_com_app_UserInfoType_setJobTitle(value) { this._JobTitle = value;}

ws_ebizcard_com_app_UserInfoType.prototype.setJobTitle = ws_ebizcard_com_app_UserInfoType_setJobTitle;
//
// accessor is ws_ebizcard_com_app_UserInfoType.prototype.getEmployer
// element get for Employer
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for Employer
// setter function is is ws_ebizcard_com_app_UserInfoType.prototype.setEmployer
//
function ws_ebizcard_com_app_UserInfoType_getEmployer() { return this._Employer;}

ws_ebizcard_com_app_UserInfoType.prototype.getEmployer = ws_ebizcard_com_app_UserInfoType_getEmployer;

function ws_ebizcard_com_app_UserInfoType_setEmployer(value) { this._Employer = value;}

ws_ebizcard_com_app_UserInfoType.prototype.setEmployer = ws_ebizcard_com_app_UserInfoType_setEmployer;
//
// accessor is ws_ebizcard_com_app_UserInfoType.prototype.getBizTelephone
// element get for BizTelephone
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for BizTelephone
// setter function is is ws_ebizcard_com_app_UserInfoType.prototype.setBizTelephone
//
function ws_ebizcard_com_app_UserInfoType_getBizTelephone() { return this._BizTelephone;}

ws_ebizcard_com_app_UserInfoType.prototype.getBizTelephone = ws_ebizcard_com_app_UserInfoType_getBizTelephone;

function ws_ebizcard_com_app_UserInfoType_setBizTelephone(value) { this._BizTelephone = value;}

ws_ebizcard_com_app_UserInfoType.prototype.setBizTelephone = ws_ebizcard_com_app_UserInfoType_setBizTelephone;
//
// accessor is ws_ebizcard_com_app_UserInfoType.prototype.getHomeTelephone
// element get for HomeTelephone
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for HomeTelephone
// setter function is is ws_ebizcard_com_app_UserInfoType.prototype.setHomeTelephone
//
function ws_ebizcard_com_app_UserInfoType_getHomeTelephone() { return this._HomeTelephone;}

ws_ebizcard_com_app_UserInfoType.prototype.getHomeTelephone = ws_ebizcard_com_app_UserInfoType_getHomeTelephone;

function ws_ebizcard_com_app_UserInfoType_setHomeTelephone(value) { this._HomeTelephone = value;}

ws_ebizcard_com_app_UserInfoType.prototype.setHomeTelephone = ws_ebizcard_com_app_UserInfoType_setHomeTelephone;
//
// accessor is ws_ebizcard_com_app_UserInfoType.prototype.getMobileTelephone
// element get for MobileTelephone
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for MobileTelephone
// setter function is is ws_ebizcard_com_app_UserInfoType.prototype.setMobileTelephone
//
function ws_ebizcard_com_app_UserInfoType_getMobileTelephone() { return this._MobileTelephone;}

ws_ebizcard_com_app_UserInfoType.prototype.getMobileTelephone = ws_ebizcard_com_app_UserInfoType_getMobileTelephone;

function ws_ebizcard_com_app_UserInfoType_setMobileTelephone(value) { this._MobileTelephone = value;}

ws_ebizcard_com_app_UserInfoType.prototype.setMobileTelephone = ws_ebizcard_com_app_UserInfoType_setMobileTelephone;
//
// accessor is ws_ebizcard_com_app_UserInfoType.prototype.getFax
// element get for Fax
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for Fax
// setter function is is ws_ebizcard_com_app_UserInfoType.prototype.setFax
//
function ws_ebizcard_com_app_UserInfoType_getFax() { return this._Fax;}

ws_ebizcard_com_app_UserInfoType.prototype.getFax = ws_ebizcard_com_app_UserInfoType_getFax;

function ws_ebizcard_com_app_UserInfoType_setFax(value) { this._Fax = value;}

ws_ebizcard_com_app_UserInfoType.prototype.setFax = ws_ebizcard_com_app_UserInfoType_setFax;
//
// accessor is ws_ebizcard_com_app_UserInfoType.prototype.getAddress
// element get for Address
// - element type is {http://ws.ebizcard.com/app}AddressType
// - optional element
//
// element set for Address
// setter function is is ws_ebizcard_com_app_UserInfoType.prototype.setAddress
//
function ws_ebizcard_com_app_UserInfoType_getAddress() { return this._Address;}

ws_ebizcard_com_app_UserInfoType.prototype.getAddress = ws_ebizcard_com_app_UserInfoType_getAddress;

function ws_ebizcard_com_app_UserInfoType_setAddress(value) { this._Address = value;}

ws_ebizcard_com_app_UserInfoType.prototype.setAddress = ws_ebizcard_com_app_UserInfoType_setAddress;
//
// accessor is ws_ebizcard_com_app_UserInfoType.prototype.getEmail
// element get for Email
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for Email
// setter function is is ws_ebizcard_com_app_UserInfoType.prototype.setEmail
//
function ws_ebizcard_com_app_UserInfoType_getEmail() { return this._Email;}

ws_ebizcard_com_app_UserInfoType.prototype.getEmail = ws_ebizcard_com_app_UserInfoType_getEmail;

function ws_ebizcard_com_app_UserInfoType_setEmail(value) { this._Email = value;}

ws_ebizcard_com_app_UserInfoType.prototype.setEmail = ws_ebizcard_com_app_UserInfoType_setEmail;
//
// accessor is ws_ebizcard_com_app_UserInfoType.prototype.getURL
// element get for URL
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for URL
// setter function is is ws_ebizcard_com_app_UserInfoType.prototype.setURL
//
function ws_ebizcard_com_app_UserInfoType_getURL() { return this._URL;}

ws_ebizcard_com_app_UserInfoType.prototype.getURL = ws_ebizcard_com_app_UserInfoType_getURL;

function ws_ebizcard_com_app_UserInfoType_setURL(value) { this._URL = value;}

ws_ebizcard_com_app_UserInfoType.prototype.setURL = ws_ebizcard_com_app_UserInfoType_setURL;
//
// accessor is ws_ebizcard_com_app_UserInfoType.prototype.getIsPublic
// element get for IsPublic
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for IsPublic
// setter function is is ws_ebizcard_com_app_UserInfoType.prototype.setIsPublic
//
function ws_ebizcard_com_app_UserInfoType_getIsPublic() { return this._IsPublic;}

ws_ebizcard_com_app_UserInfoType.prototype.getIsPublic = ws_ebizcard_com_app_UserInfoType_getIsPublic;

function ws_ebizcard_com_app_UserInfoType_setIsPublic(value) { this._IsPublic = value;}

ws_ebizcard_com_app_UserInfoType.prototype.setIsPublic = ws_ebizcard_com_app_UserInfoType_setIsPublic;
//
// accessor is ws_ebizcard_com_app_UserInfoType.prototype.getIsRequestable
// element get for IsRequestable
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for IsRequestable
// setter function is is ws_ebizcard_com_app_UserInfoType.prototype.setIsRequestable
//
function ws_ebizcard_com_app_UserInfoType_getIsRequestable() { return this._IsRequestable;}

ws_ebizcard_com_app_UserInfoType.prototype.getIsRequestable = ws_ebizcard_com_app_UserInfoType_getIsRequestable;

function ws_ebizcard_com_app_UserInfoType_setIsRequestable(value) { this._IsRequestable = value;}

ws_ebizcard_com_app_UserInfoType.prototype.setIsRequestable = ws_ebizcard_com_app_UserInfoType_setIsRequestable;
//
// Serialize {http://ws.ebizcard.com/app}UserInfoType
//
function ws_ebizcard_com_app_UserInfoType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:Name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._Name);
     xml = xml + '</jns0:Name>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:FirstName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._FirstName);
     xml = xml + '</jns0:FirstName>';
    }
    // block for local variables
    {
     if (this._MiddleName != null) {
      xml = xml + '<jns0:MiddleName>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._MiddleName);
      xml = xml + '</jns0:MiddleName>';
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:LastName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._LastName);
     xml = xml + '</jns0:LastName>';
    }
    // block for local variables
    {
     if (this._JobTitle != null) {
      xml = xml + '<jns0:JobTitle>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._JobTitle);
      xml = xml + '</jns0:JobTitle>';
     }
    }
    // block for local variables
    {
     if (this._Employer != null) {
      xml = xml + '<jns0:Employer>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Employer);
      xml = xml + '</jns0:Employer>';
     }
    }
    // block for local variables
    {
     if (this._BizTelephone != null) {
      xml = xml + '<jns0:BizTelephone>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._BizTelephone);
      xml = xml + '</jns0:BizTelephone>';
     }
    }
    // block for local variables
    {
     if (this._HomeTelephone != null) {
      xml = xml + '<jns0:HomeTelephone>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._HomeTelephone);
      xml = xml + '</jns0:HomeTelephone>';
     }
    }
    // block for local variables
    {
     if (this._MobileTelephone != null) {
      xml = xml + '<jns0:MobileTelephone>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._MobileTelephone);
      xml = xml + '</jns0:MobileTelephone>';
     }
    }
    // block for local variables
    {
     if (this._Fax != null) {
      xml = xml + '<jns0:Fax>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Fax);
      xml = xml + '</jns0:Fax>';
     }
    }
    // block for local variables
    {
     if (this._Address != null) {
      xml = xml + this._Address.serialize(cxfjsutils, 'jns0:Address', null);
     }
    }
    // block for local variables
    {
     if (this._Email != null) {
      xml = xml + '<jns0:Email>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Email);
      xml = xml + '</jns0:Email>';
     }
    }
    // block for local variables
    {
     if (this._URL != null) {
      xml = xml + '<jns0:URL>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._URL);
      xml = xml + '</jns0:URL>';
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:IsPublic>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._IsPublic);
     xml = xml + '</jns0:IsPublic>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:IsRequestable>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._IsRequestable);
     xml = xml + '</jns0:IsRequestable>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_UserInfoType.prototype.serialize = ws_ebizcard_com_app_UserInfoType_serialize;

function ws_ebizcard_com_app_UserInfoType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_UserInfoType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing FirstName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setFirstName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing MiddleName');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'MiddleName')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setMiddleName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing LastName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setLastName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing JobTitle');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'JobTitle')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setJobTitle(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Employer');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'Employer')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setEmployer(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing BizTelephone');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'BizTelephone')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setBizTelephone(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing HomeTelephone');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'HomeTelephone')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setHomeTelephone(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing MobileTelephone');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'MobileTelephone')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setMobileTelephone(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Fax');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'Fax')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setFax(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Address');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'Address')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = ws_ebizcard_com_app_AddressType_deserialize(cxfjsutils, curElement);
     }
     newobject.setAddress(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Email');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'Email')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setEmail(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing URL');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'URL')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setURL(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing IsPublic');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setIsPublic(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing IsRequestable');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setIsRequestable(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}RequestCardType
//
function ws_ebizcard_com_app_RequestCardType () {
    this.typeMarker = 'ws_ebizcard_com_app_RequestCardType';
    this._SessionKey = '';
    this._UserId = 0;
    this._TargetUserId = 0;
}

//
// accessor is ws_ebizcard_com_app_RequestCardType.prototype.getSessionKey
// element get for SessionKey
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for SessionKey
// setter function is is ws_ebizcard_com_app_RequestCardType.prototype.setSessionKey
//
function ws_ebizcard_com_app_RequestCardType_getSessionKey() { return this._SessionKey;}

ws_ebizcard_com_app_RequestCardType.prototype.getSessionKey = ws_ebizcard_com_app_RequestCardType_getSessionKey;

function ws_ebizcard_com_app_RequestCardType_setSessionKey(value) { this._SessionKey = value;}

ws_ebizcard_com_app_RequestCardType.prototype.setSessionKey = ws_ebizcard_com_app_RequestCardType_setSessionKey;
//
// accessor is ws_ebizcard_com_app_RequestCardType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_RequestCardType.prototype.setUserId
//
function ws_ebizcard_com_app_RequestCardType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_RequestCardType.prototype.getUserId = ws_ebizcard_com_app_RequestCardType_getUserId;

function ws_ebizcard_com_app_RequestCardType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_RequestCardType.prototype.setUserId = ws_ebizcard_com_app_RequestCardType_setUserId;
//
// accessor is ws_ebizcard_com_app_RequestCardType.prototype.getTargetUserId
// element get for TargetUserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for TargetUserId
// setter function is is ws_ebizcard_com_app_RequestCardType.prototype.setTargetUserId
//
function ws_ebizcard_com_app_RequestCardType_getTargetUserId() { return this._TargetUserId;}

ws_ebizcard_com_app_RequestCardType.prototype.getTargetUserId = ws_ebizcard_com_app_RequestCardType_getTargetUserId;

function ws_ebizcard_com_app_RequestCardType_setTargetUserId(value) { this._TargetUserId = value;}

ws_ebizcard_com_app_RequestCardType.prototype.setTargetUserId = ws_ebizcard_com_app_RequestCardType_setTargetUserId;
//
// Serialize {http://ws.ebizcard.com/app}RequestCardType
//
function ws_ebizcard_com_app_RequestCardType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:SessionKey>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._SessionKey);
     xml = xml + '</jns0:SessionKey>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:TargetUserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._TargetUserId);
     xml = xml + '</jns0:TargetUserId>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_RequestCardType.prototype.serialize = ws_ebizcard_com_app_RequestCardType_serialize;

function ws_ebizcard_com_app_RequestCardType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_RequestCardType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing SessionKey');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing TargetUserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setTargetUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}LoginCredentialType
//
function ws_ebizcard_com_app_LoginCredentialType () {
    this.typeMarker = 'ws_ebizcard_com_app_LoginCredentialType';
    this._UserEmail = '';
    this._Password = '';
}

//
// accessor is ws_ebizcard_com_app_LoginCredentialType.prototype.getUserEmail
// element get for UserEmail
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for UserEmail
// setter function is is ws_ebizcard_com_app_LoginCredentialType.prototype.setUserEmail
//
function ws_ebizcard_com_app_LoginCredentialType_getUserEmail() { return this._UserEmail;}

ws_ebizcard_com_app_LoginCredentialType.prototype.getUserEmail = ws_ebizcard_com_app_LoginCredentialType_getUserEmail;

function ws_ebizcard_com_app_LoginCredentialType_setUserEmail(value) { this._UserEmail = value;}

ws_ebizcard_com_app_LoginCredentialType.prototype.setUserEmail = ws_ebizcard_com_app_LoginCredentialType_setUserEmail;
//
// accessor is ws_ebizcard_com_app_LoginCredentialType.prototype.getPassword
// element get for Password
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for Password
// setter function is is ws_ebizcard_com_app_LoginCredentialType.prototype.setPassword
//
function ws_ebizcard_com_app_LoginCredentialType_getPassword() { return this._Password;}

ws_ebizcard_com_app_LoginCredentialType.prototype.getPassword = ws_ebizcard_com_app_LoginCredentialType_getPassword;

function ws_ebizcard_com_app_LoginCredentialType_setPassword(value) { this._Password = value;}

ws_ebizcard_com_app_LoginCredentialType.prototype.setPassword = ws_ebizcard_com_app_LoginCredentialType_setPassword;
//
// Serialize {http://ws.ebizcard.com/app}LoginCredentialType
//
function ws_ebizcard_com_app_LoginCredentialType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserEmail>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserEmail);
     xml = xml + '</jns0:UserEmail>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:Password>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._Password);
     xml = xml + '</jns0:Password>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_LoginCredentialType.prototype.serialize = ws_ebizcard_com_app_LoginCredentialType_serialize;

function ws_ebizcard_com_app_LoginCredentialType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_LoginCredentialType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserEmail');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setUserEmail(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Password');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPassword(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}ResultType
//
function ws_ebizcard_com_app_ResultType () {
    this.typeMarker = 'ws_ebizcard_com_app_ResultType';
    this._id = null;
    this._successful = '';
    this._failureReasonCode = null;
    this._exception = null;
    this._failureReason = null;
}

//
// accessor is ws_ebizcard_com_app_ResultType.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - optional element
//
// element set for id
// setter function is is ws_ebizcard_com_app_ResultType.prototype.setId
//
function ws_ebizcard_com_app_ResultType_getId() { return this._id;}

ws_ebizcard_com_app_ResultType.prototype.getId = ws_ebizcard_com_app_ResultType_getId;

function ws_ebizcard_com_app_ResultType_setId(value) { this._id = value;}

ws_ebizcard_com_app_ResultType.prototype.setId = ws_ebizcard_com_app_ResultType_setId;
//
// accessor is ws_ebizcard_com_app_ResultType.prototype.getSuccessful
// element get for successful
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for successful
// setter function is is ws_ebizcard_com_app_ResultType.prototype.setSuccessful
//
function ws_ebizcard_com_app_ResultType_getSuccessful() { return this._successful;}

ws_ebizcard_com_app_ResultType.prototype.getSuccessful = ws_ebizcard_com_app_ResultType_getSuccessful;

function ws_ebizcard_com_app_ResultType_setSuccessful(value) { this._successful = value;}

ws_ebizcard_com_app_ResultType.prototype.setSuccessful = ws_ebizcard_com_app_ResultType_setSuccessful;
//
// accessor is ws_ebizcard_com_app_ResultType.prototype.getFailureReasonCode
// element get for failureReasonCode
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for failureReasonCode
// setter function is is ws_ebizcard_com_app_ResultType.prototype.setFailureReasonCode
//
function ws_ebizcard_com_app_ResultType_getFailureReasonCode() { return this._failureReasonCode;}

ws_ebizcard_com_app_ResultType.prototype.getFailureReasonCode = ws_ebizcard_com_app_ResultType_getFailureReasonCode;

function ws_ebizcard_com_app_ResultType_setFailureReasonCode(value) { this._failureReasonCode = value;}

ws_ebizcard_com_app_ResultType.prototype.setFailureReasonCode = ws_ebizcard_com_app_ResultType_setFailureReasonCode;
//
// accessor is ws_ebizcard_com_app_ResultType.prototype.getException
// element get for exception
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for exception
// setter function is is ws_ebizcard_com_app_ResultType.prototype.setException
//
function ws_ebizcard_com_app_ResultType_getException() { return this._exception;}

ws_ebizcard_com_app_ResultType.prototype.getException = ws_ebizcard_com_app_ResultType_getException;

function ws_ebizcard_com_app_ResultType_setException(value) { this._exception = value;}

ws_ebizcard_com_app_ResultType.prototype.setException = ws_ebizcard_com_app_ResultType_setException;
//
// accessor is ws_ebizcard_com_app_ResultType.prototype.getFailureReason
// element get for failureReason
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for failureReason
// setter function is is ws_ebizcard_com_app_ResultType.prototype.setFailureReason
//
function ws_ebizcard_com_app_ResultType_getFailureReason() { return this._failureReason;}

ws_ebizcard_com_app_ResultType.prototype.getFailureReason = ws_ebizcard_com_app_ResultType_getFailureReason;

function ws_ebizcard_com_app_ResultType_setFailureReason(value) { this._failureReason = value;}

ws_ebizcard_com_app_ResultType.prototype.setFailureReason = ws_ebizcard_com_app_ResultType_setFailureReason;
//
// Serialize {http://ws.ebizcard.com/app}ResultType
//
function ws_ebizcard_com_app_ResultType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._id != null) {
      xml = xml + '<jns0:id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._id);
      xml = xml + '</jns0:id>';
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:successful>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._successful);
     xml = xml + '</jns0:successful>';
    }
    // block for local variables
    {
     if (this._failureReasonCode != null) {
      xml = xml + '<jns0:failureReasonCode>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._failureReasonCode);
      xml = xml + '</jns0:failureReasonCode>';
     }
    }
    // block for local variables
    {
     if (this._exception != null) {
      xml = xml + '<jns0:exception>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._exception);
      xml = xml + '</jns0:exception>';
     }
    }
    // block for local variables
    {
     if (this._failureReason != null) {
      xml = xml + '<jns0:failureReason>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._failureReason);
      xml = xml + '</jns0:failureReason>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_ResultType.prototype.serialize = ws_ebizcard_com_app_ResultType_serialize;

function ws_ebizcard_com_app_ResultType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_ResultType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing successful');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setSuccessful(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing failureReasonCode');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'failureReasonCode')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setFailureReasonCode(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing exception');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'exception')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setException(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing failureReason');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'failureReason')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setFailureReason(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}UpdateOwnCardResponseType
//
function ws_ebizcard_com_app_UpdateOwnCardResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_UpdateOwnCardResponseType';
    this._Result = null;
    this._UserInfo = null;
}

//
// accessor is ws_ebizcard_com_app_UpdateOwnCardResponseType.prototype.getResult
// element get for Result
// - element type is {http://ws.ebizcard.com/app}ResultType
// - required element
//
// element set for Result
// setter function is is ws_ebizcard_com_app_UpdateOwnCardResponseType.prototype.setResult
//
function ws_ebizcard_com_app_UpdateOwnCardResponseType_getResult() { return this._Result;}

ws_ebizcard_com_app_UpdateOwnCardResponseType.prototype.getResult = ws_ebizcard_com_app_UpdateOwnCardResponseType_getResult;

function ws_ebizcard_com_app_UpdateOwnCardResponseType_setResult(value) { this._Result = value;}

ws_ebizcard_com_app_UpdateOwnCardResponseType.prototype.setResult = ws_ebizcard_com_app_UpdateOwnCardResponseType_setResult;
//
// accessor is ws_ebizcard_com_app_UpdateOwnCardResponseType.prototype.getUserInfo
// element get for UserInfo
// - element type is {http://ws.ebizcard.com/app}UserInfoType
// - required element
//
// element set for UserInfo
// setter function is is ws_ebizcard_com_app_UpdateOwnCardResponseType.prototype.setUserInfo
//
function ws_ebizcard_com_app_UpdateOwnCardResponseType_getUserInfo() { return this._UserInfo;}

ws_ebizcard_com_app_UpdateOwnCardResponseType.prototype.getUserInfo = ws_ebizcard_com_app_UpdateOwnCardResponseType_getUserInfo;

function ws_ebizcard_com_app_UpdateOwnCardResponseType_setUserInfo(value) { this._UserInfo = value;}

ws_ebizcard_com_app_UpdateOwnCardResponseType.prototype.setUserInfo = ws_ebizcard_com_app_UpdateOwnCardResponseType_setUserInfo;
//
// Serialize {http://ws.ebizcard.com/app}UpdateOwnCardResponseType
//
function ws_ebizcard_com_app_UpdateOwnCardResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
    }
    // block for local variables
    {
     xml = xml + this._UserInfo.serialize(cxfjsutils, 'jns0:UserInfo', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_UpdateOwnCardResponseType.prototype.serialize = ws_ebizcard_com_app_UpdateOwnCardResponseType_serialize;

function ws_ebizcard_com_app_UpdateOwnCardResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_UpdateOwnCardResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_ResultType_deserialize(cxfjsutils, curElement);
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserInfo');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_UserInfoType_deserialize(cxfjsutils, curElement);
    }
    newobject.setUserInfo(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}ListFriendCardsType
//
function ws_ebizcard_com_app_ListFriendCardsType () {
    this.typeMarker = 'ws_ebizcard_com_app_ListFriendCardsType';
    this._SessionKey = '';
    this._UserId = 0;
    this._IsAscending = 'true';
    this._PageNum = 0;
}

//
// accessor is ws_ebizcard_com_app_ListFriendCardsType.prototype.getSessionKey
// element get for SessionKey
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for SessionKey
// setter function is is ws_ebizcard_com_app_ListFriendCardsType.prototype.setSessionKey
//
function ws_ebizcard_com_app_ListFriendCardsType_getSessionKey() { return this._SessionKey;}

ws_ebizcard_com_app_ListFriendCardsType.prototype.getSessionKey = ws_ebizcard_com_app_ListFriendCardsType_getSessionKey;

function ws_ebizcard_com_app_ListFriendCardsType_setSessionKey(value) { this._SessionKey = value;}

ws_ebizcard_com_app_ListFriendCardsType.prototype.setSessionKey = ws_ebizcard_com_app_ListFriendCardsType_setSessionKey;
//
// accessor is ws_ebizcard_com_app_ListFriendCardsType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_ListFriendCardsType.prototype.setUserId
//
function ws_ebizcard_com_app_ListFriendCardsType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_ListFriendCardsType.prototype.getUserId = ws_ebizcard_com_app_ListFriendCardsType_getUserId;

function ws_ebizcard_com_app_ListFriendCardsType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_ListFriendCardsType.prototype.setUserId = ws_ebizcard_com_app_ListFriendCardsType_setUserId;
//
// accessor is ws_ebizcard_com_app_ListFriendCardsType.prototype.getIsAscending
// element get for IsAscending
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for IsAscending
// setter function is is ws_ebizcard_com_app_ListFriendCardsType.prototype.setIsAscending
//
function ws_ebizcard_com_app_ListFriendCardsType_getIsAscending() { return this._IsAscending;}

ws_ebizcard_com_app_ListFriendCardsType.prototype.getIsAscending = ws_ebizcard_com_app_ListFriendCardsType_getIsAscending;

function ws_ebizcard_com_app_ListFriendCardsType_setIsAscending(value) { this._IsAscending = value;}

ws_ebizcard_com_app_ListFriendCardsType.prototype.setIsAscending = ws_ebizcard_com_app_ListFriendCardsType_setIsAscending;
//
// accessor is ws_ebizcard_com_app_ListFriendCardsType.prototype.getPageNum
// element get for PageNum
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for PageNum
// setter function is is ws_ebizcard_com_app_ListFriendCardsType.prototype.setPageNum
//
function ws_ebizcard_com_app_ListFriendCardsType_getPageNum() { return this._PageNum;}

ws_ebizcard_com_app_ListFriendCardsType.prototype.getPageNum = ws_ebizcard_com_app_ListFriendCardsType_getPageNum;

function ws_ebizcard_com_app_ListFriendCardsType_setPageNum(value) { this._PageNum = value;}

ws_ebizcard_com_app_ListFriendCardsType.prototype.setPageNum = ws_ebizcard_com_app_ListFriendCardsType_setPageNum;
//
// Serialize {http://ws.ebizcard.com/app}ListFriendCardsType
//
function ws_ebizcard_com_app_ListFriendCardsType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:SessionKey>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._SessionKey);
     xml = xml + '</jns0:SessionKey>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:IsAscending>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._IsAscending);
     xml = xml + '</jns0:IsAscending>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:PageNum>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._PageNum);
     xml = xml + '</jns0:PageNum>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_ListFriendCardsType.prototype.serialize = ws_ebizcard_com_app_ListFriendCardsType_serialize;

function ws_ebizcard_com_app_ListFriendCardsType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_ListFriendCardsType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing SessionKey');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing IsAscending');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setIsAscending(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing PageNum');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setPageNum(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}BizCardType
//
function ws_ebizcard_com_app_BizCardType () {
    this.typeMarker = 'ws_ebizcard_com_app_BizCardType';
    this._CardId = 0;
    this._Name = '';
    this._Owner = null;
    this._FirstName = '';
    this._MiddleName = null;
    this._LastName = '';
    this._JobTitle = null;
    this._Employer = null;
    this._BizTelephone = null;
    this._HomeTelephone = null;
    this._MobileTelephone = null;
    this._Fax = null;
    this._Address = null;
    this._Email = null;
    this._URL = null;
    this._CardTemplateId = 0;
}

//
// accessor is ws_ebizcard_com_app_BizCardType.prototype.getCardId
// element get for CardId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for CardId
// setter function is is ws_ebizcard_com_app_BizCardType.prototype.setCardId
//
function ws_ebizcard_com_app_BizCardType_getCardId() { return this._CardId;}

ws_ebizcard_com_app_BizCardType.prototype.getCardId = ws_ebizcard_com_app_BizCardType_getCardId;

function ws_ebizcard_com_app_BizCardType_setCardId(value) { this._CardId = value;}

ws_ebizcard_com_app_BizCardType.prototype.setCardId = ws_ebizcard_com_app_BizCardType_setCardId;
//
// accessor is ws_ebizcard_com_app_BizCardType.prototype.getName
// element get for Name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for Name
// setter function is is ws_ebizcard_com_app_BizCardType.prototype.setName
//
function ws_ebizcard_com_app_BizCardType_getName() { return this._Name;}

ws_ebizcard_com_app_BizCardType.prototype.getName = ws_ebizcard_com_app_BizCardType_getName;

function ws_ebizcard_com_app_BizCardType_setName(value) { this._Name = value;}

ws_ebizcard_com_app_BizCardType.prototype.setName = ws_ebizcard_com_app_BizCardType_setName;
//
// accessor is ws_ebizcard_com_app_BizCardType.prototype.getOwner
// element get for Owner
// - element type is {http://ws.ebizcard.com/app}UserType
// - optional element
//
// element set for Owner
// setter function is is ws_ebizcard_com_app_BizCardType.prototype.setOwner
//
function ws_ebizcard_com_app_BizCardType_getOwner() { return this._Owner;}

ws_ebizcard_com_app_BizCardType.prototype.getOwner = ws_ebizcard_com_app_BizCardType_getOwner;

function ws_ebizcard_com_app_BizCardType_setOwner(value) { this._Owner = value;}

ws_ebizcard_com_app_BizCardType.prototype.setOwner = ws_ebizcard_com_app_BizCardType_setOwner;
//
// accessor is ws_ebizcard_com_app_BizCardType.prototype.getFirstName
// element get for FirstName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for FirstName
// setter function is is ws_ebizcard_com_app_BizCardType.prototype.setFirstName
//
function ws_ebizcard_com_app_BizCardType_getFirstName() { return this._FirstName;}

ws_ebizcard_com_app_BizCardType.prototype.getFirstName = ws_ebizcard_com_app_BizCardType_getFirstName;

function ws_ebizcard_com_app_BizCardType_setFirstName(value) { this._FirstName = value;}

ws_ebizcard_com_app_BizCardType.prototype.setFirstName = ws_ebizcard_com_app_BizCardType_setFirstName;
//
// accessor is ws_ebizcard_com_app_BizCardType.prototype.getMiddleName
// element get for MiddleName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for MiddleName
// setter function is is ws_ebizcard_com_app_BizCardType.prototype.setMiddleName
//
function ws_ebizcard_com_app_BizCardType_getMiddleName() { return this._MiddleName;}

ws_ebizcard_com_app_BizCardType.prototype.getMiddleName = ws_ebizcard_com_app_BizCardType_getMiddleName;

function ws_ebizcard_com_app_BizCardType_setMiddleName(value) { this._MiddleName = value;}

ws_ebizcard_com_app_BizCardType.prototype.setMiddleName = ws_ebizcard_com_app_BizCardType_setMiddleName;
//
// accessor is ws_ebizcard_com_app_BizCardType.prototype.getLastName
// element get for LastName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for LastName
// setter function is is ws_ebizcard_com_app_BizCardType.prototype.setLastName
//
function ws_ebizcard_com_app_BizCardType_getLastName() { return this._LastName;}

ws_ebizcard_com_app_BizCardType.prototype.getLastName = ws_ebizcard_com_app_BizCardType_getLastName;

function ws_ebizcard_com_app_BizCardType_setLastName(value) { this._LastName = value;}

ws_ebizcard_com_app_BizCardType.prototype.setLastName = ws_ebizcard_com_app_BizCardType_setLastName;
//
// accessor is ws_ebizcard_com_app_BizCardType.prototype.getJobTitle
// element get for JobTitle
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for JobTitle
// setter function is is ws_ebizcard_com_app_BizCardType.prototype.setJobTitle
//
function ws_ebizcard_com_app_BizCardType_getJobTitle() { return this._JobTitle;}

ws_ebizcard_com_app_BizCardType.prototype.getJobTitle = ws_ebizcard_com_app_BizCardType_getJobTitle;

function ws_ebizcard_com_app_BizCardType_setJobTitle(value) { this._JobTitle = value;}

ws_ebizcard_com_app_BizCardType.prototype.setJobTitle = ws_ebizcard_com_app_BizCardType_setJobTitle;
//
// accessor is ws_ebizcard_com_app_BizCardType.prototype.getEmployer
// element get for Employer
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for Employer
// setter function is is ws_ebizcard_com_app_BizCardType.prototype.setEmployer
//
function ws_ebizcard_com_app_BizCardType_getEmployer() { return this._Employer;}

ws_ebizcard_com_app_BizCardType.prototype.getEmployer = ws_ebizcard_com_app_BizCardType_getEmployer;

function ws_ebizcard_com_app_BizCardType_setEmployer(value) { this._Employer = value;}

ws_ebizcard_com_app_BizCardType.prototype.setEmployer = ws_ebizcard_com_app_BizCardType_setEmployer;
//
// accessor is ws_ebizcard_com_app_BizCardType.prototype.getBizTelephone
// element get for BizTelephone
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for BizTelephone
// setter function is is ws_ebizcard_com_app_BizCardType.prototype.setBizTelephone
//
function ws_ebizcard_com_app_BizCardType_getBizTelephone() { return this._BizTelephone;}

ws_ebizcard_com_app_BizCardType.prototype.getBizTelephone = ws_ebizcard_com_app_BizCardType_getBizTelephone;

function ws_ebizcard_com_app_BizCardType_setBizTelephone(value) { this._BizTelephone = value;}

ws_ebizcard_com_app_BizCardType.prototype.setBizTelephone = ws_ebizcard_com_app_BizCardType_setBizTelephone;
//
// accessor is ws_ebizcard_com_app_BizCardType.prototype.getHomeTelephone
// element get for HomeTelephone
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for HomeTelephone
// setter function is is ws_ebizcard_com_app_BizCardType.prototype.setHomeTelephone
//
function ws_ebizcard_com_app_BizCardType_getHomeTelephone() { return this._HomeTelephone;}

ws_ebizcard_com_app_BizCardType.prototype.getHomeTelephone = ws_ebizcard_com_app_BizCardType_getHomeTelephone;

function ws_ebizcard_com_app_BizCardType_setHomeTelephone(value) { this._HomeTelephone = value;}

ws_ebizcard_com_app_BizCardType.prototype.setHomeTelephone = ws_ebizcard_com_app_BizCardType_setHomeTelephone;
//
// accessor is ws_ebizcard_com_app_BizCardType.prototype.getMobileTelephone
// element get for MobileTelephone
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for MobileTelephone
// setter function is is ws_ebizcard_com_app_BizCardType.prototype.setMobileTelephone
//
function ws_ebizcard_com_app_BizCardType_getMobileTelephone() { return this._MobileTelephone;}

ws_ebizcard_com_app_BizCardType.prototype.getMobileTelephone = ws_ebizcard_com_app_BizCardType_getMobileTelephone;

function ws_ebizcard_com_app_BizCardType_setMobileTelephone(value) { this._MobileTelephone = value;}

ws_ebizcard_com_app_BizCardType.prototype.setMobileTelephone = ws_ebizcard_com_app_BizCardType_setMobileTelephone;
//
// accessor is ws_ebizcard_com_app_BizCardType.prototype.getFax
// element get for Fax
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for Fax
// setter function is is ws_ebizcard_com_app_BizCardType.prototype.setFax
//
function ws_ebizcard_com_app_BizCardType_getFax() { return this._Fax;}

ws_ebizcard_com_app_BizCardType.prototype.getFax = ws_ebizcard_com_app_BizCardType_getFax;

function ws_ebizcard_com_app_BizCardType_setFax(value) { this._Fax = value;}

ws_ebizcard_com_app_BizCardType.prototype.setFax = ws_ebizcard_com_app_BizCardType_setFax;
//
// accessor is ws_ebizcard_com_app_BizCardType.prototype.getAddress
// element get for Address
// - element type is {http://ws.ebizcard.com/app}AddressType
// - optional element
//
// element set for Address
// setter function is is ws_ebizcard_com_app_BizCardType.prototype.setAddress
//
function ws_ebizcard_com_app_BizCardType_getAddress() { return this._Address;}

ws_ebizcard_com_app_BizCardType.prototype.getAddress = ws_ebizcard_com_app_BizCardType_getAddress;

function ws_ebizcard_com_app_BizCardType_setAddress(value) { this._Address = value;}

ws_ebizcard_com_app_BizCardType.prototype.setAddress = ws_ebizcard_com_app_BizCardType_setAddress;
//
// accessor is ws_ebizcard_com_app_BizCardType.prototype.getEmail
// element get for Email
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for Email
// setter function is is ws_ebizcard_com_app_BizCardType.prototype.setEmail
//
function ws_ebizcard_com_app_BizCardType_getEmail() { return this._Email;}

ws_ebizcard_com_app_BizCardType.prototype.getEmail = ws_ebizcard_com_app_BizCardType_getEmail;

function ws_ebizcard_com_app_BizCardType_setEmail(value) { this._Email = value;}

ws_ebizcard_com_app_BizCardType.prototype.setEmail = ws_ebizcard_com_app_BizCardType_setEmail;
//
// accessor is ws_ebizcard_com_app_BizCardType.prototype.getURL
// element get for URL
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for URL
// setter function is is ws_ebizcard_com_app_BizCardType.prototype.setURL
//
function ws_ebizcard_com_app_BizCardType_getURL() { return this._URL;}

ws_ebizcard_com_app_BizCardType.prototype.getURL = ws_ebizcard_com_app_BizCardType_getURL;

function ws_ebizcard_com_app_BizCardType_setURL(value) { this._URL = value;}

ws_ebizcard_com_app_BizCardType.prototype.setURL = ws_ebizcard_com_app_BizCardType_setURL;
//
// accessor is ws_ebizcard_com_app_BizCardType.prototype.getCardTemplateId
// element get for CardTemplateId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for CardTemplateId
// setter function is is ws_ebizcard_com_app_BizCardType.prototype.setCardTemplateId
//
function ws_ebizcard_com_app_BizCardType_getCardTemplateId() { return this._CardTemplateId;}

ws_ebizcard_com_app_BizCardType.prototype.getCardTemplateId = ws_ebizcard_com_app_BizCardType_getCardTemplateId;

function ws_ebizcard_com_app_BizCardType_setCardTemplateId(value) { this._CardTemplateId = value;}

ws_ebizcard_com_app_BizCardType.prototype.setCardTemplateId = ws_ebizcard_com_app_BizCardType_setCardTemplateId;
//
// Serialize {http://ws.ebizcard.com/app}BizCardType
//
function ws_ebizcard_com_app_BizCardType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:CardId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._CardId);
     xml = xml + '</jns0:CardId>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:Name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._Name);
     xml = xml + '</jns0:Name>';
    }
    // block for local variables
    {
     if (this._Owner != null) {
      xml = xml + this._Owner.serialize(cxfjsutils, 'jns0:Owner', null);
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:FirstName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._FirstName);
     xml = xml + '</jns0:FirstName>';
    }
    // block for local variables
    {
     if (this._MiddleName != null) {
      xml = xml + '<jns0:MiddleName>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._MiddleName);
      xml = xml + '</jns0:MiddleName>';
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:LastName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._LastName);
     xml = xml + '</jns0:LastName>';
    }
    // block for local variables
    {
     if (this._JobTitle != null) {
      xml = xml + '<jns0:JobTitle>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._JobTitle);
      xml = xml + '</jns0:JobTitle>';
     }
    }
    // block for local variables
    {
     if (this._Employer != null) {
      xml = xml + '<jns0:Employer>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Employer);
      xml = xml + '</jns0:Employer>';
     }
    }
    // block for local variables
    {
     if (this._BizTelephone != null) {
      xml = xml + '<jns0:BizTelephone>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._BizTelephone);
      xml = xml + '</jns0:BizTelephone>';
     }
    }
    // block for local variables
    {
     if (this._HomeTelephone != null) {
      xml = xml + '<jns0:HomeTelephone>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._HomeTelephone);
      xml = xml + '</jns0:HomeTelephone>';
     }
    }
    // block for local variables
    {
     if (this._MobileTelephone != null) {
      xml = xml + '<jns0:MobileTelephone>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._MobileTelephone);
      xml = xml + '</jns0:MobileTelephone>';
     }
    }
    // block for local variables
    {
     if (this._Fax != null) {
      xml = xml + '<jns0:Fax>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Fax);
      xml = xml + '</jns0:Fax>';
     }
    }
    // block for local variables
    {
     if (this._Address != null) {
      xml = xml + this._Address.serialize(cxfjsutils, 'jns0:Address', null);
     }
    }
    // block for local variables
    {
     if (this._Email != null) {
      xml = xml + '<jns0:Email>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Email);
      xml = xml + '</jns0:Email>';
     }
    }
    // block for local variables
    {
     if (this._URL != null) {
      xml = xml + '<jns0:URL>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._URL);
      xml = xml + '</jns0:URL>';
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:CardTemplateId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._CardTemplateId);
     xml = xml + '</jns0:CardTemplateId>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_BizCardType.prototype.serialize = ws_ebizcard_com_app_BizCardType_serialize;

function ws_ebizcard_com_app_BizCardType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_BizCardType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing CardId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setCardId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Owner');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'Owner')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = ws_ebizcard_com_app_UserType_deserialize(cxfjsutils, curElement);
     }
     newobject.setOwner(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing FirstName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setFirstName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing MiddleName');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'MiddleName')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setMiddleName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing LastName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setLastName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing JobTitle');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'JobTitle')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setJobTitle(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Employer');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'Employer')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setEmployer(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing BizTelephone');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'BizTelephone')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setBizTelephone(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing HomeTelephone');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'HomeTelephone')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setHomeTelephone(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing MobileTelephone');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'MobileTelephone')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setMobileTelephone(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Fax');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'Fax')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setFax(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Address');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'Address')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = ws_ebizcard_com_app_AddressType_deserialize(cxfjsutils, curElement);
     }
     newobject.setAddress(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Email');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'Email')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setEmail(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing URL');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'URL')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setURL(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing CardTemplateId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setCardTemplateId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}ListFriendCardRequestsResponseType
//
function ws_ebizcard_com_app_ListFriendCardRequestsResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_ListFriendCardRequestsResponseType';
    this._Result = null;
    this._CardRequestResponse = [];
}

//
// accessor is ws_ebizcard_com_app_ListFriendCardRequestsResponseType.prototype.getResult
// element get for Result
// - element type is {http://ws.ebizcard.com/app}ResultType
// - required element
//
// element set for Result
// setter function is is ws_ebizcard_com_app_ListFriendCardRequestsResponseType.prototype.setResult
//
function ws_ebizcard_com_app_ListFriendCardRequestsResponseType_getResult() { return this._Result;}

ws_ebizcard_com_app_ListFriendCardRequestsResponseType.prototype.getResult = ws_ebizcard_com_app_ListFriendCardRequestsResponseType_getResult;

function ws_ebizcard_com_app_ListFriendCardRequestsResponseType_setResult(value) { this._Result = value;}

ws_ebizcard_com_app_ListFriendCardRequestsResponseType.prototype.setResult = ws_ebizcard_com_app_ListFriendCardRequestsResponseType_setResult;
//
// accessor is ws_ebizcard_com_app_ListFriendCardRequestsResponseType.prototype.getCardRequestResponse
// element get for CardRequestResponse
// - element type is {http://ws.ebizcard.com/app}CardRequestResponseType
// - required element
// - array
//
// element set for CardRequestResponse
// setter function is is ws_ebizcard_com_app_ListFriendCardRequestsResponseType.prototype.setCardRequestResponse
//
function ws_ebizcard_com_app_ListFriendCardRequestsResponseType_getCardRequestResponse() { return this._CardRequestResponse;}

ws_ebizcard_com_app_ListFriendCardRequestsResponseType.prototype.getCardRequestResponse = ws_ebizcard_com_app_ListFriendCardRequestsResponseType_getCardRequestResponse;

function ws_ebizcard_com_app_ListFriendCardRequestsResponseType_setCardRequestResponse(value) { this._CardRequestResponse = value;}

ws_ebizcard_com_app_ListFriendCardRequestsResponseType.prototype.setCardRequestResponse = ws_ebizcard_com_app_ListFriendCardRequestsResponseType_setCardRequestResponse;
//
// Serialize {http://ws.ebizcard.com/app}ListFriendCardRequestsResponseType
//
function ws_ebizcard_com_app_ListFriendCardRequestsResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
    }
    // block for local variables
    {
     if (this._CardRequestResponse != null) {
      for (var ax = 0;ax < this._CardRequestResponse.length;ax ++) {
       if (this._CardRequestResponse[ax] == null) {
        xml = xml + '<jns0:CardRequestResponse/>';
       } else {
        xml = xml + this._CardRequestResponse[ax].serialize(cxfjsutils, 'jns0:CardRequestResponse', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_ListFriendCardRequestsResponseType.prototype.serialize = ws_ebizcard_com_app_ListFriendCardRequestsResponseType_serialize;

function ws_ebizcard_com_app_ListFriendCardRequestsResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_ListFriendCardRequestsResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_ResultType_deserialize(cxfjsutils, curElement);
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing CardRequestResponse');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'CardRequestResponse')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = ws_ebizcard_com_app_CardRequestResponseType_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'CardRequestResponse'));
     newobject.setCardRequestResponse(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}GetUserProfileCardResponseType
//
function ws_ebizcard_com_app_GetUserProfileCardResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_GetUserProfileCardResponseType';
    this._Result = null;
    this._FullName = '';
    this._Card = null;
}

//
// accessor is ws_ebizcard_com_app_GetUserProfileCardResponseType.prototype.getResult
// element get for Result
// - element type is {http://ws.ebizcard.com/app}ResultType
// - required element
//
// element set for Result
// setter function is is ws_ebizcard_com_app_GetUserProfileCardResponseType.prototype.setResult
//
function ws_ebizcard_com_app_GetUserProfileCardResponseType_getResult() { return this._Result;}

ws_ebizcard_com_app_GetUserProfileCardResponseType.prototype.getResult = ws_ebizcard_com_app_GetUserProfileCardResponseType_getResult;

function ws_ebizcard_com_app_GetUserProfileCardResponseType_setResult(value) { this._Result = value;}

ws_ebizcard_com_app_GetUserProfileCardResponseType.prototype.setResult = ws_ebizcard_com_app_GetUserProfileCardResponseType_setResult;
//
// accessor is ws_ebizcard_com_app_GetUserProfileCardResponseType.prototype.getFullName
// element get for FullName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for FullName
// setter function is is ws_ebizcard_com_app_GetUserProfileCardResponseType.prototype.setFullName
//
function ws_ebizcard_com_app_GetUserProfileCardResponseType_getFullName() { return this._FullName;}

ws_ebizcard_com_app_GetUserProfileCardResponseType.prototype.getFullName = ws_ebizcard_com_app_GetUserProfileCardResponseType_getFullName;

function ws_ebizcard_com_app_GetUserProfileCardResponseType_setFullName(value) { this._FullName = value;}

ws_ebizcard_com_app_GetUserProfileCardResponseType.prototype.setFullName = ws_ebizcard_com_app_GetUserProfileCardResponseType_setFullName;
//
// accessor is ws_ebizcard_com_app_GetUserProfileCardResponseType.prototype.getCard
// element get for Card
// - element type is {http://ws.ebizcard.com/app}BizCardType
// - optional element
//
// element set for Card
// setter function is is ws_ebizcard_com_app_GetUserProfileCardResponseType.prototype.setCard
//
function ws_ebizcard_com_app_GetUserProfileCardResponseType_getCard() { return this._Card;}

ws_ebizcard_com_app_GetUserProfileCardResponseType.prototype.getCard = ws_ebizcard_com_app_GetUserProfileCardResponseType_getCard;

function ws_ebizcard_com_app_GetUserProfileCardResponseType_setCard(value) { this._Card = value;}

ws_ebizcard_com_app_GetUserProfileCardResponseType.prototype.setCard = ws_ebizcard_com_app_GetUserProfileCardResponseType_setCard;
//
// Serialize {http://ws.ebizcard.com/app}GetUserProfileCardResponseType
//
function ws_ebizcard_com_app_GetUserProfileCardResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
    }
    // block for local variables
    {
     xml = xml + '<jns0:FullName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._FullName);
     xml = xml + '</jns0:FullName>';
    }
    // block for local variables
    {
     if (this._Card != null) {
      xml = xml + this._Card.serialize(cxfjsutils, 'jns0:Card', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_GetUserProfileCardResponseType.prototype.serialize = ws_ebizcard_com_app_GetUserProfileCardResponseType_serialize;

function ws_ebizcard_com_app_GetUserProfileCardResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_GetUserProfileCardResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_ResultType_deserialize(cxfjsutils, curElement);
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing FullName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setFullName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Card');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://ws.ebizcard.com/app', 'Card')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = ws_ebizcard_com_app_BizCardType_deserialize(cxfjsutils, curElement);
     }
     newobject.setCard(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}AuthenticateUserResponseType
//
function ws_ebizcard_com_app_AuthenticateUserResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_AuthenticateUserResponseType';
    this._Result = null;
    this._UserId = 0;
    this._SessionKey = '';
}

//
// accessor is ws_ebizcard_com_app_AuthenticateUserResponseType.prototype.getResult
// element get for Result
// - element type is {http://ws.ebizcard.com/app}ResultType
// - required element
//
// element set for Result
// setter function is is ws_ebizcard_com_app_AuthenticateUserResponseType.prototype.setResult
//
function ws_ebizcard_com_app_AuthenticateUserResponseType_getResult() { return this._Result;}

ws_ebizcard_com_app_AuthenticateUserResponseType.prototype.getResult = ws_ebizcard_com_app_AuthenticateUserResponseType_getResult;

function ws_ebizcard_com_app_AuthenticateUserResponseType_setResult(value) { this._Result = value;}

ws_ebizcard_com_app_AuthenticateUserResponseType.prototype.setResult = ws_ebizcard_com_app_AuthenticateUserResponseType_setResult;
//
// accessor is ws_ebizcard_com_app_AuthenticateUserResponseType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_AuthenticateUserResponseType.prototype.setUserId
//
function ws_ebizcard_com_app_AuthenticateUserResponseType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_AuthenticateUserResponseType.prototype.getUserId = ws_ebizcard_com_app_AuthenticateUserResponseType_getUserId;

function ws_ebizcard_com_app_AuthenticateUserResponseType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_AuthenticateUserResponseType.prototype.setUserId = ws_ebizcard_com_app_AuthenticateUserResponseType_setUserId;
//
// accessor is ws_ebizcard_com_app_AuthenticateUserResponseType.prototype.getSessionKey
// element get for SessionKey
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for SessionKey
// setter function is is ws_ebizcard_com_app_AuthenticateUserResponseType.prototype.setSessionKey
//
function ws_ebizcard_com_app_AuthenticateUserResponseType_getSessionKey() { return this._SessionKey;}

ws_ebizcard_com_app_AuthenticateUserResponseType.prototype.getSessionKey = ws_ebizcard_com_app_AuthenticateUserResponseType_getSessionKey;

function ws_ebizcard_com_app_AuthenticateUserResponseType_setSessionKey(value) { this._SessionKey = value;}

ws_ebizcard_com_app_AuthenticateUserResponseType.prototype.setSessionKey = ws_ebizcard_com_app_AuthenticateUserResponseType_setSessionKey;
//
// Serialize {http://ws.ebizcard.com/app}AuthenticateUserResponseType
//
function ws_ebizcard_com_app_AuthenticateUserResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:SessionKey>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._SessionKey);
     xml = xml + '</jns0:SessionKey>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_AuthenticateUserResponseType.prototype.serialize = ws_ebizcard_com_app_AuthenticateUserResponseType_serialize;

function ws_ebizcard_com_app_AuthenticateUserResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_AuthenticateUserResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_ResultType_deserialize(cxfjsutils, curElement);
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing SessionKey');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}AcceptFriendCardRequestResponseType
//
function ws_ebizcard_com_app_AcceptFriendCardRequestResponseType () {
    this.typeMarker = 'ws_ebizcard_com_app_AcceptFriendCardRequestResponseType';
    this._Result = null;
}

//
// accessor is ws_ebizcard_com_app_AcceptFriendCardRequestResponseType.prototype.getResult
// element get for Result
// - element type is {http://ws.ebizcard.com/app}ResultType
// - required element
//
// element set for Result
// setter function is is ws_ebizcard_com_app_AcceptFriendCardRequestResponseType.prototype.setResult
//
function ws_ebizcard_com_app_AcceptFriendCardRequestResponseType_getResult() { return this._Result;}

ws_ebizcard_com_app_AcceptFriendCardRequestResponseType.prototype.getResult = ws_ebizcard_com_app_AcceptFriendCardRequestResponseType_getResult;

function ws_ebizcard_com_app_AcceptFriendCardRequestResponseType_setResult(value) { this._Result = value;}

ws_ebizcard_com_app_AcceptFriendCardRequestResponseType.prototype.setResult = ws_ebizcard_com_app_AcceptFriendCardRequestResponseType_setResult;
//
// Serialize {http://ws.ebizcard.com/app}AcceptFriendCardRequestResponseType
//
function ws_ebizcard_com_app_AcceptFriendCardRequestResponseType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_AcceptFriendCardRequestResponseType.prototype.serialize = ws_ebizcard_com_app_AcceptFriendCardRequestResponseType_serialize;

function ws_ebizcard_com_app_AcceptFriendCardRequestResponseType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_AcceptFriendCardRequestResponseType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_ResultType_deserialize(cxfjsutils, curElement);
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}GetUserType
//
function ws_ebizcard_com_app_GetUserType () {
    this.typeMarker = 'ws_ebizcard_com_app_GetUserType';
    this._SessionKey = '';
    this._SearchKey = null;
}

//
// accessor is ws_ebizcard_com_app_GetUserType.prototype.getSessionKey
// element get for SessionKey
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for SessionKey
// setter function is is ws_ebizcard_com_app_GetUserType.prototype.setSessionKey
//
function ws_ebizcard_com_app_GetUserType_getSessionKey() { return this._SessionKey;}

ws_ebizcard_com_app_GetUserType.prototype.getSessionKey = ws_ebizcard_com_app_GetUserType_getSessionKey;

function ws_ebizcard_com_app_GetUserType_setSessionKey(value) { this._SessionKey = value;}

ws_ebizcard_com_app_GetUserType.prototype.setSessionKey = ws_ebizcard_com_app_GetUserType_setSessionKey;
//
// accessor is ws_ebizcard_com_app_GetUserType.prototype.getSearchKey
// element get for SearchKey
// - element type is {http://ws.ebizcard.com/app}UserIdType
// - required element
//
// element set for SearchKey
// setter function is is ws_ebizcard_com_app_GetUserType.prototype.setSearchKey
//
function ws_ebizcard_com_app_GetUserType_getSearchKey() { return this._SearchKey;}

ws_ebizcard_com_app_GetUserType.prototype.getSearchKey = ws_ebizcard_com_app_GetUserType_getSearchKey;

function ws_ebizcard_com_app_GetUserType_setSearchKey(value) { this._SearchKey = value;}

ws_ebizcard_com_app_GetUserType.prototype.setSearchKey = ws_ebizcard_com_app_GetUserType_setSearchKey;
//
// Serialize {http://ws.ebizcard.com/app}GetUserType
//
function ws_ebizcard_com_app_GetUserType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:SessionKey>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._SessionKey);
     xml = xml + '</jns0:SessionKey>';
    }
    // block for local variables
    {
     xml = xml + this._SearchKey.serialize(cxfjsutils, 'jns0:SearchKey', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_GetUserType.prototype.serialize = ws_ebizcard_com_app_GetUserType_serialize;

function ws_ebizcard_com_app_GetUserType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_GetUserType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing SessionKey');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing SearchKey');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = ws_ebizcard_com_app_UserIdType_deserialize(cxfjsutils, curElement);
    }
    newobject.setSearchKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://ws.ebizcard.com/app}ListFriendCardsFullType
//
function ws_ebizcard_com_app_ListFriendCardsFullType () {
    this.typeMarker = 'ws_ebizcard_com_app_ListFriendCardsFullType';
    this._SessionKey = '';
    this._UserId = 0;
    this._IsAscending = 'true';
    this._PageNum = 0;
}

//
// accessor is ws_ebizcard_com_app_ListFriendCardsFullType.prototype.getSessionKey
// element get for SessionKey
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for SessionKey
// setter function is is ws_ebizcard_com_app_ListFriendCardsFullType.prototype.setSessionKey
//
function ws_ebizcard_com_app_ListFriendCardsFullType_getSessionKey() { return this._SessionKey;}

ws_ebizcard_com_app_ListFriendCardsFullType.prototype.getSessionKey = ws_ebizcard_com_app_ListFriendCardsFullType_getSessionKey;

function ws_ebizcard_com_app_ListFriendCardsFullType_setSessionKey(value) { this._SessionKey = value;}

ws_ebizcard_com_app_ListFriendCardsFullType.prototype.setSessionKey = ws_ebizcard_com_app_ListFriendCardsFullType_setSessionKey;
//
// accessor is ws_ebizcard_com_app_ListFriendCardsFullType.prototype.getUserId
// element get for UserId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for UserId
// setter function is is ws_ebizcard_com_app_ListFriendCardsFullType.prototype.setUserId
//
function ws_ebizcard_com_app_ListFriendCardsFullType_getUserId() { return this._UserId;}

ws_ebizcard_com_app_ListFriendCardsFullType.prototype.getUserId = ws_ebizcard_com_app_ListFriendCardsFullType_getUserId;

function ws_ebizcard_com_app_ListFriendCardsFullType_setUserId(value) { this._UserId = value;}

ws_ebizcard_com_app_ListFriendCardsFullType.prototype.setUserId = ws_ebizcard_com_app_ListFriendCardsFullType_setUserId;
//
// accessor is ws_ebizcard_com_app_ListFriendCardsFullType.prototype.getIsAscending
// element get for IsAscending
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for IsAscending
// setter function is is ws_ebizcard_com_app_ListFriendCardsFullType.prototype.setIsAscending
//
function ws_ebizcard_com_app_ListFriendCardsFullType_getIsAscending() { return this._IsAscending;}

ws_ebizcard_com_app_ListFriendCardsFullType.prototype.getIsAscending = ws_ebizcard_com_app_ListFriendCardsFullType_getIsAscending;

function ws_ebizcard_com_app_ListFriendCardsFullType_setIsAscending(value) { this._IsAscending = value;}

ws_ebizcard_com_app_ListFriendCardsFullType.prototype.setIsAscending = ws_ebizcard_com_app_ListFriendCardsFullType_setIsAscending;
//
// accessor is ws_ebizcard_com_app_ListFriendCardsFullType.prototype.getPageNum
// element get for PageNum
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for PageNum
// setter function is is ws_ebizcard_com_app_ListFriendCardsFullType.prototype.setPageNum
//
function ws_ebizcard_com_app_ListFriendCardsFullType_getPageNum() { return this._PageNum;}

ws_ebizcard_com_app_ListFriendCardsFullType.prototype.getPageNum = ws_ebizcard_com_app_ListFriendCardsFullType_getPageNum;

function ws_ebizcard_com_app_ListFriendCardsFullType_setPageNum(value) { this._PageNum = value;}

ws_ebizcard_com_app_ListFriendCardsFullType.prototype.setPageNum = ws_ebizcard_com_app_ListFriendCardsFullType_setPageNum;
//
// Serialize {http://ws.ebizcard.com/app}ListFriendCardsFullType
//
function ws_ebizcard_com_app_ListFriendCardsFullType_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://ws.ebizcard.com/app\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:SessionKey>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._SessionKey);
     xml = xml + '</jns0:SessionKey>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:UserId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._UserId);
     xml = xml + '</jns0:UserId>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:IsAscending>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._IsAscending);
     xml = xml + '</jns0:IsAscending>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:PageNum>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._PageNum);
     xml = xml + '</jns0:PageNum>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

ws_ebizcard_com_app_ListFriendCardsFullType.prototype.serialize = ws_ebizcard_com_app_ListFriendCardsFullType_serialize;

function ws_ebizcard_com_app_ListFriendCardsFullType_deserialize (cxfjsutils, element) {
    var newobject = new ws_ebizcard_com_app_ListFriendCardsFullType();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing SessionKey');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSessionKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UserId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing IsAscending');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setIsAscending(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing PageNum');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setPageNum(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Definitions for service: {http://ws.ebizcard.com/app}BizCardService
//

// Javascript for {http://ws.ebizcard.com/app}BizCardPortType

function ws_ebizcard_com_app_BizCardPortType () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://ws.ebizcard.com/app}RequestCardResponseType'] = ws_ebizcard_com_app_RequestCardResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}RequestCardResponseType'] = ws_ebizcard_com_app_RequestCardResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}UpdateOwnCardType'] = ws_ebizcard_com_app_UpdateOwnCardType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}UpdateOwnCardType'] = ws_ebizcard_com_app_UpdateOwnCardType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}GetUserProfileCardType'] = ws_ebizcard_com_app_GetUserProfileCardType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}GetUserProfileCardType'] = ws_ebizcard_com_app_GetUserProfileCardType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}DeleteFriendCardResponseType'] = ws_ebizcard_com_app_DeleteFriendCardResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}DeleteFriendCardResponseType'] = ws_ebizcard_com_app_DeleteFriendCardResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}SearchCardsByNameResponseType'] = ws_ebizcard_com_app_SearchCardsByNameResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}SearchCardsByNameResponseType'] = ws_ebizcard_com_app_SearchCardsByNameResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}LogoutType'] = ws_ebizcard_com_app_LogoutType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}LogoutType'] = ws_ebizcard_com_app_LogoutType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}GetOwnCardResponseType'] = ws_ebizcard_com_app_GetOwnCardResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}GetOwnCardResponseType'] = ws_ebizcard_com_app_GetOwnCardResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}RetrievePasswordType'] = ws_ebizcard_com_app_RetrievePasswordType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}RetrievePasswordType'] = ws_ebizcard_com_app_RetrievePasswordType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}DeleteFriendCardType'] = ws_ebizcard_com_app_DeleteFriendCardType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}DeleteFriendCardType'] = ws_ebizcard_com_app_DeleteFriendCardType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}ListFriendCardsFullResponseType'] = ws_ebizcard_com_app_ListFriendCardsFullResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}ListFriendCardsFullResponseType'] = ws_ebizcard_com_app_ListFriendCardsFullResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}LogoutResponseType'] = ws_ebizcard_com_app_LogoutResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}LogoutResponseType'] = ws_ebizcard_com_app_LogoutResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}UpdateFriendCardType'] = ws_ebizcard_com_app_UpdateFriendCardType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}UpdateFriendCardType'] = ws_ebizcard_com_app_UpdateFriendCardType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}UpdateUserAccountType'] = ws_ebizcard_com_app_UpdateUserAccountType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}UpdateUserAccountType'] = ws_ebizcard_com_app_UpdateUserAccountType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}GetFriendCardResponseType'] = ws_ebizcard_com_app_GetFriendCardResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}GetFriendCardResponseType'] = ws_ebizcard_com_app_GetFriendCardResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}UpdateFriendCardResponseType'] = ws_ebizcard_com_app_UpdateFriendCardResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}UpdateFriendCardResponseType'] = ws_ebizcard_com_app_UpdateFriendCardResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}UpdateUserAccountResponseType'] = ws_ebizcard_com_app_UpdateUserAccountResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}UpdateUserAccountResponseType'] = ws_ebizcard_com_app_UpdateUserAccountResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}ExchangeCardType'] = ws_ebizcard_com_app_ExchangeCardType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}ExchangeCardType'] = ws_ebizcard_com_app_ExchangeCardType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}AcceptFriendCardRequestType'] = ws_ebizcard_com_app_AcceptFriendCardRequestType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}AcceptFriendCardRequestType'] = ws_ebizcard_com_app_AcceptFriendCardRequestType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}RetrievePasswordResponseType'] = ws_ebizcard_com_app_RetrievePasswordResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}RetrievePasswordResponseType'] = ws_ebizcard_com_app_RetrievePasswordResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}GetUserResponseType'] = ws_ebizcard_com_app_GetUserResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}GetUserResponseType'] = ws_ebizcard_com_app_GetUserResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}ListFriendCardRequestsSecureType'] = ws_ebizcard_com_app_ListFriendCardRequestsSecureType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}ListFriendCardRequestsSecureType'] = ws_ebizcard_com_app_ListFriendCardRequestsSecureType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}RequestCardType'] = ws_ebizcard_com_app_RequestCardType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}RequestCardType'] = ws_ebizcard_com_app_RequestCardType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}RegisterUserType'] = ws_ebizcard_com_app_RegisterUserType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}RegisterUserType'] = ws_ebizcard_com_app_RegisterUserType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}UpdateOwnCardResponseType'] = ws_ebizcard_com_app_UpdateOwnCardResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}UpdateOwnCardResponseType'] = ws_ebizcard_com_app_UpdateOwnCardResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}ListFriendCardsType'] = ws_ebizcard_com_app_ListFriendCardsType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}ListFriendCardsType'] = ws_ebizcard_com_app_ListFriendCardsType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}GetFriendCardType'] = ws_ebizcard_com_app_GetFriendCardType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}GetFriendCardType'] = ws_ebizcard_com_app_GetFriendCardType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}ExchangeCardResponseType'] = ws_ebizcard_com_app_ExchangeCardResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}ExchangeCardResponseType'] = ws_ebizcard_com_app_ExchangeCardResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}ListFriendCardsResponseType'] = ws_ebizcard_com_app_ListFriendCardsResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}ListFriendCardsResponseType'] = ws_ebizcard_com_app_ListFriendCardsResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}ListFriendCardRequestsResponseType'] = ws_ebizcard_com_app_ListFriendCardRequestsResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}ListFriendCardRequestsResponseType'] = ws_ebizcard_com_app_ListFriendCardRequestsResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}GetUserProfileCardResponseType'] = ws_ebizcard_com_app_GetUserProfileCardResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}GetUserProfileCardResponseType'] = ws_ebizcard_com_app_GetUserProfileCardResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}SearchCardsByNameType'] = ws_ebizcard_com_app_SearchCardsByNameType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}SearchCardsByNameType'] = ws_ebizcard_com_app_SearchCardsByNameType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}GetOwnCardType'] = ws_ebizcard_com_app_GetOwnCardType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}GetOwnCardType'] = ws_ebizcard_com_app_GetOwnCardType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}AuthenticateUserResponseType'] = ws_ebizcard_com_app_AuthenticateUserResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}AuthenticateUserResponseType'] = ws_ebizcard_com_app_AuthenticateUserResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}RegisterUserResponseType'] = ws_ebizcard_com_app_RegisterUserResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}RegisterUserResponseType'] = ws_ebizcard_com_app_RegisterUserResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}AuthenticateUserType'] = ws_ebizcard_com_app_AuthenticateUserType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}AuthenticateUserType'] = ws_ebizcard_com_app_AuthenticateUserType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}AcceptFriendCardRequestResponseType'] = ws_ebizcard_com_app_AcceptFriendCardRequestResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}AcceptFriendCardRequestResponseType'] = ws_ebizcard_com_app_AcceptFriendCardRequestResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}GetUserType'] = ws_ebizcard_com_app_GetUserType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}GetUserType'] = ws_ebizcard_com_app_GetUserType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}ListFriendCardsFullType'] = ws_ebizcard_com_app_ListFriendCardsFullType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}ListFriendCardsFullType'] = ws_ebizcard_com_app_ListFriendCardsFullType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}CardRequestType'] = ws_ebizcard_com_app_CardRequestType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}CardRequestType'] = ws_ebizcard_com_app_CardRequestType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}UserIdType'] = ws_ebizcard_com_app_UserIdType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}UserIdType'] = ws_ebizcard_com_app_UserIdType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}CardRequestResponseType'] = ws_ebizcard_com_app_CardRequestResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}CardRequestResponseType'] = ws_ebizcard_com_app_CardRequestResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}UpdateOwnCardType'] = ws_ebizcard_com_app_UpdateOwnCardType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}UpdateOwnCardType'] = ws_ebizcard_com_app_UpdateOwnCardType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}GetOwnCardResponseType'] = ws_ebizcard_com_app_GetOwnCardResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}GetOwnCardResponseType'] = ws_ebizcard_com_app_GetOwnCardResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}LogoutType'] = ws_ebizcard_com_app_LogoutType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}LogoutType'] = ws_ebizcard_com_app_LogoutType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}SearchCardsByNameResponseType'] = ws_ebizcard_com_app_SearchCardsByNameResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}SearchCardsByNameResponseType'] = ws_ebizcard_com_app_SearchCardsByNameResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}ListFriendCardsFullResponseType'] = ws_ebizcard_com_app_ListFriendCardsFullResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}ListFriendCardsFullResponseType'] = ws_ebizcard_com_app_ListFriendCardsFullResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}UpdateFriendCardType'] = ws_ebizcard_com_app_UpdateFriendCardType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}UpdateFriendCardType'] = ws_ebizcard_com_app_UpdateFriendCardType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}LogoutResponseType'] = ws_ebizcard_com_app_LogoutResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}LogoutResponseType'] = ws_ebizcard_com_app_LogoutResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}UserType'] = ws_ebizcard_com_app_UserType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}UserType'] = ws_ebizcard_com_app_UserType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}CardSummaryType'] = ws_ebizcard_com_app_CardSummaryType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}CardSummaryType'] = ws_ebizcard_com_app_CardSummaryType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}GetFriendCardResponseType'] = ws_ebizcard_com_app_GetFriendCardResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}GetFriendCardResponseType'] = ws_ebizcard_com_app_GetFriendCardResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}UserSummaryType'] = ws_ebizcard_com_app_UserSummaryType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}UserSummaryType'] = ws_ebizcard_com_app_UserSummaryType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}AcceptFriendCardRequestType'] = ws_ebizcard_com_app_AcceptFriendCardRequestType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}AcceptFriendCardRequestType'] = ws_ebizcard_com_app_AcceptFriendCardRequestType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}ListFriendCardRequestsSecureType'] = ws_ebizcard_com_app_ListFriendCardRequestsSecureType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}ListFriendCardRequestsSecureType'] = ws_ebizcard_com_app_ListFriendCardRequestsSecureType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}RegisterUserType'] = ws_ebizcard_com_app_RegisterUserType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}RegisterUserType'] = ws_ebizcard_com_app_RegisterUserType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}GetFriendCardType'] = ws_ebizcard_com_app_GetFriendCardType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}GetFriendCardType'] = ws_ebizcard_com_app_GetFriendCardType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}ListFriendCardsResponseType'] = ws_ebizcard_com_app_ListFriendCardsResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}ListFriendCardsResponseType'] = ws_ebizcard_com_app_ListFriendCardsResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}ExchangeCardResponseType'] = ws_ebizcard_com_app_ExchangeCardResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}ExchangeCardResponseType'] = ws_ebizcard_com_app_ExchangeCardResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}GetOwnCardType'] = ws_ebizcard_com_app_GetOwnCardType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}GetOwnCardType'] = ws_ebizcard_com_app_GetOwnCardType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}SearchCardsByNameType'] = ws_ebizcard_com_app_SearchCardsByNameType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}SearchCardsByNameType'] = ws_ebizcard_com_app_SearchCardsByNameType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}RegisterUserResponseType'] = ws_ebizcard_com_app_RegisterUserResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}RegisterUserResponseType'] = ws_ebizcard_com_app_RegisterUserResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}AuthenticateUserType'] = ws_ebizcard_com_app_AuthenticateUserType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}AuthenticateUserType'] = ws_ebizcard_com_app_AuthenticateUserType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}RequestCardResponseType'] = ws_ebizcard_com_app_RequestCardResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}RequestCardResponseType'] = ws_ebizcard_com_app_RequestCardResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}GetUserProfileCardType'] = ws_ebizcard_com_app_GetUserProfileCardType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}GetUserProfileCardType'] = ws_ebizcard_com_app_GetUserProfileCardType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}DeleteFriendCardResponseType'] = ws_ebizcard_com_app_DeleteFriendCardResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}DeleteFriendCardResponseType'] = ws_ebizcard_com_app_DeleteFriendCardResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}RetrievePasswordType'] = ws_ebizcard_com_app_RetrievePasswordType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}RetrievePasswordType'] = ws_ebizcard_com_app_RetrievePasswordType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}AddressType'] = ws_ebizcard_com_app_AddressType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}AddressType'] = ws_ebizcard_com_app_AddressType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}DeleteFriendCardType'] = ws_ebizcard_com_app_DeleteFriendCardType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}DeleteFriendCardType'] = ws_ebizcard_com_app_DeleteFriendCardType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}UpdateUserAccountType'] = ws_ebizcard_com_app_UpdateUserAccountType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}UpdateUserAccountType'] = ws_ebizcard_com_app_UpdateUserAccountType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}UpdateFriendCardResponseType'] = ws_ebizcard_com_app_UpdateFriendCardResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}UpdateFriendCardResponseType'] = ws_ebizcard_com_app_UpdateFriendCardResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}ExchangeCardType'] = ws_ebizcard_com_app_ExchangeCardType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}ExchangeCardType'] = ws_ebizcard_com_app_ExchangeCardType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}UpdateUserAccountResponseType'] = ws_ebizcard_com_app_UpdateUserAccountResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}UpdateUserAccountResponseType'] = ws_ebizcard_com_app_UpdateUserAccountResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}RetrievePasswordResponseType'] = ws_ebizcard_com_app_RetrievePasswordResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}RetrievePasswordResponseType'] = ws_ebizcard_com_app_RetrievePasswordResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}GetUserResponseType'] = ws_ebizcard_com_app_GetUserResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}GetUserResponseType'] = ws_ebizcard_com_app_GetUserResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}UserInfoType'] = ws_ebizcard_com_app_UserInfoType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}UserInfoType'] = ws_ebizcard_com_app_UserInfoType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}RequestCardType'] = ws_ebizcard_com_app_RequestCardType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}RequestCardType'] = ws_ebizcard_com_app_RequestCardType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}LoginCredentialType'] = ws_ebizcard_com_app_LoginCredentialType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}LoginCredentialType'] = ws_ebizcard_com_app_LoginCredentialType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}ResultType'] = ws_ebizcard_com_app_ResultType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}ResultType'] = ws_ebizcard_com_app_ResultType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}UpdateOwnCardResponseType'] = ws_ebizcard_com_app_UpdateOwnCardResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}UpdateOwnCardResponseType'] = ws_ebizcard_com_app_UpdateOwnCardResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}ListFriendCardsType'] = ws_ebizcard_com_app_ListFriendCardsType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}ListFriendCardsType'] = ws_ebizcard_com_app_ListFriendCardsType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}BizCardType'] = ws_ebizcard_com_app_BizCardType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}BizCardType'] = ws_ebizcard_com_app_BizCardType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}ListFriendCardRequestsResponseType'] = ws_ebizcard_com_app_ListFriendCardRequestsResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}ListFriendCardRequestsResponseType'] = ws_ebizcard_com_app_ListFriendCardRequestsResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}GetUserProfileCardResponseType'] = ws_ebizcard_com_app_GetUserProfileCardResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}GetUserProfileCardResponseType'] = ws_ebizcard_com_app_GetUserProfileCardResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}AuthenticateUserResponseType'] = ws_ebizcard_com_app_AuthenticateUserResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}AuthenticateUserResponseType'] = ws_ebizcard_com_app_AuthenticateUserResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}AcceptFriendCardRequestResponseType'] = ws_ebizcard_com_app_AcceptFriendCardRequestResponseType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}AcceptFriendCardRequestResponseType'] = ws_ebizcard_com_app_AcceptFriendCardRequestResponseType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}GetUserType'] = ws_ebizcard_com_app_GetUserType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}GetUserType'] = ws_ebizcard_com_app_GetUserType_deserialize;
    this.globalElementSerializers['{http://ws.ebizcard.com/app}ListFriendCardsFullType'] = ws_ebizcard_com_app_ListFriendCardsFullType_serialize;
    this.globalElementDeserializers['{http://ws.ebizcard.com/app}ListFriendCardsFullType'] = ws_ebizcard_com_app_ListFriendCardsFullType_deserialize;
}

function ws_ebizcard_com_app_GetFriendCard_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling ws_ebizcard_com_app_GetFriendCardResponseMessage_deserializeResponse');
     responseObject = ws_ebizcard_com_app_GetFriendCardResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.GetFriendCard_onsuccess = ws_ebizcard_com_app_GetFriendCard_op_onsuccess;

function ws_ebizcard_com_app_GetFriendCard_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.GetFriendCard_onerror = ws_ebizcard_com_app_GetFriendCard_op_onerror;

//
// Operation {http://ws.ebizcard.com/app}GetFriendCard
// - bare operation. Parameters:
// - ws_ebizcard_com_app_GetFriendCardType
//
function ws_ebizcard_com_app_GetFriendCard_op(successCallback, errorCallback, GetFriendCardType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = GetFriendCardType;
    xml = this.GetFriendCardMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.GetFriendCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.GetFriendCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://ws.ebizcard.com/GetFriendCard';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

ws_ebizcard_com_app_BizCardPortType.prototype.GetFriendCard = ws_ebizcard_com_app_GetFriendCard_op;

function ws_ebizcard_com_app_GetFriendCardMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://ws.ebizcard.com/app' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns0:GetFriendCardType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

ws_ebizcard_com_app_BizCardPortType.prototype.GetFriendCardMessage_serializeInput = ws_ebizcard_com_app_GetFriendCardMessage_serializeInput;

function ws_ebizcard_com_app_GetFriendCardResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = ws_ebizcard_com_app_GetFriendCardResponseType_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function ws_ebizcard_com_app_ExchangeCard_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling ws_ebizcard_com_app_ExchangeCardResponseMessage_deserializeResponse');
     responseObject = ws_ebizcard_com_app_ExchangeCardResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.ExchangeCard_onsuccess = ws_ebizcard_com_app_ExchangeCard_op_onsuccess;

function ws_ebizcard_com_app_ExchangeCard_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.ExchangeCard_onerror = ws_ebizcard_com_app_ExchangeCard_op_onerror;

//
// Operation {http://ws.ebizcard.com/app}ExchangeCard
// - bare operation. Parameters:
// - ws_ebizcard_com_app_ExchangeCardType
//
function ws_ebizcard_com_app_ExchangeCard_op(successCallback, errorCallback, ExchangeCardType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = ExchangeCardType;
    xml = this.ExchangeCardMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.ExchangeCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.ExchangeCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://ws.ebizcard.com/ExchangeCard';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

ws_ebizcard_com_app_BizCardPortType.prototype.ExchangeCard = ws_ebizcard_com_app_ExchangeCard_op;

function ws_ebizcard_com_app_ExchangeCardMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://ws.ebizcard.com/app' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns0:ExchangeCardType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

ws_ebizcard_com_app_BizCardPortType.prototype.ExchangeCardMessage_serializeInput = ws_ebizcard_com_app_ExchangeCardMessage_serializeInput;

function ws_ebizcard_com_app_ExchangeCardResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = ws_ebizcard_com_app_ExchangeCardResponseType_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function ws_ebizcard_com_app_GetUser_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling ws_ebizcard_com_app_GetUserResponseMessage_deserializeResponse');
     responseObject = ws_ebizcard_com_app_GetUserResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.GetUser_onsuccess = ws_ebizcard_com_app_GetUser_op_onsuccess;

function ws_ebizcard_com_app_GetUser_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.GetUser_onerror = ws_ebizcard_com_app_GetUser_op_onerror;

//
// Operation {http://ws.ebizcard.com/app}GetUser
// - bare operation. Parameters:
// - ws_ebizcard_com_app_GetUserType
//
function ws_ebizcard_com_app_GetUser_op(successCallback, errorCallback, GetUserType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = GetUserType;
    xml = this.GetUserMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.GetUser_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.GetUser_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://ws.ebizcard.com/GetUser';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

ws_ebizcard_com_app_BizCardPortType.prototype.GetUser = ws_ebizcard_com_app_GetUser_op;

function ws_ebizcard_com_app_GetUserMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://ws.ebizcard.com/app' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns0:GetUserType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

ws_ebizcard_com_app_BizCardPortType.prototype.GetUserMessage_serializeInput = ws_ebizcard_com_app_GetUserMessage_serializeInput;

function ws_ebizcard_com_app_GetUserResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = ws_ebizcard_com_app_GetUserResponseType_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function ws_ebizcard_com_app_SearchCardsByName_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling ws_ebizcard_com_app_SearchCardsByNameResponseMessage_deserializeResponse');
     responseObject = ws_ebizcard_com_app_SearchCardsByNameResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.SearchCardsByName_onsuccess = ws_ebizcard_com_app_SearchCardsByName_op_onsuccess;

function ws_ebizcard_com_app_SearchCardsByName_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.SearchCardsByName_onerror = ws_ebizcard_com_app_SearchCardsByName_op_onerror;

//
// Operation {http://ws.ebizcard.com/app}SearchCardsByName
// - bare operation. Parameters:
// - ws_ebizcard_com_app_SearchCardsByNameType
//
function ws_ebizcard_com_app_SearchCardsByName_op(successCallback, errorCallback, SearchCardsByNameType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = SearchCardsByNameType;
    xml = this.SearchCardsByNameMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.SearchCardsByName_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.SearchCardsByName_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://ws.ebizcard.com/SearchCardsByName';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

ws_ebizcard_com_app_BizCardPortType.prototype.SearchCardsByName = ws_ebizcard_com_app_SearchCardsByName_op;

function ws_ebizcard_com_app_SearchCardsByNameMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://ws.ebizcard.com/app' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns0:SearchCardsByNameType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

ws_ebizcard_com_app_BizCardPortType.prototype.SearchCardsByNameMessage_serializeInput = ws_ebizcard_com_app_SearchCardsByNameMessage_serializeInput;

function ws_ebizcard_com_app_SearchCardsByNameResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = ws_ebizcard_com_app_SearchCardsByNameResponseType_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function ws_ebizcard_com_app_ListFriendCardsFull_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling ws_ebizcard_com_app_ListFriendCardsFullResponseMessage_deserializeResponse');
     responseObject = ws_ebizcard_com_app_ListFriendCardsFullResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.ListFriendCardsFull_onsuccess = ws_ebizcard_com_app_ListFriendCardsFull_op_onsuccess;

function ws_ebizcard_com_app_ListFriendCardsFull_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.ListFriendCardsFull_onerror = ws_ebizcard_com_app_ListFriendCardsFull_op_onerror;

//
// Operation {http://ws.ebizcard.com/app}ListFriendCardsFull
// - bare operation. Parameters:
// - ws_ebizcard_com_app_ListFriendCardsFullType
//
function ws_ebizcard_com_app_ListFriendCardsFull_op(successCallback, errorCallback, ListFriendCardsFullType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = ListFriendCardsFullType;
    xml = this.ListFriendCardsFullMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.ListFriendCardsFull_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.ListFriendCardsFull_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://ws.ebizcard.com/ListFriendCardsFull';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

ws_ebizcard_com_app_BizCardPortType.prototype.ListFriendCardsFull = ws_ebizcard_com_app_ListFriendCardsFull_op;

function ws_ebizcard_com_app_ListFriendCardsFullMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://ws.ebizcard.com/app' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns0:ListFriendCardsFullType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

ws_ebizcard_com_app_BizCardPortType.prototype.ListFriendCardsFullMessage_serializeInput = ws_ebizcard_com_app_ListFriendCardsFullMessage_serializeInput;

function ws_ebizcard_com_app_ListFriendCardsFullResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = ws_ebizcard_com_app_ListFriendCardsFullResponseType_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function ws_ebizcard_com_app_AcceptFriendCardRequest_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling ws_ebizcard_com_app_AcceptFriendCardRequestResponseMessage_deserializeResponse');
     responseObject = ws_ebizcard_com_app_AcceptFriendCardRequestResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.AcceptFriendCardRequest_onsuccess = ws_ebizcard_com_app_AcceptFriendCardRequest_op_onsuccess;

function ws_ebizcard_com_app_AcceptFriendCardRequest_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.AcceptFriendCardRequest_onerror = ws_ebizcard_com_app_AcceptFriendCardRequest_op_onerror;

//
// Operation {http://ws.ebizcard.com/app}AcceptFriendCardRequest
// - bare operation. Parameters:
// - ws_ebizcard_com_app_AcceptFriendCardRequestType
//
function ws_ebizcard_com_app_AcceptFriendCardRequest_op(successCallback, errorCallback, AcceptFriendCardRequestType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = AcceptFriendCardRequestType;
    xml = this.AcceptFriendCardRequestMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.AcceptFriendCardRequest_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.AcceptFriendCardRequest_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://ws.ebizcard.com/AcceptFriendCardRequest';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

ws_ebizcard_com_app_BizCardPortType.prototype.AcceptFriendCardRequest = ws_ebizcard_com_app_AcceptFriendCardRequest_op;

function ws_ebizcard_com_app_AcceptFriendCardRequestMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://ws.ebizcard.com/app' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns0:AcceptFriendCardRequestType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

ws_ebizcard_com_app_BizCardPortType.prototype.AcceptFriendCardRequestMessage_serializeInput = ws_ebizcard_com_app_AcceptFriendCardRequestMessage_serializeInput;

function ws_ebizcard_com_app_AcceptFriendCardRequestResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = ws_ebizcard_com_app_AcceptFriendCardRequestResponseType_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function ws_ebizcard_com_app_RetrievePassword_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling ws_ebizcard_com_app_RetrievePasswordResponseMessage_deserializeResponse');
     responseObject = ws_ebizcard_com_app_RetrievePasswordResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.RetrievePassword_onsuccess = ws_ebizcard_com_app_RetrievePassword_op_onsuccess;

function ws_ebizcard_com_app_RetrievePassword_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.RetrievePassword_onerror = ws_ebizcard_com_app_RetrievePassword_op_onerror;

//
// Operation {http://ws.ebizcard.com/app}RetrievePassword
// - bare operation. Parameters:
// - ws_ebizcard_com_app_RetrievePasswordType
//
function ws_ebizcard_com_app_RetrievePassword_op(successCallback, errorCallback, RetrievePasswordType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = RetrievePasswordType;
    xml = this.RetrievePasswordMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.RetrievePassword_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.RetrievePassword_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://ws.ebizcard.com/RetrievePassword';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

ws_ebizcard_com_app_BizCardPortType.prototype.RetrievePassword = ws_ebizcard_com_app_RetrievePassword_op;

function ws_ebizcard_com_app_RetrievePasswordMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://ws.ebizcard.com/app' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns0:RetrievePasswordType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

ws_ebizcard_com_app_BizCardPortType.prototype.RetrievePasswordMessage_serializeInput = ws_ebizcard_com_app_RetrievePasswordMessage_serializeInput;

function ws_ebizcard_com_app_RetrievePasswordResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = ws_ebizcard_com_app_RetrievePasswordResponseType_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function ws_ebizcard_com_app_Logout_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling ws_ebizcard_com_app_LogoutResponseMessage_deserializeResponse');
     responseObject = ws_ebizcard_com_app_LogoutResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.Logout_onsuccess = ws_ebizcard_com_app_Logout_op_onsuccess;

function ws_ebizcard_com_app_Logout_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.Logout_onerror = ws_ebizcard_com_app_Logout_op_onerror;

//
// Operation {http://ws.ebizcard.com/app}Logout
// - bare operation. Parameters:
// - ws_ebizcard_com_app_LogoutType
//
function ws_ebizcard_com_app_Logout_op(successCallback, errorCallback, LogoutType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = LogoutType;
    xml = this.LogoutMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.Logout_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.Logout_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://ws.ebizcard.com/Logout';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

ws_ebizcard_com_app_BizCardPortType.prototype.Logout = ws_ebizcard_com_app_Logout_op;

function ws_ebizcard_com_app_LogoutMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://ws.ebizcard.com/app' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns0:LogoutType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

ws_ebizcard_com_app_BizCardPortType.prototype.LogoutMessage_serializeInput = ws_ebizcard_com_app_LogoutMessage_serializeInput;

function ws_ebizcard_com_app_LogoutResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = ws_ebizcard_com_app_LogoutResponseType_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function ws_ebizcard_com_app_RequestCard_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling ws_ebizcard_com_app_RequestCardResponseMessage_deserializeResponse');
     responseObject = ws_ebizcard_com_app_RequestCardResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.RequestCard_onsuccess = ws_ebizcard_com_app_RequestCard_op_onsuccess;

function ws_ebizcard_com_app_RequestCard_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.RequestCard_onerror = ws_ebizcard_com_app_RequestCard_op_onerror;

//
// Operation {http://ws.ebizcard.com/app}RequestCard
// - bare operation. Parameters:
// - ws_ebizcard_com_app_RequestCardType
//
function ws_ebizcard_com_app_RequestCard_op(successCallback, errorCallback, RequestCardType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = RequestCardType;
    xml = this.RequestCardMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.RequestCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.RequestCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://ws.ebizcard.com/RequestCard';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

ws_ebizcard_com_app_BizCardPortType.prototype.RequestCard = ws_ebizcard_com_app_RequestCard_op;

function ws_ebizcard_com_app_RequestCardMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://ws.ebizcard.com/app' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns0:RequestCardType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

ws_ebizcard_com_app_BizCardPortType.prototype.RequestCardMessage_serializeInput = ws_ebizcard_com_app_RequestCardMessage_serializeInput;

function ws_ebizcard_com_app_RequestCardResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = ws_ebizcard_com_app_RequestCardResponseType_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function ws_ebizcard_com_app_UpdateOwnCard_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling ws_ebizcard_com_app_UpdateOwnCardResponseMessage_deserializeResponse');
     responseObject = ws_ebizcard_com_app_UpdateOwnCardResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.UpdateOwnCard_onsuccess = ws_ebizcard_com_app_UpdateOwnCard_op_onsuccess;

function ws_ebizcard_com_app_UpdateOwnCard_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.UpdateOwnCard_onerror = ws_ebizcard_com_app_UpdateOwnCard_op_onerror;

//
// Operation {http://ws.ebizcard.com/app}UpdateOwnCard
// - bare operation. Parameters:
// - ws_ebizcard_com_app_UpdateOwnCardType
//
function ws_ebizcard_com_app_UpdateOwnCard_op(successCallback, errorCallback, UpdateOwnCardType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = UpdateOwnCardType;
    xml = this.UpdateOwnCardMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.UpdateOwnCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.UpdateOwnCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://ws.ebizcard.com/UpdateOwnCard';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

ws_ebizcard_com_app_BizCardPortType.prototype.UpdateOwnCard = ws_ebizcard_com_app_UpdateOwnCard_op;

function ws_ebizcard_com_app_UpdateOwnCardMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://ws.ebizcard.com/app' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns0:UpdateOwnCardType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

ws_ebizcard_com_app_BizCardPortType.prototype.UpdateOwnCardMessage_serializeInput = ws_ebizcard_com_app_UpdateOwnCardMessage_serializeInput;

function ws_ebizcard_com_app_UpdateOwnCardResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = ws_ebizcard_com_app_UpdateOwnCardResponseType_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function ws_ebizcard_com_app_UpdateFriendCard_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling ws_ebizcard_com_app_UpdateFriendCardResponseMessage_deserializeResponse');
     responseObject = ws_ebizcard_com_app_UpdateFriendCardResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.UpdateFriendCard_onsuccess = ws_ebizcard_com_app_UpdateFriendCard_op_onsuccess;

function ws_ebizcard_com_app_UpdateFriendCard_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.UpdateFriendCard_onerror = ws_ebizcard_com_app_UpdateFriendCard_op_onerror;

//
// Operation {http://ws.ebizcard.com/app}UpdateFriendCard
// - bare operation. Parameters:
// - ws_ebizcard_com_app_UpdateFriendCardType
//
function ws_ebizcard_com_app_UpdateFriendCard_op(successCallback, errorCallback, UpdateFriendCardType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = UpdateFriendCardType;
    xml = this.UpdateFriendCardMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.UpdateFriendCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.UpdateFriendCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://ws.ebizcard.com/UpdateFriendCard';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

ws_ebizcard_com_app_BizCardPortType.prototype.UpdateFriendCard = ws_ebizcard_com_app_UpdateFriendCard_op;

function ws_ebizcard_com_app_UpdateFriendCardMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://ws.ebizcard.com/app' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns0:UpdateFriendCardType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

ws_ebizcard_com_app_BizCardPortType.prototype.UpdateFriendCardMessage_serializeInput = ws_ebizcard_com_app_UpdateFriendCardMessage_serializeInput;

function ws_ebizcard_com_app_UpdateFriendCardResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = ws_ebizcard_com_app_UpdateFriendCardResponseType_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function ws_ebizcard_com_app_UpdateUserAccount_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling ws_ebizcard_com_app_UpdateUserAccountResponseMessage_deserializeResponse');
     responseObject = ws_ebizcard_com_app_UpdateUserAccountResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.UpdateUserAccount_onsuccess = ws_ebizcard_com_app_UpdateUserAccount_op_onsuccess;

function ws_ebizcard_com_app_UpdateUserAccount_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.UpdateUserAccount_onerror = ws_ebizcard_com_app_UpdateUserAccount_op_onerror;

//
// Operation {http://ws.ebizcard.com/app}UpdateUserAccount
// - bare operation. Parameters:
// - ws_ebizcard_com_app_UpdateUserAccountType
//
function ws_ebizcard_com_app_UpdateUserAccount_op(successCallback, errorCallback, UpdateUserAccountType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = UpdateUserAccountType;
    xml = this.UpdateUserAccountMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.UpdateUserAccount_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.UpdateUserAccount_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://ws.ebizcard.com/UpdateUserAccount';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

ws_ebizcard_com_app_BizCardPortType.prototype.UpdateUserAccount = ws_ebizcard_com_app_UpdateUserAccount_op;

function ws_ebizcard_com_app_UpdateUserAccountMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://ws.ebizcard.com/app' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns0:UpdateUserAccountType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

ws_ebizcard_com_app_BizCardPortType.prototype.UpdateUserAccountMessage_serializeInput = ws_ebizcard_com_app_UpdateUserAccountMessage_serializeInput;

function ws_ebizcard_com_app_UpdateUserAccountResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = ws_ebizcard_com_app_UpdateUserAccountResponseType_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function ws_ebizcard_com_app_GetOwnCard_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling ws_ebizcard_com_app_GetOwnCardResponseMessage_deserializeResponse');
     responseObject = ws_ebizcard_com_app_GetOwnCardResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.GetOwnCard_onsuccess = ws_ebizcard_com_app_GetOwnCard_op_onsuccess;

function ws_ebizcard_com_app_GetOwnCard_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.GetOwnCard_onerror = ws_ebizcard_com_app_GetOwnCard_op_onerror;

//
// Operation {http://ws.ebizcard.com/app}GetOwnCard
// - bare operation. Parameters:
// - ws_ebizcard_com_app_GetOwnCardType
//
function ws_ebizcard_com_app_GetOwnCard_op(successCallback, errorCallback, GetOwnCardType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = GetOwnCardType;
    xml = this.GetOwnCardMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.GetOwnCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.GetOwnCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://ws.ebizcard.com/GetOwnCard';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

ws_ebizcard_com_app_BizCardPortType.prototype.GetOwnCard = ws_ebizcard_com_app_GetOwnCard_op;

function ws_ebizcard_com_app_GetOwnCardMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://ws.ebizcard.com/app' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns0:GetOwnCardType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

ws_ebizcard_com_app_BizCardPortType.prototype.GetOwnCardMessage_serializeInput = ws_ebizcard_com_app_GetOwnCardMessage_serializeInput;

function ws_ebizcard_com_app_GetOwnCardResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = ws_ebizcard_com_app_GetOwnCardResponseType_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function ws_ebizcard_com_app_DeleteFriendCard_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling ws_ebizcard_com_app_DeleteFriendCardResponseMessage_deserializeResponse');
     responseObject = ws_ebizcard_com_app_DeleteFriendCardResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.DeleteFriendCard_onsuccess = ws_ebizcard_com_app_DeleteFriendCard_op_onsuccess;

function ws_ebizcard_com_app_DeleteFriendCard_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.DeleteFriendCard_onerror = ws_ebizcard_com_app_DeleteFriendCard_op_onerror;

//
// Operation {http://ws.ebizcard.com/app}DeleteFriendCard
// - bare operation. Parameters:
// - ws_ebizcard_com_app_DeleteFriendCardType
//
function ws_ebizcard_com_app_DeleteFriendCard_op(successCallback, errorCallback, DeleteFriendCardType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = DeleteFriendCardType;
    xml = this.DeleteFriendCardMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.DeleteFriendCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.DeleteFriendCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://ws.ebizcard.com/DeleteFriendCard';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

ws_ebizcard_com_app_BizCardPortType.prototype.DeleteFriendCard = ws_ebizcard_com_app_DeleteFriendCard_op;

function ws_ebizcard_com_app_DeleteFriendCardMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://ws.ebizcard.com/app' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns0:DeleteFriendCardType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

ws_ebizcard_com_app_BizCardPortType.prototype.DeleteFriendCardMessage_serializeInput = ws_ebizcard_com_app_DeleteFriendCardMessage_serializeInput;

function ws_ebizcard_com_app_DeleteFriendCardResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = ws_ebizcard_com_app_DeleteFriendCardResponseType_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function ws_ebizcard_com_app_GetUserProfileCard_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling ws_ebizcard_com_app_GetUserProfileCardResponseMessage_deserializeResponse');
     responseObject = ws_ebizcard_com_app_GetUserProfileCardResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.GetUserProfileCard_onsuccess = ws_ebizcard_com_app_GetUserProfileCard_op_onsuccess;

function ws_ebizcard_com_app_GetUserProfileCard_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.GetUserProfileCard_onerror = ws_ebizcard_com_app_GetUserProfileCard_op_onerror;

//
// Operation {http://ws.ebizcard.com/app}GetUserProfileCard
// - bare operation. Parameters:
// - ws_ebizcard_com_app_GetUserProfileCardType
//
function ws_ebizcard_com_app_GetUserProfileCard_op(successCallback, errorCallback, GetUserProfileCardType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = GetUserProfileCardType;
    xml = this.GetUserProfileCardMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.GetUserProfileCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.GetUserProfileCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://ws.ebizcard.com/GetUserProfileCard';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

ws_ebizcard_com_app_BizCardPortType.prototype.GetUserProfileCard = ws_ebizcard_com_app_GetUserProfileCard_op;

function ws_ebizcard_com_app_GetUserProfileCardMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://ws.ebizcard.com/app' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns0:GetUserProfileCardType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

ws_ebizcard_com_app_BizCardPortType.prototype.GetUserProfileCardMessage_serializeInput = ws_ebizcard_com_app_GetUserProfileCardMessage_serializeInput;

function ws_ebizcard_com_app_GetUserProfileCardResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = ws_ebizcard_com_app_GetUserProfileCardResponseType_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function ws_ebizcard_com_app_RegisterUser_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling ws_ebizcard_com_app_RegisterUserResponseMessage_deserializeResponse');
     responseObject = ws_ebizcard_com_app_RegisterUserResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.RegisterUser_onsuccess = ws_ebizcard_com_app_RegisterUser_op_onsuccess;

function ws_ebizcard_com_app_RegisterUser_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.RegisterUser_onerror = ws_ebizcard_com_app_RegisterUser_op_onerror;

//
// Operation {http://ws.ebizcard.com/app}RegisterUser
// - bare operation. Parameters:
// - ws_ebizcard_com_app_RegisterUserType
//
function ws_ebizcard_com_app_RegisterUser_op(successCallback, errorCallback, RegisterUserType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = RegisterUserType;
    xml = this.RegisterUserMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.RegisterUser_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.RegisterUser_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://ws.ebizcard.com/RegisterUser';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

ws_ebizcard_com_app_BizCardPortType.prototype.RegisterUser = ws_ebizcard_com_app_RegisterUser_op;

function ws_ebizcard_com_app_RegisterUserMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://ws.ebizcard.com/app' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns0:RegisterUserType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

ws_ebizcard_com_app_BizCardPortType.prototype.RegisterUserMessage_serializeInput = ws_ebizcard_com_app_RegisterUserMessage_serializeInput;

function ws_ebizcard_com_app_RegisterUserResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = ws_ebizcard_com_app_RegisterUserResponseType_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function ws_ebizcard_com_app_ListFriendCards_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling ws_ebizcard_com_app_ListFriendCardsResponseMessage_deserializeResponse');
     responseObject = ws_ebizcard_com_app_ListFriendCardsResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.ListFriendCards_onsuccess = ws_ebizcard_com_app_ListFriendCards_op_onsuccess;

function ws_ebizcard_com_app_ListFriendCards_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.ListFriendCards_onerror = ws_ebizcard_com_app_ListFriendCards_op_onerror;

//
// Operation {http://ws.ebizcard.com/app}ListFriendCards
// - bare operation. Parameters:
// - ws_ebizcard_com_app_ListFriendCardsType
//
function ws_ebizcard_com_app_ListFriendCards_op(successCallback, errorCallback, ListFriendCardsType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = ListFriendCardsType;
    xml = this.ListFriendCardsMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.ListFriendCards_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.ListFriendCards_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://ws.ebizcard.com/ListFriendCards';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

ws_ebizcard_com_app_BizCardPortType.prototype.ListFriendCards = ws_ebizcard_com_app_ListFriendCards_op;

function ws_ebizcard_com_app_ListFriendCardsMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://ws.ebizcard.com/app' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns0:ListFriendCardsType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

ws_ebizcard_com_app_BizCardPortType.prototype.ListFriendCardsMessage_serializeInput = ws_ebizcard_com_app_ListFriendCardsMessage_serializeInput;

function ws_ebizcard_com_app_ListFriendCardsResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = ws_ebizcard_com_app_ListFriendCardsResponseType_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function ws_ebizcard_com_app_ListFriendCardRequestsSecure_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling ws_ebizcard_com_app_ListFriendCardRequestsResponseMessage_deserializeResponse');
     responseObject = ws_ebizcard_com_app_ListFriendCardRequestsResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.ListFriendCardRequestsSecure_onsuccess = ws_ebizcard_com_app_ListFriendCardRequestsSecure_op_onsuccess;

function ws_ebizcard_com_app_ListFriendCardRequestsSecure_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.ListFriendCardRequestsSecure_onerror = ws_ebizcard_com_app_ListFriendCardRequestsSecure_op_onerror;

//
// Operation {http://ws.ebizcard.com/app}ListFriendCardRequestsSecure
// - bare operation. Parameters:
// - ws_ebizcard_com_app_ListFriendCardRequestsSecureType
//
function ws_ebizcard_com_app_ListFriendCardRequestsSecure_op(successCallback, errorCallback, ListFriendCardRequestsSecureType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = ListFriendCardRequestsSecureType;
    xml = this.ListFriendCardRequestsSecureMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.ListFriendCardRequestsSecure_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.ListFriendCardRequestsSecure_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://ws.ebizcard.com/ListFriendCardRequestsSecure';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

ws_ebizcard_com_app_BizCardPortType.prototype.ListFriendCardRequestsSecure = ws_ebizcard_com_app_ListFriendCardRequestsSecure_op;

function ws_ebizcard_com_app_ListFriendCardRequestsSecureMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://ws.ebizcard.com/app' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns0:ListFriendCardRequestsSecureType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

ws_ebizcard_com_app_BizCardPortType.prototype.ListFriendCardRequestsSecureMessage_serializeInput = ws_ebizcard_com_app_ListFriendCardRequestsSecureMessage_serializeInput;

function ws_ebizcard_com_app_ListFriendCardRequestsResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = ws_ebizcard_com_app_ListFriendCardRequestsResponseType_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function ws_ebizcard_com_app_AuthenticateUser_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling ws_ebizcard_com_app_AuthenticateUserResponseMessage_deserializeResponse');
     responseObject = ws_ebizcard_com_app_AuthenticateUserResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.AuthenticateUser_onsuccess = ws_ebizcard_com_app_AuthenticateUser_op_onsuccess;

function ws_ebizcard_com_app_AuthenticateUser_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

ws_ebizcard_com_app_BizCardPortType.prototype.AuthenticateUser_onerror = ws_ebizcard_com_app_AuthenticateUser_op_onerror;

//
// Operation {http://ws.ebizcard.com/app}AuthenticateUser
// - bare operation. Parameters:
// - ws_ebizcard_com_app_AuthenticateUserType
//
function ws_ebizcard_com_app_AuthenticateUser_op(successCallback, errorCallback, AuthenticateUserType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = AuthenticateUserType;
    xml = this.AuthenticateUserMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.AuthenticateUser_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.AuthenticateUser_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://ws.ebizcard.com/AuthenticateUser';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

ws_ebizcard_com_app_BizCardPortType.prototype.AuthenticateUser = ws_ebizcard_com_app_AuthenticateUser_op;

function ws_ebizcard_com_app_AuthenticateUserMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://ws.ebizcard.com/app' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns0:AuthenticateUserType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

ws_ebizcard_com_app_BizCardPortType.prototype.AuthenticateUserMessage_serializeInput = ws_ebizcard_com_app_AuthenticateUserMessage_serializeInput;

function ws_ebizcard_com_app_AuthenticateUserResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = ws_ebizcard_com_app_AuthenticateUserResponseType_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function ws_ebizcard_com_app_BizCardPortType_ws_ebizcard_com_app_BizCardPort () {
  this.url = 'http://www.zazzycard.com:22080/eBizCard/ws/eBizCardService';
}
ws_ebizcard_com_app_BizCardPortType_ws_ebizcard_com_app_BizCardPort.prototype = new ws_ebizcard_com_app_BizCardPortType;
