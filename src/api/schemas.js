import validator from "is-my-json-valid";
import { validator } from "uuid";

export const movieValid = validator({
  required: true,
  type: "object",
  properties: {
    title: "string",
    backdrop_path: "string",
    poster_path: "string",
  },
});
