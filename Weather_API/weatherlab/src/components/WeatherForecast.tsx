import { useEffect, useState } from "react";
import { Weather } from "../models/Weather";
import { GetWeatherData } from "../services/WeatherService";

export function WeatherForecast () {
    const [weather, setWeather] = useState<Weather>();


    // useEffect Hook - includes a function and an optional parameter
    useEffect(() => {
    // Call our API and put stuff on the screen
        GetWeatherData().then(data => setWeather(data))
    }, []);

    // This will be run every time the API call is made because it changes
    // the variable 'weather' and we put that inside the [] brackets.
    useEffect(() => {
        console.log(weather)
    }, [weather]);

    let periods = weather?.properties.periods;
    let displayPeriods = periods?.map((period) => 
        <ul>
            <li>{period.name}</li>
            <li>{period.temperature + " " + period.temperatureUnit}</li>
            <li><img src={period.icon}></img></li>
            <li>{period.detailedForecast}</li>
        </ul>
    );

    return (
    <div className="WeatherForecast">
      { weather !== undefined && <>{displayPeriods}</> }
    </div>
    );
}
