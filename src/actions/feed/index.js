export const GET_FEED = 'GET_FEED';

export function fetchFeeds(data) {
    debugger;
    return {
        type: GET_FEED,
        payload: data
    }
}