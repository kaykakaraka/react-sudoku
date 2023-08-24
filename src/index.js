import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import boardArray from './boardArray.js'

class Square extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.content === this.props.answer)
    let thickRightSquare = (
      <input className='square thick-right-border' 
        placeholder={this.props.content} 
        disabled={ this.props.content == this.props.answer ? 'disabled' : null} 
      /> 
    );
    let normalSquare = (
      <input className='square' 
        placeholder={this.props.content}
        disabled={ this.props.content == this.props.answer ? 'disabled' : null} 
      />
    )
    return (
      <div>
        {
          this.props.position % 3 == 0 ? thickRightSquare : normalSquare
        }
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