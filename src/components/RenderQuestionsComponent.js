import React, { useEffect, useState } from "react";
import { Box, Paper } from "@mui/material";
import AdditionalQuestionComponent from "./AdditionalQuestionComponent";
import QuestionComponent from "./QuestionComponent";

function RenderQuestionsComponent({
  setAnswers,
  answers,
  unvalids,
  addAnswer,
  questions,
}) {
  const [change, setChange] = useState(false);
  const [additionalQuestionData, setAdditionalQuestionData] = useState([]);

  const removeAnswer = (id) => {
    delete answers[id]
    setAnswers(answers);
  };

  useEffect(() => {
    additionalQuestionData[0] && removeAnswer(additionalQuestionData[0].id);
  }, [change]);

  return (
    <>
      {questions.map((elem) => {
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              borderRadius: 1,
            }}
            key={elem.id}
          >
              <Paper
                sx={{
                  display: "grid",
                  justifyContent: "flex-start",
                  width: "20rem",
                  height: "9rem",
                  padding: 5
                }}
              >
                <QuestionComponent
                  setChange={setChange}
                  answer={answers}
                  error={unvalids.includes(elem.id)}
                  addAnswer={addAnswer}
                  question={elem}
                />

                {elem.additionalQuestions.length > 0 && change
                 ? (
                  <Box key={elem.id}>
                    <AdditionalQuestionComponent
                      setAdditionalQuestionData={setAdditionalQuestionData}
                      addAnswer={addAnswer}
                      question={elem.additionalQuestions}
                    />
                  </Box>
                ) : (
                  <></>
                )}
              </Paper>
            </Box>
        );
      })}
    </>
  );
}

export default RenderQuestionsComponent;
