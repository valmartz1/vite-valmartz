import './style.css';
import p5 from 'p5';

const sketch = (p:p5) => {
  // eslint-disable-next-line no-param-reassign
  p.setup = () => {
    p.createCanvas(500, 500);
  };
  // eslint-disable-next-line no-param-reassign
  p.draw = () => {
    p.background(0);
  };
};
// eslint-disable-next-line new-cap
export default new p5(sketch);
