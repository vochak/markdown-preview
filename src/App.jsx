import ReactMarkdown from 'react-markdown';
import React, { useState } from 'react';

function App() {
  const [markdown, setMarkdown] = useState("### Markdown preview ");

  const handleInputChange = (event) => {
    setMarkdown((e) => event.target.value);
  };

  return (
    <>
      <textarea id="editor" value={markdown} onChange={handleInputChange} />
      <div id="preview" className="result">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </>
  );
}

export default App;
