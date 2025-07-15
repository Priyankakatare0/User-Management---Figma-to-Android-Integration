import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = " http://api.weatherapi.com/v1";
    const API_KEY = "ab91431e27e948f2b00105605250602";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}/current.json?key=${API_KEY}&q=${city}&units=metric`);
            let jsonResponse = await response.json();
        
            let result = {
                city: jsonResponse.location.name,
                temp_c: jsonResponse.current.temp_c,
                temp_f: jsonResponse.current.temp_f,
                humidity: jsonResponse.current.humidity,
                feelslike_c: jsonResponse.current.feelslike_c,
                weather: jsonResponse.current.condition.text,
            }
          console.log(result);
            return result;
        } catch (err) {
            throw err;
        }

    };

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            await getWeatherInfo();
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true)
        }
      
    };

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <TextField id='outlined-basic' label="City Name" variant='outlined' required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant='contained' type='submit'>Search</Button>
                {error && <p style={{color: "red"}}>No such place found!</p>}
            </form>
        </div>
    )
}