import React, {useState, useEffect } from "react";

function JokeFetcher() {
    const [joke, setJoke] = useState(null); //State för att spara skämtet 


useEffect(() => {

    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json()) //response-objektet från sidan => returerar json.datan
    .then(data => setJoke(data)); //data nu med skämtet => uppdaterar komponentets state med hämtad data
}, []); // Tom dependency array säkerställer att useEffect körs bara en gång vid montering
const fetchNewJoke = () => 
    // Hämta ett nytt skämt när knappen klickas
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => setJoke(data));
return (
    <div>
        {joke ? ( 
        <div>
          <h2>{joke.setup}</h2>
          <p>{joke.punchline}</p>
          <button onClick={fetchNewJoke}>Nytt skämt</button> 
        </div>
      ) : (
        <p>Laddar skämt...</p> // Visa ett laddningsmeddelande medan data hämtas
      )}
    </div>
);

}

export default JokeFetcher;