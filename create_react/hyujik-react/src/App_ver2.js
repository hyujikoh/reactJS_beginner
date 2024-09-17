import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev)
  return (
    <div>
        {showing ? <Hello /> : null}
        <button onClick = {onClick}>{showing ? "hide" : "Show"}</button>
    </div>
  );
}

function Hello () {
    useEffect ( () => {
        console.log ("created :) ");
        return () => console.log("destroy") // 내 컴포넌트가 사라질때 실행
    }, []);
    return <h1>Hello</h1>
}
export default App;
 