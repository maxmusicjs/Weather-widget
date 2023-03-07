const weatherBlock = document.querySelector("#weather");
async function loadWeather(e) {
    weatherBlock.innerHTML =`<div class="weather_loading">
    <img src="image/image 1.png" alt="loading...">
    </div>`;

const server ='https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=522f7ec766b55c89fccbc47a4e7a72c0';
const response = await fetch(server,{
  method:'GET',
});
const responseResult = await response.json();


if(response.ok) {
    getWeather(responseResult);

}else{
  weatherBlock.innerHTML = responseResult.message;
}
}

function getWeather (data) {
  //обробка даних
const location = data.name; // дані Київ
const temp = Math.round(data.main.temp);//температуру 
const feelsLike = Math.round(data.main.feels_like);//температура яка відчувається
const weatherStatus = data.weather[0].main;//статус погоди це в нас хмари або сонечко
const weatherIcon = data.weather[0].icon;//графічна іконка

//HTML шаблон
const template = 
` <div class="weather_header">
<div class="weather_main">
  <div class="weather_city">${location}</div>
  <div class="weather_status">${weatherStatus}</div>
</div>
<div class="weather_icon">
  <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">
</div>
</div>
<div class="weather_temp">${temp}</div>
<div class="weather_feels-like"> feels like: ${feelsLike}</div>`;

weatherBlock.innerHTML = template;




}





if(weatherBlock){
  loadWeather();
}