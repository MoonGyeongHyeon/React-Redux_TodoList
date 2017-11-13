import React from 'react';
import {connect} from "react-redux";
import TodoItem from "./TodoItem";
import {FILTER} from "../actions";

class TodoList extends React.Component {

    applyFilter(filter) {
        switch (this.props.filter) {
            case FILTER.SHOW_ALL:
                return true;
            case FILTER.SHOW_COMPLETE:
                return filter === FILTER.SHOW_COMPLETE;
            case FILTER.SHOW_DOING:
                return filter !== FILTER.SHOW_COMPLETE;
            default:
                return false;
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.list.map((todoItem, i) => {
                        return (
                            <TodoItem
                                key={i}
                                index={i}
                                txt={todoItem.get('txt')}
                                completed={todoItem.get('filter') === FILTER.SHOW_COMPLETE}
                                visible={this.applyFilter.bind(this)(todoItem.get('filter'))}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.todoReducers,
});

TodoList = connect(mapStateToProps)(TodoList);

export default TodoList;