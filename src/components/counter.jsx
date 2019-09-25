import React, {useState} from "react"

const counter = () => {

  const [count, setCount] = useState(0)


  return (
    <div className="counter">
      <h3>click if you like</h3>
      <h3>likes {count}</h3>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  )
}

export default counter
