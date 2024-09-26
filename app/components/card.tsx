import React from 'react'

const Card = (data:any) => {
  return (
    <>
      <h1>Student Card</h1>
      <div>
          <h2>Name: {data.name} </h2>
          <h2>RollNo: {data.rollno} </h2>
          <h2>Day: {data.day} </h2>
          <h2>Timing: {data.timing} </h2>
      </div>
    </>
  )
}

export default Card
