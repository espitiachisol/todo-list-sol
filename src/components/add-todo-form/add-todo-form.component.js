import React from "react";
import "./add-todo-form.component.css";
export const AddForm = function ({ addSubmit, handleChange }) {
  return (
    <form
      onSubmit={addSubmit}
      className="input-group mb-3 input-group-lg add-form"
    >
      <input
        placeholder="what to do...?"
        onChange={handleChange}
        className="form-control"
      />
      <button type="submit" className="btn btn-secondary">
        ADD
      </button>
    </form>
  );
};
