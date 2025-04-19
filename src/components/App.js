import { useState, useEffect } from "react";

function App (){
    const [dofPic, setDogPic] = useState(null);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((Data) => {
            setDogPic(Data.message);
        });
    }, []);
    if (!dofPic) return <p>Loading...</p>;
    return <img src={dofPic} alt="A Random Dog" />
        
}

export default App;
