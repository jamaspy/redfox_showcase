import rootReducer from "./reducers";
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [];
middlewares.push(thunk);

if (process.env.NODE_ENV !== "production") {
  const logger = createLogger({
    collapsed: true,
    duration: true,
  });
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);
