import { useState } from "react";


function ShowCase() {

    const [name, setName] = useState('brad');

    return <div>Hello {name}</div>
}

export default ShowCase;