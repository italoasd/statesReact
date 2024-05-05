import { useState } from "react"

export function ColorSwitcher() {
  const [color, setColor] = useState("purple")
  return(
    <>
    <div className="card">
      <button className="button" onClick={() => {
        if (color == "purple") {
          setColor("blue")
        }
        else{
          setColor("purple")
        }
      }}>
        trocar cor
      </button>

    </div> 
    <div className="card">
      <div className={`square ${color}`}></div>
    </div>

    </>
  )
}