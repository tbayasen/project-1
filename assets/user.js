$(document).ready(function () {


    //grab location from user
    var location = $("#user-location");


    //this is just for test, delete DELETE LATER AFTER FORM IMPLEMENTAITAODFNAKSDFN
    // location = "sacramento";

    //get the cuisine type
    var cuisineType = $("#cuisine-type");

    //this is just for test, delete DELETE LATER AFTER FORM IMPLEMENTAITAODFNAKSDFN
    // cuisineType = "sushi";

    //a variable to hold the location id
    var locationId;

    var resturant = "4a14adebafdd87615c9e954a2cc9941b";
    var queryURL = `https://developers.zomato.com/api/v2.1/cities?q=${location}`
    $.ajax({
        dataType: 'json',
        url: queryURL,
        // method: "GET",
        headers: {
            'user-key': resturant
        }
    }).then(function (response) {


        locationId = response.location_suggestions[0].id;
        console.log(locationId)






        //lets get the location id of the user

        var food = $(this).attr(".card")
        var resturant = "4a14adebafdd87615c9e954a2cc9941b";
        var queryURL = `https://developers.zomato.com/api/v2.1/search?entity_id=${locationId}&q=${cuisineType}`
        $.ajax({
            dataType: 'json',
            url: queryURL,
            // method: "GET",
            headers: {
                'user-key': resturant
            }
        }).then(function (response) {
            console.log(response)

            var results = response.data
        })

    })


    // $(document).ready(function () {
    //     $('.carousel').carousel();
    // });

    // var instance = M.Carousel.getInstance(elem);


})