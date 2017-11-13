import React from 'react';
import {connect} from "react-redux";
import {addTodo} from "../actions";

class AddTodo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            txt: ''
        }
    }

    changeText(e) {
        let newState = {};
        newState[e.target.name] = e.target.value;

        this.setState(newState);
    }

    addTodo() {
        if (this.input.value.trim() === '') {
            return;
        }
        this.props.addTodo(this.state.txt);
        this.input.value = '';
        this.setState({
            txt: ''
        })
    }

    render() {
        return (
            <div>
                <input ref={ref => this.input = ref} type="text" name="txt" value={this.state.txt} placeholder="Input Text" onChange={this.changeText.bind(this)}/>
                <button onClick={this.addTodo.bind(this)}>
                    Add
                </button>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
        addTodo: (txt) => dispatch(addTodo(txt))
    }
);

export default connect(undefined, mapDispatchToProps)(AddTodo);