import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatheInfo] = useState({
        city: "Wonderland",
        feelslike_c: 24.84,
        temp_c: 25.05,
        temp_f: 25.05,
        humidity: 47,
        weather: "sunny",
    });

    let updateInfo = (newInfo) => {
        setWeatheInfo(newInfo);
    };

    return (
        <div>
            <h2>Weather App by Priyanka </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}
