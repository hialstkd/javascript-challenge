// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

//Reference the table body
var tbody = d3.select("tbody");

// Loop Through `data` for each weather report object
tableData.forEach((UFOreport)=>{
   
    // Use d3 to append one table row `tr` for each weather report object
    var row = tbody.append("tr");

    // Use `Object.entries` for each weather report value
    Object.entries(UFOreport).forEach(([key,value]) =>{
        
        // Append a cell to the row for each value
        var cell = row.append("td");
        
        cell.text(value);
    });

});



//Code for filtering 

//Reference the filter button for an action to happen

var button = d3.select("#filter-btn");

//Creating a function to opperate when the button is pushed

function filter() {
    
    //Remove the existing table
    d3.select("tbody").html("");

    //Prevent from refreshing
    d3.event.preventDefault();

    //Get the data that a user has put

    input = d3.select("#datetime").property("value");

    //Match with the data
    matchdata = tableData.filter(date => date.datetime === input);

    console.log(matchdata);

    matchdata.forEach((UFOreport)=>{
   
        // Use d3 to append one table row `tr` for each weather report object
        var row = tbody.append("tr");
    
        // Use `Object.entries` for each weather report value
        Object.entries(UFOreport).forEach(([key,value]) =>{
            
            // Append a cell to the row for each value
            var cell = row.append("td");
            
            cell.text(value);
        });
    
    });
};

button.on("click",filter);