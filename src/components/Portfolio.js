import React from 'react'
import { works } from '../data/works'
import { ListOfProjects } from './ListOfProjects'


export const Portfolio = () => {
  return (
    <div className='page'>
      <h1>Portfolio</h1>
        <ListOfProjects/>    
    </div>
  )
}

