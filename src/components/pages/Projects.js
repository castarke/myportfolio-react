import React from "react";

function Projects(props) {
  if (!props.projects) {
    return null;
  }

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {props.projects.map((project) => (
          <div className="col" key={project.id}>
            <div className="card">
              <figure className="figure">
                <div className="ratio ratio-4x3">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <img src={project.image} className="figure-img img-fluid" alt="Placeholder image" />
                  </a>
                </div>
              </figure>
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
              <div className="card-footer">
                <a href={project.repository} className="card-link" target="_blank" rel="noreferrer">See the repository!</a>
                <a href={project.live} className="card-link" target="_blank" rel="noreferrer">See the Live Site!</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
