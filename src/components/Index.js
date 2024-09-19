import React from 'react'
import { Link } from 'react-router-dom'

export const Index = () => {
  return (
    <div className='page'>
      <h1>
        Welcome to my Page!
      </h1>
      
    <div className='index_body'>
        <div className='left-column'>
          <h3>
          I'm Marcos, a passionate <strong>Software Engineering.</strong> I graduated with a Bachelor of Science in Information Technology from Florida International University, earning a <strong>Magna Cum Laude Honors,</strong> where I developed a solid foundation in <strong>computer science and software development. </strong> 
          I expertise in <strong>Python, PowerShell, MySQL, Java, and React. </strong>I enjoy in developing and contribute to innovative projects that make a real-world impact. 
          Feel free to reach out to me  <Link to ="/contact">here</Link>
          </h3>

          <section className='lasts-works'>
            <h2> Some of my projects</h2>
            <p>These are some of my works.</p>

            <div className='works'>
            </div>           
          </section>
        </div>
        <div className='right-column'>

          <img src= '/images/mypic2.jpg' alt=''></img>

        </div>
      </div>
    </div>
  )
}
