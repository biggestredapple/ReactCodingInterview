import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeComponent} from '../Components';

const HomePage = () => {

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
    <div style={{ margin: "auto", paddingTop: "40px", width: "70%" }}>
    <HomeComponent />
    <div style={{ marginTop: "30px" }}>
      <Link to="/nested">Nested</Link>
    </div>
    </div>
  )
}

export default HomePage;