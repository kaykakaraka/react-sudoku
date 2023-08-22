import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='square'>
        These are the squares
      </div>
    )
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>
          This is the board
          <Square />
        </h1>
      </div>
    ) 
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beginning: [
        ['', '', '', '', '', '1', '', '', ''],
        ['', '', '', '', '', '', '1', '', ''],
        ['', '1', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '3', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '']
      ],
      answer: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    }
  }

  render() {
    return(
      <main>
        <div>
          <h1>Sudoku</h1>
          <div>
            <Board />
            {/* {this.state.answer.map(item => <div className='row'>{item}</div>)} */}
          </div>
        </div> 
      </main>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>);