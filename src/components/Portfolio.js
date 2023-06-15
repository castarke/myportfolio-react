import React from "react";
import Projects from "./pages/Projects";

const projects = [
    {
        id: 0,
        title: "Note Taker",
        // languages: "react, jsx, css, js",
        image: "/assets/231067061-996b496e-051b-4083-8440-7e6aae3bfef6.png",
        description: "You have the ability to use this notepad to create notes and delete notes, to help keep your life in check ",
        repository: "https://github.com/castarke/Express-Note-Taker",
        live: "https://candlers-note-taker.herokuapp.com/notes",
      },
      {
        id: 1,
        title: "CMS-Blog",
        image:"/assets/candlerscmsblog.herokuapp.com_.png",
        description:"A blog where you can input your thoughts",
        repository:"https://github.com/castarke/CMS-Blog",
        live:"https://candlerscmsblog.herokuapp.com/",
      },
      {
        id:2,
        title:"The Shelve",
        image:"assets/TheShelve.png",
        description:"A work in progess to create your own personaal movie library",
        repository:"https://github.com/castarke/TheShelve",
        live:"https://theshelve.herokuapp.com/login",
      },
      {
        id:3,
        title:"Who, Where ,Wow",
        image:"/assets/Who,Where,Wow.png",
        description:"An application where you can get the filmography of any actor and what streaming service the movie is on",
        repository:"https://github.com/castarke/movie-rec-repo",
        live:"https://castarke.github.io/movie-rec-repo/",
      },
      {
        id:4,
        title:"Weather Dashboard",
        image:"/assets/Weathe Dashboard.png",
        description:"Get your local weather forcast",
        repository:"https://github.com/castarke/Weather-Forcast",
        live:"https://castarke.github.io/Weather-Forcast/",
      },
      {
        id:5,
        title:"Workday Planner",
        image:"/assets/Work Day Scheduler.png",
        description:"A Calender to keep track of your daily tasks",
        repository:"https://github.com/castarke/daily-planner",
        live:"https://castarke.github.io/daily-planner/",
      }
];

function Portfolio() {
    return (
        <div>
            <h1>Candler's Portfolio</h1>

            <Projects projects = {projects}/>
        </div>
    )
}

export default Portfolio;