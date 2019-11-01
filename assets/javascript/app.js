

$(document).ready(function () {



  $('.carousel').carousel();


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


});


