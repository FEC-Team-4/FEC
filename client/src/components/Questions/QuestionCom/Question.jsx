import React, { useState, useEffect } from 'react';
import Answer from '../Answer.jsx';
import { markQuestionHelpful, reportQuestion } from '../helperFunction.js';
import { Button, Card } from 'react-bootstrap';

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
        <Card.Body>
          <Card.Title>
          <span>
            Q: {question.question_body} | Helpful?{" "}
            <a className="qa-link" onClick={markHelpful}>
              Yes
            </a>{" "}
            ({question.question_helpfulness}) | Add Answer
          </span>
          </Card.Title>
          <div className="qa-answers">
            {answers.slice(0, answersToShow).map((a) => {
              return (
                <Answer answer={a} key={a.id} handleChange={handleChange} />
              );
            })}
          </div>
        </Card.Body>
        <Card.Footer>
          {answers.length > 2 ? (
            <Button color="default" onClick={showMore} size="sm">
              {expanded ? (
                <span>show fewer answers</span>
              ) : (
                <span>show more answers</span>
              )}
            </Button>
          ) : null}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Question;
