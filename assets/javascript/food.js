//get and convert local storage
var businessArr = localStorage.getItem("businessDetails");
var businessIDArr = localStorage.getItem("businessIDArr");
var userSignIn = localStorage.getItem("userSignin");
var userLoc = localStorage.getItem("userLocation");
var locationConverted = JSON.parse(userLoc);
var businessConverted = JSON.parse(businessArr);
var idConverted = JSON.parse(businessIDArr);

console.log(businessConverted);
console.log(userSignIn);

function checkAccount() {
    if (userSignIn === 'true') {
        $("#login").hide();
        $("#signup").hide();
        $("#logout").show();
    }
};

checkAccount();

function renderGrid() {
    for (var count = 0; count < businessConverted.length; count++) {
        //set variables
        var businessData = businessConverted[count];
        var userCoords = locationConverted[0];
        var name = businessData.name;
        var address = businessData.address;
        var longitude = Number(businessData.longitude);
        var latitude = Number(businessData.latitude);
        var userLong = Number(userCoords.userLong);
        var userLat = Number(userCoords.userLat);
        var phoneNum = businessData.phoneNum;
        var price = businessData.price;
        var rating = businessData.rating;
        var imgURL = businessData.photo;
        var nameLink = $("<a>");
        nameLink.html("<h5>" + name + "</h5>");
        var distanceMiles;
        var distancekm;

        console.log(longitude);
        console.log(latitude);
        console.log(userLong);
        console.log(userLat);

        function deg2rad(deg) {
            return deg * (Math.PI / 180)
        }

        function calcDistance() {
            var radius = 6371; //radius of earth
            distanceLat = deg2rad(latitude - userLat);
            distanceLong = deg2rad(longitude - userLong);
            var a =
                Math.sin(distanceLat / 2) * Math.sin(distanceLat / 2) +
                Math.cos(deg2rad(userLat)) * Math.cos(deg2rad(latitude)) *
                Math.sin(distanceLong / 2) * Math.sin(distanceLong / 2);

            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            distancekm = radius * c; // Distance in km
            distancekm = distancekm.toFixed(2);
            distanceMiles = distancekm * 0.62137;
            distanceMiles = distanceMiles.toFixed(2);
            console.log(distancekm);
            console.log(distanceMiles);
            return distanceMiles;
        }
        calcDistance(distanceMiles);

        var displayText =
            // "Restaurant name: " + name + "<br>" +
            "Phone number: <br>" + phoneNum + "<br>" +
            "Menu Price: " + price + "<br>" +
            "Restaurant Rating: " + rating + "<br>" +
            "Restaurant Location: <br>" + address + "<br>" +
            "Distance: " + distanceMiles + "mi  " + "(" + distancekm + "km)";
        var nameHead = $("<div>");
        var cardDiv = $("<div>");
        var cardBody = $("<div>");
        var img = $("<img>");
        var imgDiv = $("<div>");
        var text = $("<p>");
        text.html(displayText);
        console.log(distanceMiles)

        //set attributes & class
        cardDiv.addClass("card cardDesign");
        cardDiv.attr("id", "card-full");
        cardDiv.attr("data-cardNum", "card" + count);

        cardBody.addClass("card-body");
        nameLink.addClass("card-title");
        text.addClass("card-text");
        imgDiv.addClass("card-image")
        img.attr("src", imgURL);
        img.attr("id", "image");

        //append divs to grid
        $(".card-columns").append(cardDiv);
        //append image to cardDiv
        $(cardDiv).append(imgDiv);
        $(imgDiv).append(img);
        $(cardDiv).append(nameHead);
        $(cardDiv).append(cardBody);
        $(cardBody).append(text)

        nameHead.html(nameLink);
        cardBody.html();

        console.log(name);
        console.log(displayText);
        console.log(imgURL);
    };
}

renderGrid();
    //     "Restaurant name: " + results[count].name +
    //     "<br>" + "Phone number: " + results[count].display_phone + "<br>" + 
    //     "Menu Price: " + results[count].price + "<br>" + 
    //     "Restaurant rating: " + results[count].rating + "<br>" + 
    //     "Restaurant location: " + results[count].location.display_address + "<br>");
    //   restaurantDiv.append(imgDiv);
    //   imgDiv.html(img);