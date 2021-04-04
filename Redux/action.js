import {ADD_ITEM, DELETE_ITEM} from './actionType';

export const addItem = itemsList => ({
  type: ADD_ITEM,
  payload: itemsList,
});

export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: id,
});
