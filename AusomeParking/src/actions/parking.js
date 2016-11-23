'use strict'

import { status, json, error } from '../utils/network'

export const REFRESH_PARKING = 'REFRESH_PARKING'

function refreshParking(parkingLots) {
  return {
    type: REFRESH_PARKING,
    parkingLots: parkingLots
  }
}

export function fetchParkingStatus() {
  return dispatch => {
    return fetch(url)
      .then(status)
      .then(json)
      .then(parkingLots => dispatch(refreshParking(parkingLots)))
      .catch((err) => console.log(err))
  }
}