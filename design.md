```
class Game extends React.component {
  constructor() {
    ....
    this.state = {
      starterBoard = {
        rowOne: {
          squareOne: ,
          squareTwo:
          }
        },
        rowTwo: {

        }
        ... continuing like this so we have an object for the starter board
         
      },
      answer = {
        rowOne: {
          squareOne: ,
          squareTwo: ,
        }
        ... and stored the answer in a separate object, although there is a potential to combine
      }
    }

    finishGame() {
      .. creates a message when game is finished
    }

    render() {

    }
  }

class Board extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return {
      <div>
        .. code here for squares, each square is fed in props
      </div>
    }
  }
}

class Square extends React.Compoenent {
  constructor(props) {
    super(props)
  }

  handleClick() {
    ... lights up square
  }

  handleKeyDown() {
    ... when enter is pressed
    called isNumberCorrect
  }

  isNumberCorrect() {

  }

  render() {
    renders the number pressed and goes red if incorrect, stays black if correct
  }
}

```