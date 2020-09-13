// from data.js
var tableData = data;

// YOUR CODE HERE!

//Reference the table body
var tbody = d3.select("tbody");

// Loop Through `data` for each weather report object
tableData.forEach((UFOreport)=>{
   
    // Use d3 to append one table row `tr` for each weather report object
    var row = tbody.append("tr");

    // Use `Object.entries` for each weather report value
    object.entries(UFOreport).forEach(([key,value]) =>{
        
        // Append a cell to the row for each value
        var cell = row.append("td");
        
        cell.text(value);
    });

});


