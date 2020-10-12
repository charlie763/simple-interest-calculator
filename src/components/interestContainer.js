import React from 'react'
import InterestForm from './InterestForm'
import InterestResult from './InterestResult'

class InterestContainer extends React.Component {
  render(){
    return(
      <>
        <InterestForm />
        <InterestResult />
      </>
    )
  }
}

export default InterestContainer