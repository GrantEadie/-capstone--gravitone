import Matter from "matter-js";

let World = Matter.World,
  Bodies = Matter.Bodies;

export default function Circle(x, y, r, color, e, world, genId) {
  this.genId = genId;
  this.body = Bodies.circle(x, y, r);
  this.body.friction = 0;
  this.body.restitution = 1;
  this.body.density = 0.01;
  this.body.mass = 100;
  World.add(world, this.body);
  // this.id = this.body.id;

  this.show = function () {
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
        return "255";
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
