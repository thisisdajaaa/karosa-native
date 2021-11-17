import { combineReducers } from "redux";

import AuthReducer from "./auth/reducers";
import ShopReducer from "./shop/reducers";
import LocationReducer from "./location/reducers";

const rootReducer = combineReducers({
  auth: AuthReducer,
  shop: ShopReducer,
  location: LocationReducer,
});

export default rootReducer;
