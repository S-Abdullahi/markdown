import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const App = () => {
  const [text, setText] = useState("## Markdown");
  return (
    <>
      <h2 className="text-center mt-2 text-2xl font-bold">Markdown Project</h2>
      <div className="bg-slate-300 h-screen grid grid-cols-2 gap-6 m-10 p-4">
        <form className="bg-slate-300 w-full h-full">
          <textarea
            value={text}
            className="w-full p-4 h-full bg-white rounded"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </form>
        <div className="bg-slate-600 p-4 rounded text-white">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default App;
