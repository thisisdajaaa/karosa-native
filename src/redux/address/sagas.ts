import { SagaIterator } from "@redux-saga/core";
import { AxiosError, AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { baseAxios } from "@app/config/axios/instance";
import { GOOGLE_GEOCODER_API_URL } from "@env";

import * as actions from "./actions";
import * as models from "./models";

const { get } = baseAxios();

export function* callGeocoderApi(
  action: ReturnType<typeof actions.callGeocoderApi.request>
): SagaIterator {
  try {
    const response: AxiosResponse<models.GeocoderResponse> = yield call(
      get,
      GOOGLE_GEOCODER_API_URL,
      {
        params: action.payload,
      }
    );

    yield put(actions.callGeocoderApi.success(response.data));
  } catch (error) {
    yield put(actions.callGeocoderApi.failure(error as AxiosError));
  }
}

export function* onGeocoderSaga() {
  yield takeLatest(getType(actions.callGeocoderApi.request), callGeocoderApi);
}

export default function* () {
  yield all([call(onGeocoderSaga)]);
}
