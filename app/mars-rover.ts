class Rover {
  x: number;
  y: number;
  direction: string;

  constructor(x: number, y: number, direction: string) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  move(commands: string) {
    this.y = 1;
  }
}


export default Rover;
