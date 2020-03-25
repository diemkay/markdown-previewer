import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ markdownInput: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Convert your Markdown</h1>
        <div id="container">
          <div>
            <h2>Input:</h2>
            <textarea
              id="editor"
              value={this.state.markdownInput}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <h2>Output:</h2>
            <p>{this.state.markdownInput}</p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
