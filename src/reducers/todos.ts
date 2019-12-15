import { Todo } from "../models/todo";
import { TodoAction, TODO_ACTIONS } from "../typings/todos";

export const todos = (state = [], action: TodoAction) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TODO_ACTIONS.DONE:
      return state.map((todo: Todo) =>
        todo.id === action.id ? { ...todo, completed: true } : todo
      )
    default:
      return state
  }
};
