import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";
import { func } from "prop-types";
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
    function effectFn() {
        console.log ("created :) ");
        return destroyedFn;
    }

    function destroyedFn(){
        console.log("destroyed :(")
    }
    useEffect ( effectFn, []);
    return <h1>Hello</h1>
}
export default App;
 