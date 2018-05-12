// This function grabs name from the database 
function getName() {
    $.get("/api/posts", function (data) {
        console.log(data)
        var name = "Welcome " + data[data.length-1].firstName + " " + data[data.length-1].lastName + "!"
        if (!name || !name.length) {
            displayEmpty()
        } else {
            $("#usersName").append(name)
        }
    })
}
getName()

function displayEmpty() {
    $("#usersName").empty()
}

// $(document).ready(function (){
//     var timeCurrent = moment().format()
// $("#currentTime").append(timeCurrent)
// })