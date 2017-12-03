export default function(state = {}, action) {
  switch (action.type) {
    case IMAGE_SELECTED:
      return action.payload;
  }
  return state;
}
