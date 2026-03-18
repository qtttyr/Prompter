import { useState, useEffect } from "react";

export function useTypewriter(text: string, speed: number = 50) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, speed, text]);

  return displayText;
}
