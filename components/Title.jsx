import { useState } from "react"

const Title = () => {
    const [clicked, setClicked] = useState(1);

    if(clicked > 10 ) {
        return <h1>stigaveche</h1>
    }

    return <h1 onClick={() => { setClicked(clicked + 1) }}>Welcome To Itomo {clicked}</h1>
}

export default Title