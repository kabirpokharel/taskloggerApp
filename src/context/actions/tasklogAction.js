import {
  LOCATION_DETAIL_INITIALIZING,
  LOCATION_DETAIL_INITIALIZING_SUCCESS,
  LOCATION_DETAIL_INITIALIZING_FAIL,
  ROOM_CLEANED,
  RESET_ROOM,
  EXTRAS_TOGGLE,
} from '../../constants/actionConstant';
import axiosInstance from '../../helpers/axiosInstance';

export const initilizeLocationAttribute = (locationID) => async (dispatch) => {
  console.log('see this is locaiton id --->', locationID);
  dispatch({
    type: LOCATION_DETAIL_INITIALIZING,
  });
  const locationDetails = await axiosInstance
    .get(`/location/${locationID}/roomStatus`)
    .catch((err) => {
      console.log('error loding locaiton details-->', err.response);
      dispatch({
        type: LOCATION_DETAIL_INITIALIZING_FAIL,
        payload: err.response.data.data?.message || 'Something went wrong, try again',
      });
    });
  if (locationDetails?.data.data) {
    dispatch({
      type: LOCATION_DETAIL_INITIALIZING_SUCCESS,
      payload: locationDetails.data.data,
    });
  }
};

export const roomClickHandler =
  (roomObj, roomIndex, selectedBlockId, cleaningType) => (dispatch) => {
    if (!('_id' in roomObj)) {
      if ('cleaningType' in roomObj) {
        dispatch({
          type: RESET_ROOM,
          payload: { selectedBlockId, roomIndex },
        });
      } else {
        dispatch({
          type: ROOM_CLEANED,
          payload: { selectedBlockId, roomIndex, cleaningType },
        });
      }
    }
  };

export const extrasCleaned = (index, item, selectedBlockId) => (dispatch) => {
  if (!('_id' in item)) {
    dispatch({
      type: EXTRAS_TOGGLE,
      payload: { index, selectedBlockId },
    });
  }
};
