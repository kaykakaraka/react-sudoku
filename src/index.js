import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

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
          <div>{this.state.answer.map(item => <div className='row'>{item}</div>)}</div>
        </div> 
      </main>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>);