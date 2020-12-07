import { call, all } from "redux-saga/effects";

import { sagas as AuthSaga } from "./auth";
import { sagas as ShopSaga } from "./shop";
import { sagas as LocationSaga } from "./location";
import { sagas as CategorySaga } from "./category";

export default function* rootSaga() {
  yield all([call(AuthSaga), call(ShopSaga), call(CategorySaga), call(LocationSaga)]);
}
