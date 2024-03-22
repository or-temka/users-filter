function sortArrayBy(array, sortBy, reverse) {
  reverse = reverse == 'false' ? false : true
  //return new array sorted by sortBy
  return [...array].sort((a, b) =>
    a[sortBy] > b[sortBy] ? (reverse ? -1 : 1) : reverse ? 1 : -1
  )
}

export default sortArrayBy
