import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { works } from '../data/works';

export const Project = () => {
        const[project, setProject] = useState({});

        const params = useParams();

        useEffect(() =>{
            let project = works.filter(work => work.id === params.id)
            
            setProject(project[0])

            console.log(project)
        }, []);

    return (
    <div className='work-item'>

        <h1>{project.name}</h1>
        <div className='mask'>
            <img src={'/images/'+project.id+'.gif' } ></img>
        </div>
        <h3>{project.description}</h3>
        <span>Tags: {project.tags}</span>
        <h4><a href={project.url} target='_blank'>Github Repository</a></h4>
              
    </div>
  )
}