import React from 'react';
import '../assets/styles/components/Item.scss';

const Item = ({ img, title, description, buttonleft, buttonright }) => (
  <>
    <div className='containerItem'>
      <section className='image-content'>
        <img src={img} alt='' />
      </section>
      <section className='description-content'>
        <div className='general-description'>
          <p className='title'>{title}</p>
          <p className='description'>{description}</p>
        </div>
        <div className='routes'>
          <button type='button' className='button-left'>{buttonleft}</button>
          <button type='button' className='button-right'>{buttonright}</button>
        </div>
      </section>
    </div>
  </>
);

export default Item;
