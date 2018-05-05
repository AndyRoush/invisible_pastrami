$(document).ready(function () {
    // Getting jQuery references to the post body
    var firstName = $("#firstName")
    var lastName = $("#lastName")
    var userName = $("#userName")
    var password = $("#password")
    var email = $("#email")
    var posts

    // Adding an event listener for when the form is submitted
    $("#register").on("submit", function handleFormSubmit(event) {
        event.preventDefault()
        // Condition: will not submit the post if we are missing a body 
        if (!firstName.val().trim() && !lastName.val().trim() && !userName.val().trim() && !password.val().trim() && !email.val().trim()) {
            return
        }
        // Constructing a newPost object to hand to the database
        var newPost = {
            firstName: firstName.val().trim(),
            lastName: lastName.val().trim(),
            userName: userName.val().trim(),
            password: password.val().trim(),
            email: email.val().trim(),
            trainer: false
        }
        // Run submitPost to create a whole new post
        submitPost(newPost);
    })

    function submitPost(Post) {
        $.post("/api/posts/", Post, function (data) {
            window.location.href = "/login"
        })
    }
})