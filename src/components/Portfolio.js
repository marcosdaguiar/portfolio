import React from 'react'
import { works } from '../data/works'
import { Link } from 'react-router-dom'


export const Portfolio = () => {
  return (
    <div className='page'>
      <h1>Portfolio</h1>
      <section className='works'>
      {
        works.map(work => {
          return(
            <article key={work.id} className='work-item'> 
              <h2>{work.name}</h2>
              <div className='mask'>
                <img src={'/images/'+work.id+'.gif' } ></img>
              </div>
              
              
              <h3>{work.description}</h3>
              <span>Tags: {work.tags}</span>
              <h3> <Link to={work.url}>Github Repository</Link></h3>
              <hr></hr>
            </article>
          )
        })
      } 
      </section>
      
    </div>
  )
}

