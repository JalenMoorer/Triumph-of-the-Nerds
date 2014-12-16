(function($,W,D)
{
    var JQUERY4U = {};
 
    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $("#register-form").validate({
                rules: {
                    subject: "required",
                    lastname: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    body: {
                        required: true,
                        minlength: 50
                    },
                    agree: "required"
                },
                messages: {
                    subject: "Please enter a subject",
                    lastname: "Please enter your lastname",
                    body: {
                        required: "Please provide a message",
                        minlength: "Your message must be at least 50 characters long"
                    },
                    email: "Please enter a valid email address",
                    agree: "Please accept our policy"
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });
        }
    }
 
    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });
 
})(jQuery, window, document);