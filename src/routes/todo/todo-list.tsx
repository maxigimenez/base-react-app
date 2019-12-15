import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { add, done } from '../../actions';
import { Todo } from '../../models/todo';
import { TodoState } from '../../typings/todos';

export const TodoList: React.FunctionComponent = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state: TodoState) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="todo-container">
        <div className="todo-container__box">
          <h2>Pending ({todos.filter((todo: Todo) => !todo.completed).length})</h2>
          <ul>
            {todos.filter((todo: Todo) => !todo.completed).map((todo: Todo) => {
              return <li key={todo.id}>
                {todo.text}
                <button onClick={() => dispatch(done(todo.id))}>Done</button>
              </li>
            })}
          </ul>
        </div>
        <div className="todo-container__box">
          <h2>Completed ({todos.filter((todo: Todo) => todo.completed).length})</h2>
          <ul>
            {todos.filter((todo: Todo) => todo.completed).map((todo: Todo) => {
              return <li key={todo.id} style={{ textDecoration: 'line-through' }}>
                {todo.text}
              </li>
            })}
          </ul>
        </div>
      </div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => dispatch(add(text))}>Add todo</button>
    </div>
  );
}
