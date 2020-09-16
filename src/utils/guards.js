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

export function guardMovieCredits(obj) {
  return (
    typeof obj === "object" &&
    obj !== null &&
    obj.cast &&
    Array.isArray(obj.cast) &&
    obj.cast.length > 0
  );
}

export function guardShowCredits(obj) {
  return (
    typeof obj === "object" &&
    obj !== null &&
    obj.cast &&
    Array.isArray(obj.cast) &&
    obj.cast.length > 0
  );
}

export function guardSimilar(obj) {
  return (
    typeof obj === "object" &&
    obj !== null &&
    obj.results &&
    Array.isArray(obj.results) &&
    obj.results.length > 0
  );
}
