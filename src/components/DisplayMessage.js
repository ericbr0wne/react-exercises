import React, {useState} from "react";

function DisplayMessage() {
    const [name, setName] = useState('');

    return (
        <div>
            <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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