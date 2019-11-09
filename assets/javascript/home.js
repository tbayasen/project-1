var apiKey = "ZsEY8dcQ0p5gM5wS14qBOA0jMe1yhAFEoJk3bqurtkal1J_CAQGzqjUg9VCV9UlzoUXfgPbOeaXps_aaPVg3KJUZ4F3SNS1NCW3ni9IAPPTNn-VVtjEml18Thua9XXYx"
var yelpAPI = "";
var yelpSearchURL = "";
var yelpDetailsURL = "";
var yelpReviewsURL = "";
var autocomplete = "";
var limit = 20;

var apiKey = "wAobknQgAx21mQJuLhGdCe0MSHJtlI5TX6xNyV1t_0RGxDxGNIueYFAiv_nAxJe8EpHLwX07x2cbBmedIPXMKZSoUqtrpkiLW8gRxeqq_xftq0DWxoQhdeAnSuG9XXYx"
var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=by-chloe&location=boston";

//declare variables
var userLat;
var userLong;
var userCoords = [];

var geoSuccess = function (position) {
    var userLat = position.coords.latitude;
    var userLong = position.coords.longitude;
    userCoords.push({userLat, userLong});

    localStorage.setItem("userLocation", JSON.stringify(userCoords));
    console.log(userLat)
    console.log(userLong)
}

navigator.geolocation.getCurrentPosition(geoSuccess);

//search button
$("#subbtn").on("click", function () {
    //prevent refresh on user press 'enter'
    event.preventDefault();
    //clear local storage

    //pull and store values from input form
    cuisine = $("#cuisine-type").val().trim();
    zip = $("#user-location").val().trim();
    yelpAPI = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3'
    yelpSearchURL = yelpAPI + '/businesses/search?term=' + cuisine + '&limit=' + limit + '&location=' + zip;

    $.ajax({
        url: yelpSearchURL,
        headers: {
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${apiKey}`
        },
        dataType: 'json',
    }).then(function (searchResults) {
        localStorage.setItem("businessArr", JSON.stringify(searchResults));

        //set variables
        var count = 0;
        var results = searchResults.businesses;
        var businessID;
        var businessDetails = [];
        var name;
        var address;
        var zip;
        var longitude;
        var latitude;
        var phoneNum;
        var price;
        var rating;

        //iterate through json array
        for (count = 0; count < results.length; count++) {
            name = results[count].name;
            address = results[count].location.display_address;
            zip = results[count].location.zip_code;
            phoneNum = results[count].display_phone;
            price = results[count].price;
            rating = results[count].rating;
            businessID = results[count].id;
            photo = results[count].image_url;
            longitude = results[count].coordinates.longitude;
            latitude = results[count].coordinates.latitude;

            //push values to arrays
            businessDetails.push({ name, address, zip, longitude, latitude, phoneNum, price, rating, businessID, photo });
        }
        console.log(businessDetails);

        //store data in local storage
        localStorage.setItem("businessDetails", JSON.stringify(businessDetails));

    });

    var timer = setTimeout(function () {
        location.href = "Separate-Pages/food.html";
    }, 3000);
    timer();
});