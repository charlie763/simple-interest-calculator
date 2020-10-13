import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import InterestForm from './InterestForm'
import InterestResult from './InterestResult'
import { calculateInterest } from '../actions/interestActions'

// Container class that connects to the Redux store. Passes dispatch actions to InterestForm Component
// and passes store state to InterestResult presentational component.
class InterestContainer extends React.Component {
  static propTypes = {
    calculateInterest: PropTypes.func,
    result: PropTypes.string
  }
  
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

const mapStateToProps = state => ({result: state.result})

export default connect(mapStateToProps, { calculateInterest })(InterestContainer)