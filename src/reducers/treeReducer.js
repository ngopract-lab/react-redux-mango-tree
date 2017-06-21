const initialState = {
  age: 5,
};

export default (state = initialState, action) => {
  if(action.type === 'TAMBAH_UMUR') {
    const newAge = state.age + 1;
    const newState = {...state, age: newAge};
    return newState;
  }
  return state;
};
