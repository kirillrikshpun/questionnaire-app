import React, { useEffect } from 'react';
import { TextField, Box } from "@mui/material";

function AdditionalQuestionComponent({setAdditionalQuestionData, addAnswer, question }) {
    useEffect(
        () => {
            setAdditionalQuestionData(question)
        }, []
    )
  
  return (
    <Box>
      {question.map((elem) => {
        return (
          <Box key={elem.id}>
            <Box sx={{ alignSelf: "center" }}>{elem.text}</Box>
            <TextField
              onChange={(event) => {
                  addAnswer(elem.id, event.target.value)
                }}
              id="standard-basic"
              variant="standard"
            />
          </Box>
        );
      })}
    </Box>
  );
}

export default AdditionalQuestionComponent;
