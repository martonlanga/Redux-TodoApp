export const simpleAction = (msg) => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: msg
  });
};
