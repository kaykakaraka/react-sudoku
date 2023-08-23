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
        {this.props.board.map((item) => <Square content={item.content}/>)}
        {console.log(this.props.board)}
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
        {
          position: 1,
          input: '3',
          content: '3',
          answer: '3',
        },
        {
          position: 2,
          input: '',
          content: '',
          answer: '7'
        },
        {
          position: 3,
          input: '',
          content: '',
          answer: '4'
        },
        {
          position: 4,
          input: '',
          content: '',
          answer: '6'
        },
        {
          position: 5,
          input: '',
          content: '',
          answer: '5'
        },
        {
          posiiton: 6,
          input: '',
          content: '',
          answer: '1'
        },
        {
          position: 7,
          input: '',
          content: '9',
          answer: '9'
        },
        {
          position: 8,
          input: '',
          content: '8',
          answer: '8'
        },
        {
          position: 9,
          input: '',
          content: '',
          answer: '2'
        },
        {
          position: 10,
          input: '',
          content: '',
          answer: '9'
        },
        {
          position: 11,
          input: '',
          content: '',
          answer: '6'
        },
        {
          position: 12,
          input: '',
          content: '2',
          answer: '2'
        },
        {
          position: 13,
          input: '',
          content: '7',
          answer: '7'
        },
        {
          position: 14,
          input:'',
          content: '',
          answer: '3'
        },
        {
          position: 15,
          input: '',
          content: '',
          answer: '8'
        }, 
        {
          position: 16,
          input: '',
          content: '4',
          answer: '4'
        },
        {
          position: 17,
          input: '',
          content: '5',
          answer: '5'
        }
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