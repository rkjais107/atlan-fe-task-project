import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";

const Editor = ({ setQuery, query, executeQuery, setResult }) => {
  const [content, setContent] = useState(query);
  return (
    <div className="editor">
      <CodeMirror
        value={content}
        extensions={[sql()]}
        onChange={(value, viewUpdate) => {
          setContent(value);
        }}
      />
      <div className="buttons">
        <button
          className="clear button"
          onClick={() => {
            setQuery("SELECT * FROM territories");
            setContent("SELECT * FROM territories");
            setResult("");
          }}
        >
          Reset
        </button>
        <button
          className="clear button"
          onClick={() => {
            setQuery("");
            setContent("");
            setResult("");
          }}
        >
          Clear
        </button>
        <button
          className="run button"
          onClick={() => {
            setQuery(content);
            executeQuery(content);
          }}
        >
          Run
        </button>
      </div>
    </div>
  );
};

export default Editor;
