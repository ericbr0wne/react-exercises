import React, {useState} from "react";

function DisplayMessage() {
    const [name, setName] = useState('');

    return (
        <div>
            <div className="button-container"></div>
            <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="centered-input"
            />
        
            {name ? (
                <p>Hello, {name} !</p>
            ) : ( 
                <p>Please enter your name</p>
            )}
        </div>    
        );
}

export default DisplayMessage;