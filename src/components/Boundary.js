import Matter from "matter-js";

let World = Matter.World,
  Bodies = Matter.Bodies;

export default function Boundary(x, y, w, h, e, world) {

  let options = {
    friction: 0.3,
    restitution: 1,
    angle: Math.PI / 4,
    isStatic: true,
  };

  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function () {
    let pos = this.body.position;
    let angle = this.body.angle;
    console.log(angle);

    e.fill(0);
    e.noStroke();
    e.push();
    e.translate(pos.x, pos.y);
    e.rectMode(e.CENTER);
    e.rotate(angle);
    e.rect(0, 0, this.w, this.h);
    e.pop();
  };
}
