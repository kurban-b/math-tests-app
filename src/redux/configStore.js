import { applyMiddleware, createStore } from "redux";
import { applicationReducer } from "./applicationReducer";
import { createLogger } from "redux-logger/src";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(applicationReducer, applyMiddleware(logger));
