import { call, all } from "redux-saga/effects";

import { sagas as AuthSaga } from "./auth";
import { sagas as ShopSaga } from "./shop";
import { sagas as LocationSaga } from "./location";
import { sagas as AddressSaga } from "./address";

export default function* rootSaga() {
  yield all([
    call(AuthSaga),
    call(ShopSaga),
    call(LocationSaga),
    call(AddressSaga),
  ]);
}
