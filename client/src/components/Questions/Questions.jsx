import React, { useState, useContext, useEffect } from 'react';
import Question from './QuestionCom/Question.jsx';
import { dataContext } from '../context/dataContext.js';
import QuestionSearch from './QuestionCom/QuestionSearch.jsx';
import { addQuestion, getQuestions, getProducts } from './helperFunction.js';
import sampleData from './sampleData.js';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Questions = () => {
  var { productId } = useContext(dataContext);
  const [data, setData] = useState([]);
  const [questionsDisplay, setquestionsDisplay] = useState(4);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    loadData(productId);
  }, []);

  var loadData = async (productId) => {
    await getQuestions(productId).then((receivedData) =>
      setData(
        receivedData.results.sort((i, j) =>
          i.helpfulness > j.helpfulness ? -1 : 1
        )
      )
    );
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
        {data.slice(0, questionsDisplay).map((q) => (
          <Question question={q} key={q.question_id} handleChange={loadData} />
        ))}
        {data.length > 2 ? (
          <Button
            color="primary"
            onClick={expand}
            size="small"
            variant="outlined"
          >
            {expanded ? <span>LESS ANSWERS</span> : <span>MORE ANSWERS</span>}
          </Button>
        ) : null}
        <Button
          color="primary"
          size="small"
          variant="outlined"
          endIcon={<AddIcon>add</AddIcon>}
        >
          Add Question
        </Button>
      </div>
    </div>
  );
};

export default Questions;
