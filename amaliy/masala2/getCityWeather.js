async function cityWeathergetter(){
    let any_city = document.querySelector(".cityname").value
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${any_city}&appid=5f8503fb89ffdb650735ce3ffd36d138&units=metric`
    let data
    try{
        data = await fetch(URL)
        data = await data.json()
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = data.main.temp + " °C."
        document.querySelector(".wind").innerHTML = data.wind.speed + " M/S."
        document.querySelector(".wet").innerHTML = data.main.humidity + " G/M3."
        document.querySelector(".pressure").innerHTML = data.main.pressure + " Pa."
        document.querySelector(".event").innerHTML = data.weather.description
    }catch(error){
        console.log("Error getting info")
    }
}


