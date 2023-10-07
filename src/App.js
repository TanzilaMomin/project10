import React from "react";
import { Home } from "./components/Home";
import {Card, CardContent} from "@mui/material";
import "./components/common.css";

function App() {
  return (
    <Card sx={{height:700 , bgcolor:"lightskyblue"}}>
      <CardContent>
          <Home />
      </CardContent>
    </Card>
  );
}

export default App;
