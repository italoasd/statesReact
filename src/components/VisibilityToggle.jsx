import { useState } from "react";

export function VisibilityToggle() {
  const [text, setText] = useState("Ocultar");
  const [visibility, setVisibility] = useState("visible")

  return(
    <div className="card">
      <button className="button" onClick={() => {
          if(text == "Ocultar") {
            setText("Exibir")
            setVisibility("invisible")
          }
          else{
            setText("Ocultar")
            setVisibility("visible")
          }}}>
            {text}
      </button>
      <p className={visibility}>SIT melhor curso do CEAP</p>
    </div>
  )
}