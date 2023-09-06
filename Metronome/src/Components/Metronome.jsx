import React from "react";
import { useState, useEffect } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Slider from "@mui/material/Slider";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import clickSound from "../assets/metronome-85688.mp3";
import "../App.css";

const Metronome = () => {
  const [isPlaying, setisPlaying] = useState(false);
  const [tempo, setTempo] = useState(120);

  const audio = new Audio(clickSound);

  useEffect(() => {
    console.log("isPlaying is", isPlaying);
    let interval;
    let intervalTime = 60000 / tempo;
    if (isPlaying === true) {
      interval = setInterval(() => {
        console.log("I am playing");
        audio.currentTime = 0;
        audio.play();
      }, intervalTime);
    }

    return () => clearInterval(interval);
  }, [isPlaying, tempo]);

  const handleClick = () => {
    setisPlaying((prev) => !prev);
  };

  const handleIncrement = () => {
    console.log("I am Inresing");
    setTempo((prev) => {
      return prev + 1;
    });
    console.log("Tempo ", tempo);
  };

  const handleDecrement = () => {
    console.log("I am decresing");
    setTempo((prev) => prev - 1);
  };

  return (
    <Container maxWidth="sm" className="main-container">
      <div className="stack-container">
        <Typography variant="h4" className="heading border">
          BPM
        </Typography>
        <Typography variant="h1" className="padding-bottom-2x ">
          {tempo}
        </Typography>
        {tempo >= 1 && tempo <= 20 && "Larghissimo"}
        {tempo > 20 && tempo <= 40 && "Grave"}
        {tempo > 40 && tempo <= 45 && "Largo"}
        {tempo > 45 && tempo <= 50 && "Lento"}
        {tempo > 50 && tempo <= 60 && "Adagio"}
        {tempo > 60 && tempo <= 70 && "Adagietto"}
        {tempo > 70 && tempo <= 90 && "Andante"}
        {tempo > 90 && tempo <= 96 && "Moderato"}
        {tempo > 96 && tempo <= 108 && "Allegretto"}
        {tempo > 108 && tempo <= 131 && "Allegro"}
        {tempo > 131 && tempo <= 139 && "Vivace"}
        {tempo > 139 && tempo <= 176 && "Presto"}
        {tempo > 176 && tempo <= 240 && "Prestissimo"}
      </div>
      <div>
        <Container maxWidth="sm" className="main-container">
          <Stack spacing={1} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Fab size="small" aria-label="decrease" onClick={handleDecrement}>
              <ArrowBackIosIcon sx={{ fontSize: 15 }} />
            </Fab>
            <Slider
              min={1}
              max={240}
              defaultValue={tempo}
              aria-label="Default"
              valueLabelDisplay="auto"
              value={tempo}
              onChange={(e) => setTempo(e.target.value)}
              sx={{
                color: "green",
              }}
            />
            <Fab size="small" aria-label="increase">
              <ArrowForwardIosIcon
                sx={{ fontSize: 15 }}
                onClick={handleIncrement}
              />
            </Fab>
          </Stack>

          <Container className="main-container">
            <Button
              variant="outlined"
              endIcon={!isPlaying ? <PlayArrowIcon /> : <StopIcon />}
              onClick={handleClick}
              className="play-button"
              sx={{
                borderColor: "green",
                color: "green",
              }}
            >
              {isPlaying ? "Stop" : "Start"}
            </Button>
          </Container>
        </Container>
      </div>
    </Container>
  );
};

export default Metronome;
