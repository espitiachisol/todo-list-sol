import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import TodoCard from "./components/todo-page/todo.page.js";
import { HomePage } from "./components/home-page/home.page.js";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { home: true };
    this.changepage = this.changepage.bind(this);
  }
  changepage(e) {
    e.preventDefault();
    this.setState({ home: !this.state.home });
  }
  render() {
    if (this.state.home) {
      return <HomePage toChangepage={this.changepage} />;
    } else {
      return <TodoCard toChangepage={this.changepage} />;
    }
  }
}
// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={HomePage} />
//         <Route path="/list" component={TodoCard} />
//       </Switch>
//     </Router>
//   );
// }
ReactDOM.render(<App />, document.getElementById("root"));

//用純js寫todo-list
/*
function setAttributes(element, attributes) {
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}
const root = document.getElementById("root");
const todoForm = document.createElement("form");
const todoAddInput = document.createElement("input");
const todoAddBtn = document.createElement("button");
const todoList = [];
setAttributes(todoAddInput, {
  placeholder: "觀測紀錄",
  class: "todo-add-input",
});
setAttributes(todoForm, {
  class: "todo-form",
});
setAttributes(todoAddBtn, {
  type: "submit",
});
todoAddBtn.textContent = "按我";
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoAddInput.value.trim();
  if (text !== "") {
    AddTodo(text);
    todoAddInput.value = "";
  }
});
todoForm.appendChild(todoAddInput);
todoForm.appendChild(todoAddBtn);
root.appendChild(todoForm);
const AddTodo = function (text) {
  const todo = {
    text,
    id: Date.now(),
  };
  todoList.push(todo);
  renderTodoList(todoList);
};
const removeTodo = function (el) {
  let index = todoList.findIndex((e) => {
    e = e["id"].toString();
    return e === el.target.firstChild.id;
  });
  todoList.splice(index, 1);
  renderTodoList(todoList);
};
const listFormDiv = document.createElement("div");
listFormDiv.setAttribute("class", "list-form-con");
root.appendChild(listFormDiv);

function renderTodoList(todoList) {
  listFormDiv.innerHTML = "";
  todoList.forEach((e) => {
    const listForm = document.createElement("form");
    const list = document.createElement("p");
    const listbtn = document.createElement("button");
    list.textContent = e["text"];
    list.setAttribute("id", e["id"]);
    listbtn.textContent = "刪除";
    listForm.addEventListener("submit", (e) => {
      e.preventDefault();
      removeTodo(e);
    });
    listForm.appendChild(list);
    listForm.appendChild(listbtn);
    listFormDiv.appendChild(listForm);
  });
}
*/
