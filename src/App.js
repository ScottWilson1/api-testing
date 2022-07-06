import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [question, setQuestion] = useState('');
  const [answerTypes, setAnswerTypes] = useState([]);

  useEffect(() => {
    const fetchQuestion = async () => {
      const data = await fetch(`https://cdn.contentful.com/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/master/entries/${process.env.REACT_APP_CONTENTFUL_ENTRY_ID}?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`);
      const json = await data.json();
      console.log(json);
      const questionAndAnswers = json.fields.question1;
      setQuestion(questionAndAnswers.shift());
      setAnswerTypes(questionAndAnswers);
    }
      fetchQuestion().catch(console.error);
  }, []);

  return (
    <div className="App">
      <p>{question}</p>
      {console.log(answerTypes)}
      <div>
        {answerTypes.map((a, key) => (
          <button key={key}>{a}</button>
        ))}
      </div>
    </div>
  );
}

export default App;
