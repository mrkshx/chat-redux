// TODO: add and export your own actions
const BASE_URL = 'https://wagon-chat.herokuapp.com/';

const FETCH_MESSAGES = 'FETCH_MESSAGES';

export function fetchMessages(channel) {
  const url = `${BASE_URL}${channel}/messages`;
  const promise = fetch(url).then(reason => reason.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise // Will be resolved by redux-promise
  };
}
