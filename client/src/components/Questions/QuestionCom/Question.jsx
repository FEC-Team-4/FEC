import React, { useState, useEffect } from "react";
import Answer from "../Answer.jsx";
import { markQuestionHelpful, reportQuestion } from "../helperFunction.js";
import { Button, Card, CardContent, CardActions } from "@material-ui/core";

const Question = ({ question, handleChange }) => {
  var answers = Object.entries(question.answers)
    .map((a) => a[1])
    .sort((a, b) => (a.helpfulness > b.helpfulness ? -1 : 1));

  const [answersToShow, setAnswersToShow] = useState(2);
  const [expanded, setExpanded] = useState(false);

  const showMore = () => {
    expanded ? setAnswersToShow(2) : setAnswersToShow(answers.length);
    setExpanded(!expanded);
  };

  const markHelpful = () => {
    markQuestionHelpful(question.question_id).then(() => handleChange());
  };

  return (
    <div>
      <Card>
        <CardContent>
          <span>
            Q: {question.question_body} | Helpful?{" "}
            <a className="qa-link" onClick={markHelpful}>
              Yes
            </a>{" "}
            ({question.question_helpfulness}) | Add Answer
          </span>
          <div className="qa-answers">
            {answers.slice(0, answersToShow).map((a) => {
              return (
                <Answer answer={a} key={a.id} handleChange={handleChange} />
              );
            })}
          </div>
        </CardContent>
        <CardActions>
          {answers.length > 2 ? (
            <Button color="default" onClick={showMore} size="small">
              {expanded ? (
                <span>show fewer answers</span>
              ) : (
                <span>show more answers</span>
              )}
            </Button>
          ) : null}
        </CardActions>
      </Card>
    </div>
  );
};

export default Question;