import React from 'react'
import PresidentVotes from './PresidentVotes'

function DisplayTotals() {

    const votes = [
        {
            name: "Abe Lincoln",
            count: 139033
        },
        {
            name:"Stephen Douglas",
            count:115509
        }
    ]

  return (
    <React.Fragment>
        <h1>Presidents</h1>
        {
            votes.map((president, index) => (//smooth parents means return everything inside them
                <PresidentVotes
                key={index}
                name={president.name}
                count={president.count}
                />
            ))
        }
    </React.Fragment>
  )
}

export default DisplayTotals