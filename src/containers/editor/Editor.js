import React, { Component } from 'react'
import './Editor.css';

export default class Editor extends Component {
    render() {
        return (
            <div className="markdown-body editor" contentEditable="true">
            </div>
        )
    }
}
