// Get HTML elements
const button = document.getElementById("searchBtn");
const input = document.getElementById("searchInput");

// Run when Search button is clicked
button.addEventListener("click", function () {

    // Get city name
    let city = input.value.trim().toLowerCase();

    // Check city name
    if (city === "delhi") {

        document.getElementById("city").innerHTML = "Delhi, India";
        document.getElementById("temp").innerHTML = "35°C";
        document.getElementById("feelsLike").innerHTML = "38°C";
        document.getElementById("Humidity").innerHTML = "60%";
        document.getElementById("wind").innerHTML = "12 km/h";
        document.getElementById("pressure").innerHTML = "1012 hPa";

        document.getElementById("weatherIcon").src = "images/sun.png";
    }

    else if (city === "bengaluru") {

        document.getElementById("city").innerHTML = "Bengaluru, India";
        document.getElementById("temp").innerHTML = "28°C";
        document.getElementById("feelsLike").innerHTML = "30°C";
        document.getElementById("humidity").innerHTML = "75%";
        document.getElementById("wind").innerHTML = "8 km/h";
        document.getElementById("pressure").innerHTML = "1015 hPa";

        document.getElementById("weatherIcon").src = "images/cloud.png";
    }

    else if (city === "mumbai") {

        document.getElementById("city").innerHTML = "Mumbai, India";
        document.getElementById("temp").innerHTML = "31°C";
        document.getElementById("feelsLike").innerHTML = "34°C";
        document.getElementById("humidity").innerHTML = "82%";
        document.getElementById("wind").innerHTML = "15 km/h";
        document.getElementById("pressure").innerHTML = "1009 hPa";

        document.getElementById("weatherIcon").src = "images/rain.png";
    }

    else if (city === "chennai") {

        document.getElementById("city").innerHTML = "Chennai, India";
        document.getElementById("temp").innerHTML = "33°C";
        document.getElementById("feelsLike").innerHTML = "37°C";
        document.getElementById("humidity").innerHTML = "72%";
        document.getElementById("wind").innerHTML = "14 km/h";
        document.getElementById("pressure").innerHTML = "1011 hPa";

        document.getElementById("weatherIcon").src = "images/sun.png";
    }

    else if (city === "hyderabad") {

        document.getElementById("city").innerHTML = "Hyderabad, India";
        document.getElementById("temp").innerHTML = "30°C";
        document.getElementById("feelsLike").innerHTML = "32°C";
        document.getElementById("humidity").innerHTML = "68%";
        document.getElementById("wind").innerHTML = "10 km/h";
        document.getElementById("pressure").innerHTML = "1013 hPa";

        document.getElementById("weatherIcon").src = "images/cloud.png";
    }

    else {

        alert("City not found!");

    }

});