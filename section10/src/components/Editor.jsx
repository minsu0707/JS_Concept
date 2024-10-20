import { useState, useRef } from "react";
import "./Editor.css";

export const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef(null);
  // contentRef.current 는 input임

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        onKeyDown={onKeydown}
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};
