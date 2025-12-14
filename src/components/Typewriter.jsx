import { useEffect, useState } from "react";

const Typewriter = ({ message = "", onDone }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText(""); // reset
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(message.slice(0, i + 1));
      i++;
      if (i === message.length) {
        clearInterval(interval);
        onDone?.();
      }
    }, 30);

    return () => clearInterval(interval);
  }, [message]); // restart on new message

  return (
    <pre style={{ whiteSpace: "pre-wrap", fontFamily: "monospace", fontSize: "1.2rem" }}>
      {displayedText}
    </pre>
  );
};

export default Typewriter;