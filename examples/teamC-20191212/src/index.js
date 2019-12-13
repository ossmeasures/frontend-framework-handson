import ReactDOM from "react-dom";
import React, { useState } from "react";

import "./styles.css";

function CommentBox(props) {
  return <div className="commentBox"> {props.user.name}</div>;
}

function ChangeUser() {}

function App() {
  const [count, setCount] = useState(0);
  var user1 = {
    id: 10,
    name: "下濱"
  };
  var user2 = {
    id: 11,
    name: "中澤"
  };
  var user3 = {
    id: 12,
    name: "鷹野"
  };
  var user = user1;
  return (
    <div className="App">
      <button type="button" onClick={() => setCount(count + 1)}>
        aaa
      </button>
      <h1>こんにちは</h1>
      {count}
      <h2>Start editing to see some magic happen!</h2>
      <CommentBox user={user} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
