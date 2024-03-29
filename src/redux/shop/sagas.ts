import { SagaIterator } from "@redux-saga/core";
import { AxiosError, AxiosResponse } from "axios";
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
    yield put(actions.callShopInfoApi.failure(error as AxiosError));
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
    yield put(actions.callShopInfoApi.failure(error as AxiosError));
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

    yield put(actions.callAddProductApi.success({ status: response.status }));
  } catch (error) {
    yield put(actions.callAddProductApi.failure(error as AxiosError));
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
    yield put(actions.callProductListApi.failure(error as AxiosError));
  }
}

export function* callCategoryListApi(): SagaIterator {
  try {
    const response: AxiosResponse<models.CategoryListResponse> = yield call(
      baseAxios.get,
      apiEndpoints.categories
    );

    yield put(actions.callCategoryListApi.success(response.data));
  } catch (error) {
    yield put(actions.callCategoryListApi.failure(error as AxiosError));
  }
}

export function* onCallCategoryListSaga() {
  yield takeLatest(
    getType(actions.callCategoryListApi.request),
    callCategoryListApi
  );
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

export default function* () {
  yield all([
    call(onAddProductSaga),
    call(onProductListSaga),
    call(onShopInfoSaga),
    call(onShopDeleteSaga),
    call(onCallCategoryListSaga),
  ]);
}
