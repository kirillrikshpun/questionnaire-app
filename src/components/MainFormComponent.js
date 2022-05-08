import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import RenderQuestionsComponent from "./RenderQuestionsComponent"

function MainFormComponent({questions}) {
  const [answers, setAnswers] = useState({});
  const [unvalids, setUnvalids] = useState([]);

  const addAnswer = (id, answer) => {
    setAnswers({ ...answers, [id]: answer });
  };

  const handleSubmit = () => {
    const arrRequired = questions.filter(q => q.required).map(q => q.id)
    const arrAnswers = Object.entries(answers)
      .filter(([_key, value]) => value || value === false)
      .map((a) => parseInt(a[0]));
    const arrUnvalid = arrRequired.filter(a => !arrAnswers.includes(a))
    setUnvalids(arrUnvalid);

    arrUnvalid.length > 0 ? <></> : window.alert(JSON.stringify(answers, 0, 2)) 
  };

  return (
    <Box sx={{display: "grid", justifyContent: "center"}}>
      <RenderQuestionsComponent
        setAnswers={setAnswers}
        answers={answers}
        unvalids={unvalids}
        addAnswer={addAnswer}
        questions={questions}
      />
       <Button onClick={() => handleSubmit()}>Submit</Button>
    </Box>
  );
}

export default MainFormComponent;
