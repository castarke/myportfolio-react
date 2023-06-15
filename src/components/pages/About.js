import React from 'react';

export default function About() {
  return (
    <div style={{ textAlign: 'center', marginTop: '25px', marginBottom: '75px' }}>
      <img src="/assets/1570744259165.jpeg" alt="My Image" style={{ display: 'block', margin: '0 auto' }} />
      <h1 style={{ marginTop: '25px' }}>About Me!</h1>
      <p className='about'>
        Junior programer who is currently enrolled in the Georgia Tech Full Stack bootcamp. Enjoying learning new things about the tech world and learning how to properly code. My hobbies outside of class and work include: firing up the smoker and bbqing, spoiling my dog, and working on cars.
      </p>
    </div>
  );
}
