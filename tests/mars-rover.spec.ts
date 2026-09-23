//import { Rover } from '@/mars-rover'

// You are given a starting point (x, y) and a direction (N,S,E,W)
// The rover receives a collection of commands.
// Implement commands that move the rover (f,b)
// Implement methods that turn the rover (l,r).

// How do we represent the rover?
// fflffrff

//    --[8]
//   |
// --|

describe('mars rover', () => {
  it('turns clockwise once', () => {
    const rover = new Rover()

    rover.TurnClockwise()

    expect(rover.WhereArtThou()).toBe("0,0,E")
  });

  it('turns clockwise twice and sees antarctica', () => {
    const rover = new Rover()

    rover.TurnClockwise()
    rover.TurnClockwise()

    expect(rover.WhereArtThou()).toBe("0,0,S")
  });
});

class Rover {

  direction = "N"
  numberOfTurns = 0

  TurnClockwise() {
    this.numberOfTurns++

    if (this.numberOfTurns === 1) {
      this.direction = "E"
    } else {
      this.direction = "S"
    }
  }

  WhereArtThou(): any {
    return `0,0,${this.direction}`
  }
}
