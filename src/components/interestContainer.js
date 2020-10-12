import React from 'react'
import { connect } from 'react-redux'
import InterestForm from './InterestForm'
import InterestResult from './InterestResult'
import { calculateInterest } from '../actions/interestActions'

class InterestContainer extends React.Component {
  render(){
    return(
      <>
        <InterestForm calculateInterest={this.props.calculateInterest}/>
        <InterestResult />
      </>
    )
  }
}

export default connect(null, { calculateInterest })(InterestContainer)