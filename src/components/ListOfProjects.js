import React from 'react'
import { works } from '../data/works'
import { Link } from 'react-router-dom'

export const ListOfProjects = ({limite}) => {
  return (
    <section className='works'>
    {
      works.slice(0,limite).map(work => {
        return(
          <article key={work.id} className='work-item'> 
            <h2><Link to={"/project/"+work.id}>{work.name}</Link></h2>
            <div className='mask'>
              <img src={'/images/'+work.id+'.gif' } ></img>
            </div>
                          
            <h3>{work.description}</h3>
            <span>Tags: {work.tags}</span>
            <h4> <Link to={work.url}>Github Repository</Link></h4>
          </article>
        )
      })
    } 
    </section>
  )
}
