import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootRedudcer = combineReducers({
  todos,
  counter,
});

export default rootRedudcer;

export type RootState = ReturnType<typeof rootRedudcer>;
