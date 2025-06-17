import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "../utils/Axios.js";


class WeatherService {

    async getWeather() {
        const response = await api.get('api/weather')
        console.log('response from Weather api', response.data.main.temp);
        // console.log(typeof response.data.main);
        const weathers = ''
        this.weathers = response.data.main.temp
        AppState.weather = this.weathers
    }


    toggleTemp() {
        AppState.tempButtonClicks += 1
        // console.log(AppState.tempButtonClicks)
    }
}

export const weatherService = new WeatherService()