import { useState } from "react";

interface DogImage {
message: string;
status: string;
}

function App() {
  const [dogImage, setDogImage] = useState<DogImage>();

  const handleGetDogImage = async () => {
    const response = await fetch(
      "https://dog.ceo/api/breeds/image/random"
    );
    const jsonBody: DogImage = await response.json();
    console.log(jsonBody)
    setDogImage(jsonBody);
  };

  // const handleGetJoke = () => {
  //   fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
  //     .then((response) => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // };

  if (dogImage) {
    return (
      <div>
        <h1>Dog app</h1>
          <img src={dogImage.message} alt="This is a cute dog"/>
        <hr />
        <button onClick={handleGetDogImage}>Get another dog</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dog app</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          dog from an API!
        </p>
        <button onClick={handleGetDogImage}>Get a dog</button>
      </div>
    );
  }
}

export default App;
