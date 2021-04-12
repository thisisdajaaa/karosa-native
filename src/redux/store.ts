import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { reset } from "./producers";
import rootSaga from "./sagas";
import reducer from "./reducers";

const rootReducer = (state: any, action: any) => {
  const draft: any = reset(state, action);
  return reducer(draft, action);
};

const configureStore = (initialState: any) => {
  const loggerMiddleware = createLogger({ collapsed: true });
  const sagaMiddleware = createSagaMiddleware();
  const enhancers: Array<any> = [sagaMiddleware];

  enhancers.push(loggerMiddleware);

  const composeEnhancers = composeWithDevTools({
    trace: false,
    traceLimit: 25,
  });

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...enhancers))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
