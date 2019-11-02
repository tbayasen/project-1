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
firebase.analytics();

//store global variables
var a = "";
var b = "";
var c = "";
var d = "";
var database = firebase.database();
 
//Zomato API
//No set function yet, just linking the API
//ONLY 1000 QUERIES PER DAY!!!!!
function TBD() {
  //After v2.1/ we list the data we are trying to referennce i.e. cities,location,reviews, restaraunts etc...from the zomato api documentation
  //queryURL parameters still need to be set to limit how much data is displayed
  var apiKey = "fc5adeded0912b9cf54d85989a2e7ae9"
  var queryURL = 'https://developers.zomato.com/api/v2.1/' + '&api_key=' + apiKey
  $.ajax({
    url: queryURL,
    method: 'GET'
  })
    .then(function (response) {
      var results = response.data;
    });
}

//search button
$("#").on("click", function(event) {
  //prevent refresh on user press 'enter'
  event.preventDefault();
  //pull and store values from input form
  a = $("#").val().trim();
  b = $("#").val().trim();
  c = $("#").val().trim();
  d = $("#").val().trim();

  //
});
