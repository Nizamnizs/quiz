import React from 'react'
import './Home.css'
function Home() {
  return (

        <div className="App text-center mt-3">
          <header className="App-header mt-3">
            <h1>Welcome to QuizMaster</h1>
            <p>Your Ultimate Quiz Experience</p>
            <div>
                <img src="https://i.postimg.cc/d12Pcw0z/images.jpg" alt="" />
            </div>
            <a href="quiz" className="start-button mb-4">Get Started</a>
          </header>
          <section id="why-quizmaster" className="section">


            <h2 >Why QuizMaster?</h2>
            <div className="feature text-center mt-2 mb-2">
              <div className="feature-icon">🌟</div>
              <div className="feature-text">Diverse Categories</div>
            </div>
            <div className="feature">
              <div className="feature-icon">👥</div>
              <div className="feature-text">Challenge Friends</div>
            </div>
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <div className="feature-text">Achievements and Leaderboards</div>
            </div>
            <div className="feature">
              <div className="feature-icon">📅</div>
              <div className="feature-text">Daily Quizzes</div>
            </div>
          </section>
      
       
     
        </div>


  )
}

export default Home