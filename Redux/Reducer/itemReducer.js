import {ADD_ITEM, DELETE_ITEM} from '../actionType';

const initialState = {
  itemsList: [],
};

function itemReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        itemsList: [...state.itemsList, action.payload],
      };
    }

    case DELETE_ITEM: {
      return {
        ...state,
        itemsList: state.itemsList.filter(item => item.id !== action.payload),
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}
export default itemReducer;
