import genres from "../api/genres";

export const truncateStr = (str, words) => {
  if (typeof str !== "string") return "No String";
  return str.split(" ").slice(0, words).join(" ") + "...";
};

export const getGenres = (arr) => {
  if (!Array.isArray(arr)) return "No Genres";
  return genres
    .filter((genre) => new Set(arr).has(genre.id))
    .map((genre) => genre.name)
    .slice(0, 3)
    .join(", ");
};

export const getRandomItem = (arr) => {
  if (!Array.isArray(arr)) {
    console.log("Array not found in getRandomItem");
    return null;
  }
  const randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
};
