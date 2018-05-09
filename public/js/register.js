$(document).ready(function () {
    // Getting jQuery references to the post body
    var firstName = $("#firstName")
    var lastName = $("#lastName")
    var userName = $("#userName")
    var password = $("#password")
    var email = $("#email")
    var posts

    // Adding an event listener for when the form is submitted
    $(".submitBTN").on("click", function handleFormSubmit(event) {
        event.preventDefault()
        // Constructing a newPost object to hand to the database
        var newPost = {
            userName: userName.val(),
            firstName: firstName.val(),
            lastName: lastName.val(),
            email: email.val(),
            password: password.val(),
        }
        // Run submitPost to create a whole new post
        submitPost(newPost);
    })


    function submitPost(Post) {
        $.post("/api/posts/", Post, function (data) {
            window.location.href = "/survey"
        })
    }
})

// Login page - image slider
$(document).ready(function () {

    // slider init in signup page
    $('.slider').slider();

    //on click for create account to bring them to the set up page. 
    $('#createAccount').click(function () {
        window.open('register.html');
        return false;
    })

    // On click from landing to signup
    $('#signupButton').click(function () {
        window.open('register.html');
        return false;
    })

    //on click from landing page to bring existing user to log in page
    $('#loginButton').click(function () {
        window.open('login.html');
        return false;
    })

    // parallax for landing page
    $('.parallax').parallax();


    //fade in on scroll start ===================
    $(function () {
        $('.logopic').fadeIn('fast');
    });

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.section').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({
                    'opacity': '1'
                }, 1000);

            }

        });

    });
    //fade in on scroll end ===============


    //questionnaire Jquery init
    $('select').material_select();
    // $('select').material_select('destroy');


 

 // Initialize collapse button
 $(".button-collapse").sideNav();
 // Initialize collapsible (uncomment the line below if you use the dropdown variation)
 //$('.collapsible').collapsible();
       
});

