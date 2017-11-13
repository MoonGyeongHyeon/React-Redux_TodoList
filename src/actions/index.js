export const ADD = "ADD";
export const COMPLETE = "COMPLETE";
export const UNDO = "UNDO";
export const SET_FILTER = "SET_FILTER";

export const FILTER = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETE: "SHOW_COMPLETE",
    SHOW_DOING: "SHOW_DOING"
};

export const addTodo = (txt) => ({
        type: ADD,
        txt
    }
);

export const completeTodo = (index) => ({
        type: COMPLETE,
        index
    }
);

export const undoTodo = (index) => ({
        type: UNDO,
        index
    }
);

export const setFilter = (filter) => ({
        type: SET_FILTER,
        filter
    }
);