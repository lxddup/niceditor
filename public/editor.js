'use strict';

const React = require('react');
const CodeBox = require('./codebox');

class Editor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            file: null
        };
    }

    onFile(e) {
        this.setState({ file: e.target.files[0].path });
    }

    render() {
        return React.createElement(
            'div',
            { className: 'editor' },
            React.createElement(
                'div',
                { className: 'actions' },
                React.createElement(
                    'button',
                    { className: 'cyan openbutton' },
                    React.createElement(
                        'label',
                        null,
                        React.createElement('input', { type: 'file', accept: '.js', onChange: this.onFile.bind(this) })
                    ),
                    '打开'
                ),
                React.createElement(
                    'button',
                    { className: 'blue', onClick: () => {
                            this.refs.codebox.save();
                        } },
                    '保存'
                )
            ),
            React.createElement(CodeBox, { file: this.state.file, ref: 'codebox' })
        );
    }
}

module.exports = Editor;