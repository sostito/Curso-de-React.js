const initialState = {
  loading: true,
  error: null,
  data: undefined
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case 'BADGES': {
      console.log(action)
        return {
            ...state,
            ...action.payload
      }
    }
    default:
      return state
  }
}

export default data