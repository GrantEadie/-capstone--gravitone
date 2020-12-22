import React from "react";
import { useState } from "react";
import Sketch from "react-p5";
import Matter from "matter-js";
import Interface from "./Interface";
import Header from './Header';

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
let generator1;
let mConstraint;
let p5Main;
let createRate = 40;
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
    handleMouseGenerate(!mouseGenerate);
  };

  const changeBeginAuto = () => {
    handleBeginAuto(!beginAuto);
  };

  let synth = new MainSynth(noteArray, "sine");
  let synth1 = new MainSynth(noteArray, "triangle");

  const setup = (p5, canvasParentRef) => {
    p5Main = p5;
    canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    engine = Engine.create();
    world = engine.world;
    Events.on(engine, "collisionStart", function (event) {
      let pair;
      let pairs = event.pairs;

      for (let i = 0; i < pairs.length; i++) {
        pair = pairs[i];
        circles.find((x) => x.body.id === pair.bodyB.id).genId === 1
          ? synth.playSynth(Math.round(pair.bodyB.circleRadius / 5), 1)
          : synth1.playSynth(Math.round(pair.bodyB.circleRadius / 5), 1);
      }
    });
    world.gravity.y = 1;

    let mouse = Mouse.create(canvas.elt);
    mouse.pixelRatio = p5.pixelDensity();
    let options = {
      mouse: mouse,
    };

    ground1 = new Boundary(
      p5Main.windowWidth / 2,
      900,
      p5Main.windowWidth / 4,
      50,
      100,
      p5,
      world
    );
    World.add(world, ground1.body);

    generator = new Generator(p5Main.windowWidth / 2, 500, 20, "#45b6fe", p5);
    World.add(world, generator.body);

    generator1 = new Generator(p5Main.windowWidth / 2, p5Main.windowHeight*.2, 20, "#ff791f", p5);
    World.add(world, generator1.body);

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
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.background(60);
    if (beginAuto) {
      let s = p5.frameCount;
      if (s % createRate === 0) {
        circles.push(
          new Circle(
            generator.body.position.x,
            generator.body.position.y,
            p5.random(3, 60),
            p5.random(140, 255),
            p5,
            world,
            1
          )
        );
        circles.push(
          new Circle(
            generator1.body.position.x,
            generator1.body.position.y,
            p5.random(3, 60),
            p5.random(140, 255),
            p5,
            world,
            2
          )
        );
      }
    }
    Engine.update(engine);
    generator.show();
    generator1.show();
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

  function changeCreateRate(event) {
    document.getElementById('createOutput').value = event.target.value
    createRate = (event.target.value *-1) + 230
  }

  function changeGravityAmount(event) {
    document.getElementById("gravityOutput").value = Math.round(
      event.target.value / 100
    );
    world.gravity.y = event.target.value / 10000;
  }

  function changeGenXAmount(event) {
    document.getElementById("generatorXOutput").value =
      event.target.value / 10 + "%";
    Body.setPosition(generator.body, {
      x: (event.target.value / 1000) * p5Main.windowWidth,
      y: generator.body.position.y,
    });
  }

  function changeGenYAmount(event) {
    document.getElementById("generatorYOutput").value =
      (event.target.value * -1 + 1000) / 10 + "%";
    Body.setPosition(generator.body, {
      x: generator.body.position.x,
      y: ((event.target.value * -1 + 1000) / 1000) * p5Main.windowHeight,
    });
  }

  function changeGenXAmount1(event) {
    document.getElementById("generatorXOutput1").value = Math.round(event.target.value / 10) + "%";
    Body.setPosition(generator1.body, {
      x: (event.target.value / 1000) * p5Main.windowWidth,
      y: generator1.body.position.y,
    });
  }

  function changeGenYAmount1(event) {
    document.getElementById("generatorYOutput1").value =
    Math.round((event.target.value * -1 + 1000) / 10) + "%";
    Body.setPosition(generator1.body, {
      x: generator1.body.position.x,
      y: ((event.target.value * -1 + 1000) / 1000) * p5Main.windowHeight,
    });
  }
  return (
    <>
    <Header/>
      <div style={{width: '15vw'}}>
        <Interface
          handleChangeGravityAmount={changeGravityAmount}
          handleChangeGenXAmount={changeGenXAmount}
          handleChangeGenYAmount={changeGenYAmount}
          handleChangeGenXAmount1={changeGenXAmount1}
          handleChangeGenYAmount1={changeGenYAmount1}
          handleBeginAuto={changeBeginAuto}
          handleMouseGenerate={changeMouseGenerate}
          handleChangeRate={changeCreateRate}
        />
      </div>
          <Sketch setup={setup} draw={draw} mouseDragged={mp} />
    </>
  );
}

export default MatterWorld;
