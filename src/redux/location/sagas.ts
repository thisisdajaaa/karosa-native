import { SagaIterator } from "@redux-saga/core";
import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";

import { baseAxios } from "../../config/axios/instance";
import apiEndpoints from "../api-endpoints.json";

import * as actions from "./actions";
import * as models from "./models";

export function* callRegionApi(): SagaIterator {
  try {
    const response: AxiosResponse<models.RegionResponse> = yield call(
      baseAxios.get,
      apiEndpoints.regions
    );

    yield put(actions.callRegionApi.success(response.data));
  } catch (error) {
    yield put(actions.callRegionApi.failure(error));
  }
}

export function* onRegionSaga() {
  yield takeLatest(getType(actions.callRegionApi.request), callRegionApi);
}

export default function* () {
  yield all([call(onRegionSaga)]);
}
