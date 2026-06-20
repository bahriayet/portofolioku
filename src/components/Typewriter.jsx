import { useState, useEffect } from 'react';

// Typewriter menggunakan CSS animation untuk blink cursor
// → TIDAK ada setBlink state → tidak ada re-render setiap 500ms
function Typewriter({ words, speed = 100, delay = 2000 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const t = setTimeout(() => setReverse(true), delay);
      return () => clearTimeout(t);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setSubIndex((prev) => prev + (reverse ? -1 : 1)),
      reverse ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [subIndex, index, reverse, words, speed, delay]);

  return (
    <span className="typewriter">
      {words[index].substring(0, subIndex)}
      <span className="cursor">|</span>
    </span>
  );
}

export default Typewriter;
