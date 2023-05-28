

function onGeoOK(position) {
    const API_KEY = "2862cfb17108cf17dea74ffa32072ec1";
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url).then(response=>response.json()).then(data=>{
        const containWeather=document.querySelector("#weather span:first-child");
        const containCity=document.querySelector("#weather span:last-child");

        containCity.innerText=data.name;
        containWeather.innerText=data.weather[0].main+" / "+data.main.temp+"℃";

 
    });
    

}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);