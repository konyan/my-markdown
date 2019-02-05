import React, { Component } from 'react';
import './App.css';
import Editor from './containers/editor/Editor';
import Preview from './containers/preview/Preview';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      placeholder: ''
    }
  }

  onPreview = text => {
    this.setState({
      placeholder: text
    })
  }

  render() {
    const { placeholder } = this.state;
    return (
      <div className="App">
        <header className="App-header">
        Hello MarkDown
        </header>
        <main className="container">
          <div id="editor" className="item">
            <Editor OnPreview={this.onPreview} />
          </div>
          <div id="preview" className="item">
            <Preview text={placeholder} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
