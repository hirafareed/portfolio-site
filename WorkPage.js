import React from "react";
import WorkList from "../components/WorkList";
import NotFoundPage from "./NotFoundPage";
import WorkContent from "./work-content";

const WorkPage = ({ match }) => {
  const name = match.params.name;
  const work = WorkContent.find((work) => work.name === name);

  if (!work) return <NotFoundPage />;

  const otherWork = WorkContent.filter((work) => work.name !== name);

  return (
    <>
      <h1>this is an article</h1>
      <h1>{work.title}</h1>
      {work.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>other work</h3>
      {/* <WorkList work={otherWork} /> */}
    </>
  );
};
export default WorkPage;
