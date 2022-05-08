import React from 'react';
import OpenQuestionComponent from "./OpenQuestionComponent";
import OptionsQuestionComponent from "./OptionsQuestionComponent";
import CheckBoxQuestionComponent from "./CheckBoxQuestionComponent";

function QuestionComponent({ setChange, error, addAnswer, question }) {
  if (question.type === "TextField")
    return (
      <OpenQuestionComponent
        error={error}
        addAnswer={addAnswer}
        question={question}
      />
    );
  if (question.type === "Radio")
    return (
      <OptionsQuestionComponent addAnswer={addAnswer} question={question} />
    );
  if (question.type === "Checkbox")
    return (
      <CheckBoxQuestionComponent
        setChange={setChange}
        addAnswer={addAnswer}
        question={question}
      />
    );
}

export default QuestionComponent;
