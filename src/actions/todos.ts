import { TODO_ACTIONS } from "../typings/todos";

let dummyId = 0;

export const add = (text: string) => ({
  type: TODO_ACTIONS.ADD,
  id: dummyId++,
  text
});

export const done = (id: number) => ({
  type: TODO_ACTIONS.DONE,
  id
});
