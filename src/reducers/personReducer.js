const initialState = {
  name: 'John Doe',
  email: 'loremipsum@gmail.com',
};

export default (state = initialState, action) => {
  if(action.type === 'UBAH_NAMA') {
    return {...state, name: action.payload};
  }
  return state;
};
