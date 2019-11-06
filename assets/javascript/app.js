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


// Set of code that will make the modal pop up without clicking the launch modal button
// $("#modalLoginForm").addClass("show")
// $("#modalLoginForm").attr("style", "display: block")


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