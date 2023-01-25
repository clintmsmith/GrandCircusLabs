import { useState } from "react";
import { Ad } from './Ad';

export function AdDesign(){
    // State Hook has 2 parts:
        // Variable to track the state, meaning the value
        // Function used to change the state
    
    // AdDesign component includes a variable called 'flavor'
    // and the function we use to change the variable is called 'setFlavor'
    // We let React know this is part of the state
    // And we set a default initial value, the string 'Chocolate'
    // It isn't 100% necessary because React can infer, but we can confirm that the initial value is a string
    const [flavor, setFlavor] = useState<string>('Chocolate');
    const [isLight, setIsLight] = useState<string>('Natural');
    const [fontSize, setFontSize] = useState<number>(24);

    return (
        <div className="AdDesign">
        <h2>Ad Designer</h2>
        
        <h2>What to Support</h2>
        <Ad flavor={flavor} isLight={isLight} fontSize={fontSize} />
        {/* The curly brackets below are known as "templating" */}
        {/* because we are taking this variable and mixing it in with HTML */}
        {/* <p>{flavor}</p>
        <p>{isLight.toString()}</p>
        <p>{fontSize}</p> */}

        <div className="button-bar">
            <button className="button-vote-chocolate" onClick={() => setFlavor('Chocolate')}>Chocolate</button>
            <button className="button-vote-vanilla" onClick={() => setFlavor('Vanilla')}>Vanilla</button>
            <button className="button-vote-strawberry" onClick={() => setFlavor('Strawberry')}>Strawberry</button>
        </div>

        <h2>Color Theme</h2>
        <div className="button-bar">
            <button className="button-light" onClick={() => setIsLight('Light')}>Light</button>
            <button className="button-natural" onClick={() => setIsLight('Natural')}>Natural</button>
            <button className="button-dark" onClick={() => setIsLight('Dark')}>Dark</button>
        </div>

        <h2>Font Size</h2>
        <div className="button-bar">
            <button className="button-fontSizeDown" onClick={() => setFontSize(fontSize - 1)}>Down</button>
            <input className="fontSizeCurrent" type="number" value={fontSize}></input>
            <button className="button-fontSizeUp" onClick={() => setFontSize(fontSize + 1)}>Up</button>
        </div>
        </div>
    );
};