import genres from "../api/genres";
import numeral from "numeral";

export const truncateStr = (str, words) => {
  if (typeof str !== "string") return;
  return str.split(" ").slice(0, words).join(" ") + "...";
};

// Shorten yyyy/mm/dd string to year
export const getYear = (str) => {
  if (typeof str !== "string") return;
  return str.slice(0, 4);
};

// Get genre names in string
export const getGenres = (arr, num = 3) => {
  if (Array.isArray(arr) && arr.length > 0) {
    return arr
      .map((genre) => genre.name)
      .slice(0, num)
      .join(", ");
  }
  return;
};

// Find and return matched genre names in string
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

export function isLoading(array) {
  return array.some((name) => this.props[name].loading);
}

export function isError(array) {
  return array.some((name) => this.props[name].error);
}

// Get number in thousands format, 10000 => '$10,000'
export const formatNumber = (num) => {
  if (typeof num === "number") {
    return numeral(num).format("$0,0");
  }
  return false;
};

// Get names from each object in array and return as string
export const getNames = (arr) => {
  if (Array.isArray(arr) && arr.length > 0) {
    return arr.map((item) => item.name).join(", ");
  }
  return false;
};
