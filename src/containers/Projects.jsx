import React from 'react';
import Item from '../components/Item';
import '../assets/styles/components/Projects.scss';
import data from '../data/data';

const Projects = () => (

  <section className='container-projects'>
    {data.projects.map((e, index) => {
      return (
        <Item
          key={index}
          img={e.gif}
          title={e.title}
          description={e.description}
          buttonleft={e.buttonleft}
          buttonright={e.buttonright}
        />
      );
    })}
  </section>

);

export default Projects;
