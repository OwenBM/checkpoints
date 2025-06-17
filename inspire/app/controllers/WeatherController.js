
import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js"


export class WeatherController {
    constructor() {
        console.log("weather controller is ago");
        this.getWeather()
        AppState.on('weather', this.drawWeather)
        AppState.on('tempButtonClicks', this.drawWeather)
        document.getElementById('temperature').onclick = () => this.toggleTemp();

    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error('Could not get weather', error)
            Pop.error(error, 'Weather went wrong', 'bummer')
        }
    }

    drawWeather() {
        const weathers = AppState.weather
        let weathercontent = weatherService.weathers
        const weatherElm = document.getElementById('temperature')
        const fahrenheit = ' F'
        const celsius = ' C'
        if (AppState.tempButtonClicks % 2 === 0) {
            weatherElm.innerText = Math.round(weathercontent - 273) + celsius
        } else {
            weatherElm.innerText = Math.round((weathercontent - 273) * 1.8 + 32) + fahrenheit
        }
    }

    toggleTemp() {
        weatherService.toggleTemp()
    }


}