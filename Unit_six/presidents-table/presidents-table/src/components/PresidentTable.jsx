import PresidentRow from "./PresidentRow"


function PresidentTable(props) {
    console.log(props)
  return (
    <>
    <h2>{props.title}</h2>
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birth Year</th>
                <th>Alive</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {
                props.presidents.map((president,index)=> (
                    <PresidentRow key={index}
                        first={president.first}
                        last={president.last}
                        year={president.year}
                        passed={president.passed}
                    />
                ))
            }

        </tbody>
    </table>
    </>
  )
}

export default PresidentTable