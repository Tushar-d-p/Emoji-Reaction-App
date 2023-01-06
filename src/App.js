import React, { useState } from "react";
import "./styles.css";

var emojireactions={
  "😃":"Excited",
  "🙂":"Smiling",
  "😉":"Winking",
  "🏘️":"Houses",
  "🥭":"Mango"
}

var emojiArray = Object.keys(emojireactions);

export default function App() {
  
  var [meaning,setMeaning] = useState("");

  function handleChange(event)
  {
    var input = event.target.value;

    meaning = emojireactions[input];

    setMeaning(meaning);
  }

  function emojiclickHandler(emoji)
  {
    meaning = emojireactions[emoji];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outt!</h1>
      <input onChange={handleChange}></input>
      <div style={{padding:"1rem"}}>{meaning}</div>
      {emojiArray.map(function(emoji){
        return(
          <span 
          key={emoji}
          onClick={()=>emojiclickHandler(emoji)}
          style={{margin:"1rem",cursor:"pointer"}}>
          {emoji}</span>

        )
      })}
    </div>
  );
}

/**
 * things to notice
 * class --> className
 * style --> takes an object instead of ""
 *
 * VISER --. View -> Interact -> State in Event handler  -> Render
 */
