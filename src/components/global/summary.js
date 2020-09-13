import React from "react";
import { v4 as uuidv4 } from "uuid";
import { getNames, formatNumber } from "../../utils/helpers";

function Summary(props) {
  const { data, mediaType } = props;

  return (
    <div className="summary">
      {mediaType === "movie" && <MovieSummary data={data} />}
      {mediaType === "tv" && <ShowSummary data={data} />}
      {mediaType === "person" && <PersonSummary data={data} />}
    </div>
  );
}

export default Summary;

const MovieSummary = ({ data }) => {
  const stats = [
    { key: "Release Date", value: data.release_date || "Nil" },
    { key: "Budget", value: formatNumber(data.budget) || "Nil" },
    { key: "Revenue", value: formatNumber(data.revenue) || "Nil" },
    { key: "Runtime", value: data.runtime ? `${data.runtime} mins` : "Nil" },
    { key: "Status", value: data.status || "Nil" },
    {
      key: "Genres",
      value: getNames(data.genres) || "Nil",
    },
    {
      key: "Production",
      value: getNames(data.production_companies) || "Nil",
    },
  ];

  return (
    <>
      <h2 className="summary-head">Storyline</h2>
      <p className="summary-overview">{data.overview}</p>
      <ul className="stats">
        {stats.map((stat) => (
          <li key={uuidv4()} className="stats-item">
            <div className="stats-key">{stat.key}:</div>
            <div className="stats-value">{stat.value}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

const ShowSummary = ({ data }) => {
  const stats = [
    { key: "First Air Date", value: data.first_air_date || "Nil" },
    { key: "Last Air Date", value: data.last_air_date || "Nil" },
    { key: "Episodes", value: data.number_of_episodes || "Nil" },
    { key: "Seasons", value: data.number_of_seasons || "Nil" },
    { key: "Status", value: data.status || "Nil" },
    {
      key: "Genres",
      value: getNames(data.genres) || "Nil",
    },
    {
      key: "Production",
      value: getNames(data.production_companies) || "Nil",
    },
  ];

  return (
    <>
      <h2 className="summary-head">Storyline</h2>
      <p className="summary-overview">{data.overview}</p>
      <ul className="stats">
        {stats.map((stat) => (
          <li key={uuidv4()} className="stats-item">
            <div className="stats-key">{stat.key}:</div>
            <div className="stats-value">{stat.value}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

const PersonSummary = ({ data }) => {
  const stats = [
    { key: "Gender", value: data.gender === 1 ? "Female" : "Male" },
    { key: "Birthday", value: data.birthday || "Nil" },
    { key: "Deathday", value: data.deathday || "Nil" },
    { key: "Place of Birth", value: data.place_of_birth || "Nil" },
    { key: "Known For", value: data.known_for_department || "Nil" },
  ];

  return (
    <>
      <h2 className="summary-head">{data.name || "No Name"}</h2>
      <p className="summary-overview">{data.biography}</p>
      <ul className="stats">
        {stats.map((stat) => (
          <li key={uuidv4()} className="stats-item">
            <div className="stats-key">{stat.key}:</div>
            <div className="stats-value">{stat.value}</div>
          </li>
        ))}
      </ul>
    </>
  );
};
