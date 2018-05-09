// Login page - image slider
$(document).ready(function () {
    $('.slider').slider();


    //on click for create account to bring them to the set up page. 
    $('#createAccount').click(function () {
        window.open('register', '_self');
    })

    // parallax for landing page
    $('.parallax').parallax();


    $("#loginBTN").click(function () {
        window.open('client-landing', '_self')
    })

});