"use client";

import { useGlobalController } from "@/app/context/GlobalController";
import { useEffect, useRef, useState } from "react";

export const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { setShowContactMe } = useGlobalController();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onLinkClick = () => {
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="btn btn-ghost btn-circle"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mt-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />{" "}
        </svg>
      </button>
      {open && (
        <ul className="menu menu-sm fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-base-100 rounded-box z-50 w-52 p-2 shadow bg-foreground border-1 border-edge-primary">
          <li>
            <a
              onClick={() => {
                onLinkClick();
                setShowContactMe(true);
              }}
              className=""
            >
              Contact Me
            </a>
          </li>
          <li>
            <a href="#TechStack" onClick={onLinkClick}>
              Tech Stack
            </a>
          </li>
          <li>
            <a onClick={onLinkClick}>Projects</a>
          </li>
        </ul>
      )}
    </div>
  );
};
