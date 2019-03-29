import { GET_ALL, CREATE_ONE } from './actions/types';

export default function counter(state = [], action) {
  switch (action.type) {
    case GET_ALL:
      // get all the info from the API
      return action.inputs;
      
    case CREATE_ONE:
      return [...state, action.newInput];

    default:
      return state;
  }
}
