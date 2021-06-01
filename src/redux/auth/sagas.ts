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
    const response: AxiosResponse<models.LoggedInResponse> = yield call(
      baseAxios.post,
      apiEndpoints.login,
      action.payload
    );

    yield put(actions.callLoginApi.success(response.data));
  } catch (error) {
    yield put(actions.callLoginApi.failure(error.response.status));
  }
}

export function* callRegisterApi(
  action: ReturnType<typeof actions.callRegisterApi.request>
): SagaIterator {
  try {
    const response: AxiosResponse<models.LoggedInResponse> = yield call(
      baseAxios.post,
      apiEndpoints.register,
      action.payload
    );

    yield put(actions.callRegisterApi.success(response.data));
  } catch (error) {
    yield put(actions.callRegisterApi.failure(error.response.data));
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

export function* callMyAddressApi(): SagaIterator {
  try {
    const response: AxiosResponse<models.MyAddressResponse> = yield call(
      baseAxios.get,
      apiEndpoints.addresses
    );

    yield put(actions.callMyAddressApi.success(response.data));
  } catch (error) {
    yield put(actions.callMyAddressApi.failure(error));
  }
}

export function* callNewAddressApi(
  action: ReturnType<typeof actions.callNewAddressApi.request>
): SagaIterator {
  try {
    const response: AxiosResponse<models.NewAddressResponse> = yield call(
      baseAxios.post,
      apiEndpoints.addresses,
      action.payload
    );

    yield put(actions.callNewAddressApi.success(response.data));
  } catch (error) {
    yield put(actions.callNewAddressApi.failure(error));
  }
}

export function* onLoginSaga() {
  yield takeLatest(getType(actions.callLoginApi.request), callLoginApi);
}

export function* onRegisterSaga() {
  yield takeLatest(getType(actions.callRegisterApi.request), callRegisterApi);
}

export function* onForgotSaga() {
  yield takeLatest(getType(actions.callForgotApi.request), callForgotApi);
}

export function* onMyAddressSaga() {
  yield takeLatest(getType(actions.callMyAddressApi.request), callMyAddressApi);
}

export function* onNewAddressSaga() {
  yield takeLatest(
    getType(actions.callNewAddressApi.request),
    callNewAddressApi
  );
}

export default function* () {
  yield all([
    call(onLoginSaga),
    call(onForgotSaga),
    call(onMyAddressSaga),
    call(onNewAddressSaga),
    call(onRegisterSaga),
  ]);
}
