const calculateInterest = formInput => {
  return {
    type: "CALCULATE_INTEREST",
    ...formInput
  }
}

export { calculateInterest }