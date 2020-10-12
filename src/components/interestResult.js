import React from 'react'

const InterestResult = ({ result }) => {
  return(
    <div>
      <h3>Total: {result ? `$${result}` : ""}</h3>
    </div>
  )
}

export default InterestResult