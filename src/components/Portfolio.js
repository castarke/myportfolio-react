// improting react and the project function
import React from 'react';
import Projects from './pages/Projects';

const projects = [
  {
    id: 0,
    title: 'Note Taker',
    image: 'assets/notetaker.png',
    description: 'Add and delete notes to help keep track of your life',
    repository: 'https://github.com/castarke/Express-Note-Taker',
    live: 'https://candlers-note-taker.herokuapp.com/notes',
  },
  {
    id: 1,
    title: 'CMS-Blog',
    image: 'assets/candlerscmsblog.png',
    description: 'A blog where you can share your thoughts with friends',
    repository: 'https://github.com/castarke/CMS-Blog',
    live: 'https://candlerscmsblog.herokuapp.com/',
  },
  {
    id: 2,
    title: 'The Shelve',
    image: 'assets/TheShelve.png',
    description: 'A work in progress to create your personal movie database',
    repository: 'https://github.com/castarke/TheShelve',
    live: 'https://theshelve.herokuapp.com/login',
  },
  {
    id: 3,
    title: 'Who, Where, Wow',
    image: 'assets/whowherewow.png',
    description: "Where to watch your favorite actor's filmography",
    repository: 'https://github.com/castarke/movie-rec-repo',
    live: 'https://castarke.github.io/movie-rec-repo/',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    image: 'assets/weatherdashboard.png',
    description: 'Get your local weather forecast',
    repository: 'https://github.com/castarke/Weather-Forcast',
    live: 'https://castarke.github.io/Weather-Forcast/',
  },
  {
    id: 5,
    title: 'Workday Planner',
    image: 'assets/workdayscheduler.png',
    description: 'A Calendar to keep track of your daily tasks',
    repository: 'https://github.com/castarke/daily-planner',
    live: 'https://castarke.github.io/daily-planner/',
  },
    {
    id: 6,
    title: 'DonateTrader',
    image: '/assets/donateTrader.png',
    description: 'A marketplace to barter items around your house',
    repository: 'https://github.com/castarke/donatetrader',
    live: 'https://donatetrader-6968094a5822.herokuapp.com/',
  },
];

// applying the information to the project function anad rendering the projects
function Portfolio() {
  return (
    <div>
      <h1 className='projectHeader'>Candler's Portfolio</h1>

      <Projects projects={projects} />
    </div>
  );
}

export default Portfolio;
