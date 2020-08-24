import React from 'react';
import Item from '../components/Item';
import pokemonGo from '../assets/static/diana.png';
import '../assets/styles/components/Projects.scss';

const Projects = () => (

  <section className='container-projects'>
    <Item
      img={pokemonGo}
      title='POKEMON GO'
      description='Aqui va toda la descripción'
      buttonleft='README'
      buttonright='DESPLIEGUE'
    />
    <Item
      img={pokemonGo}
      title='POKEMON GO'
      description='Aqui va toda la descripción'
      buttonleft='README'
      buttonright='DESPLIEGUE'
    />
    <Item
      img={pokemonGo}
      title='POKEMON GO'
      description='Aqui va toda la descripción'
      buttonleft='README'
      buttonright='DESPLIEGUE'
    />
  </section>

);

export default Projects;
