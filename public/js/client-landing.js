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

google.charts.load('current', {'packages':['corechart']});
google.charts.load("current", {packages:["calendar"]});
google.charts.setOnLoadCallback(NutritionChart);
google.charts.setOnLoadCallback(WorkoutLog);
google.charts.setOnLoadCallback(MonthlyCalorieCounter);

function NutritionChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Protein', 100],
      ['Fats', 40],
      ['Carbs', 150]
    ]);

    var options = {'title':'MacroNutrient Log for 5/12/18',
    'width':800,
    'height':600};

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.PieChart(document.getElementById('test-swipe-1'));
chart.draw(data, options);
}

function WorkoutLog() {
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'date', id: 'Date' });
    dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
    dataTable.addRows([
       [ new Date(2018, 4, 13), 826],
       [ new Date(2018, 4, 11), 676],
       [ new Date(2018, 4, 1),  366],
       [ new Date(2018, 4, 15), 756],
       [ new Date(2018, 4, 14), 226],
       [ new Date(2018, 4, 16), 326],
       [ new Date(2018, 4, 17), 426],
       [ new Date(2018, 3, 1),  626],
       [ new Date(2018, 3, 2),  726],
       [ new Date(2018, 3, 3),  226],
       [ new Date(2018, 3, 4),  326],
       [ new Date(2018, 3, 5),  726],
       [ new Date(2018, 3, 12), 269],
       [ new Date(2018, 3, 13), 926],
       [ new Date(2018, 3, 14), 826],
       [ new Date(2018, 3, 23), 726],
       [ new Date(2018, 3, 24), 826],
       [ new Date(2018, 3, 30), 826],
       [ new Date(2018, 3, 4),  826],
       [ new Date(2018, 3, 5),  826],
       [ new Date(2018, 3, 12), 826],
       [ new Date(2018, 3, 13), 826],
       [ new Date(2018, 3, 19), 826],
       [ new Date(2018, 3, 23), 826],
       [ new Date(2018, 3, 24), 826],
       [ new Date(2018, 3, 30), 826]
     ]);

    var chart = new google.visualization.Calendar(document.getElementById('test-swipe-2'));

    var options = {
      title: "Workout Log",
      height: 1200,
      width:750,
      calendar: {
          cellSize: 25,
          cellColor: {
              stroke: '#76a7fa',
              strokeOpacity: 0.5,
              strokeWidth:1
          },
          focusedCellColor: {
            stroke: '#d3362d',
            strokeOpacity: 1,
        strokeWidth: 1,
          },
          monthOutlineColor: {
            stroke: '#981b48',
            strokeOpacity: 0.8,
            strokeWidth: 2
          }
        }
    };

    chart.draw(dataTable, options);
}

function MonthlyCalorieCounter() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Calories Burned');

    data.addRows([
      [1, 600],  [2, 623],  [3, 317],  [4, 518],  [5, 499],
      [6, 811],  [7, 627],  [8, 633],  [9, 440],  [10, 532], [11, 535],
      [12, 530], [13, 540], [14, 642], [15, 747], [16, 644], [17, 548],
      [18, 852], [19, 854], [20, 342], [21, 255], [22, 656], [23, 257],
      [24, 160], [25, 250], [26, 152], [27, 451], [28, 549], [29, 253],
      [30, 155]
    ]);

    var options = {
        height:600,
        width:550,
      hAxis: {
        title: 'Daily Calorie log of May'
      },
      vAxis: {
        title: 'Number of Calories'
      }
    };

    var chart = new google.visualization.LineChart(document.getElementById('test-swipe-3'));

    chart.draw(data, options);
  }