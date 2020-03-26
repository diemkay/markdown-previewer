import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import marked from 'marked';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownInput:
        'Delete or edit this text as needed:\n\n# Heading 1\n\n## Heading 2\n\nMarkdown was created by [John Gruber with help from Aaron Swartz](https://daringfireball.net/projects/markdown/)\n\nUse single backticks `to represent inline code`\n\nUse triple backticks for code blocks:\n\n```\n<script>\nalert( `Hello, world!` );\n</script>\n```\n\nUse hyphens (dashes) to indicate list items:\n\n- An item\n\n- Another item\n\n- A third item\n\nUse the greater than sign to indicate a blockquote:\n\n> This is a quoted paragraph\n\nYou can add images too:\n\n![Image of the Markdown mark](https://raw.githubusercontent.com/dcurtis/markdown-mark/master/png/66x40.png)\n\nAnd make things **strong** or _emphasize_ them.',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ markdownInput: event.target.value });
  }

  render() {
    let markdownOutput = { __html: `${marked(this.state.markdownInput)}` };

    return (
      <div>
        <h1 id="title">Convert your Markdown</h1>

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
          <div id="preview">
            <p dangerouslySetInnerHTML={markdownOutput}></p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
