import React, { useState } from 'react'
import { QuizQuestion } from '../question/QuizQuestion'
import QuizResult from '../components/QuizResult'

function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [clickedOption, setClickedOption] = useState(0)
  const [showResult,setShowResult]=useState(false)
  const changeQuestion = ()=>{
    updateScore();
    if (currentQuestion< QuizQuestion.length-1) {
      setCurrentQuestion(currentQuestion + 1)
      setClickedOption(0)
    }
    else {
setShowResult(true)
    }
  }
  const updateScore = () => {
    if (clickedOption === QuizQuestion[currentQuestion].answer) {
      setScore(score+1)
    }
  }

  return (
    <div>
      <div className='container btn'>
        {showResult ? (
          <QuizResult score={score} totalScore={QuizQuestion.length}></QuizResult>
        ):(
          <>
        <div className='question' style={{textAlign:'center',fontSize:''}}>
          <span id='question-number'>{currentQuestion + 1}</span>
          <span id='question-text' >{QuizQuestion[currentQuestion].question}</span>

        </div>
        <div className='option container btn'>
          {QuizQuestion[currentQuestion].options.map((option, i) => {
            return (

              <button style={{width:'200px'}} key={1} onClick={() => setClickedOption(i + 1)} className={`option container btn  ${
                clickedOption == i+1?"checked":null
              }`}>
                {option}
              </button>
            )
          })}

        </div>
        <input type="button" className='color:'red value="Next" id='next-button' onClick={changeQuestion} />
        </>)}

      </div>
    </div>
  )
}

export default Home