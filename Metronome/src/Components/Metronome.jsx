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

const Metronome = () => {
  const [isPlaying, setisPlaying] = useState(false);
  const [tempo, setTempo] = useState(120);

  useEffect(() => {
    console.log("isPlaying is", isPlaying);
    let interval;
    let intervalTime = 60000 / tempo;
    if (isPlaying === true) {
      interval = setInterval(() => {
        console.log("I am playing");
      }, intervalTime);
    }

    return () => clearInterval(interval);
  }, [isPlaying, tempo]);

  const handleClick = () => {
    setisPlaying((prev) => !prev);
  };

  return (
    <Container>
      <Typography>Metronome</Typography>
      <div>
        <Typography>BPM</Typography>
        <Typography>{tempo}</Typography>
        {tempo >= 0 && tempo <= 20 && "Larghissimo"}
        {tempo > 20 && tempo <= 40 && "Grave"}
        {tempo > 40 && tempo <= 45 && "Largo"}
        {tempo > 45 && tempo <= 50 && "Lento"}
        {tempo > 50 && tempo <= 60 && "Adagio"}
        {tempo > 60 && tempo <= 70 && "Adagietto"}
        {tempo > 70 && tempo <= 90 && "Andante"}
        {tempo > 90 && tempo <= 96 && "Moderato"}
        {tempo > 96 && tempo <= 108 && "Allegretto"}
        {tempo > 108 && tempo <= 131 && "Allegro"}
        {tempo > 132 && tempo <= 139 && "Vivace"}
        {tempo > 140 && tempo <= 176 && "Presto"}
        {tempo > 177 && tempo <= 240 && "Prestissimo"}
      </div>
      <div>
        <Container maxWidth="sm">
          <Stack spacing={1} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Fab size="small" color="primary" aria-label="decrease">
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
            />
            <Fab size="small" color="primary" aria-label="increase">
              <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
            </Fab>
          </Stack>
          <Container>
            <Button
              variant="outlined"
              endIcon={<PlayArrowIcon />}
              onClick={handleClick}
            >
              Start
            </Button>
          </Container>
        </Container>
      </div>
    </Container>
  );
};

export default Metronome;
