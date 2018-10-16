import produce from 'immer';

const handleActions = (actionsMap, defaultState) => (
  state = defaultState,
  { type, ...params },
) =>
  produce(state, draft => {
    const action = actionsMap[type];
    // console.log(action);
    return action && action.call(draft, state, params);
  });

export default handleActions;
