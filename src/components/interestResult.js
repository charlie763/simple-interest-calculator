import React from 'react'
import PropTypes from 'prop-types'

// Presentational component showing the result of the interest calculation
const InterestResult = ({ result }) => {
  return(
    <div>
      <h3>Total: {result ? `$${result}` : ""}</h3>
    </div>
  )
}

InterestResult.propTypes = {
  result: PropTypes.number
}

export default InterestResult