import { SagaIterator } from "@redux-saga/core";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";

import { Gender } from "../api-models/login";

import * as actions from "./actions";

export function* callLoginApi(): SagaIterator {
  try {
    const mockRes = {
      id: "1",
      token: "1231231231",
      email: "adannanthony@gmail.com",
      fullName: "Dann Anthony J. Astillero",
      phoneNo: "12321312",
      username: "daja",
      gender: Gender.Male,
      avatar: {},
    };

    yield put(actions.callLoginApi.success(mockRes));
  } catch (error) {
    yield put(actions.callLoginApi.failure(error));
  }
}

export function* callForgotApi(): SagaIterator {
  try {
    const mockRes = {
      message:
        "Kindly check your email / messages for the generated password. ",
    };

    yield put(actions.callForgotApi.success(mockRes));
  } catch (error) {
    yield put(actions.callLoginApi.failure(error));
  }
}

export function* onLoginSaga() {
  yield takeLatest(getType(actions.callLoginApi.request), callLoginApi);
}

export function* onForgotSaga() {
  yield takeLatest(getType(actions.callForgotApi.request), callForgotApi);
}

export default function* () {
  yield all([call(onLoginSaga), call(onForgotSaga)]);
}
