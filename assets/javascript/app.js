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


//search button
$("#subbtn").on("click", function () {
  //prevent refresh on user press 'enter'
  event.preventDefault();
  //pull and store values from input form
  cuisine = $("#Cuisine").val().trim();
  zip = $("#zip").val().trim();
  queryURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=' + cuisine + '&limit=50&location=' + zip;
  console.log(queryURL)

  $.ajax({
    url: queryURL,
    headers: {
    "accept":"application/json",
    "Access-Control-Allow-Origin":"*",
    "Authorization": `Bearer ${apiKey}`
    },
    dataType: 'json',
  }).then(function(response) {
    console.log(queryURL)
      var results = response.data;
      console.log(response)
      console.log(results)
    });
});
