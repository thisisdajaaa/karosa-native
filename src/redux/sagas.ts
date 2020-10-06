import { call, all } from "redux-saga/effects";

import { sagas as AuthSaga } from "./auth";

export default function* rootSaga() {
  yield all([call(AuthSaga)]);
}
