import Matter from "matter-js";
import { blueRange, orangeRange } from './Colors'

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
    if (genId === 1) {
        if (color > 240) {
          return blueRange[0]
        } else if (color > 220) {
          return blueRange[1]
        } else if (color > 200) {
          return blueRange[2]
        } else if (color > 180) {
          return blueRange[3]
        } else if (color > 160) {
          return blueRange[4]
        } else if (color > 140) {
          return blueRange[5]
        } else {
          return "255";
        }
    } else {
      if (color > 240) {
        return orangeRange[0]
      } else if (color > 220) {
        return orangeRange[1]
      } else if (color > 200) {
        return orangeRange[2]
      } else if (color > 180) {
        return orangeRange[3]
      } else if (color > 160) {
        return orangeRange[4]
      } else if (color > 140) {
        return orangeRange[5]
      } else {
        return "255";
      }
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
