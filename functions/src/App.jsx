import { useState } from "react"

const App = () => {

  const [num, setNum] = useState(3)
  function increase() {
    console.log("Inresing")
    setNum(num+1)
  }
  function decrease() {
    console.log("decr")
    setNum(num-1)
  }
  function jump5Num() {
    setNum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={jump5Num}>Jump By 5</button>
    </div>
  )
}

export default App