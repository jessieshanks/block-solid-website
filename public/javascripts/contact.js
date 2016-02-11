

function resetForm () {
    $('#name').val('');
    $('#email').val('');
    $('#subject').val('');
    $('#message').val('');
}

function displayFormMessage(message) {
    $('#form-messages').text(message);
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

$(function() {


    // contact form submit, using ajax
    $('#ajax-contact-form').submit(function(event) {
        event.preventDefault();
        var from=$("#email").val().toLowerCase();
        console.log(validateEmail(from));
        if (validateEmail(from)) {
            $.ajax({
                type: 'POST',
                url: '/contact',
                dataType: "json",
                data: {
                    name: $("#name").val(),
                    email: from,
                    subject: $("#subject").val(),
                    message: $("#message").val()
                },
                success: function(response) {
                    console.log(response);
                    resetForm();
                    displayFormMessage("Message sent. Thank you!");
                },
                error: function(response) {
                    console.log(response);
                    displayFormMessage("Message did not go through. Please try again.");
                }
            });
        } else {
            displayFormMessage("Email format not correct. Please try again.");
        }
    });


    //clear messages when reset button is clicked
    $('#reset-button').on('click', function() {
        $('#form-messages').text("");
    });


 });



