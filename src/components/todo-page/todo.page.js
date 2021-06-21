import React from "react";
import { EachTodo } from "../each-todo/each-todo.component.js";
import "./todo.page.css";
import { Header } from "../header/header.component.js";
import { AddForm } from "../add-todo-form/add-todo-form.component.js";
import { Link } from "react-router-dom";
class TodoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      curList: { curText: "", curKey: "" },
    };
    this.getOnChange = this.getOnChange.bind(this);
    this.submitAdd = this.submitAdd.bind(this);
    this.delete = this.delete.bind(this);
  }
  getOnChange(e) {
    let key = Date.now();
    this.setState({ curList: { curText: e.target.value, curKey: key + 1 } });
    console.log(this.curList);
  }
  submitAdd(e) {
    e.preventDefault();
    e.target.firstChild.value = "";
    const curAdd = this.state.curList;
    if (curAdd.curText !== "") {
      const items = [...this.state.list, curAdd];
      this.setState({ list: items, curList: { curText: "", curKey: "" } });
    }
  }
  delete(key) {
    const result = this.state.list.filter((each) => {
      return each.curKey !== key;
    });
    this.setState({ list: result });
    console.log(result);
  }
  render() {
    console.log(this.state.list);
    return (
      <>
        <Header />
        <section className="jumbotron text-center justify-content-center todo-page-main">
          <AddForm addSubmit={this.submitAdd} handleChange={this.getOnChange} />
          <EachTodo listToShow={this.state.list} handleDelete={this.delete} />
          <Link to="/">
            <button
              type="button"
              className="btn btn-warning btn-lg"
              onClick={this.props.toChangepage}
            >
              回首頁
            </button>
          </Link>
        </section>
      </>
    );
  }
}

//  (
//   <>
//     <form>
//       <p>task to do 1</p>
//       <button type="submit">Delete</button>
//     </form>
//   </>
// );

export default TodoCard;
// class TodoCard extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <p>task to do 1</p>
//         <p>task to do 2</p>
//         <p>task to do 3</p>
//       </div>
//     );
//   }
// }
// export default TodoCard;
