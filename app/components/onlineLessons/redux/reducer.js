import typeToReducer from 'type-to-reducer';
import * as TYPES from './actionTypes';

export default typeToReducer({
    //线上课程列表
    [TYPES.LOAD_ONLINE_LESSONS_LIST]: {
        REJECTED: (state, action) => ({
            error: action.payload
        }),
        FULFILLED: (state, action) => ({
            list: action.payload
        })
    }
}, {});