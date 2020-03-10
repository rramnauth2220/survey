/*
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
	(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

window.value = uuidv4();
console.log(window.value);
*/

document.getElementById("origin").value = location.href.split("/").slice(-1);
var $form_consent = $('form#consent-form'),
url = 'https://script.google.com/macros/s/AKfycbwdqNXyopsANAK7Xx41rSAAFCifcSRvgYDqdbHmfg0XM2ypQ9c/exec'

$('#consentForm').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
	url: url,
	method: "GET",
	dataType: "json",
	data: $form_consent.serializeObject()
  }).success(
	console.log($form_consent.serializeObject())
	//location.href = "main.html"
  );
});