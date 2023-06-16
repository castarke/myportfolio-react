// importing react and listgroup from bootstrap for styling
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

// adding in proficiencies
function Resume() {
  const proficiencies = [
    'React',
    'CSS',
    'JavaScript',
    'HTML',
    'Quality Assurance',
    'Management',
    'Accounting',
    'Problem-solving',
    'Teamwork',
    'Communication',
    'Time management',
    'Analytical thinking',
  ];

  return (
    <div style={{ margin: '0 auto', maxWidth: '500px', marginBottom: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ textAlign: 'center', fontSize:'50px' }}>Proficiencies</h2>
      <ListGroup as='ol' numbered style={{ margin: '0 auto', maxWidth: '300px', marginBottom:'12px'}}>
        {proficiencies.map((skill, index) => (
          <ListGroup.Item as='li' key={index} style={{backgroundColor:'grey'}}>
            {skill}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div style={{marginBottom: '55px' }}>
        {/* creating a downloadable link for my resume */}
        <a href='/assets/Candler_Starke_Resume.pdf' className='resume' style={{ display: 'block', textAlign: 'center' }} download>
          Click to download resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
