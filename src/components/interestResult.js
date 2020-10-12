import React from 'react'

// Presentational component showing the result of the interest calculation
const InterestResult = ({ result }) => {
  return(
    <div>
      <h3>Total: {result ? `$${result}` : ""}</h3>
    </div>
  )
}

export default InterestResult