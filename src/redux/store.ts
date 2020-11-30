import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import AsyncStorage from "@react-native-community/async-storage";

import { reset } from "./producers";
import rootSaga from "./sagas";
import reducer from "./reducers";

const rootReducer = (state: any, action: any) => {
  const draft: any = reset(state, action);
  return reducer(draft, action);
};

export const configureStore = (initialState: any) => {
  const loggerMiddleware = createLogger({ collapsed: true });
  const sagaMiddleware = createSagaMiddleware();
  const enhancers: Array<any> = [sagaMiddleware];

  const persistConfig = {
    key: "root",
    storage: AsyncStorage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...enhancers))
  );

  const persistor = persistStore(store);

  enhancers.push(loggerMiddleware);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};

export default configureStore;
