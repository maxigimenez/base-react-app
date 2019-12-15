import { Todo } from "../models/todo";

export enum TODO_ACTIONS {
  ADD = 'ADD_TODO',
  DONE = 'DONE_TODO'
}

export interface TodoAction extends Todo {
  type: string;
}

export interface TodoState {
  todos: Todo[]
}
