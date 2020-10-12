// Action that gets dispatched to the InterestReducer and sends it form input from the InterestForm Component
const calculateInterest = formInput => {
  return {
    type: "CALCULATE_INTEREST",
    ...formInput
  }
}

export { calculateInterest }