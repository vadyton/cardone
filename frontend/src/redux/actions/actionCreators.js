import dotenv from 'dotenv';
import {
  LOADING_FAILED,
  LOADING_STARTED,
  LOADING_SUCCESSFUL,
} from './actionTypes';

dotenv.config();

export function loadingStarted() {
  return {
    type: LOADING_STARTED,
  };
}

export function loadingSuccessful(category) {
  return {
    type: LOADING_SUCCESSFUL,
    payload: category,
  };
}

export function loadingFailed(err) {
  return {
    type: LOADING_FAILED,
    payload: err,
    error: true,
  };
}

export function load() {
  return async (dispatch) => {
    dispatch(loadingStarted());
    try {
      async function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const response = await fetch(
          encodeURI(
            `https://search-maps.yandex.ru/v1/?apikey=${process.env.REACT_APP_API_KEY_SEARCH_COMPANY}&text=аптека&type=biz&lang=ru_RU&ll=${longitude},${latitude}&spn=0.552069,0.400552`,
          ),
        );
        const json = await response.json();
        const result = json.features.map((item) => item.properties);
        dispatch(loadingSuccessful(result));
      }

      function error() {
        console.log('err');
      }

      if (!navigator.geolocation) {
        console.log('Geolocation is not supported by your browser');
      } else {
        navigator.geolocation.getCurrentPosition(success, error);
      }
    } catch (err) {
      dispatch(loadingFailed(err));
    }
  };
}
