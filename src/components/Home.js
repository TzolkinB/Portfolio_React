import React from 'react';
import Me    from 'IMG/profile.jpg';
//import Resume from 'IMG/Bell_Kim-Resume.pdf';

const Home = () => {
  return(
    <div>
      <div className="text-center padding-top" id="home">
        <h1>Kimberly Bell</h1>
        <h2>Front End Developer</h2>
        <h3>
          <a href="https://github.com/TzolkinB" target="_blank" className="pr-2">Github</a>
           |
          <a href="https://www.linkedin.com/in/kimbell4" target="_blank" className="px-2">LinkedIn</a> 
           |
          <a href="Bell_Kim-Resume.pdf" target="_blank" className="pl-2">Resume</a>
        </h3>
      </div>
      <div id="about" className="container-fluid"> 
        <div className="row section-padding">
          <div className="col-sm-12 mb-3">
            <h2>About Me</h2>
          </div>
          <div className="row">
            <div className="col-sm-7 ml-4">
                <img src={Me} alt="Profile image" height="120" width="120" className="rounded-circle float-left mr-3"/>
                <p className="pl-2">I am a front-end developer and love using ES6 and the React ecosystem. In
                my free time I continue to deepen my understanding of Javascript and learn Node. 
                When I am not coding I love to read and be outside enjoying my backyard!</p>
                <p>I am always looking for new opportunites so feel free to reach out to me: krbell4@gmail.com</p>
            </div>
            <div className="col-sm-4">
              <h3>Skills</h3>
              <ul className="skills-col">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript/ES6</li>
                <li>React, Redux</li>
                <li>Webpack</li>
                <li>Github</li>
                <li>VIM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="container-fluid"> 
        <div className="row section-padding">
          <div className="col-sm-12 mb-3">
            <h2 className="text-center">Projects</h2>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;