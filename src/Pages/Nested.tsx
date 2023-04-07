import React, { useState } from 'react'
import { DisplayNestedComponent } from '../Components'

const NestedPage = () => {
  const [ nestedObject, setNestedObject ] = useState({
    taxi: "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
      },
    },
  })

  return (
    <div style={{ paddingTop: "40px", margin: "auto", width: "70%" }}>
      <h1>Nested Component</h1>
      <div style={{ marginTop: "30px" }}>
        <DisplayNestedComponent nestedObject={nestedObject} />
      </div>
    </div>
  )
}

export default NestedPage