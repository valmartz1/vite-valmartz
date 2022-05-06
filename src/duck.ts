import p5 from 'p5';

interface BallProps{
    p:p5;
}
class Duck {
  p;

  x;

  y;

  radius;

  speed;

  direction;

  constructor( { p }:BallProps) {
    this.p = p;
    this.x = this.x;
    this.y = this.y;
    this.radius = 20;
    this.speed = 5;
    this.direction = -1;
  }

p.draw = () => {
  p.fill(255, 255, 0);
  p.ellipse(50, 50, 50, 50);
  p.ellipse(50, 150, 50, 50);
  p.ellipse(50, 250, 50, 50);
};
