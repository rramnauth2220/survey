/*$(document).ready(function() {
    $('#test-form').bootstrapValidator({
        //submitButtons: '#postForm',
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'valid-feedback',
            invalid: 'invalid-feedback fa fa-exclamation',
            validating: 'fa fa-refresh'
        },
        fields: {
            firstName: {
             message: 'The first name is not valid',
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'The first name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        message: 'The first name can only accept alphabetical input'
                    },
                }
            },
            lastName: {
                message: 'Last Name is not valid',
                validators: {
                    notEmpty: {
                        message: 'Last Name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'Last Name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        message: 'Last Names can only consist of alphabetical characters'
                    },
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The email address is not a valid'
                    }
                }
            },
            address: {
                message: 'Address is not valid',
                validators: {
                    notEmpty: {
                        message: 'Address is required and cannot be empty'
                    }
                }
            }, 
        }
    })*/
	/*
    .on('success.form.bv', function(e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        var url = 'https://script.google.com/macros/s/AKfycbxSlQqlh6ivAXy6_0DRmkl-MrxhYwvhbAO2ciDynD2ATIJJZg9w/exec';
        var redirectUrl = 'success-page.html';
        // show the loading 
        $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        var jqxhr = $.post(url, $form.serialize(), function(data) {
			jqxhr.crossDomain = true;
            console.log("Success! Data: " + data.statusText);
            $(location).attr('href',redirectUrl);
        })
            .fail(function(data) {
                console.warn("Error! Data: " + data.statusText);
                // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                    //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                    $(location).attr('href',redirectUrl);                
                }
            });
    }); */
	
	/*
	var $form_task = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbwdqNXyopsANAK7Xx41rSAAFCifcSRvgYDqdbHmfg0XM2ypQ9c/exec'
    //url = 'https://script.google.com/macros/s/AKfycbxSlQqlh6ivAXy6_0DRmkl-MrxhYwvhbAO2ciDynD2ATIJJZg9w/exec'

	$('#postForm').on('click', function(e) {
	  e.preventDefault();
	  var jqxhr = $.ajax({
		url: url,
		method: "GET",
		dataType: "json",
		data: $form_task.serializeObject()
	  }).success(
		//location.reload()
		location.href = "main.html"
	  );
	});	*/
	
	var url_app = 'https://script.google.com/macros/s/AKfycbwdqNXyopsANAK7Xx41rSAAFCifcSRvgYDqdbHmfg0XM2ypQ9c/exec'
	
		var $form_task = $('form#test-form'),
		url = url_app
		//url = 'https://script.google.com/macros/s/AKfycbxSlQqlh6ivAXy6_0DRmkl-MrxhYwvhbAO2ciDynD2ATIJJZg9w/exec'

		$('#postForm').on('click', function(e) {
		  e.preventDefault();
		  var jqxhr = $.ajax({
			url: url,
			method: "GET",
			dataType: "json",
			data: $form_task.serializeObject()
		  }).success(
			//location.reload()
			window.location.href = "main.html"
		  );
		});
		
		//document.getElementById("origin").value = location.href.split("/").slice(-1);
		var $form_consent = $('form#consent-form'),
		url = url_app

		$('#consentForm').on('click', function(e) {
		  e.preventDefault();
		  var jqxhr = $.ajax({
			url: url,
			method: "GET",
			dataType: "json",
			data: $form_consent.serializeObject()
		  }).success(
			window.location.href = "participant.html"
		  );
		});
		
		var $form_participant = $('form#participant-form'),
		url = url_app
		//url = 'https://script.google.com/macros/s/AKfycbzDimJCelys81eCgUBG5XMKcqEquLn_ziNEz8nsojIj_n1w7Bg/exec'

		$('#participantForm').on('click', function(e) {
		  e.preventDefault();
		  var jqxhr = $.ajax({
			url: url,
			method: "GET",
			dataType: "json",
			data: $form_participant.serializeObject()
		  }).success(
			//console.log($form_participant.serializeObject())
			window.location.href = "main.html"
		  );
		});
//});