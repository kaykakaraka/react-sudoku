import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class Square extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <input className='square' placeholder={this.props.content}/>
    )
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='board'>
        {this.props.board.map((item) => <Square content={item}/>)}
          {<Square />}
      </div>
    ) 
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [
        ' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', ' ',
        ' ', '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', '3', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '
      ],
    }
  }

  render() {
    return(
      <main>
        <div>
          <h1 id='title'>Sudoku</h1>
          <div>
            <Board board={this.state.board} />
          </div>
        </div> 
      </main>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>);