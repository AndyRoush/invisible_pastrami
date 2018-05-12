// This function grabs name from the database 
function getName() {
    $.get("/api/posts", function (data) {
        console.log(data)
        var name = data[data.length-1].firstName + " " + data[data.length-1].lastName
        if (!name || !name.length) {
            displayEmpty()
        } else {
            $("#fullName").append(name)
            $("#fullName2").append(name)
            $("#userName").append(data[data.length-1].userName)
            $("#email").append(data[data.length-1].email)
        }
    })
}
getName()

function displayEmpty() {
    $("#usersName").empty()
}

getFitnessInfo()

function getFitnessInfo() {
    $("#dietPref").empty()
    $("#addNotes").empty()
    $("#exercisePref").empty()
    $("#goal").empty()
    $.get("/api/posts2", function (data){
        console.log(data)
             $("#dietPref").append(data[data.length-1].diet)
            $("#addNotes").append(data[data.length-1].addNotes)
            $("#exercisePref").append(data[data.length-1].exercisePref)
            $("#goal").append(data[data.length-1].goal)
    })
}