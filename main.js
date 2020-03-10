function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
	(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

/*function createCookie(cookieName, cookieValue, daysToExpire)
{
  var date = new Date();
  date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
  document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
}*/
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
function checkCookie()
{
  var user = accessCookie("username");
  if (user!="")
	console.log(user)
  else
  {
	user = uuidv4(); //prompt("Please enter your name");
	//num = prompt("How many days you want to store your name on your computer?");
	if (user!="" && user!=null)
	{
	createCookie("username", user, num);
	}
  }
}