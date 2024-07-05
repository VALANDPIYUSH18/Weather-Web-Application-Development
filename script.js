const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7e184a80c8msh021c7bb6467df71p1b4cf7jsn53d6f0b0975d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};  
const getWeather =(city)=>{
    cityname.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => {
			
		console.log(response)

		temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset


	})  

	  .catch(err => console.error(err));

	}
	Submit.addEventListener("click", (e)=>{
		e.preventDefault()
		getWeather(city.value)
	})
	
	getWeather("Delhi")
	
	