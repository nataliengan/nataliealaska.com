export default function(state = null, action) {
  switch (action.type) {
    case "IMAGE_SELECTED":
      console.log("Active Image", action.payload);
      return action.payload;
    case "IMAGE_DESELECTED":
      console.log("Active Image", null);
      return null;
  }
  return state;
}
