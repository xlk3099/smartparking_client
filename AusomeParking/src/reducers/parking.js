'use strict';

import { REFRESH_PARKING }from '../actions/parking'

const DefaultState = { 
  parkingLots: [{
    id: 1,
    plate: null
  }, {
    id: 2,
    plate: null
  }, {
    id: 3,
    plate: null
  }]
};

const parking = (state = DefaultState, action) => {
  switch (action.type) {
    case REFRESH_PARKING: 
      return {
        ...state,
        parkingLots: actions.parkingLots
      };
    default:
      return state;
  }
}

export default parking;
