// Reducer function that sets the redux store's state based on the action that is dispatched to it. Specifically, it updates the store with
// the result based on the form inputs that are passed in as attributes of the action
function interestReducer(state = {result: null}, action){
  switch(action.type){
    case 'CALCULATE_INTEREST':
      return {result: action.principal * (1 + (action.rate * action.years))}
    default:
      return state
  }
}

export default interestReducer