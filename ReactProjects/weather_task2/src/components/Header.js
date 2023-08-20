import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../store/thunks";
import { ShowToast } from "./showToast";

const Header = () => {
  const textinput = useRef();
  const dispatch = useDispatch();
  const weatherList = useSelector((state) => state.weather.weatherList);
  const handleWeather = () => {
    if (textinput.current.value) {
      console.log(textinput.current.value);
      dispatch(getWeather(textinput.current.value))
        .unwrap()
        .then((res)=>{
            // textinput.current.value = null
        })
        .catch((err) => {
          ShowToast("error","Invalid Input")
          textinput.current.value = null
        });
    }
    else{
        ShowToast("error","Enter Some Text!!")

    }
  };
  return (
    <>
      <Container>
        <Stack
          mb={4}
          mt={5}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <TextField inputRef={textinput} label="Enter Location"/>
          <Button onClick={handleWeather} variant="outlined">
            Get Weather
          </Button>
        </Stack>

        {weatherList ? (
          <Paper mt={4} elevation={4}>
            {console.log(weatherList.location.name)}
            <Container mb={3}>
              <Stack direction="row" spacing={2}>
                <Stack direction="column" spacing={1}>
                  <Typography mt={2} variant="h5">
                    {weatherList.location.name}
                  </Typography>
                  <Typography variant="body1">
                    {weatherList.location.region},{weatherList.location.country}
                  </Typography>
                  <Typography variant="body1">
                    {weatherList.location.localtime},
                    {weatherList.location.country}
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="column" justifyContent="flex-end" alignItems="center" spacing={2}>
                <img
                  style={{ width: "80px" }}
                  src={weatherList.current.condition.icon}
                />
                <Typography>{weatherList.current.condition.text}</Typography>
                <Stack direction="row">
                  <Typography>Temprature: </Typography>
                  <Typography ml={3}>
                    {weatherList.current.temp_c} <span>&#8451;</span>
                  </Typography>
                  <Typography ml={3}>
                    {weatherList.current.temp_f} <span>&#8457;</span>
                  </Typography>
                </Stack>
                <Typography>Wind Details</Typography>
                <Stack direction="row">
                  <Typography > Wind Speed :  
                    {weatherList.current.wind_kph} km/h
                  </Typography>
                  <Typography mb={4} ml={3}>
                    Wind Direction: 
                    {weatherList.current.wind_dir} 
                  </Typography>
                </Stack>
              </Stack>
            </Container>
          </Paper>
        ) : null}
      </Container>
    </>
  );
};

export default Header;
