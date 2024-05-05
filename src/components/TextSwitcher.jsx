import { useState } from "react"

export function TextSwitcher() {
const [text, setText] = useState("text1")

  return(
    <div className="card">
      <button className="button" onClick={() => {
          if(text == "text1") {
            setText("text2")
          }
          else{
            setText("text1")
          }
      }}>
        {text}
      </button>
    </div>
  )
}