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

// var database = firebase.database();
const auth = firebase.auth();
const db = firebase.firestore();

var queryURL = "";
var clickCounter = 0;

// Functions
// ================================================================================
var database = firebase.database();

var apiKey = "ZsEY8dcQ0p5gM5wS14qBOA0jMe1yhAFEoJk3bqurtkal1J_CAQGzqjUg9VCV9UlzoUXfgPbOeaXps_aaPVg3KJUZ4F3SNS1NCW3ni9IAPPTNn-VVtjEml18Thua9XXYx"
var yelpAPI = "";
var yelpSearchURL = "";
var yelpDetailsURL = "";
var yelpReviewsURL = "";
var autocomplete = "";
var limit = 20;

// On Click
// $("#subbtn").on("click", function () {
//   event.preventDefault();
//   // Add 1 to clickCounter
//   clickCounter++;
//   database.ref().set({
//     clickCount: clickCounter
//   });
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

//search button
$("#subbtn").on("click", function () {
  //prevent refresh on user press 'enter'
  event.preventDefault();
  //pull and store values from input form
  cuisine = $("#cuisine-type").val().trim();
  zip = $("#user-location").val().trim();
  yelpAPI = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3'
  yelpSearchURL = yelpAPI + '/businesses/search?term=' + cuisine + '&limit=' + limit + '&location=' + zip;
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

    // Set of code that will make the modal pop up without clicking the launch modal button
    // $("#modalLoginForm").addClass("show")
    // $("#modalLoginForm").attr("style", "display: block"
    //set variables
    var count = 0;
    var results = searchResults.businesses;
    var businessIDArr = [];
    var businessID;
    var reviewURLArr = [];
    var detailsURLArr = [];

    localStorage.clear();

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
    for (count = 0; count < results.length; count++) {
      businessID = results[count].id;
      yelpDetailsURL = yelpAPI + '/businesses/' + businessID;
      yelpReviewsURL = yelpAPI + '/businesses/' + businessID + '/reviews';

      //push values to arrays
      businessIDArr.push(businessID);
      detailsURLArr.push(yelpDetailsURL);
      reviewURLArr.push(yelpReviewsURL);


      // console.log(businessIDArr)
      // console.log(results[count]);
      // console.log("Restaurant name: " + results[count].name);
      // console.log("Business ID: " + businessID);
      // console.log("Phone number: " + results[count].display_phone);
      // console.log("Menu Price: " + results[count].price);
      // console.log("Restaurant rating: " + results[count].rating);
      // console.log("Restaurant location: " + results[count].location.display_address)
      // console.log(businessIDArr[count]);
      // console.log(detailsURLArr);
      // console.log(reviewURLArr);
      // console.log("-----------------");
    }

    //   for (count = 0; count < results.length; count++) {
    //     yelpReviewsURL = reviewURLArr[count];
    //     yelpDetailsURL = detailsURLArr[count];

    //     console.log(yelpReviewsURL);
    //     console.log(yelpDetailsURL);

    //     var getBusinessDetails = $.ajax({
    //       async:true,
    //       url: yelpReviewsURL,
    //       headers: {
    //         "accept": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //         "Authorization": `Bearer ${apiKey}`
    //       },
    //       dataType: 'json',
    //     }),
    //       getBusinessReviews = $.ajax({
    //         async:true,
    //         url: yelpDetailsURL,
    //         headers: {
    //           "accept": "application/json",
    //           "Access-Control-Allow-Origin": "*",
    //           "Authorization": `Bearer ${apiKey}`
    //         },
    //         dataType: 'json',
    //       });

    //     $.when(getBusinessDetails, getBusinessReviews).done(function (businessDetails, businessReviews) {
    //       console.log(yelpReviewsURL);
    //       console.log(businessDetails);
    //       console.log(businessReviews);
    //     })
    //     setTimeout(getBusinessDetails)
    // }


    //store data in local storage
    localStorage.setItem("businessArr", JSON.stringify(searchResults));
    localStorage.setItem("businessIDArr", JSON.stringify(businessIDArr));
  });
  location.href = "Separate-Pages/food.html";
});
