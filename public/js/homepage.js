

// Login page - image slider
$(document).ready(function () {
    // homepage signup div
        $('#fadeup').hide().fadeIn(4000);
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
    
