import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { marked } from 'marked';

const MARKDOWN_SAMPLE = '(Delete or edit this text as needed to see the preview on the right hand side)\n\n# Heading 1\n\n## Heading 2\n\nMarkdown was created by [John Gruber with help from Aaron Swartz](https://daringfireball.net/projects/markdown/)\n\nUse single backticks `to represent inline code`\n\nUse triple backticks for code blocks:\n\n```\n < script >\nalert(`Hello, world!`); \n</script >\n```\n\nUse hyphens (dashes) to indicate list items:\n\n- An item\n\n- Another item\n\n- A third item\n\nUse the greater than sign to indicate a blockquote:\n\n> This is a quoted paragraph\n\nYou can add images too:\n\n![Image of the Markdown mark](https://raw.githubusercontent.com/dcurtis/markdown-mark/master/png/66x40.png)\n\nAnd make things **strong** or _emphasize_ them.';

const App = () => {
  const [markdownInput, setMarkdownInput] = useState(MARKDOWN_SAMPLE);

  const handleChange = (event) => {
    setMarkdownInput(event.target.value);
  };

  const copyToClipboard = async () => {
    const copyText = marked(markdownInput);
    try {
      await navigator.clipboard.writeText(copyText);
    } catch (error) {
      console.error('Failed to copy!', error);
    }
  };

  const markdownText = marked(markdownInput, { breaks: true });
  const markdownOutput = { __html: `${ markdownText }` };

  return (<>
    <header className="row">
      <h1>A simple Markdown Previewer</h1>
    </header>
    <main className="row">
      <div className="col-md-6">
        <h4>Input</h4>
        <textarea
          type="text"
          id="editor"
          value={markdownInput}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6">
        <h4>Output</h4>
        <div id="preview" dangerouslySetInnerHTML={markdownOutput}></div>
        <div id="copy-to-clipboard">
          <button
            type="button"
            onClick={copyToClipboard}
            className="btn btn-outline-primary btn-sm"
          >
            Copy HTML to clipboard
          </button>
          <p id="disclaimer">In Chrome and Firefox for now</p>
        </div>
      </div>
    </main>
    <footer>
      by <a href="https://diemkay.github.io/">Andreea Năstase</a>
    </footer>
  </>);
};

ReactDOM.render(<App />, document.getElementById('root'));
