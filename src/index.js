import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import boardArray from './boardArray.js'

class Square extends React.Component {
  constructor(props) {
    super(props)
  }

  needsThickBottom() {
    const p = this.props.position
    return ((p > 18 && p < 28) || (p > 45 && p < 55))
  }

  shouldBeDisabled() {
    return ( this.props.content == this.props.answer || this.props.input == this.props.answer )
  }

  render() {
    let square = (
      <input className={
        `square ${this.props.position % 3 == 0 ? 'thick-right-border' : null} 
        ${this.needsThickBottom() ? 'thick-bottom' : null}
        ${this.props.input && this.props.input != this.props.answer ? 'incorrect' : null}`

      } 
        placeholder={this.props.content}
        value={this.props.input} 
        onChange={(event) => this.props.handleChange(this.props.position, event)}
        disabled={ this.shouldBeDisabled() ? 'disabled' : null} 
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
        {this.props.board.map((item) => <Square position={item.position} input={item.input} content={item.content} answer={item.answer} key={item.position} handleChange={this.props.handleChange}/>)}
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
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(position, event) {
    event.persist()
    this.setState({
      board: this.state.board.map((item) => {
        if (item.position == position) {
          return {...item, input: event.target.value}
        } else {
          return item;
        }
      })
    })
  }

  render() {
    return(
      <main>
        <div>
          <h1 id='title'>Sudoku</h1>
          <div>
            <Board board={this.state.board} handleChange={this.handleChange} />
          </div>
        </div> 
      </main>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>);