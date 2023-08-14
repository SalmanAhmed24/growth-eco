"use client";
import Image from "next/image";
import "./navbar.scss";
import React, { useState, useEffect } from "react";
import localFont from "@next/font/local";
import { useRouter, usePathname } from "next/navigation";
const futuraBold = localFont({
  src: [
    {
      path: "../../app/fonts/Futura Bold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../app/fonts/FutuBk.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileNav, setMobileNav] = useState(false);
  const router = useRouter();
  const path = usePathname();
  useEffect(() => {
    console.log("path", path);
  }, [path]);
  const handleLinks = (e) => {
    setActiveLink(e.target.innerText);
    if (e.target.innerText == "Home") {
      router.push("/");
      if (mobileNav) {
        setMobileNav(!mobileNav);
      }
    }
    if (e.target.innerText == "About Us +") {
      router.push("/aboutUs");
      if (mobileNav) {
        setMobileNav(!mobileNav);
      }
    }
    if (e.target.innerText == "Capabilities +") {
      router.push("/capabilities");
      if (mobileNav) {
        setMobileNav(!mobileNav);
      }
    }
    if (e.target.innerText == "Case Studies") {
      router.push("/case-studies");
      if (mobileNav) {
        setMobileNav(!mobileNav);
      }
    }
    if (e.target.innerText == "Blog") {
      router.push("/blog");
      if (mobileNav) {
        setMobileNav(!mobileNav);
      }
    }
  };
  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <section className={futuraBold.className}>
      <nav className="navbar-cus">
        <div className="logo-wrap">
          <Image src={"./logo.svg"} width={170} height={80} />
        </div>
        <div className="links-wrap">
          <ul onClick={handleLinks} className="cus-links">
            <li className={path == "/" ? "activeLink" : ""}>Home</li>
            <li className={path == "/aboutUs" ? "activeLink" : ""}>
              About Us +
            </li>
            <li className={path == "/capabilities" ? "activeLink" : ""}>
              Capabilities +
            </li>
            <li className={path == "/case-studies" ? "activeLink" : ""}>
              Case Studies
            </li>
            <li className={path == "/blog" ? "activeLink" : ""}>Blog</li>
          </ul>
        </div>
        <div className="menu-bars-wrap">
          {mobileNav ? (
            <p
              onClick={handleMobileNav}
              className={`${futuraBold.className} close`}
            >
              x
            </p>
          ) : (
            <Image
              src={"/Menu.png"}
              width={32}
              height={32}
              onClick={handleMobileNav}
            />
          )}
        </div>
      </nav>
      {mobileNav ? (
        <div className="moible-abs-menu">
          <ul
            onClick={handleLinks}
            className={`${futuraBold.className} mobile-nav-list`}
          >
            <li className={path == "/" ? "activeLink" : ""}>Home</li>
            <li className={path == "/aboutUs" ? "activeLink" : ""}>
              About Us +
            </li>
            <li className={path == "/capabilities" ? "activeLink" : ""}>
              Capabilities +
            </li>
            <li className={path == "/case-studies" ? "activeLink" : ""}>
              Case Studies
            </li>
            <li className={path == "/blog" ? "activeLink" : ""}>Blog</li>
          </ul>
        </div>
      ) : null}
    </section>
  );
}

export default Navbar;
