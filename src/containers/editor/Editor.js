import React, { Component } from 'react'
import './Editor.css';
import PropTypes from 'prop-types';
import { placeholder, test } from '../../my-const';

export default class Editor extends Component {

    componentDidMount() {
        this.textEditor.focus();
        this.textEditor.innerHTML = test;
        this.onPreviewProcess(this.textEditor.innerHTML)

    }

    onChange = (e) => {
        this.onPreviewProcess(this.textEditor.innerHTML)
    }

    onPreviewProcess(innerHTML) {
        let text = this.sanitizeHTMLString(innerHTML);
        this.props.OnPreview(text);
    }
    render() {
        return (
            <div className="markdown-body editor" contentEditable onInput={this.onChange} ref={(editor) => { this.textEditor = editor }}>
            </div>
        )
    }

    sanitizeHTMLString = (value) => {
        let text = value
            .replace(/<div>/g, '\n')
            .replace(/<\/div>/g, '')
            .replace(/<br>/g, '\n')
            .replace(/<br class="Apple-interchange-newline">/g, '\n')
            .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
            .replace(/&nbsp;/g, ' ')
        return text;

        // value = value.replace(/&lt;/g, '<')
        // value = value.replace(/<br class="Apple-interchange-newline">/g, '\n')
        // // value = value.replace(/&nbsp;/g, '-');

        // // value = value.replace(/&gt;/g, '>')

        // // Convert `&amp;` to `&`.
        // value = value.replace(/&amp;/gi, '&');

        // // Replace spaces.
        // value = value.replace(/&nbsp;/gi, '\b');
        // // value = value.replace(/\s+/g, '\b');

        // // Remove "<b>".
        // value = value.replace(/<b>/gi, '');
        // value = value.replace(/<\/b>/gi, '');

        // // Remove "<strong>".
        // value = value.replace(/<strong>/gi, '');
        // value = value.replace(/<\/strong>/gi, '');

        // // Remove "<i>".
        // value = value.replace(/<i>/gi, '');
        // value = value.replace(/<\/i>/gi, '');

        // // Remove "<em>".
        // value = value.replace(/<em>/gi, '');
        // value = value.replace(/<\/em>/gi, '');

        // // Remove "<u>".
        // value = value.replace(/<u>/gi, '');
        // value = value.replace(/<\/u>/gi, '');

        // // Tighten up "<" and ">".
        // value = value.replace(/>\s+/g, '>');
        // value = value.replace(/\s+</g, '<');

        // // Replace "<br>".
        // value = value.replace(/<br>/gi, '\n');

        // // Replace "<div>" (from Chrome).
        // value = value.replace(/<div>/gi, '\n');
        // value = value.replace(/<\/div>/gi, '');

        // // Replace "<p>" (from IE).
        // value = value.replace(/<p>/gi, '\n');
        // value = value.replace(/<\/p>/gi, '');

        // // No more than 2x newline, per "paragraph".
        // value = value.replace(/\n\n+/g, '\n\n');

        // // Whitespace before/after.
        // value = value.trim();

        // return value;
    }
}

Editor.propTypes = {
    OnPreview: PropTypes.func.isRequired
}