import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import boardArray from './boardArray.js'

class Square extends React.Component {
  constructor(props) {
    super(props)
  }

  needsThickBottom(position) {
     return (position > 18 && position < 28)
  }

  render() {
    let square = (
      <input className={
        `square ${this.props.position % 3 == 0 ? 'thick-right-border' : null} ${this.needsThickBottom(this.props.position) ? 'thick-bottom' : null}`
      } 
        placeholder={this.props.content} 
        disabled={ this.props.content == this.props.answer ? 'disabled' : null} 
      /> 
    );
    return (
      <div>{square}</div>
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
        {this.props.board.map((item) => <Square position={item.position} content={item.content} answer={item.answer} key={item.position}/>)}
      </div>
    ) 
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: boardArray
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