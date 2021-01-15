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
export function* callShopApi() {

  try {
    const response: AxiosResponse<models.ShopResponse> = yield call(
      baseAxios.get,
      apiEndpoints.shop
    );

    yield put(actions.callShopApi.success(response.data));
  } catch (error) {
    yield put(actions.callShopApi.failure(error));
  }
}

export function* callActivateShopApi(
  action: ReturnType<typeof actions.callActivateShopApi.request>
): SagaIterator {
  try {
    const response: AxiosResponse<models.ShopActivationResponse> = yield call(
      baseAxios.post,
      apiEndpoints.shop,
      action.payload
    );

    yield put(actions.callActivateShopApi.success(response.data));
  } catch (error) {
    yield put(actions.callActivateShopApi.failure(error));
  }
}

export function* callDeleteShopApi(): SagaIterator {
  try {
    const response: AxiosResponse<models.ShopActivationResponse> = yield call(
      baseAxios.post,
      apiEndpoints.shop
    );

    yield put(actions.callDeleteShopApi.success(response.data));
  } catch (error) {
    yield put(actions.callDeleteShopApi.failure(error));
  }
}


export function* onShopSaga() {
  yield takeLatest(getType(actions.callShopApi.request), callShopApi);
}

export function* onActivateShopSaga() {
  yield takeLatest(getType(actions.callActivateShopApi.request), callShopApi);
}

export default function* () {
  yield all([
    call(onShopSaga),
    [call(onProductSaga)],
    call(onActivateShopSaga),
  ]);
}
