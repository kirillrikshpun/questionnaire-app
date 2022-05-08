import React from 'react';
import { Box, Radio, RadioGroup, FormControlLabel } from "@mui/material";

function OptionsQuestionComponent({ addAnswer, question }) {
  return (
    <Box>
      <Box sx={{ alignSelf: "center" }}>{question.text}</Box>

      <RadioGroup
        aria-required
        onChange={(event) => {
          addAnswer(question.id, event.target.value);
        }}
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
      >
        {question.answers.map((elem) => {
          return (
            <FormControlLabel
              key={elem}
              value={elem}
              control={<Radio />}
              label={elem}
            />
          );
        })}
      </RadioGroup>
    </Box>
  );
}

export default OptionsQuestionComponent;
