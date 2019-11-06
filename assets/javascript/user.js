var businesses = localStorage.getItem("businessArr");
var businessConverted = JSON.parse(businesses);
var imgDiv = $("<img>");
var textDiv = $("<div>");

console.log(businessConverted)
console.log(businessConverted[0]);

//append display div to html
// $("#businessGrid").append(textDiv);

for (var count = 0; count < businessConverted.length; count++) {
    var imgDiv = $("<img>");
    var textDiv = $("<div>");

    
}

$("#textDiv").html(businessConverted);
        // "Restaurant name: " + results[count].name +
        // "<br>" + "Phone number: " + results[count].display_phone + "<br>" + 
        // "Menu Price: " + results[count].price + "<br>" + 
        // "Restaurant rating: " + results[count].rating + "<br>" + 
        // "Restaurant location: " + results[count].location.display_address + "<br>");
    //   restaurantDiv.append(imgDiv);
    //   imgDiv.html(img);