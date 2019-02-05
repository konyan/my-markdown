import React, { Component } from 'react'
import PropTypes from 'prop-types';
import marked from 'marked';
import './Preview.css';

export default class Preview extends Component {
    componentDidMount() {
        let renderer = new marked.Renderer();
        renderer.link = function (href, title, text) {
            return `<a target="_blank" href="${href}">${text}'</a>'`;
        }
    }
    render() {
        const { text } = this.props;
        return (
            <div className='preview' dangerouslySetInnerHTML={{ __html: marked(text, { renderer: this.renderer }) }} />
        )
    }


}


Preview.propTypes = {
    text: PropTypes.string.isRequired
}