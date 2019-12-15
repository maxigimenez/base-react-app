import React from 'react';
import { render } from '@testing-library/react';
import { TodoList } from './todo-list';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

describe('<TodoList />', () => {
  let store: any;
  let component: any;

  beforeEach(() => {
    store = mockStore({
      todos: []
    });
    component = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  });

  it('should render', () => {
    expect(component).toBeDefined();
  });

  describe('snapshots', () => {
    it('should render', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
