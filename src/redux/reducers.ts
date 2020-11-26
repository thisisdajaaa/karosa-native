import { combineReducers } from "redux";

import AuthReducer from "./auth/reducers";
import ShopReducer from "./shop/reducers";

const rootReducer = combineReducers({
  auth: AuthReducer,
  shop: ShopReducer,
});

export default rootReducer;
