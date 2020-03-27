import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import marked from 'marked';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownInput:
        '(Delete or edit this text as needed to see the preview on the right hand side)\n\n# Heading 1\n\n## Heading 2\n\nMarkdown was created by [John Gruber with help from Aaron Swartz](https://daringfireball.net/projects/markdown/)\n\nUse single backticks `to represent inline code`\n\nUse triple backticks for code blocks:\n\n```\n<script>\nalert( `Hello, world!` );\n</script>\n```\n\nUse hyphens (dashes) to indicate list items:\n\n- An item\n\n- Another item\n\n- A third item\n\nUse the greater than sign to indicate a blockquote:\n\n> This is a quoted paragraph\n\nYou can add images too:\n\n![Image of the Markdown mark](https://raw.githubusercontent.com/dcurtis/markdown-mark/master/png/66x40.png)\n\nAnd make things **strong** or _emphasize_ them.',
    };

    this.handleChange = this.handleChange.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  handleChange(event) {
    this.setState({ markdownInput: event.target.value });
  }

  async copyToClipboard() {
    let copyText = document.getElementById('markdown-text').innerHTML;
    try {
      await navigator.clipboard.writeText(copyText);
    } catch (error) {
      console.error('Failed to copy!', error);
    }
  }

  render() {
    let markdownText = marked(this.state.markdownInput);
    let markdownOutput = { __html: `${markdownText}` };

    return (
      <React.Fragment>
        <header className="row">
          <h1>A simple Markdown Previewer</h1>
        </header>
        <main className="row">
          <div className="col-md-6">
            <h4>Input</h4>
            <textarea
              type="text"
              id="editor"
              value={this.state.markdownInput}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-6">
            <h4>Output</h4>
            <div id="preview">
              <p id="markdown-text" dangerouslySetInnerHTML={markdownOutput}></p>
            </div>
            <div id="copy-to-clipboard">
              <button
                type="button"
                onClick={this.copyToClipboard}
                className="btn btn-outline-primary btn-sm"
              >
                Copy to clipboard
              </button>
              <p id="disclaimer">In Chrome and Firefox for now</p>
            </div>
          </div>
        </main>
        <footer>
          <a href="https://diemkay.github.io/">Andreea Năstase</a> ・ 2020
        </footer>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
