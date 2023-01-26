import React from "react";

const Editor = ({ text, handleTextChange }) => {
  return (
    <div className="container">
      <h2 className="label">Editor</h2>
      <textarea id="editor" onChange={handleTextChange} value={text}>
        {text}
      </textarea>
    </div>
  );
};

export default Editor;
