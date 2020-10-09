import React, { Component } from "react";

class CreateTodo extends Component {
    state = {};
    render() {
        return (
            <>
                <input
                    placeholder="Eg. Subscribe Online GuruCool"
                    className="form-control"
                />
                <button className="btn btn-primary btn-block mt-2">
                    Add Todo
                </button>
            </>
        );
    }
}

export default CreateTodo;
