export function guardArray(arr) {
  return Array.isArray(arr) && arr.length > 0;
}

export function guardCredits(obj) {
  return (
    typeof obj === "object" &&
    obj !== null &&
    obj.cast &&
    Array.isArray(obj.cast) &&
    obj.cast.length > 0
  );
}
