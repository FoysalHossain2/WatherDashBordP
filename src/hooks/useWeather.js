import { useEffect, useState } from "react";

const useWeather = () => {
    const [weatherdate, setweatherdate] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: "",
    });

    const [loding, setLoding] = useState({
        state: false,
        message: ""
    });

    const [error, setError] = useState(null);

    const  fetcheatherData = async (latitude, longitude) => {
      try {
        setLoding({
            ...loding,
            state: true,
            message: "Featching weather date"
        })
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEAHER_API_KEY}&units=metric`);
        if (!response.ok) {
            const errorMessage = `Fetching weather data
            failed ${response.status}`;
            throw new Error(errorMessage);

        }

        const data = await response.json();

        const updateWeatherData = {
            ...weatherdate,
            location: data?.name,
            climate: data?.weather[0]?.main,
            temperature: data?.main?.temp,
            maxTemperature: data?.main?.temp_max,
            humidity: data?.main?.humidity,
            cloudPercentage: data?.clouds?.all,
            wind: data?.wind?.speed,
            time: data?.dt,
            longitude: longitude,
            latitude: latitude,
        }
        setweatherdate(updateWeatherData);

      } catch (err) {
        setError(err);
      } finally {
        setLoding({
            ...loding,
            state: false,
            message: " "
        });
      } 
    };

    useEffect(() => {
        setLoding({
            loding: true,
            message: "Finding location"
        })
        navigator.geolocation.getCurrentPosition(function 
            (position) {
                fetcheatherData(position.coords.latitude, position.coords.longitude);
            }
        )

      return () => {
        
      }
    }, []);

    return{
        weatherdate,
        error,
        loding
    }
} 

export default useWeather;