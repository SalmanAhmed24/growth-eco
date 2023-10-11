"use client";
import Image from "next/image";
import "./navbar.scss";
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";

const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
// const futuraBold = localFont({
//   src: [
//     {
//       path: "../../app/fonts/Futura Bold.otf",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "../../app/fonts/FutuBk.ttf",
//       weight: "400",
//       style: "normal",
//     },
//   ],
// });
function Navbar() {
  const [activeLink, setActiveLink] = useState("/");
  const [mobileNav, setMobileNav] = useState(false);
  const [show, setShow] = useState(false);
  const [showCapa, setShowCapa] = useState(false);

  const router = useRouter();
  const path = usePathname();
  useEffect(() => {
    if (path == "/") {
      setActiveLink("/");
    }
    if (path == "/aboutUs") {
      setActiveLink("/aboutUs");
    }
    if (path == "/ourStory") {
      setActiveLink("/ourStory");
    }
    if (path == "/ourTeam") {
      setActiveLink("/ourTeam");
    }
    if (path == "/capabilities") {
      setActiveLink("/capabilities");
    }
    if (path == "/case-studies") {
      setActiveLink("/case-studies");
    }
    if (path == "/blog") {
      setActiveLink("/blog");
    }
    if (path == "/product-sourcing") {
      setActiveLink("/product-sourcing");
    }
    if (path == "/listing-reinstatement") {
      setActiveLink("/listing-reinstatement");
    }
    if (path == "/done-amazon") {
      setActiveLink("/done-amazon");
    }
    if (path == "/brand-storefront") {
      setActiveLink("/brand-storefront");
    }
    if (path == "/amazon-advertising") {
      setActiveLink("/amazon-advertising");
    }
    if (path == "/product-research") {
      setActiveLink("/product-research");
    }
    if (path == "/amazon-content") {
      setActiveLink("/amazon-content");
    }
    if (path == "/account-suspension") {
      setActiveLink("/account-suspension");
    }
  }, [path, activeLink]);
  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };
  const showHideAbout = () => {
    if (showCapa) {
      setShowCapa(false);
    }
    setShow(!show);
  };
  const showHideCapa = () => {
    if (show) {
      setShow(false);
    }
    setShowCapa(!showCapa);
  };
  return (
    <section className={poppins.className} id="home">
      <nav className="navbar-cus">
        <div className="logo-wrap">
          <Image alt="growth eco" src={"./logo.svg"} width={160} height={70} />
        </div>
        <div className="links-wrap">
          <div className="cus-links">
            <div className="nav-link-wraps">
              <Link className={path == "/" ? "activeLink" : ""} href={"/"}>
                Home
              </Link>
            </div>
            <div className="nav-link-wraps dropdown-wrap">
              <Link
                className={
                  path == "/about-us" ||
                  path == "/ourStory" ||
                  path == "/ourTeam"
                    ? "activeLink"
                    : ""
                }
                href={"/about-us"}
              >
                About Us +
              </Link>
              <div className="drop-div">
                <div className="droplist">
                  <Link
                    className={path == "/our-story" ? "activeInner" : ""}
                    href={"/our-story"}
                  >
                    Our Story
                  </Link>
                  {/* <Link
                    className={path == "/ourTeam" ? "activeInner" : ""}
                    href={"/ourTeam"}
                  >
                    Our Team
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="nav-link-wraps dropdown-wrap">
              <Link
                className={
                  path == "/our-expertise" ||
                  path == "/product-sourcing" ||
                  path == "/listing-reinstatement" ||
                  path == "/listing-optimization" ||
                  path == "/amazon-advertising" ||
                  path == "/amazon-a-content" ||
                  path == "/account-management" ||
                  path == "/product-research" ||
                  path == "/brand-storefront" ||
                  path == "/account-suspension"
                    ? "activeLink"
                    : ""
                }
                href={"/our-expertise"}
              >
                Our Expertise +
              </Link>
              <div className="drop-div">
                <div className="droplist">
                  <Link
                    className={
                      path == "/account-management" ? "activeInner" : ""
                    }
                    href={"/account-management"}
                  >
                    Account Management
                  </Link>
                  <Link
                    className={
                      path == "/amazon-advertising" ? "activeInner" : ""
                    }
                    href={"/amazon-advertising"}
                  >
                    Amazon Advertising
                  </Link>
                  <Link
                    className={
                      path == "/listing-optimization" ? "activeInner" : ""
                    }
                    href={"/listing-optimization"}
                  >
                    Listing Optimization
                  </Link>
                  <Link
                    className={path == "/amazon-a-content" ? "activeInner" : ""}
                    href={"/amazon-a-content"}
                  >
                    Amazon A+ content
                  </Link>
                  <Link
                    className={path == "/product-research" ? "activeInner" : ""}
                    href={"/product-research"}
                  >
                    Product Research
                  </Link>
                  <Link
                    className={path == "/product-sourcing" ? "activeInner" : ""}
                    href={"/product-sourcing"}
                  >
                    Product Sourcing
                  </Link>
                  <Link
                    className={path == "/brand-storefront" ? "activeInner" : ""}
                    href={"/brand-storefront"}
                  >
                    Brand Storefront
                  </Link>
                  <Link
                    className={
                      path == "/account-suspension" ? "activeInner" : ""
                    }
                    href={"/account-suspension"}
                  >
                    Account Suspension
                  </Link>
                  <Link
                    className={
                      path == "/listing-reinstatement" ? "activeInner" : ""
                    }
                    href={"/listing-reinstatement"}
                  >
                    Listing Reinstatement
                  </Link>
                </div>
              </div>
            </div>
            <div className="nav-link-wraps">
              <Link
                className={path == "/case-studies" ? "activeLink" : ""}
                href={"/case-studies"}
              >
                Case Studies
              </Link>
            </div>
            {/* <div className="nav-link-wraps"> */}
            {/* <Link
                className={path == "/blog" ? "activeLink" : ""}
                href={"/blog"}
              >
                Blog
              </Link> */}
            {/* </div> */}
            <div className="nav-link-wraps">
              <Link
                className={path == "/contact-us" ? "activeLink" : ""}
                href={"/contact-us"}
              >
                Contact Us
              </Link>
            </div>
            <div className="nav-link-wraps">
              <a
                href="https://calendly.com/growth-echo"
                className={`${poppins.className} book-call`}
              >
                Book A Call
              </a>
            </div>
          </div>
        </div>
        <div className="menu-bars-wrap">
          <Image
            alt="growth eco"
            src={"/Menu.png"}
            width={32}
            height={32}
            onClick={handleMobileNav}
          />
        </div>
      </nav>
      <Drawer
        className="mobileDrawer"
        anchor={"right"}
        open={mobileNav}
        onClose={handleMobileNav}
      >
        <div className="close-wrap">
          <img
            className="close-img"
            onClick={handleMobileNav}
            src="/close.png"
          />
        </div>
        <nav className="mobile-inner">
          <div className={`${poppins.className} mobile-links`}>
            <Link
              onClick={() => {
                setMobileNav(false);
                setShow(false);
                setShowCapa(false);
              }}
              className={path == "/" ? "activeLink" : ""}
              href={"/"}
            >
              Home
            </Link>
          </div>
          <div className={`${poppins.className} mobile-links drop`}>
            <Link
              onClick={() => {
                setMobileNav(false);
                setShow(false);
                setShowCapa(false);
              }}
              className={path == "/about-us" ? "activeLink" : ""}
              href={"/about-us"}
            >
              About Us
            </Link>
            {show ? (
              <p
                className={`${poppins.className} close`}
                onClick={showHideAbout}
              >
                -
              </p>
            ) : (
              <p
                className={`${poppins.className} close`}
                onClick={showHideAbout}
              >
                +
              </p>
            )}
            {show ? (
              <div className="sub-links">
                <Link
                  onClick={() => setMobileNav(false)}
                  className={path == "/ourStory" ? "activeInner" : ""}
                  href={"/our-story"}
                >
                  Our Story
                </Link>
                {/* <Link
                  onClick={() => setMobileNav(false)}
                  className={path == "/ourTeam" ? "activeInner" : ""}
                  href={"/ourTeam"}
                >
                  Our Team
                </Link> */}
              </div>
            ) : null}
          </div>
          <div className={`${poppins.className} mobile-links drop`}>
            <Link
              onClick={() => {
                setMobileNav(false);
                setShow(false);
                setShowCapa(false);
              }}
              className={path == "/our-expertise" ? "activeLink" : ""}
              href={"/our-expertise"}
            >
              Our Expertise
            </Link>
            {showCapa ? (
              <p
                className={`${poppins.className} close`}
                onClick={showHideCapa}
              >
                -
              </p>
            ) : (
              <p
                className={`${poppins.className} close`}
                onClick={showHideCapa}
              >
                +
              </p>
            )}
            {showCapa ? (
              <div className="sub-links">
                <Link
                  onClick={() => setMobileNav(false)}
                  className={path == "/account-management" ? "activeInner" : ""}
                  href={"/account-management"}
                >
                  Account Management
                </Link>
                <Link
                  onClick={() => setMobileNav(false)}
                  className={path == "/amazon-advertising" ? "activeInner" : ""}
                  href={"/amazon-advertising"}
                >
                  Amazon Advertising
                </Link>
                <Link
                  onClick={() => setMobileNav(false)}
                  className={
                    path == "/listing-optimization" ? "activeInner" : ""
                  }
                  href={"/listing-optimization"}
                >
                  Listing Optimization
                </Link>
                <Link
                  onClick={() => setMobileNav(false)}
                  className={path == "/amazon-content" ? "activeInner" : ""}
                  href={"/amazon-a-content"}
                >
                  Amazon A+ content
                </Link>
                <Link
                  onClick={() => setMobileNav(false)}
                  className={path == "/product-research" ? "activeInner" : ""}
                  href={"/product-research"}
                >
                  Product Research
                </Link>
                <Link
                  onClick={() => setMobileNav(false)}
                  className={path == "/product-sourcing" ? "activeInner" : ""}
                  href={"/product-sourcing"}
                >
                  Product Sourcing
                </Link>
                <Link
                  onClick={() => setMobileNav(false)}
                  className={path == "/brand-storefront" ? "activeInner" : ""}
                  href={"/brand-storefront"}
                >
                  Brand Storefront
                </Link>
                <Link
                  onClick={() => setMobileNav(false)}
                  className={path == "/account-suspension" ? "activeInner" : ""}
                  href={"/account-suspension"}
                >
                  Account Suspension
                </Link>
                <Link
                  onClick={() => setMobileNav(false)}
                  className={
                    path == "/listing-reinstatement" ? "activeInner" : ""
                  }
                  href={"/listing-reinstatement"}
                >
                  Listing Reinstatement
                </Link>
              </div>
            ) : null}
          </div>
          <div className={`${poppins.className} mobile-links`}>
            <Link
              onClick={() => {
                setMobileNav(false);
                setShow(false);
                setShowCapa(false);
              }}
              className={path == "/case-studies" ? "activeLink" : ""}
              href={"/case-studies"}
            >
              Case Studies
            </Link>
          </div>
          {/* <div className={`${poppins.className} mobile-links`}> */}
          {/* <Link
              onClick={() => {
                setMobileNav(false);
                setShow(false);
                setShowCapa(false);
              }}
              className={path == "/blog" ? "activeLink" : ""}
              href={"/blog"}
            >
              Blog
            </Link> */}
          {/* </div> */}
          <div className={`${poppins.className} mobile-links`}>
            <Link
              onClick={() => {
                setMobileNav(false);
                setShow(false);
                setShowCapa(false);
              }}
              className={path == "/contact-us" ? "activeLink" : ""}
              href={"/contact-us"}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </Drawer>
    </section>
  );
}

export default Navbar;
