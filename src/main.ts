import './reset.css';
import './styles.css';

const SIZE = 600;
const canvas = document.getElementById('clock') as HTMLCanvasElement;
canvas.width = SIZE;
canvas.height = SIZE;

const context = canvas.getContext('2d') as CanvasRenderingContext2D;

const clear = () => {
  context.resetTransform();
  context.fillStyle = 'white';
  context.fillRect(0, 0, SIZE, SIZE);
};

const draw = () => {
  // Step 1 : Draw the Clock Circle
  context.translate(SIZE / 2, SIZE / 2);

  // Step 2 : Draw the Minute/Second Tick Marks

  // Step 3 : Draw the Hour Tick Marks and Numbers
  const hours = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];

  // Step 4 : Draw the Hands
  const hands = getHandsFromTimeMS(Date.now());
};

const render = () => {
  clear();
  draw();
  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);

const getHandsFromTimeMS = (timeMS: number): Hands => {
  const date = new Date(timeMS);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ms = date.getMilliseconds();

  const secRad = (2 * Math.PI) / 60;
  const hourRad = (2 * Math.PI) / 12;

  const secondRadians = (seconds - 15) * secRad + (ms * secRad) / 1000;
  const minuteRadians = (minutes - 15) * secRad + (seconds / 60) * secRad;
  const hourRadians = ((hours % 12) - 3) * hourRad + (minutes / 60) * hourRad;

  return {
    hourRadians,
    minuteRadians,
    secondRadians,
  };
};

interface Hands {
  hourRadians: number;
  minuteRadians: number;
  secondRadians: number;
}
