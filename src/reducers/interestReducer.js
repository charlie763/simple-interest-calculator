function interestReducer(state = {result: null}, action){
  switch(action.type){
    case 'CALCULATE_INTEREST':
      return {result: action.principal * (1 + (action.rate * action.years))}
    default:
      return state
  }
}

export default interestReducer