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

export function* callShopApi(
  action: ReturnType<typeof actions.callShopApi.request>
): SagaIterator {
  try {
    const response: AxiosResponse<models.ShopResponse> = yield call(
      baseAxios.post,
      apiEndpoints.shop,
      action.payload
    );

    yield put(actions.callShopApi.success(response.data));
  } catch (error) {
    yield put(actions.callShopApi.failure(error));
  }
}


export function* onShopSaga() {
  console.log("onShopSaga called")
  yield takeLatest(getType(actions.callShopApi.request), callShopApi);
}


export default function* () {
 
  yield all([call(onShopSaga), [call(onProductSaga)]]);
};
