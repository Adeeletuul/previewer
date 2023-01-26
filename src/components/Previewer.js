import React from "react";
import { marked } from "marked";

const Previewer = ({ text }) => {
  return (
    <div className="container">
      <h2 className="label">Previewer</h2>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
      ></div>
    </div>
  );
};

export default Previewer;
