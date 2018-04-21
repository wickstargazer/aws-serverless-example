/*global WildRydes _config*/

//var WildRydes = window.WildRydes || {};


(function subscribeScopeWrapper($) {
    // var authToken;
    // WildRydes.authToken.then(function setAuthToken(token) {
    //     if (token) {
    //         authToken = token;
    //     } else {
    //         window.location.href = '/signin.html';
    //     }
    // }).catch(function handleTokenError(error) {
    //     alert(error);
    //     window.location.href = '/signin.html';
    // });
    function submitNewsletter() {
        $.ajax({
            method: 'POST',
            url: _config.api.invokeUrl + '/subscribe',
            // headers: {
            //     Authorization: authToken
            // },
            data: JSON.stringify({
                email: $('#newsletteremail').val()}),
            contentType: 'application/json',
            success: completeSubscriptionRequest,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error requesting ride: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
                alert('An error occured when requesting your unicorn:\n' + jqXHR.responseText);
            }
        });
    }

    function completeSubscriptionRequest(result) {
       
        console.log('Response received from API: ', result);
        alert("Thank you for subscribing!!");
    }

    // Register click handler for #request button
    $(document).ready(function() {
        $('#newsletterSubscriptionForm').click( function(event) {
            event.preventDefault();
            submitNewsletter();
        });
        if (!_config.api.invokeUrl) {
            $('#noApiMessage').show();
        }
    });

  

   


}(jQuery));
