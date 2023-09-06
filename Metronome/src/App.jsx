import Metronome from "./Components/Metronome";
import { Typography } from "@material-ui/core";
import Container from "@mui/material/Container";
import "./App.css";


function App() {
  return (
    <>
      <Container className="padding-top-2x">
        <Typography variant="h2" component="h2" className="heading">
          Metronome
        </Typography>
        <Metronome />
      </Container>
    </>
  );
}

export default App;
