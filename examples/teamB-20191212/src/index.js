import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  var user = [
    {
      Name: "日和",
      Message: "I AM HIYORI",
      Url:
        "https://hiramine.xyz/wp-content/uploads/2019/05/olnbrdlja9uutqcdmzxm-e1557068726292.jpg"
    },
    {
      Name: "たかはし",
      Message: "I LOVE KOALA",
      Url: "http://livedoor.blogimg.jp/geinoueroch/imgs/4/e/4e2e4cc1.jpg"
    },
    {
      Name: "檜木",
      Message: "!!!!!!!!!",
      Url: "https://news.walkerplus.com/article/53432/291859_615.jpg"
    }
  ];
  return (
    <div>
      {user.map(d => {
        return <Introduction Name={d.Name} Message={d.Message} Url={d.Url} />;
      })}
    </div>
  );
}
function Introduction(props) {
  return (
    <div className="App">
      <h1>{props.Name}さん日記</h1>
      <button onClick={() => alert(props.Message)}>Clickhere</button>
      <img src={props.Url} width="300px" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
