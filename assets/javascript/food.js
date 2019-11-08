var businessArr = localStorage.getItem("businessArr");
var businessConverted = JSON.parse(businessArr);
var imgDiv = $("<img>");

// cardDiv.attr("id", "card-full");
// cardDiv.addClass("card");
// cardBody.addClass("card-body");

console.log(businessConverted)

function renderGrid() {
    for (var count = 0; count < businessConverted.businesses.length; count++) {
        //set variables
        var businessData = businessConverted.businesses[count];
        var name = businessData.name;
        var address = businessData.location.display_address;
        var zip = businessData.location.zip_code;
        var phoneNum = businessData.display_phone;
        var price = businessData.price;
        var rating = businessData.rating;
        var imgURL = businessData.image_url;
        var nameLink = $("<a>");
            nameLink.html("<h5>" + name + "</h5>");
        var displayText =
            // "Restaurant name: " + name + "<br>" +
            "Phone number: " + phoneNum + "<br>" +
            "Menu Price: " + price + "<br>" +
            "Restaurant Rating: " + rating + "<br>" +
            "Restaurant Location: " + address + "<br>";
        var nameHead = $("<div>");
        var cardDiv = $("<div>");
        var cardBody = $("<div>");
        var text = $("<p>");
            text.html(displayText);

        //set attributes & class
        cardDiv.addClass("card");
        cardDiv.attr("id", "card-full");
        cardDiv.attr("data-cardNum", "card" + count);
        cardBody.addClass("card-body");
        nameLink.addClass("card-title");
        text.addClass("card-text");

        //append divs to grid
        $(".card-columns").append(cardDiv);
        $(cardDiv).append(nameHead);
        $(cardDiv).append(cardBody);
        $(cardBody).append(text)

        nameHead.html(nameLink);
        cardBody.html();

        console.log(name);
        console.log(displayText);

        //append and display images in carousel

        //display time in 12-hour format
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