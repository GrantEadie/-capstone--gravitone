import Matter from "matter-js";

let Bodies = Matter.Bodies;

export default function Boundary(x, y, w, h, color, e, world, a) {
  console.log(a)
  let options = {
    friction: 0,
    restitution: 1,
    angle: Math.PI * a,
    isStatic: true,
    frictionStatic: 0,
  };

  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;

  this.show = function () {
    let pos = this.body.position;
    let angle = this.body.angle;

    e.fill(color);
    e.noStroke();
    e.push();
    e.translate(pos.x, pos.y - this.h / 2);
    e.rectMode(e.CENTER);
    e.rotate(angle);
    e.rect(0, 0, this.w, 1);
    e.pop();
  };
}
