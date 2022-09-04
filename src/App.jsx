import './App.css';
import React, {  useState } from "react";
import { questions } from './constants';



const randomUnique = (range, count) => {
  let nums = new Set();
  while (nums.size < count) {
      nums.add(Math.floor(Math.random() * (range - 1 + 1) + 1));
  }
  return [...nums];
}

const remaining = randomUnique(questions.length,questions.length)

function App()  {

  const [currentIndex,setCurrentIndex] = useState(0)
  const [showAns,setShowAns] = useState(false)

 
  

  return (
    <div className="App">
      <body>
        <h1>
          Question {currentIndex+1}/{questions.length}
        </h1>
        <br></br>
        <br></br>

        <h2>
        Question: {questions[remaining[currentIndex]-1].question}
        </h2>
        <br></br>
        <h3>      
        answer: {showAns ? questions[remaining[currentIndex]-1].answer: 'Answerer hidden'}
        </h3>
        <div>
          <button onClick={()=> {setShowAns(!showAns)}}>
            {showAns ? 'hide answer' : "show answer"}
          </button>
        <br></br>
        
          <button style={{
    marginTop: '40px',
    marginRight: '20px'
}} 
onClick={()=> {setCurrentIndex(currentIndex-1)
             setShowAns(false)}} disabled={currentIndex===0}>
          previous
          </button>
          
          <button onClick={()=> {setCurrentIndex(currentIndex+1)
         setShowAns(false)}} disabled={currentIndex===questions.length-1}>
          next
          </button>
        </div>

        
      </body>
      
    </div>
  );
}

export default App;
