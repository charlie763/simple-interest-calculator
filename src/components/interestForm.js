import React from 'react'

class InterestForm extends React.Component {
  state = {
    principal: "",
    rate: "",
    years: ""
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.calculateInterest()
    this.setState({
      principal: "",
      rate: "",
      years: ""
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Principal: </label>
        <input type="text" name="principal" value={this.state.principal} onChange={this.handleInputChange}/><br/>      
        <label>Annual Interest Rate: </label>
        <input type="text" name="rate" value={this.state.rate} onChange={this.handleInputChange}/><br/>
        <label>Years: </label>
        <input type="text" name="years" value={this.state.years} onChange={this.handleInputChange}/><br/> 
        <input type="submit" />   
     </form>
    )
  }
}

export default InterestForm