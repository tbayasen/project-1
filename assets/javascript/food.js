var businessArr = localStorage.getItem("businessArr");
var businessConverted = JSON.parse(businessArr);
var imgDiv = $("<img>");
var textDiv = $("<div>");

console.log(businessConverted)
console.log(businessConverted[0]);

//append display div to html
// $("#businessGrid").append(textDiv);

for (var count = 0; count < businessConverted.length; count++) {
    var imgDiv = $("<img>");
    var textDiv = $("<div>");
    var businessData = businessConverted[count];
    var name = businessData.name;
    var address = businessData.location.display_address;
    var zip = businessData.location.zip_code;
    var phoneNum = businessData.display_phone;
    var price = businessData.price;
    var rating = businessData.rating;
    var imgURL = businessData.image_url;
    
    
    console.log(name);

    //append and display images in carousel

    //display time in 12-hour format
};

$("#textDiv").html(businessConverted);
        // "Restaurant name: " + results[count].name +
        // "<br>" + "Phone number: " + results[count].display_phone + "<br>" + 
        // "Menu Price: " + results[count].price + "<br>" + 
        // "Restaurant rating: " + results[count].rating + "<br>" + 
        // "Restaurant location: " + results[count].location.display_address + "<br>");
    //   restaurantDiv.append(imgDiv);
    //   imgDiv.html(img);