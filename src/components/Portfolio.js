import React from 'react'
import { works } from '../data/works'

export const Portfolio = () => {
  return (
    <div className='page'>
      <h1>Portfolio</h1>
      {
        works.map(work => {
          return(
            <article key={work.id} className='works'>
              
              <h2>{work.name}</h2>
              <p>{work.description}</p>
              <span>Tags: {work.tags}</span>
              <p>url: {work.url}</p>
            </article>
          )
        })
      } 
    </div>
  )
}
