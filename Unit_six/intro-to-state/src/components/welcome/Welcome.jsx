import React from 'react'

function Welcome(props) {

    function removeName() {
        console.log('click');
        console.log(props);
        const updatedNames = props.names.filter(name => name !== props.name);

        props.setNames(updatedNames)

    }

  return (
    <div onClick={removeName} className='welcome'>Welcome, {props.name}</div>
  )
}

export default Welcome