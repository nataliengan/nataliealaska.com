export function deselectImage(image) {
  return {
    type: "IMAGE_DESELECTED",
    payload: image
  };
}
