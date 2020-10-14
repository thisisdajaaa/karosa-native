import { SagaIterator } from "@redux-saga/core";
import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";

import { baseAxios } from "../../config/axios/instance";
import apiEndpoints from "../api-endpoints.json";

import * as actions from "./actions";
import * as models from "./models";

export function* callLoginApi(
  action: ReturnType<typeof actions.callLoginApi.request>
): SagaIterator {
  try {
    const response: AxiosResponse<models.LoginResponse> = yield call(
      baseAxios.post,
      apiEndpoints.login,
      action.payload
    );

    yield put(actions.callLoginApi.success(response.data));
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