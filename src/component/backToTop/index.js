import React, { useState, useEffect } from "react";
import "./style.scss";
function BackToTop({ route }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="back-to-top">
      {scrollPosition > 500 ? (
        <img src="/back-to-top.png" className="back-img" />
      ) : null}
    </div>
  );
}

export default BackToTop;
