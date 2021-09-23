import React, { useState, useContext, useEffect } from "react";
import Question from "./QuestionCom/Question.jsx";
import { dataContext } from "../context/dataContext.js";
import QuestionSearch from "./QuestionCom/QuestionSearch.jsx";
import { addQuestion, getQuestions, getProducts } from "./helperFunction.js";
import "./QuestionCom/Questions.css";
// import sampleData from "./sampleData.js";
import axios from "axios";
import { Button, Card } from "react-bootstrap";

const Questions = (props) => {
  const [data, setData] = useState([]);
  const [questionsDisplay, setquestionsDisplay] = useState(4);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    loadData(props.productId);
  }, []);

  var loadData = async (productId) => {
    await axios
      .post("/questions", { productId: productId })
      .then((result) =>
        setData(() =>
          result.data.results.sort((a, b) =>
            a.helpfulness > b.helpfulness ? -1 : 1
          )
        )
      )
      .catch((err) => console.log(err));
  };

  loadData = loadData.bind(this);

  const expand = () => {
    expanded ? setquestionsDisplay(4) : setquestionsDisplay(data.length);
    setExpanded(!expanded);
  };

  return (
    <div>
      <h1>Questions & Answers</h1>
      <div>
        <QuestionSearch />
        {data.map((q) => (
          <Question question={q} key={q.question_id} handleChange={loadData} />
        ))}
        {data.length > 2 ? (
          <Button
            className="px-2"
            variant="primary"
            onClick={expand}
            size="sm"
            outline="dark"
          >
            {expanded ? <span>Less Answered Questions</span> : <span>More Answered Questions</span>}
          </Button>
        ) : null} &nbsp;&nbsp;&nbsp;
        <Button variant="primary" type="button" size="sm" outline="dark">
          Add a Question
        </Button>
      </div>
    </div>
  );
};

export default Questions;
