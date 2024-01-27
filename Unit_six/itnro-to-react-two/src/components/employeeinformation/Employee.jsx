import React from 'react'
import EmployeeInfo from './EmployeeInfo';

export default function Employee() {

    //mock db
    let employeeRecords = [
        {
            name: "Jester Bash",
            city: "Miami",
            state: "FL",
            position: "Web Dev",
            food: "Pizza" 
        },
        {
            name: "Tom Jones",
            city: "Louisville",
            state: "KY",
            position: "Animator",
            food: "Pie" 
        },
        {
            name: "Janet James",
            city: "New York City",
            state: "NY",
            position: "Manager",
            food: "Orphan's Tears" 
        },
    ];

  return (
    <>
    <h1>Hello From Employees!</h1>
    {
        employeeRecords.map((record, index) => (
            <EmployeeInfo 
                key={index}
                name={record.name}
                city={record.city}
                state={record.state}
                position={record.position}
                food={record.food}
            />
        ))
    }
    </>
  )
}
