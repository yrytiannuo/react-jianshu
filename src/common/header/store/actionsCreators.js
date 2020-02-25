import * as actionTypes from './constants'

export const searchFocus = () => ({
    type: actionTypes.FOCUS_CHANGE
});

export const searchBlur = () => ({
    type: actionTypes.FOCUS_BLUR
});