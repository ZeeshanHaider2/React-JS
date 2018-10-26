import React from "react";
import ReactDOM from "react-dom";
import { Comment } from "./comments";
import { toDos } from "./todos";
import { Title } from "./title";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Title name="My To Do List" />
        {toDos.map(toDo => {
          return (
            <Comment
              key={toDo.id}
              listItem={toDo.listItem}
              body={toDo.body}
              description={toDo.description}
            />
          );
        })}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
