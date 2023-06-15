import React from "react";
import Card from 'react-bootstrap/Card';

function Project(props) {
  if (!props.projects) {
    return null;
  }

  return (
    <div className="row row-cols-3 row-cols-md-3 row-cols-md-3 g-4">
      {props.projects.map((project) => (
        <div className="col" key={project.id}>
          <Card style={{ marginBottom: '55px' }}>
            <Card.Img variant="top" src={project.image} alt="Project image" className="projectImg" style={{ maxHeight: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href={project.repository} className="card-link" target="_blank" rel="noreferrer">See the repository!</a>
              <a href={project.live} className="card-link" target="_blank" rel="noreferrer">See the Live Site!</a>
            </Card.Footer>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Project;
