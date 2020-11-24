import { call, all } from "redux-saga/effects";

import { sagas as AuthSaga } from "./auth";
import { sagas as ShopSaga } from "./shop";

export default function* rootSaga() {
  yield all([call(AuthSaga), call(ShopSaga)]);
}
