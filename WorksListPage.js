import React from "react";
import { Link } from "react-router-dom";
import WorkContent from "./work-content";

const WorksListPage = () => (
  <>
    <h1>WORKS</h1>
    {WorkContent.map((work, key) => (
      <Link key={key} to={`/work/${work.name}`}>
        <h3>{work.title}</h3>
      </Link>
    ))}
  </>
);

export default WorksListPage;
