import React from "react";
import { useTypewriter } from "../useTypewriter";
import "./TypewriterWindow.css";


export default function TypewriterWindow({text, speed}) {

    
    var textString = "" 
    text.forEach(element => {
        textString += element + "\n"
    });
    textString = textString.slice(0, -1); 
    const displayText = useTypewriter(textString, speed);

    return (<div className="typewriter-window">
        
        <div className="display-linebreak">{displayText}</div>

    </div>)
}