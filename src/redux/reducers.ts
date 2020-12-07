import { combineReducers } from "redux";

import AuthReducer from "./auth/reducers";
import ShopReducer from "./shop/reducers";
import LocationReducer from "./location/reducers";
import CategoryReducer from "./category/reducers";

const rootReducer = combineReducers({
  auth: AuthReducer,
  shop: ShopReducer,
  location: LocationReducer,
  category: CategoryReducer,
});

export default rootReducer;
