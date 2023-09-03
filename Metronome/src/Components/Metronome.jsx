import React from "react";
import { useState } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

const Metronome = () => {
  const [isPlaying, setisPlaying] = useState(false);
  const [tempo, setTempo] = useState(120);

  return (
    <div>
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
        <Box sx={{ width: 400 }}>
          <Slider
            min={0}
            max={240}
            defaultValue={tempo}
            aria-label="Default"
            valueLabelDisplay="auto"
            value={tempo}
            onChange={e=>setTempo(e.target.value)}
            
          />
        </Box>
      </div>
    </div>
  );
};

export default Metronome;
