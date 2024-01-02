const option5 = {
method: 'GET',
headers: {
'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
}
};
const getweather5 = (city) => {
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
.then(response => response.json())
.then(response => {
     console.log(response)
  temp6.innerHTML = response.temp
  humidity6.innerHTML = response.humidity
  wind_speed6.innerHTML = response.wind_speed
})
 .catch(err => console.error(err));
}
getweather5('Goa')