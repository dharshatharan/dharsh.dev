import { useState, useEffect } from "react";

export const useScrollHandler = () => {
  const [scroll, setScroll] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};
