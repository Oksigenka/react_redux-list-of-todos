import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../features/filter';
import todosReducer from '../features/todos';
import currentTodoReducer from '../features/currentTodo';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
    currentTodoSlice: currentTodoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
