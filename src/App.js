import React, { Component } from 'react';
import './App.css';
import marked from 'marked';
import Editor from './containers/editor/Editor';
import Preview from './containers/preview/Preview';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      placeholder: ''
    }

    console.log(this.myMarks);
  }

  componentDidMount() {
    this.setState({
      placeholder: '# Marked in browser\n\nRendered by **marked**.'
    })
  }

  render() {
    const { placeholder } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          Hello World
          {/* <div id='preview' dangerouslySetInnerHTML={{ __html: marked(placeholder) }} /> */}
          {/* <h1>Translate Here</h1> */}
          {/* {this.myMark(placeholder)} */}
        </header>
        <main className="container">
          <div id="editor" className="item">
            <Editor />
          </div>
          <div id="preview" className="item">
            <Preview />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
