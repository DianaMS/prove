import React from 'react';
import '../assets/styles/components/ItemSkills.scss';

const ItemSkills = ({ name, image }) => (
  <>
    <div className='containerItemSkills'>
      <p className='name-skill'>{name}</p>
      <img src={image} alt='' />
    </div>
  </>
);

export default ItemSkills;
