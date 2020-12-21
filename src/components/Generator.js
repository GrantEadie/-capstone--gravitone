import Matter from "matter-js";

let Bodies = Matter.Bodies;

export default function Generator(x, y, r, color, e) {
  let options = {
    friction: 0,
    restitution: 1,
    isStatic: true,
    frictionStatic: 0,
    collisionFilter: {
      mask: 0x0002
    }
  };

  this.body = Bodies.circle(x, y, r, options);
  

  this.show = function() {
    let pos = this.body.position;
    let angle = this.body.angle;

    e.push();
    e.noFill()
    e.stroke(255)
    e.strokeWeight(1)
    e.translate(pos.x, pos.y);
    e.rectMode(e.CENTER);
    e.rotate(angle);
    e.ellipse(0, 0, r * 2);
    e.pop();
  };
}
