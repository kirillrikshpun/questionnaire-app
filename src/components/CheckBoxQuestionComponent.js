import React from 'react'
import {
  Box,
  FormControlLabel,
  FormGroup,
  Checkbox
} from "@mui/material";

function CheckBoxQuestionComponent({setChange, addAnswer, question}) {

  return (
    <Box>
        <FormGroup>
          <Box>{question.text}</Box>
          <FormControlLabel
            onChange={(event) => {
                addAnswer(question.id, event.target.checked);
                setChange(event.target.checked)
            }}
            control={ <Checkbox />}
            label={question.answers[0]}
          />
        </FormGroup>
    </Box>
  );
}

export default CheckBoxQuestionComponent;
