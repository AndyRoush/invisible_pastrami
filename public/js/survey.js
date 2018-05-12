// Login page - image slider
$(document).ready(function () {
    //questionnaire Jquery init
    $('select').material_select();
    // $('select').material_select('destroy');

    // Initialize collapse button
    $(".button-collapse").sideNav();

    var goal = $("#goal")
    var exercisePref = $("#exercisePref")
    var dietPref = $("#dietPref")
    var addNotes = $("#addNotes")

    // Adding an event listener for when the form is submitted
    $(".landingBTN").on("click", function handleFormSubmit(event) {
        event.preventDefault()
        // Constructing a newPost object to hand to the database
        var newPost = {
            goal: goal.val(),
            diet: dietPref.val(),
            exercisePref: exercisePref.val(),
            addNotes: addNotes.val()
        }
        // Run submitPost to create a whole new post
        submitPost(newPost);
        window.open('client-landing', '_self')
    })


    function submitPost(Post) {
        $.post("/api/posts2/", Post, function (data) {
            window.location.href = "/profile"
        })
    }
})


       

