const commentReducer = (state=[], action) => {
  console.log('commentReducer', action)
  switch (action.type) {
    case 'LOAD_COMMENTS':
      return action.comments
    default:
      return state
  }
}


export default commentReducer
