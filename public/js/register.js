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
        // Condition: will not submit the post 
        if (!firstName.val() && !lastName.val() && !userName.val() && !password.val() && !email.val()){
            return
        }
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
            window.location.href = "/login"
        })
    }
})