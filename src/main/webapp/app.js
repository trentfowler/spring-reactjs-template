'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

//rectangle
class Rectangle extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.rectangle.x1}</td>
                <td>{this.props.rectangle.y1}</td>
                <td>{this.props.rectangle.x2}</td>
                <td>{this.props.rectangle.y2}</td>
                <td>
                    <button className="btn-info" onClick={this.handleDelete}>Delete</button>
                </td>
            </tr>
        );
    }
}

//table
class RectangleTable extends React.Component {
    render() {
        var rectangles = this.props.rectangles.map(rectangle =>
            <Rectangle key={rectangle._links.self.href} rectangle={rectangle}/>
        );

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>x1</th>
                        <th>y1</th>
                        <th>x2</th>
                        <th>y2</th>
                    </tr>
                </thead>
                <tbody>{rectangles}</tbody>
            </table>
        );
    }
}

class App extends React.Component {
    constructor() {
       super();
       this.state = { rectangles: [], };
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=10 0')
            .then((results) => results.json())
            .then((rectangles) => {
                this.setState({rectangles: data._embedded.rectangles});
            });
    }

    render() {
        return (
            <RectangleTable rectangles={this.state.rectangles}/>
        );
    }
}

//render
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
