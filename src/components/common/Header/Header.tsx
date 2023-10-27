"use client";

import css from "./Header.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import Container from "../Container/Container";

const Header: React.FC = () => {
  const pathname = usePathname();

  const onPathnameFormat = (p: string): string => {
    const path = p.substring(1);

    switch (path) {
      case "physics":
        return "Фізика";
      default:
        return "";
    }
  };

  return (
    <header className={css.header}>
      <Container className={css.container}>
        <Link href={"/"} className={css.logoWrap}>
          <LogoIcon className={css.logo} />
          {onPathnameFormat(pathname)}
        </Link>
        <nav className={css.nav}>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <Link href={"/"} className={css.navLink}>
                Про SciSearch
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;

const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      className={className}
    >
      <g clipPath="url(#a)">
        <path
          fill="#161616"
          d="M17.778 0H2.222C1 0 0 1 0 2.222v15.556C0 19 1 20 2.222 20h15.556C19 20 20 19 20 17.778V2.222C20 1 19 0 17.778 0zm-3.445 4.333S13.556 4 13.223 4c-.667-.111-1.112.111-1.334 1.222L10 15.333c-.222.89-.556 1.556-1.111 2-.445.334-.889.445-1.445.445-.888 0-2.222-.556-2.222-.556l.556-1.555s.889.333 1.11.333c.334.111.556 0 .779-.111.222-.111.333-.445.444-.778L9.89 4.89C10 4 10.444 3.333 11 2.778c.667-.445 1.444-.556 2.333-.445.778.111 1.667.556 1.667.556l-.667 1.444z"
        ></path>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
