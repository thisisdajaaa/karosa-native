import { combineReducers } from "redux";

import AuthReducer from "./auth/reducers";
import ShopReducer from "./shop/reducers";
<<<<<<< HEAD
import LocationReducer from "./location/reducers";
=======
import CategoryReducer from "./category/reducers";
>>>>>>> 469fb1706b3f26d00802451dc0c6d7232016f67a

const rootReducer = combineReducers({
  auth: AuthReducer,
  shop: ShopReducer,
<<<<<<< HEAD
  location: LocationReducer,
=======
  category: CategoryReducer,
>>>>>>> 469fb1706b3f26d00802451dc0c6d7232016f67a
});

export default rootReducer;
