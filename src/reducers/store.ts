import { combineReducers, createStore } from "redux";
import projects from "./projects"

const rootReducer = combineReducers({
  projects:projects,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
