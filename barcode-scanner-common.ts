// a few default implementations because not all platforms provide them

export function available() {
  return Promise.resolve(true);
}

export function hasCameraPermission() {
  return Promise.resolve(true);
}

export function requestCameraPermission() {
  return Promise.resolve(true);
}
