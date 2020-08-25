import React from 'react';
import ItemSkills from '../components/ItemSkills';
import data from '../data/data';
import '../assets/styles/components/Skills.scss';

const Skills = () => (
  <>
    <section className='container-skills'>
      <section className='title'>
        <p className='title-skills'>HERRAMIENTAS</p>
      </section>
      <section className='items'>
        {data.skills.map((e, index) => {
          return (
            <ItemSkills
              key={index}
              name={e.name}
              image={e.image}
            />
          );
        })}
      </section>
    </section>
  </>
);

export default Skills;
