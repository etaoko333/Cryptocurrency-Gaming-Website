import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Define scrollToTop function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show button on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Div>
      <button
        onClick={scrollToTop}
        className={`${visible ? "block" : "none"}`}
        aria-label="Scroll to top"
      >
        <AiOutlineArrowUp />
      </button>
    </Div>
  );
}

const Div = styled.div`
  .none {
    opacity: 0;
    visibility: hidden;
  }
  button {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: var(--primary-color);
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in-out;
    z-index: 1;
  }
  svg {
    color: black;
    font-size: 1.3rem;
  }
`;
