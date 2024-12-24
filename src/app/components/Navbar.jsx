"use client";
import React, { useEffect, useState } from "react";
import styles from "./Nav2.module.css";
import Link from "next/link";

const Navbar = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 938);
  const [isAnimating, setIsAnimating] = useState(false);

  // const NAV_LINKS = [
  //   { href: "/", key: "home", label: "Home" },
  //   { href: "/", key: "about", label: "About" },
  //   { href: "/", key: "products", label: "Products" },
  // ];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const navbar = document.getElementsByClassName(styles.Navbar)[0];
  //     if (window.scrollY > 50) {
  //       navbar.classList.add(styles.scrolled);
  //     } else {
  //       navbar.classList.remove(styles.scrolled);
  //     }
  //   };

  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 938);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const toggleMenu = () => {
    if (isAnimating) return;

    if (isMenuOpen) {
      setIsAnimating(true);
      setIsMenuOpen(false);

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    } else {
      setIsAnimating(true);
      setIsMenuOpen(true);

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  };

  const renderNavItems = () => (
    <ul
      className={`${styles.navList} ${isMenuOpen ? styles.mobileNavList : ""}`}
    >
      <li>
        <Link href="/"> Home</Link>
      </li>
      <li>
        <Link href="/">About</Link>
      </li>
      <li>
        <Link href="/">Products</Link>
      </li>
    </ul>
  );

  const renderNavRight = () => (
    <div
      className={`${styles.navRight} ${
        isMenuOpen ? styles.mobileNavRight : ""
      }`}
    >
      <button className="p-2">Explore More</button>
    </div>
  );

  return (
    <>
      <div className={styles.Navbar}>
        <Link href="/">
          <img src="/logo.svg" alt="Logo" className={styles.logo} />
        </Link>

        {isMobile ? (
          <>
            <div className={styles.navRight}>
              <div
                className={`${styles.hamburger} ${
                  isMenuOpen ? styles.open : ""
                }`}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            {isMenuOpen && (
              <div className={styles.mobileMenu}>
                <ul className={` ${isMenuOpen ? styles.mobileNavList : ""}`}>
                  <li>Home</li>
                  <li>About</li>
                  <li>Products</li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <>
            {renderNavItems()}
            {renderNavRight()}
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
