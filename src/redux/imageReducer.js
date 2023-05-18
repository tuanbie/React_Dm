const initialState = null;

const imageReducer = (state = initialState, action) => {
  const handlers = {
    SET_SELECTED_IMAGE: () => action.payload,
  };
  const handler = handlers[action.type];
  return handler ? handler() : state;
};

export default imageReducer;
