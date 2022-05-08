import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import MainFormComponent from "./components/MainFormComponent"
import "./App.css";

function App() {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    const fetchData = async () => {
        try {
          const result = await axios("http://localhost:3000/questionnaires");
          setQuestions(result.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
  }, [])

  return (
    <Box>
        {questions ? <MainFormComponent questions={questions}/> : <></>} 
    </Box>
  );
}

export default App;
