import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <div>
               <Navbar className="bg-success">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/5Nk5nTbg/24545407-the-word-quiz-in-red-3d-letters-to-illustrate-an-exam-evaluation-or-assessment-to-measure-y.png"
              width="80"
              height="70"
              className="d-inline-block align-top mt-1"
            />{' '}
                       <b className='fs-1 '>QUIZ APP</b> 

          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header