import React, { Component } from 'react'
import PersonCard from './Persona/PersonCard';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <PersonCard firstName={"Jane"}
                    lastName={"Doe"}
                    age={45}
                    hairColor={"Black"} />

        <PersonCard firstName={"John"}
                    lastName={"Smith"}
                    age={88}
                    hairColor={"Brown"} />
        
        <PersonCard firstName={"Millard"}
                    lastName={"Fillmore"}
                    age={50}
                    hairColor={"Brown"} />
        
        <PersonCard firstName={"Maria"}
                    lastName={"Smith"}
                    age={62}
                    hairColor={"Brown"} />

      </>
    );
  }
}
export default App