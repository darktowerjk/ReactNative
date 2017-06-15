/** @jsx React.DOM */

(function () {
    import ReactDOM from 'react-dom';
    import * as React from 'react';
    /** import {Component, PropTypes} from 'react'; */
    'use strict';

    var Quiz = React.createClass({
        propTypes: {
            books: React.PropTypes.array.isRequired
        },
        render: function () {
            return <div>{this.props.books.map(function (b) {
                return <Book title={b}></Book>;
            })}
            </div>;
        }
    });
    var Book = React.createClass({
        propTypes: {
            title: React.PropTypes.string.isRequired
        },

        render: function () {
            return <div><h4>{this.props.title}</h4></div>;
        }

    });

    ReactDOM.render(<Quiz books={["Lord of the rings", "The Dark Tower"]}/>, document.getElementById('app'));
});