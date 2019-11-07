var firebaseConfig = {
  apiKey: "AIzaSyBBKQgmkoGusn-CCK6_b2Pp5mh0uaeT0Sc",
  authDomain: "project-food-48382.firebaseapp.com",
  databaseURL: "https://project-food-48382.firebaseio.com",
  projectId: "project-food-48382",
  storageBucket: "project-food-48382.appspot.com",
  messagingSenderId: "392755218679",
  appId: "1:392755218679:web:2f531484e721ae0c346bf2",
  measurementId: "G-PLG5EV7X6P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//store global variables
var a = "";
var b = "";
var c = "";
var d = "";
var database = firebase.database();

var apiKey = "ZsEY8dcQ0p5gM5wS14qBOA0jMe1yhAFEoJk3bqurtkal1J_CAQGzqjUg9VCV9UlzoUXfgPbOeaXps_aaPVg3KJUZ4F3SNS1NCW3ni9IAPPTNn-VVtjEml18Thua9XXYx"
var queryURL = "";

//Zomato API
//No set function yet, just linking the API
//ONLY 1000 QUERIES PER DAY!!!!!
//After v2.1/ we list the data we are trying to referennce i.e. cities,location,reviews, restaraunts etc...from the zomato api documentation
//queryURL parameters still need to be set to limit how much data is displayed


var clickCounter = 0;

// Functions
// ================================================================================

// On Click
$("#subbtn").on("click", function () {
  event.preventDefault();
  // Add 1 to clickCounter
  clickCounter++;
  database.ref().set({
    clickCount: clickCounter
  });
});

// var apiKey = "fc5adeded0912b9cf54d85989a2e7ae9"
// var queryURL = "https://developers.zomato.com/api/v2.1/categories"
// $.ajax({
//   dataType: 'json',
//   url: queryURL,
//   headers: {
//     "user-key": apiKey
//   }
// }).then(function (response) {
//   console.log(response.data.categories[0].name);
// });

var apiKey = "wAobknQgAx21mQJuLhGdCe0MSHJtlI5TX6xNyV1t_0RGxDxGNIueYFAiv_nAxJe8EpHLwX07x2cbBmedIPXMKZSoUqtrpkiLW8gRxeqq_xftq0DWxoQhdeAnSuG9XXYx"
var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=by-chloe&location=boston";

$.ajax({
  url: queryURL,
  headers: {
    'Authorization': "Bearer " + apiKey,
  },
  method: 'Get',
  dataType: 'json',
  success: function (data) {
    console.log(data);
  }


});
});

//After v2.1/ we list the data we are trying to referennce i.e. cities,location,reviews, restaraunts etc...from the zomato api documentation
//queryURL parameters still need to be set to limit how much data is displayed

//After v2.1/ we list the data we are trying to referennce i.e. cities,location,reviews, restaraunts etc...from the zomato api documentation
//queryURL parameters still need to be set to limit how much data is displayed


//search button
$("#subbtn").on("click", function () {
  //prevent refresh on user press 'enter'
  event.preventDefault();
  //pull and store values from input form
  cuisine = $("#cuisine-type").val().trim();
  zip = $("#user-location").val().trim();
  queryURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=' + cuisine + '&limit=20&location=' + zip;
  console.log(queryURL)


  $.ajax({
    url: queryURL,
    headers: {
      "accept": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": `Bearer ${apiKey}`
    },
    dataType: 'json',
  }).then(function (response) {
    console.log(queryURL)
    console.log(response)
    console.log(response.businesses)

    // Set of code that will make the modal pop up without clicking the launch modal button
    // $("#modalLoginForm").addClass("show")
    // $("#modalLoginForm").attr("style", "display: block"
    //set variables
    var count = 0;
    var results = response.businesses;
    var cardText = [];

    localStorage.clear();
    localStorage.setItem("businessArr", JSON.stringify(results));

    console.log(name);

    // 
    // //search button
    // $("#").on("click", function (event) {
    //   //prevent refresh on user press 'enter'
    //   event.preventDefault();
    //   //pull and store values from input form
    //   a = $("#").val().trim();
    //   b = $("#").val().trim();
    //   c = $("#").val().trim();
    //   d = $("#").val().trim();
    // });
    //iterate through json array
    for (count = 0; count < response.businesses.length; count++) {
      var img = $("<img>");
      var imgURL = results[count].image_url;
      img.attr("src", imgURL);
      img.attr("height", "40");
      img.attr("width", "40")
      var imgDiv = $("<div>")

      var restaurantDiv = $("<div>");
      restaurantDiv.attr("id", "restaurantDisplay");

      console.log(results[count]);
      console.log("Restaurant name: " + results[count].name);
      console.log("Phone number: " + results[count].display_phone);
      console.log("Menu Price: " + results[count].price);
      console.log("Restaurant rating: " + results[count].rating);
      console.log("Restaurant location: " + results[count].location.display_address)
      console.log("-----------------");

      // var text = 
      //   "Restaurant name: " + results[count].name + 
      //   "<br>" + "Phone number: " + results[count].display_phone + "<br>" + 
      //   "Menu Price: " + results[count].price + "<br>" + 
      //   "Restaurant rating: " + results[count].rating + "<br>" + 
      //   "Restaurant location: " + results[count].location.display_address + "<br>"

      // cardText.push(text);

      location.href = "Separate-Pages/users.html";
    }
    console.log(cardText)

