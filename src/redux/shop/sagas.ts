import { SagaIterator } from "@redux-saga/core";
import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";

import { baseAxios } from "../../config/axios/instance";
import apiEndpoints from "../api-endpoints.json";

import * as actions from "./actions";
import * as models from "./models";

export function* callProductsApi(): SagaIterator {
  try {
    const response: AxiosResponse<models.ProductResponse> = yield call(
      baseAxios.get,
      apiEndpoints.products
    );

    yield put(actions.callProductsApi.success(response.data));
  } catch (error) {
    yield put(actions.callProductsApi.failure(error));
  }
}

export function* onProductSaga() {
  yield takeLatest(getType(actions.callProductsApi.request), callProductsApi);
}

export default function* () {
  yield all([call(onProductSaga)]);
}
