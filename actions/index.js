let nextTodoId = 0;

export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY = 'SET_VISIBILITY';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const setVisibility = (filter) => {
  return {
    type: SET_VISIBILITY,
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}