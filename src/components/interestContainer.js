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
        <InterestResult result={this.props.result}/>
      </>
    )
  }
}

export default connect(state => ({result: state.result}), { calculateInterest })(InterestContainer)