import React, { useEffect, useState } from "react"

const ModelIdFinder = () => {

    const [makes, setMakes] = useState<any[]>([])
    const [chosenMake, setChosenMake] = useState<string>()
    
    useEffect(() => {
        fetch('http://localhost:10000/makes')
            .then(response => response.json())
            .then(data => setMakes(data.Results))
            .catch(error => console.error(error));
    }, [])

    useEffect(() => {
        // TODO, what do we do from here?
    }, [chosenMake])

    return (
        <div id="modelid-finder">
            <label htmlFor="make-select">Choose a make:</label>
            <select id="make-select" onChange={(e) => setChosenMake(e.target.value)}>
                {makes.map(make => <option key={make.MakeId} value={make.MakeName}>{make.MakeName}, {make.MakeId}</option>)}
            </select>
        </div>
    )
}

export default ModelIdFinder