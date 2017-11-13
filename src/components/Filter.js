import React from 'react';
import {FILTER, setFilter} from "../actions";
import {connect} from "react-redux";

class Filter extends React.Component {
    setFilter(e) {
        this.props.setFilter(e.target.name);
    }

    render() {
        return (
            <div>
                Filter
                <button name={FILTER.SHOW_ALL} onClick={this.setFilter.bind(this)}>
                    All
                </button>
                <button name={FILTER.SHOW_COMPLETE} onClick={this.setFilter.bind(this)}>
                    Complete
                </button>
                <button name={FILTER.SHOW_DOING} onClick={this.setFilter.bind(this)}>
                    Doing
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setFilter: (filter) => dispatch(setFilter(filter))
});

Filter = connect(undefined, mapDispatchToProps)(Filter);

export default Filter;