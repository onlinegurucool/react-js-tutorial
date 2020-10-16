import React, { Component } from "react";

import "./Styles.css";
class TodoList extends Component {

    state = {
        list: [
            {
                todo: "Bring Milk",
                status: false,
            },
            {
                todo: "Read Book",
                status: true,
            },
        ],
        input: "",
        clientErrors: {
            maxError: false,
        },
    };

    addTodo = () => {
        // add into todo
        this.setState({
            ...this.state,
            list: [
                ...this.state.list,
                {
                    todo: this.state.input,
                    status: false,
                },
            ],
            input: "",
        });
    };

    markComplete = (index) => {
        // mark todo complete
        let temp = this.state.list;
        temp[index].status = !temp[index].status;
        this.setState({
            ...this.state,
            list: temp,
        });
    };

    handelChange = (e) => {
        this.setState({
            ...this.state,
            input: e.target.value,
        });
    };

    componentDidMount() {
        // after component mounted means loaded
        console.log("Did Mounted");
    }

    // deprecated from v16.3.0
    componentWillMount() {
        // before component mounted means loaded
        console.log("will Mounted");
    }

    // deprecated from v16.3.0
    componentWillReceiveProps(props) {
        console.log("component received new props");
        console.log({ new_props_are: props });
    }

    // deprecated from v16.3.0
    componentWillUpdate() {
        // component update after mounted
        console.log("Mounted component updated");
    }

    shouldComponentUpdate(nextProps, nextState) {
        // This is condition where you decide to render or not
        console.log(`component checking it should update or not ?`);
        console.log({ nextProps, nextState });
        return true
    }

    componentWillUnmount() {
        // when component get removed from your dom
        console.log("Component destroyed");
    }

    // // new lifecycle method
    getSnapshotBeforeUpdate(props, state) {
        // this is alternative for componentWillUpdate
        console.log("Component snapshot before update");
        console.log({ props, state});
        return null
    }

    static getDerivedStateFromProps (props,state) {
        // alternative for componentWillMount
        console.log("Derived State From Props called");
        console.log({ props, state});
    }

    render() {
        let { list, input, clientErrors } = this.state;
        return (
            <>
                {/* {JSON.stringify(this.state)} */}
                {clientErrors.maxError && (
                    <div className="alert alert-danger">
                        {clientErrors.maxError}
                    </div>
                )}
                <ul className="list-unstyled">
                    {list.map((listObj, index) => {
                        let { todo, status } = listObj;
                        return (
                            <li key={index}>
                                <input
                                    type="checkbox"
                                    checked={status ? "checked" : ""}
                                    id={`checkbox_${index}`}
                                    onChange={() => this.markComplete(index)}
                                />
                                <label
                                    className={
                                        status ? "ml-2 completed" : "ml-2"
                                    }
                                    htmlFor={`checkbox_${index}`}
                                >
                                    {todo}
                                </label>
                            </li>
                        );
                    })}
                </ul>
                <input
                    placeholder="Eg. Subscribe Online GuruCool"
                    className="form-control"
                    onChange={(event) => this.handelChange(event)}
                    value={input}
                />
                <button
                    className="btn btn-primary btn-block mt-2"
                    onClick={this.addTodo}
                >
                    Add Todo
                </button>
            </>
        );
    }
}

export default TodoList;
