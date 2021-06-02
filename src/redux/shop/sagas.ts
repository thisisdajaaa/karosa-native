import { SagaIterator } from "@redux-saga/core";
import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { baseAxios } from "@app/config/axios/instance";
import apiEndpoints from "@app/redux/api-endpoints.json";

import * as actions from "./actions";
import * as models from "./models";

export function* callShopInfoApi(): SagaIterator {
  try {
    const response: AxiosResponse<models.ShopInfoResponse> = yield call(
      baseAxios.get,
      apiEndpoints.shopInfo
    );

    yield put(actions.callShopInfoApi.success(response.data));
  } catch (error) {
    yield put(actions.callShopInfoApi.failure(error));
  }
}

export function* callShopDeleteApi(): SagaIterator {
  try {
    const response: AxiosResponse<models.ShopDeleteResponse> = yield call(
      baseAxios.delete,
      apiEndpoints.shopInfo
    );

    yield put(actions.callShopDeleteApi.success(response.data));
  } catch (error) {
    yield put(actions.callShopInfoApi.failure(error));
  }
}

export function* callShopAddressApi(): SagaIterator {
  try {
    const response: AxiosResponse<models.ShopAddressResponse> = yield call(
      baseAxios.get,
      apiEndpoints.shopAddress
    );

    yield put(actions.callShopAddressApi.success(response.data));
  } catch (error) {
    yield put(actions.callShopAddressApi.failure(error));
  }
}

export function* callAddProductApi(
  action: ReturnType<typeof actions.callAddProductApi.request>
): SagaIterator {
  try {
    const response: AxiosResponse<models.AddProductResponse> = yield call(
      baseAxios.post,
      apiEndpoints.products,
      action.payload
    );

    yield put(actions.callAddProductApi.success(response.data));
  } catch (error) {
    yield put(actions.callAddProductApi.failure(error));
  }
}

export function* callProductListApi(): SagaIterator {
  try {
    const response: AxiosResponse<models.ProductListResponse> = yield call(
      baseAxios.get,
      apiEndpoints.products
    );

    yield put(actions.callProductListApi.success(response.data));
  } catch (error) {
    yield put(actions.callProductListApi.failure(error));
  }
}

export function* onAddProductSaga() {
  yield takeLatest(
    getType(actions.callAddProductApi.request),
    callAddProductApi
  );
}

export function* onProductListSaga() {
  yield takeLatest(
    getType(actions.callProductListApi.request),
    callProductListApi
  );
}

export function* onShopInfoSaga() {
  yield takeLatest(getType(actions.callShopInfoApi.request), callShopInfoApi);
}

export function* onShopDeleteSaga() {
  yield takeLatest(
    getType(actions.callShopDeleteApi.request),
    callShopDeleteApi
  );
}

export function* onShopAddressSaga() {
  yield takeLatest(
    getType(actions.callShopAddressApi.request),
    callShopAddressApi
  );
}

export default function* () {
  yield all([
    call(onAddProductSaga),
    call(onProductListSaga),
    call(onShopInfoSaga),
    call(onShopDeleteSaga),
    call(onShopAddressSaga),
  ]);
}
