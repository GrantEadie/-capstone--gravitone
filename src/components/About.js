import React from "react";
import { CircleShape } from "./SVGs";

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <h1 className="logo text-white mt-5">g r a v i t o n e <CircleShape/></h1>
          <hr className="bg-light" />
          <h4 className="logo text-light">
            An application that uses gravity emulation to generate complex
            arpeggiated progressions and aural textures.
          </h4>
          <br />
          <br />
          <p className="text-light logo">
            This was designed as an experiment in randomly generated tonality.
            While I'm working on code or writing stories, I often find myself
            distracted by predictable chord progressions and song structure.
            <br /><br />
            Sound produced by an unpredictable system soothes these distractions
            and builds some interesting combinations.
            <hr className="bg-light"/>
            <br/>
            I don't really have any instructions for you, just click around and make something pretty sounding. 
            <br/>
            One thing I recommend trying - turn the GRAVITY to zero and try clicking the circles.
            <hr className="bg-light"/><br/>
            <span className="logo text-secondary">Built by Grant Eadie for his capstone project with Epicodus using Tone.js, matter.js, p5.js, and React.</span>
          </p>
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
  );
}

export default About;
