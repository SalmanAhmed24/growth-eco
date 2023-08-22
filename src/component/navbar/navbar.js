"use client";
import Image from "next/image";
import "./navbar.scss";
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
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
  return (
    <section className={poppins.className}>
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
                  path == "/aboutUs" ||
                  path == "/ourStory" ||
                  path == "/ourTeam"
                    ? "activeLink"
                    : ""
                }
                href={"/aboutUs"}
              >
                About Us +
              </Link>
              <div className="drop-div">
                <div className="droplist">
                  <Link
                    className={path == "/ourStory" ? "activeInner" : ""}
                    href={"/ourStory"}
                  >
                    Our Story
                  </Link>
                  <Link
                    className={path == "/ourTeam" ? "activeInner" : ""}
                    href={"/ourTeam"}
                  >
                    Our Team
                  </Link>
                </div>
              </div>
            </div>
            <div className="nav-link-wraps dropdown-wrap">
              <Link
                className={
                  path == "/capabilities" ||
                  path == "/product-sourcing" ||
                  path == "/listing-reinstatement" ||
                  path == "/amazon-advertising" ||
                  path == "/amazon-content" ||
                  path == "/done-amazon" ||
                  path == "/product-research" ||
                  path == "/brand-storefront" ||
                  path == "/account-suspension"
                    ? "activeLink"
                    : ""
                }
                href={"/capabilities"}
              >
                Capabilities +
              </Link>
              <div className="drop-div">
                <div className="droplist">
                  <Link
                    className={path == "/product-sourcing" ? "activeInner" : ""}
                    href={"/product-sourcing"}
                  >
                    Product Sourcing
                  </Link>
                  <Link
                    className={
                      path == "/listing-reinstatement" ? "activeInner" : ""
                    }
                    href={"/listing-reinstatement"}
                  >
                    Listing Reinstatement
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
                    className={path == "/amazon-content" ? "activeInner" : ""}
                    href={"/amazon-content"}
                  >
                    Amazon Content
                  </Link>
                  <Link
                    className={path == "/done-amazon" ? "activeInner" : ""}
                    href={"/done-amazon"}
                  >
                    Amazon Done
                  </Link>
                  <Link
                    className={path == "/product-research" ? "activeInner" : ""}
                    href={"/product-research"}
                  >
                    Product Research
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
            <div className="nav-link-wraps">
              <Link
                className={path == "/blog" ? "activeLink" : ""}
                href={"/blog"}
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
        <div className="menu-bars-wrap">
          {mobileNav ? (
            <p
              onClick={handleMobileNav}
              className={`${poppins.className} close`}
            >
              x
            </p>
          ) : (
            <Image
              alt="growth eco"
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
          <div className="innerLinks">
            <div className="nav-link-wraps">
              <Link
                onClick={() => setMobileNav(false)}
                className={path == "/" ? "activeLink" : ""}
                href={"/"}
              >
                Home
              </Link>
            </div>
            <div className="nav-link-wraps dropdown-wrap">
              <Link
                onClick={() => setMobileNav(false)}
                className={
                  path == "/aboutUs" ||
                  path == "/ourStory" ||
                  path == "/ourTeam"
                    ? "activeLink"
                    : ""
                }
                href={"/aboutUs"}
              >
                About Us +
              </Link>
              <div className="drop-div">
                <Link
                  onClick={() => setMobileNav(false)}
                  className={path == "/ourStory" ? "activeInner" : ""}
                  href={"/ourStory"}
                >
                  Our Story
                </Link>
                <Link
                  onClick={() => setMobileNav(false)}
                  className={path == "/ourTeam" ? "activeInner" : ""}
                  href={"/ourTeam"}
                >
                  Our Team
                </Link>
              </div>
            </div>

            <div className="nav-link-wraps dropdown-wrap">
              <Link
                onClick={() => setMobileNav(false)}
                className={
                  path == "/capabilities" ||
                  path == "/product-sourcing" ||
                  path == "/listing-reinstatement" ||
                  path == "/amazon-advertising" ||
                  path == "/amazon-content" ||
                  path == "/done-amazon" ||
                  path == "/product-research" ||
                  path == "/brand-storefront" ||
                  path == "/account-suspension"
                    ? "activeLink"
                    : ""
                }
                href={"/capabilities"}
              >
                Capabilities +
              </Link>
              <div className="drop-div">
                <Link
                  onClick={() => setMobileNav(false)}
                  className={path == "/product-sourcing" ? "activeInner" : ""}
                  href={"/product-sourcing"}
                >
                  Product Sourcing
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
                <Link
                  onClick={() => setMobileNav(false)}
                  className={path == "/amazon-advertising" ? "activeInner" : ""}
                  href={"/amazon-advertising"}
                >
                  Amazon Advertising
                </Link>
                <Link
                  onClick={() => setMobileNav(false)}
                  className={path == "/amazon-content" ? "activeInner" : ""}
                  href={"/amazon-content"}
                >
                  Amazon Content
                </Link>
                <Link
                  onClick={() => setMobileNav(false)}
                  className={path == "/done-amazon" ? "activeInner" : ""}
                  href={"/done-amazon"}
                >
                  Amazon Done
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
              </div>
            </div>
            <div className="nav-link-wraps">
              <Link
                onClick={() => setMobileNav(false)}
                className={path == "/case-studies" ? "activeLink" : ""}
                href={"/case-studies"}
              >
                Case Studies
              </Link>
            </div>
            <div className="nav-link-wraps">
              <Link
                onClick={() => setMobileNav(false)}
                className={path == "/blog" ? "activeLink" : ""}
                href={"/blog"}
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Navbar;
