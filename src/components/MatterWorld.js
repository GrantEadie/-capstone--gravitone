import React from "react";
import { useState } from "react";
import Sketch from "react-p5";
import Matter from "matter-js";
import Interface from "./Interface";

import Boundary from "./Boundary";
import Circle from "./Circle";
import MainSynth from "./MainSynth";
import Generator from "./Generator";

let Engine = Matter.Engine,
  Body = Matter.Body,
  World = Matter.World,
  Events = Matter.Events,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;

let engine;
let world;
let circles = [];
let ground1;
let canvas;
let generator;
let mConstraint;
const noteArray = [
  "D6",
  "C6",
  "A5",
  "G5",
  "F5",
  "E5",
  "C5",
  "A4",
  "G4",
  "F4",
  "E4",
  "D4",
  "C4",
];

function MatterWorld() {
  const [beginAuto, handleBeginAuto] = useState(false);
  const [mouseGenerate, handleMouseGenerate] = useState(false);

  const changeMouseGenerate = () => {
    handleMouseGenerate(!mouseGenerate)
  }

  const changeBeginAuto = () => {
    handleBeginAuto(!beginAuto)
  }

  let synth = new MainSynth(noteArray);

  const setup = (p5, canvasParentRef) => {
    canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    canvas.style("position", "absolute");
    engine = Engine.create();
    world = engine.world;
    Events.on(engine, "collisionStart", function (event) {
      let pair = [];
      let pairs = event.pairs;

      for (var i = 0; i < pairs.length; i++) {
        pair = pairs[i];
      }
      synth.playSynth(Math.round(pair.bodyB.circleRadius / 5), 1);
      // circles.find(x => x.body.id === pair.bodyB.id).changeColorFade();
      console.log(circles.find((x) => x.body.id === pair.bodyB.id));
    });
    world.gravity.y = 1;

    let mouse = Mouse.create(canvas.elt);
    mouse.pixelRatio = p5.pixelDensity();
    let options = {
      mouse: mouse,
    };

    ground1 = new Boundary(p5.width / 2, 900, p5.width / 4, 50, 100, p5, world);
    World.add(world, ground1.body);

    generator = new Generator(500, 500, 20, 255, p5);
    World.add(world, generator.body);

    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
  };

  const mp = (e) => {
    if (mouseGenerate) {
      World.remove(world, mConstraint);
      if (e.frameCount % 5 === 0) {
        circles.push(
          new Circle(
            e.mouseX,
            e.mouseY,
            e.random(3, 60),
            e.random(140, 255),
            e,
            world
          )
        );
      }
    } else {
      World.add(world, mConstraint);
    }
  };

  const draw = (p5) => {
    p5.background(60);
    if (beginAuto) {
      let s = p5.frameCount;
      if (s % 40 === 0) {
        circles.push(
          new Circle(
            generator.body.position.x,
            generator.body.position.y,
            p5.random(3, 60),
            p5.random(140, 255),
            p5,
            world
          )
        );
      }
    }
    Engine.update(engine);
    generator.show();
    ground1.show();
    for (let i = 0; i < circles.length; i++) {
      circles[i].show();
      if (circles[i].isOffScreen()) {
        circles[i].removeFromWorld();
        circles.splice(i, 1);
        i--;
      }
    }
  };
  function changeGravityAmount(event) {
    document.getElementById("gravityOutput").value = Math.round(
      event.target.value / 100
    );
    world.gravity.y = event.target.value / 10000;
  }

  function changeGenXAmount(event) {
    document.getElementById("generatorXOutput").value = event.target.value;
    Body.setPosition(generator.body, {
      x: event.target.value,
      y: generator.body.position.y,
    });
  }

  function changeGenYAmount(event) {
    document.getElementById("generatorYOutput").value = event.target.value * -1;
    Body.setPosition(generator.body, {
      x: generator.body.position.x,
      y: event.target.value * -1 + 1000,
    });
  }
  return (
    // <div className="ml-2 mt-2">
    //   <p style={{ color: "GREY", marginBottom: "-10px" }}>
    //     GRAVITY{" "}
    //     <input
    //       style={{
    //         background: "transparent",
    //         border: "none",
    //         color: "white",
    //         marginLeft: "10px",
    //       }}
    //       id="gravityOutput"
    //       type="text"
    //       defaultValue="100"
    //     ></input>
    //   </p>
    //   <div className="slidecontainer1">
    //     <input
    //       style={{ marginLeft: "-5px" }}
    //       defaultValue="10000"
    //       type="range"
    //       min="0"
    //       max="10000"
    //       onChange={changeGravityAmount}
    //       className="slider1"
    //     />
    //   </div>
    //   <p style={{ color: "GREY", marginBottom: "-10px" }}>
    //     Generator X:{" "}
    //     <input
    //       style={{
    //         background: "transparent",
    //         border: "none",
    //         color: "white",
    //         marginLeft: "10px",
    //       }}
    //       id="generatorXOutput"
    //       type="text"
    //       defaultValue="500"
    //     ></input>
    //   </p>
    //   <div className="slidecontainer1">
    //     <input
    //       style={{ marginLeft: "-5px" }}
    //       defaultValue="500"
    //       type="range"
    //       min="0"
    //       max="1000"
    //       onChange={changeGenXAmount}
    //       className="slider1"
    //     />
    //   </div>
    //   <p style={{ color: "GREY", marginBottom: "-10px" }}>
    //     Generator Y:{" "}
    //     <input
    //       style={{
    //         background: "transparent",
    //         border: "none",
    //         color: "white",
    //         marginLeft: "10px",
    //       }}
    //       id="generatorYOutput"
    //       type="text"
    //       defaultValue="500"
    //     ></input>
    //   </p>
    //   <div className="slidecontainer1">
    //     <input
    //       style={{ marginLeft: "-5px" }}
    //       defaultValue="500"
    //       type="range"
    //       min="0"
    //       max="1000"
    //       onChange={changeGenYAmount}
    //       className="slider1"
    //     />
    //   </div>
    //   <div className=" bg-transparent">
    //     <button
    //       className="btn btn-outline-warning"
    //       onClick={() => handleBeginAuto(!beginAuto)}
    //     >
    //       auto
    //     </button>
    //     <button
    //       className="btn btn-outline-warning ml-3"
    //       onClick={() => handleMouseGenerate(!mouseGenerate)}
    //     >
    //       mouse
    //     </button>
    //   </div>
    <div>
      <Interface
        handleChangeGravityAmount={changeGravityAmount}
        handleChangeGenXAmount={changeGenXAmount}
        handleChangeGenYAmount={changeGenYAmount}
        handleBeginAuto={changeBeginAuto}
        handleMouseGenerate={changeMouseGenerate}
      />
      <Sketch setup={setup} draw={draw} mouseDragged={mp} />
    </div>
  );
}

export default MatterWorld;
