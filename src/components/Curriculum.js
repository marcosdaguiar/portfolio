import React from 'react'
import resumeData from '../data/resume.json'

export const Curriculum = () => {

  const { Summary, Education, WorkExperience, Skills } = resumeData;

  console.log(resumeData);
  return (
   
    <div className='curriculum'>
      <h1>Curriculum</h1>

      <h2>Summary</h2>
      <p>{Summary}</p>
      
      <h2>Education</h2>
          {Education.map((edu, index) =>(
            <section key={index}>
              <div className='row-for-dates'>
                <div className='title-column'>
                  <h3>{edu.institution}</h3>
                  <h4>{edu.Degree} ({edu.GradDate})</h4>
                  <h4>GPA: {edu.GPA}</h4>
                  <h4>Concentrations:</h4>
                  {edu.Concentrations.map((concepts, j) =>(
                    <li className= 'concepts' key={j}>{concepts}</li>
                  ))}         
                </div>       
              </div>    
            </section>
          )
          )}
      
      <h2>Work Experience</h2>
        {WorkExperience.map((work, index) =>(
              <section key={index}>
                <div className='row-for-dates'>
                  <div className='title-column'>
                    <h3>{work.Company} - {work.Location}</h3>                    
                    {work.Positions.map((pos, j) =>(
                      <section className= 'pos' key={j}>
                        <h4>{pos.Position} ({pos.StartDate} - {pos.EndDate})</h4>
                        {pos.Tasks.map((task, k) =>(
                          <li key={k}>{task}</li>                       
                        ))}                     
                      </section>                                           
                    ))}         
                  </div>                         
                </div>    
              </section>
            )
            )}
      <h2>Skills</h2>
        {Skills.map((skill, index)=>(
          <section className='skills' key={index}>
            
            <h4>Languages: <br/>{skill.Languages.map((lang, j) =>(
              <li key={j}>{lang}</li>
            ))}</h4>
            <h4>Programming Skills: <br/>{skill.Programming.map((prog, j) =>(
              <li key={j}>{prog}</li>
            ))}</h4>
            <h4>Known Softwares: <br/>{skill.Softwares.map((softwares, j) =>(
              <li key={j}>{softwares}</li>
            ))}</h4>
            <h4>Soft Skills: <br/>{skill.SoftSkills.map((softskills, j) =>(
              <li key={j}>{softskills}</li>
            ))}</h4>
          </section>

        ))}


    </div>
  )
}
