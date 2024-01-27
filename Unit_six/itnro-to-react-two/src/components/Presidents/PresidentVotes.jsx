import React from 'react'

function PresidentVotes(props) {

    console.log(props);

  return (
    <React.Fragment>
        <h1>President: {props.name}</h1>
        <h2>Votes: {props.count}</h2>
    </React.Fragment>
  )
}

export default PresidentVotes