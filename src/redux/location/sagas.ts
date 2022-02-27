import { SagaIterator } from "@redux-saga/core";
import { AxiosError, AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { baseAxios } from "@app/config/axios/instance";
import apiEndpoints from "@app/redux/api-endpoints.json";

import * as actions from "./actions";
import * as models from "./models";

const { get } = baseAxios();

export function* callRegionApi(): SagaIterator {
  try {
    const response: AxiosResponse<models.RegionResponse> = yield call(
      get,
      apiEndpoints.regions
    );

    yield put(actions.callRegionApi.success(response.data));
  } catch (error) {
    yield put(actions.callRegionApi.failure(error as AxiosError));
  }
}

export function* callProvinceApi(
  action: ReturnType<typeof actions.callProvinceApi.request>
): SagaIterator {
  try {
    const response: AxiosResponse<models.ProvinceResponse> = yield call(
      get,
      apiEndpoints.province.replace(
        "{regionId}",
        String(action.payload.regionId)
      )
    );
    yield put(actions.callProvinceApi.success(response.data));
  } catch (error) {
    yield put(actions.callProvinceApi.failure(error as AxiosError));
  }
}

export function* callCitiesApi(
  action: ReturnType<typeof actions.callCitiesApi.request>
): SagaIterator {
  try {
    const response: AxiosResponse<models.CitiesResponse> = yield call(
      get,
      apiEndpoints.cities.replace(
        "{provinceId}",
        String(action.payload.provinceId)
      )
    );

    yield put(actions.callCitiesApi.success(response.data));
  } catch (error) {
    yield put(actions.callCitiesApi.failure(error as AxiosError));
  }
}

export function* callBarangayApi(
  action: ReturnType<typeof actions.callBarangayApi.request>
): SagaIterator {
  try {
    const response: AxiosResponse<models.BarangayResponse> = yield call(
      get,
      apiEndpoints.barangay.replace("{cityId}", String(action.payload.cityId))
    );

    yield put(actions.callBarangayApi.success(response.data));
  } catch (error) {
    yield put(actions.callBarangayApi.failure(error as AxiosError));
  }
}

export function* onCitiesSaga() {
  yield takeLatest(getType(actions.callCitiesApi.request), callCitiesApi);
}
export function* onBarangaySaga() {
  yield takeLatest(getType(actions.callBarangayApi.request), callBarangayApi);
}

export function* onRegionSaga() {
  yield takeLatest(getType(actions.callRegionApi.request), callRegionApi);
}

export function* onProvinceSaga() {
  yield takeLatest(getType(actions.callProvinceApi.request), callProvinceApi);
}

export default function* () {
  yield all([
    call(onRegionSaga),
    call(onProvinceSaga),
    call(onBarangaySaga),
    call(onCitiesSaga),
  ]);
}
