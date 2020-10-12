import React from 'react'
import { connect } from 'react-redux'
import InterestForm from './InterestForm'
import InterestResult from './InterestResult'
import { calculateInterest } from '../actions/interestActions'

// Container class that connects to the Redux store. Passes dispatch actions to InterestForm Component
// and passes store state to InterestResult presentational component.
class InterestContainer extends React.Component {
  render(){
    return(
      <>
        <h1>Simple Interest Calculator</h1>
        <InterestForm calculateInterest={this.props.calculateInterest}/>
        <InterestResult result={this.props.result}/>
      </>
    )
  }
}

export default connect(state => ({result: state.result}), { calculateInterest })(InterestContainer)