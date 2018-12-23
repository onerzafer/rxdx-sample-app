import {
  createStore,
  applyMiddleware,
  combineReducers,
  devToolsMiddleware,
  effectsMiddleware
} from "rxdx/lib/rxdx";
import { todoEffects } from "./todo/todo.effects";
import { todoReducer } from "./todo/todo.reducer";

export const Store = createStore(
  combineReducers({
    todos: todoReducer
  }),
  {},
  applyMiddleware(effectsMiddleware(todoEffects), devToolsMiddleware())
);
