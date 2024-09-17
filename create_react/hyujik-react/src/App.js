import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time")
  const iRunOnlyOnce = () => {
    console.log("i run only once")
  }
  useEffect(() => {
    console.log("i run only once")
  },[])

  useEffect(() => {
    if(keyword !=="" && keyword.length > 5){
      console.log("i run when 'keyword' changed ", keyword)
    }
  }, [keyword])
  useEffect(() => {
    console.log("i run when 'counter' changed ", keyword)
  }, [counter])
  return (
    <div>
      <input 
      value = {keyword}
      onChange={onChange} 
      type ="text" 
      placeholder="search here...">

      </input>
      <h1 className={styles.title}>{counter}</h1>
      <button  onClick = {onClick}>this is Button</button>
    </div>
  );
}
export default App;
 