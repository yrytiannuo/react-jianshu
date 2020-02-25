import * as actionTypes from './constants.js'

import { fromJS } from 'immutable'
//immutable库。数据不可改
const defaultState = fromJS({ //转化为immutable对象
    focused: false
});

export default (state = defaultState, action) => {
    if(action.type === actionTypes.FOCUS_CHANGE){
        return state.set('focused', true);
        //immutable对象的set方法，会结合之前的immutable对象的值
        //和设置的值，返回一个全新的对象，所以没有违背数据不可改的约束
    }
    if(action.type === actionTypes.FOCUS_BLUR){
        return state.set('focused', false);
    }
    return state;
}