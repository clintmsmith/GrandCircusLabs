// Here we build our API call, which we can then call in other parts of our App as needed
import { Weather } from "../models/Weather";
import axios from 'axios';

export function GetWeatherData() : Promise<Weather> {
    // Here we use the 'axios' library and use the HTTP verb 'get' and expect Weather to be returned and we want that info from this URL
    return axios.get<Weather>('https://api.weather.gov/gridpoints/DTX/65,33/forecast')
    // .then is a callback to execute when the Promise is resolved
    .then(response => response.data)
};