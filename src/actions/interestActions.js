const calculateInterest = (principal, rate, years) => {
  return {
    type: "CALCULATE_INTEREST",
    principal,
    rate,
    years
  }
}

export { calculateInterest }