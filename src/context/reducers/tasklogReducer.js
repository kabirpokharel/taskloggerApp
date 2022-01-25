// const DUMMY_tasklogInitialState_FOR_REFERENCE = {
//   location: null,
//   startAt: '',
//   taskLog: [],
//   cleaningTypeCount: {
//     daily: 0,
//     thorough: 0,
//   },
//   loading: false,
//   error: null,
// };

import {
  LOCATION_DETAIL_INITIALIZING,
  LOCATION_DETAIL_INITIALIZING_FAIL,
  LOCATION_DETAIL_INITIALIZING_SUCCESS,
  ROOM_CLEANED,
  RESET_ROOM,
  EXTRAS_TOGGLE,
  LOAD_ROOM,
} from '../../constants/actionConstant';
import { resettingRoom, roomIsCleaned } from './cleaningReducerFunc';

const tasklogReducer = (state, { type, payload }) => {
  switch (type) {
    case LOCATION_DETAIL_INITIALIZING:
      return {
        ...state,
        loading: true,
      };
    case LOCATION_DETAIL_INITIALIZING_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case LOCATION_DETAIL_INITIALIZING_SUCCESS:
      const { name, shortid, address, blocks } = payload;
      return {
        ...state,
        loading: false,
        location: { name, shortid, address },
        taskLog: blocks,
        startAt: new Date().toString(),
      };
    case LOAD_ROOM: {
      const newTaskLog = state.taskLog.filter(
        //only keeping block which has data and current one
        (block) => !!block.rooms.length || block.id === payload
      );
      return { ...state, taskLog: newTaskLog, currentBlockId: payload };
    }
    case RESET_ROOM: {
      return resettingRoom(payload, { ...state });
    }
    case ROOM_CLEANED: {
      return roomIsCleaned(payload, { ...state });
    }
    case EXTRAS_TOGGLE: {
      const taskLogCopy = [...state.taskLog];
      const updatedTaskLog = taskLogCopy.map((block) => {
        if (block.shortid === payload.selectedBlockId) {
          const selectedExtrasObj = block.extras[payload.index];
          console.log('this is selectedExtrasObj -- - > ', selectedExtrasObj);
          if ('cleaningType' in selectedExtrasObj) {
            delete selectedExtrasObj.cleaningType;
          } else {
            selectedExtrasObj.cleaningType = 'thorough';
            console.log('this is block after selecting extras -- - >', block);
          }
        }
        return block;
        // console.log('see this updated tasklog -- -- > ', updatedTaskLog);
      });
      return { ...state, taskLog: updatedTaskLog };
    }
    default:
      return state;
  }
};

export default tasklogReducer;
