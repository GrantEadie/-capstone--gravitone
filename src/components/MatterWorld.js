import React from "react";
import Sketch from "react-p5";
import Matter from "matter-js";
import * as Tone from "tone";

let Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

let engine;
let world;
let circles = [];
let ground1;
let canvas;
const noteArray = ["C4", "C2", "C3", "D4", "D2", "D3", "G4", "G2", "G3", "E4", "E2", "E3",]

function MatterWorld() {
  const synth = new Tone.PolySynth(Tone.Synth, 24);
  synth.set({
    oscillator: {
    type:  "triangle"
    },
    envelope: {
      attack: .15,
      release: 2
    }
  })
  synth.chain(Tone.Destination);

  Tone.setContext(new Tone.Context({ latencyHint : "interactive" }))


  function playSynth(noteIndex) {
    console.log(noteArray[noteIndex])
    synth.triggerAttackRelease(noteArray[noteIndex], '32n');
  }

  function Circle(x, y, r, color, e) {
    this.body = Bodies.circle(x, y, r);
    this.body.restitution = 1;
    this.body.setDensity = 0.01;
    World.add(world, this.body);

    this.show = function () {
      this.body.render.visible = true;
      let pos = this.body.position;
      let angle = this.body.angle;

      function colorMaker(color) {
        if (color > 240) {
          return "rgb(236, 84, 76)";
        } else if (color > 220) {
          return "rgb(243, 117, 136)";
        } else if (color > 200) {
          return "rgb(92, 28, 52)";
        } else if (color > 180) {
          return "rgb(79, 83, 162)";
        } else if (color > 160) {
          return "rgb(191, 109, 157)";
        } else if (color > 140) {
          return "rgb(62, 47, 99)";
        } else {
          return color;
        }
      }

      e.fill(colorMaker(color));
      e.noStroke();
      e.push();
      e.translate(pos.x, pos.y);
      e.rectMode(e.CENTER);
      e.rotate(angle);
      e.ellipse(0, 0, r * 2);
      e.pop();
    };

    this.isOffScreen = function (e) {
      let pos = this.body.position;
      return pos.y > 1500;
    };

    this.removeFromWorld = function () {
      World.remove(world, this.body);
    };
  }

  const setup = (p5, canvasParentRef) => {
    canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
    canvas.position(0, 0);
    engine = Engine.create();
    world = engine.world;
    Events.on(engine, "collisionStart", function (event) {
      let pair = [];
      let pairs = event.pairs;

      for (var i = 0; i < pairs.length; i++) {
        pair = pairs[i];
      }

      // console.log(pair);
      playSynth(Math.floor(Math.random() * 11) + 1);
    });
    world.gravity.y = 1;

    ground1 = Bodies.rectangle(p5.width / 2, 900, p5.width / 2, 30, {
      isStatic: true,
    });

    World.add(world, ground1);
  };

  const mp = (e) => {
    circles.push(
      new Circle(e.mouseX, e.mouseY, e.random(3, 60), e.random(140, 255), e)
    );
  };

  const draw = (p5) => {
    p5.background("#f7f7f7");
    Engine.update(engine);
    for (let i = 0; i < circles.length; i++) {
      circles[i].show();
      if (circles[i].isOffScreen()) {
        circles[i].removeFromWorld();
        circles.splice(i, 1);
        i--;
      }
    }
  };
  return (
    <div>
      <Sketch setup={setup} draw={draw} mouseClicked={mp} />
    </div>
  );
}

export default MatterWorld;
