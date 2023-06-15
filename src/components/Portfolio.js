import React from "react";
import Projects from "./pages/Projects";

const projects = [
    {
        id: 0,
        title: "PocketTraders",
        // languages: "react, jsx, css, js",
        image: "/img/pocket-traders.png",
        description: "Allows you to trade pokemon and create a team. I did the design and front end!",
        repo: "https://github.com/dbottoni/PokeTrader",
        live: "https://pocket-traders.herokuapp.com/",
      },
      {
        id: 1,
        title: "",
        image:"",
        description:"",
        repository:"",
        live:"",
      },
      {
        id:2,
        title:"",
        description:"",
        repository:"",
        live:"",
      },
      {
        id:3,
        title:"",
        description:"",
        repository:"",
        live:"",
      },
      {
        id:4,
        title:"",
        description:"",
        repository:"",
        live:"",
      },
      {
        id:5,
        title:"",
        description:"",
        repository:"",
        live:"",
      },
      {
        id:6,
        title:"",
        description:"",
        repository:"",
        live:""
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