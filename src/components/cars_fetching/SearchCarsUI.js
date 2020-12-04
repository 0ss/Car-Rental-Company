import React from 'react'

export default function SearchCarsUI({cars})  {

    const carsArray = []

    for(let i=0; i<cars.length; i+=3){

        carsArray.push(
            <div className="row" >
            { cars[i] ? cars[i] : null }
            { cars[i+1] ? cars[i+1] : null }
            { cars[i+2] ? cars[i+2] : null }
            </div>
        )
    }
    return (
        <div>
            {carsArray}
        </div>
    )
}