import { useState } from 'react';
import './App.css'
import Welcome from './components/welcome/Welcome'
import Counter from './components/counter/Counter';
import AddUser from './components/adduser/AddUser';

function App() {

  const [ names, setNames ] = useState([]);

  const displayWelcome = () => {
    return(
      names.map((name, index) => {
        return(
          <Welcome
          key={index}
          name={name}
          names={names}
          setNames={setNames}
          />
        )
      })
    )
  }

  return (
    <>
    <AddUser names={names} setNames={setNames}/>
    {
      names.length > 0 ?
    displayWelcome() :
    <h1 style={{textAlign: "center"}}>Add a User</h1>
  }
    <Counter />
    </>
  )
}

export default App
