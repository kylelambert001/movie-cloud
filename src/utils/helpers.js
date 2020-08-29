export const isLoading = (stateObject) => {
  if (typeof stateObject !== "object") return false;
  return Object.keys(stateObject)
    .map((key) => stateObject[key])
    .some((obj) => obj.loading);
};
