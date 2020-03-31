import React from "react";

const WorkPage = ({ match }) => {
  const name = match.params.name;
  return (
    <>
      <h1>This is the {name} work</h1>
    </>
  );
};
export default WorkPage;
