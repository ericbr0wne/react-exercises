import { useEffect, useState } from "react";

function OnOffButton() {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(!isOn);
    };

    return (
        <div>
            <button onClick={toggle}>
            {isOn ? 'On' : 'Off'}
            </button>
        </div>
    )
}

export default OnOffButton;