// script.js
let btn = document.getElementById("btn");
let result = document.querySelector(".location");
let latitude, longitude;

async function getUserLocation() {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    const response = await fetch(apiUrl);
    console.log(response);
    
    const data = await response.json();
    console.log(data);
    
    const location = data.display_name;
    console.log(location);
    result.textContent = location;
}

btn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(async function (position) {
        latitude = position.coords.latitude;
        console.log("Latitude: ", latitude);
        longitude = position.coords.longitude;
        console.log("Longitude: ", longitude);
        await getUserLocation();
        btn.classList.add('hide'); 
        result.classList.add('design');
    });
});

