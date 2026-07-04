// Access DOM elements
const reportSection = document.getElementById('weather-report');
const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city');


// Prepare openweather.orf request
let apiRequest = new XMLHttpRequest();

/*
 * Capture and handle form submit event
 * Prevent default behavior, prepare and send API request
 */


cityForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const chosenCity = cityInput.value
    apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e')
    apiRequest.send()
    console.log(apiRequest)
})

apiRequest.onreadystatechange = () => {
    if(apiRequest.readyState === 4) {
        if (apiRequest.status === 404) {
           return reportSection.textContent = 'City not found' 
        }
        const response = JSON.parse(apiRequest.response)
        reportSection.textContent = 'The weather in ' + response.name + ' is ' + response.weather[0].main + '.'
    }

} 
