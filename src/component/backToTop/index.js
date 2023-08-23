"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import "./style.scss";
function BackToTop({ route }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const path = usePathname();
  const router = useRouter();
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
  const handleRoute = () => {
    router.push(`${path}${route}`);
  };
  return (
    <div className="back-to-top">
      {scrollPosition > 500 ? (
        <img
          onClick={handleRoute}
          src="/back-to-top.png"
          className="back-img"
        />
      ) : null}
    </div>
  );
}

export default BackToTop;
