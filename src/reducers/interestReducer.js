function interestReducer(state = {principal: null, rate: null, years: null, result: null}, action){
  switch(action.type){
    case 'CALCULATE_STATE':
      return state
    default:
      return state
  }
}

export default interestReducer