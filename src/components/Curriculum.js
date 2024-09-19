import React from 'react'
import resumeData from '../data/resume.json'

export const Curriculum = () => {

  const { Summary, Education, WorkExperience } = resumeData;

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
        

      
      {/*<h2>Summary</h2>

      <h2>Work Experience</h2>
      <h3 className='company-name'>UKG, Weston, FL</h3>
      <div className='row-for-dates'>
        <div className='title-column'>
          <h4>Cloud Engineer</h4>
        </div>       
        <div className='date-column'>
          <h4>(Sept 2023 – Present)</h4>
        </div>     
      </div>
      <li>
        Created an automation system using Python to extract data from Jira and ServiceNow, and reflect it in PowerBI dashboards, enhancing visibility of performance metrics for management.
      </li>
      <li>
        Oversaw the deployment and management of various environments hosting the primary application, ensuring high availability and performance.
      </li>
      <li>
      Authored comprehensive documentation for procedures and processes, facilitating knowledge transfer and process standardization.
      </li>
      <li>
        Identified and resolved critical functionality bugs in MySQL databases, ensuring smooth application operations and improved performance.
      </li>
      <li>
        Provided extensive application support, addressing user issues, implementing patches, and performing database backups and restorations.
      </li>
      <li>
        Applied Agile and Scrum methodologies to manage projects, ensuring iterative development and continuous delivery.
      </li>
      */}

    </div>
  )
}
