import React from 'react';
import {completeTodo} from "../actions";
import {connect} from "react-redux";
import {undoTodo} from "../actions/index";

class TodoItem extends React.Component {

    handleClick () {
        if (this.props.completed) {
            this.props.undoTodo(this.props.index);
        } else {
            this.props.completeTodo(this.props.index);
        }
    }

    render() {
        console.log(this.props.visible);
        return (
            <li onClick={this.handleClick.bind(this)}
                 style={{
                     textDecoration: this.props.completed ? 'line-through' : 'none',
                     visibility: this.props.visible ? 'visible' : 'hidden',
                     display: this.props.visible ? 'block' : 'none'
                 }}>
                {this.props.txt}
            </li>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    completeTodo: (index) => dispatch(completeTodo(index)),
    undoTodo: (index) => dispatch(undoTodo(index))
});

export default connect(undefined, mapDispatchToProps)(TodoItem);