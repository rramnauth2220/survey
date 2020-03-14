function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
	(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

function createCookie(cookieName, cookieValue)
{
  document.cookie = cookieName + "=" + cookieValue;
}

function accessCookie(cookieName)
{
  var name = cookieName + "=";
  var allCookieArray = document.cookie.split(';');
  for(var i=0; i<allCookieArray.length; i++)
  {
	var temp = allCookieArray[i].trim();
	if (temp.indexOf(name)==0)
	return temp.substring(name.length,temp.length);
  }
	return "";
}

function checkCookie() {
  var user = accessCookie("username");
  if (user!="" && user!=null) return user;
  else {
	 //if (user!="" && user!=null){
	  createCookie("username", uuidv4());
    return accessCookie("username");
    //user = accessCookie("username");
    //if (user == "" || user == null){
    //  localStorage.user = id_gen;
    //  using_storage = true;
    //}
	 //}
  }
  return null;
}

function accessStorageItem(itemName){
  return localStorage.getItem(itemName);
}

function checkStorage(){
  if (checkBrowserSupport()){
    var item = accessStorageItem("username");
    if (item != "" && item != null) return item;
    // else
    localStorage.setItem("username", uuidv4());
    return accessStorageItem("username");
  } else {
    console.log("This browser does not support local storage. Use cookies?");
    return checkCookie(); // contingency --> create a cookie instead.
  }
  return null;
}

// check browser's support of HTML5 local storage objects
function checkBrowserSupport(){
  return (typeof(Storage) !== "undefined");
}