import produce from 'immer';

const handleActions = (actionsMap, defaultState) => (
  state = defaultState,
  { type, ...params },
) =>
  produce(state, draft => {
    const action = actionsMap[type];
    return action && action.call(draft, params, state);
  });

export default handleActions;
