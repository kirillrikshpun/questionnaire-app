import React from 'react'
import { TextField, Box } from "@mui/material";

function OpenQuestionComponent({error, addAnswer, question }) {

  return (
    <Box>
      <Box sx={{ alignSelf: "center" }}>{question.text}</Box>
      <TextField
        error = {error}
        onChange={(event) => addAnswer(question.id, event.target.value)}
        id="standard-basic"
        variant="standard"
      />
    </Box>
  );
}

export default OpenQuestionComponent;
