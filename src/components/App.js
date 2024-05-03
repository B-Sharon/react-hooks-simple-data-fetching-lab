import React, { useEffect, useState } from "react";

function App(){
    const [picture, setPicture] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then((data)=>{
                setPicture(data.message);
            })
    }, []);

    //display loading when componenet is first rendered
    if(!picture){
        return <p>Loading...</p>
    }

    return <img src={picture} alt="A Random Dog" />

}

export default App;