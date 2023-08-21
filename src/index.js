import React from 'react';
import ReactDOM from 'react-dom';

class Game extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <h1>Sudoku</h1>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>);