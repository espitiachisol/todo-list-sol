import React from "react";
import "./each-todo.component.css";

export const EachTodo = function (props) {
  if (props.listToShow) {
    return (
      <div className="each-todo-main">
        {props.listToShow.map((each) => (
          <div key={each.curKey} className=" input-group mb-3 input-group">
            <span className="input-group-text form-control">
              {each.curText}
            </span>

            <button
              onClick={() => props.handleDelete(each.curKey)}
              className="btn btn-secondary"
              type="button"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
};
