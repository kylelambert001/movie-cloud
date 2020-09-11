import genres from "../api/genres";

export const truncateStr = (str, words) => {
  if (typeof str !== "string") return;
  return str.split(" ").slice(0, words).join(" ") + "...";
};

export const getYear = (str) => {
  if (typeof str !== "string") return;
  return str.slice(0, 4);
};

export const getGenres = (arr) => {
  if (Array.isArray(arr) && arr.length > 0) {
    return arr
      .map((genre) => genre.name)
      .slice(0, 3)
      .join(", ");
  }
  return;
};

export const getGenresById = (arr) => {
  if (Array.isArray(arr) && arr.length > 0) {
    return genres
      .filter((genre) => new Set(arr).has(genre.id))
      .map((genre) => genre.name)
      .slice(0, 3)
      .join(", ");
  }
  return;
};

export const getRandomItem = (arr) => {
  if (!Array.isArray(arr)) {
    console.log("Array not found in getRandomItem");
    return null;
  }
  const randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
};

export function isLoading(array) {
  return array.some((name) => this.props[name].loading);
}

export function isError(array) {
  return array.some((name) => this.props[name].error);
}
