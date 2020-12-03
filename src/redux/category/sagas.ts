import { SagaIterator } from "@redux-saga/core";
import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";

import { baseAxios } from "../../config/axios/instance";
import apiEndpoints from "../api-endpoints.json";

import * as actions from "./actions";
import * as models from "./models";

export function* callCategoryListApi(): SagaIterator {
  try {
    const response: AxiosResponse<models.CategoryListResponse> = yield call(
      baseAxios.get,
      apiEndpoints.categories
    );

    yield put(actions.callCategoryListApi.success(response.data));
  } catch (error) {
    yield put(actions.callCategoryListApi.failure(error));
  }
}

export function* onCallCategoryListSaga() {
  yield takeLatest(
    getType(actions.callCategoryListApi.request),
    callCategoryListApi
  );
}

export default function* () {
  yield all([call(onCallCategoryListSaga)]);
}
