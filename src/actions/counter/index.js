export const ADD_COUNTER = 'ADD_COUNTER';
export const DELETE_COUNTER = 'DELETE_COUNTER';
export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';
//
export const CHANGE_TEXT = 'CHANGE_TEXT';

export function changeText(data) {
    return {
        type: CHANGE_TEXT,
        payload: data
    }
}

export function increaseCount(data) {
    return {
        type: INCREASE_COUNT,
        payload: data
    }
}

export function decreaseCount(data) {
    return {
        type: INCREASE_COUNT,
        payload: data
    }
}

export function addCounter(data) {
    return {
        type: ADD_COUNTER,
        payload: data
    }
}

export function deleteCounter(data) {
    return {
        type: DELETE_COUNTER,
        payload: data
    }
}