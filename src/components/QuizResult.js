import React from 'react'

function QuizResult(props) {
  return (
    <div  className='mt-5' style={{backgroundColor:'dark'}}>YOUR SCORE:{props.score} <br />
    TOTAL SCORE:{props.totalScore}

    </div>

  )
}

export default QuizResult