import React from "react";
import { Timeline } from "../../components";
import { data } from "./data";

const TimelineContent = ({ wedding }) => {
  return (
    <div>
      <Timeline data={data} wedding={wedding} />
    </div>
  );
};

export default TimelineContent;
