import React from 'react';
import AddTodo from "./AddTodo";
import Filter from "./Filter";
import TodoList from "./TodoList";
import {connect} from "react-redux";

class App extends React.Component {
    render() {
        return (
            <div>
                <AddTodo/>
                <br/>
                <TodoList filter={this.props.filter.get('filter')}/>
                <br/>
                <Filter/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filter: state.filterReducers
});


export default connect(mapStateToProps)(App);