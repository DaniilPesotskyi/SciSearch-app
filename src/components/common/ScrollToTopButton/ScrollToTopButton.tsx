"use client";

import css from "./ScrollToTopButton.module.css";

import { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollButton && (
        <button type="button" className={css.btn} onClick={onScrollToTop}>
          <TopIcon />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;

function TopIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
      <path
        fill="#000"
        d="M4.14 4.758h19.716a.583.583 0 000-1.167H4.139a.583.583 0 000 1.167zm6.36 19.651H7.66a2.917 2.917 0 01-2.917-2.917V8.846a2.917 2.917 0 012.916-2.917H10.5a2.917 2.917 0 012.917 2.917v12.646A2.917 2.917 0 0110.5 24.41zM7.66 7.096a1.75 1.75 0 00-1.75 1.75v12.646a1.75 1.75 0 001.75 1.75h2.84a1.75 1.75 0 001.75-1.75V8.846a1.75 1.75 0 00-1.75-1.75H7.66zM20.343 18.61H17.5a2.917 2.917 0 01-2.917-2.917V8.846A2.917 2.917 0 0117.5 5.929h2.84a2.917 2.917 0 012.918 2.917v6.847a2.917 2.917 0 01-2.914 2.917zM17.5 7.096a1.75 1.75 0 00-1.75 1.75v6.847a1.75 1.75 0 001.75 1.75h2.84a1.75 1.75 0 001.75-1.75V8.846a1.75 1.75 0 00-1.75-1.75H17.5z"
      ></path>
    </svg>
  );
}
