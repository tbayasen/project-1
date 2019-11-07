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
var database = firebase.database();

var apiKey = "ZsEY8dcQ0p5gM5wS14qBOA0jMe1yhAFEoJk3bqurtkal1J_CAQGzqjUg9VCV9UlzoUXfgPbOeaXps_aaPVg3KJUZ4F3SNS1NCW3ni9IAPPTNn-VVtjEml18Thua9XXYx"
var yelpAPI = "";
var yelpSearchURL = "";
var yelpDetailsURL = "";
var yelpReviewsURL = "";
var autocomplete = "";
var limit = 20;

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
  cuisine = $("#cuisine-type").val().trim();
  zip = $("#user-location").val().trim();
  yelpAPI = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3'
  yelpSearchURL = yelpAPI + '/businesses/search?term=' + cuisine + '&limit='+ limit + '&location=' + zip;
  // yelpDetailsURL = yelpAPI + '/businesses/' + businessID;
  // yelpReviewsURL = yelpAPI + '/businesses/' + businessID + '/reviews';
  autocomplete = yelpAPI + '/' + autocomplete;
  console.log(yelpSearchURL)

  $.ajax({
    url: yelpSearchURL,
    headers: {
      "accept": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": `Bearer ${apiKey}`
    },
    dataType: 'json',
  }).then(function (searchResults) {
    console.log(yelpSearchURL)
    console.log(searchResults)
    console.log(searchResults.businesses)

    //set variables
    var count = 0;
    var results = searchResults.businesses;
    var businessIDArr = [];
    var businessID;

    localStorage.clear();

    console.log(name);

    //iterate through json array
    for (count = 0; count < results.length; count++) {
      //push businessID to businessIDArr
      businessID =  results[count].id;
      businessIDArr.push(businessID);

      console.log(businessIDArr)
      console.log(results[count]);
      console.log("Restaurant name: " + results[count].name);
      console.log("Business ID: " + businessID);
      console.log("Phone number: " + results[count].display_phone);
      console.log("Menu Price: " + results[count].price);
      console.log("Restaurant rating: " + results[count].rating);
      console.log("Restaurant location: " + results[count].location.display_address)
      console.log("-----------------");
      
    }

    //store data in local storage
    localStorage.setItem("businessArr", JSON.stringify(searchResults));
    localStorage.setItem("businessIDArr", JSON.stringify(businessIDArr));
  });
  //location.href = "Separate-Pages/food.html";
});
