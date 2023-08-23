"use client";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Link from "next/link";
import "./style.scss";
import Image from "next/image";
import React, { useState } from "react";
import BackToTop from "@/component/backToTop";
// const futuraHv = localFont({
//   src: "../fonts/FuturaHeavyBT.ttf",
//   weight: "400",
//   style: "normal",
// });
// const futuraBK = localFont({
//   src: "../fonts/FutuBk.ttf",
//   weight: "400",
//   style: "normal",
// });
// const futuraMDBT = localFont({
//   src: "../fonts/FutuMd.ttf",
//   weight: "400",
//   style: "normal",
// });
// const futuraLTBT = localFont({
//   src: "../fonts/FuturaLtBT.ttf",
//   weight: "400",
//   style: "normal",
// });
const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
function Blog() {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    console.log("this is test");
  };
  return (
    <section className="blog-con">
      <BackToTop route={"#home"} />
      <header className="blog-header">
        <h1 className={poppins.className}>Welcome To</h1>
        <Image
          alt="growth eco"
          src={"/blog-main-img.png"}
          className="blog-img"
          width={1400}
          height={228}
        />
        <Image
          alt="growth eco"
          src={"/mobile-blog-img.png"}
          className="blog-img-m"
          width={272}
          height={174}
        />
        <h1 className={poppins.className}>
          Explore the world through knowledge and inspiration.
        </h1>
        <Link href={"/"} className={`${poppins.className} exp-link`}>
          Explore More
        </Link>
      </header>
      <section className="main-blogs-wrap">
        <div className="main-article">
          <Image
            alt="growth eco"
            src={"/sub-blog-big.png"}
            width={590}
            height={370}
          />
          <p className={`${poppins.className} date`}>12-JUNE-2023</p>
          <h1 className={poppins.className}>
            The Power of Amazon Advertising Solutions
          </h1>
          <p className={`${poppins.className} main-para`}>
            We were contacted by a multinational consumer personal healthcare
            brand to help manage their Amazon Vendor Central account. Our client
            had only achieved 8% growth in year-over-year sales, which was
            disproportionate to growth within the category and on Amazon in
            general. The audit of their account identified specific areas for
            improvement that we prioritized.
          </p>
        </div>
        <div className="sub-articles">
          <div className="each-article">
            <Image
              alt="growth eco"
              className="art"
              width={244}
              height={166}
              src={"/sub-blog-small.png"}
            />
            <div className="info-con">
              <p className={`${poppins.className} date`}>12-JUNE-2023</p>
              <h1 className={poppins.className}>
                Basics of Amazon Bidding! What Influences CPC in 2023?
              </h1>
              <p className={`${poppins.className} sub-para`}>
                We were contacted by a multinational consumer personal
                healthcare brand to help manage their Amazon Vendor Central.
              </p>
              <Link href={"/"} className={`${poppins.className} read-more-p`}>
                READ MORE
                <Image
                  alt="growth eco"
                  src={"/read-para-arr.png"}
                  width={33}
                  height={8}
                />
              </Link>
            </div>
          </div>
          <div className="each-article">
            <Image
              alt="growth eco"
              className="art"
              width={244}
              height={166}
              src={"/sub-blog-small.png"}
            />
            <div className="info-con">
              <p className={`${poppins.className} date`}>12-JUNE-2023</p>
              <h1 className={poppins.className}>
                Basics of Amazon Bidding! What Influences CPC in 2023?
              </h1>
              <p className={`${poppins.className} sub-para`}>
                We were contacted by a multinational consumer personal
                healthcare brand to help manage their Amazon Vendor Central.
              </p>
              <Link href={"/"} className={`${poppins.className} read-more-p`}>
                READ MORE
                <Image
                  alt="growth eco"
                  src={"/read-para-arr.png"}
                  width={33}
                  height={8}
                />
              </Link>
            </div>
          </div>
          <div className="each-article">
            <Image
              alt="growth eco"
              className="art"
              width={244}
              height={166}
              src={"/sub-blog-small.png"}
            />
            <div className="info-con">
              <p className={`${poppins.className} date`}>12-JUNE-2023</p>
              <h1 className={poppins.className}>
                Basics of Amazon Bidding! What Influences CPC in 2023?
              </h1>
              <p className={`${poppins.className} sub-para`}>
                We were contacted by a multinational consumer personal
                healthcare brand to help manage their Amazon Vendor Central.
              </p>
              <Link href={"/"} className={`${poppins.className} read-more-p`}>
                READ MORE
                <Image
                  alt="growth eco"
                  src={"/read-para-arr.png"}
                  width={33}
                  height={8}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-sell-wrap">
        <h1 className={poppins.className}>Selling on Amazon</h1>
        <div className="card-wraper">
          <div className="cards">
            <Image
              alt="growth eco"
              src={"/grey-img.png"}
              width={276}
              height={258}
            />
            <p className={`${poppins.className} date`}>12-JUNE-2023</p>
            <h1 className={poppins.className}>
              Advanced Advertising Tips for Amazon Sellers
            </h1>
            <p className={`${poppins.className} info`}>
              We were contacted by a multinational consumer personal healthcare
              brand to help manage their Amazon Vendor Central account. Our
              client had only achieve.
            </p>
            <Link
              href={"/"}
              className={`${poppins.className} read-more-para-blue`}
            >
              Read More
              <Image
                alt="growth eco"
                src={"/read-para-blue.png"}
                width={33}
                height={8}
              />
            </Link>
          </div>
          <div className="cards">
            <Image
              alt="growth eco"
              src={"/grey-img.png"}
              width={276}
              height={258}
            />
            <p className={`${poppins.className} date`}>12-JUNE-2023</p>
            <h1 className={poppins.className}>
              Advanced Advertising Tips for Amazon Sellers
            </h1>
            <p className={`${poppins.className} info`}>
              We were contacted by a multinational consumer personal healthcare
              brand to help manage their Amazon Vendor Central account. Our
              client had only achieve.
            </p>
            <Link
              href={"/"}
              className={`${poppins.className} read-more-para-blue`}
            >
              Read More
              <Image
                alt="growth eco"
                src={"/read-para-blue.png"}
                width={33}
                height={8}
              />
            </Link>
          </div>
          <div className="cards">
            <Image
              alt="growth eco"
              src={"/grey-img.png"}
              width={276}
              height={258}
            />
            <p className={`${poppins.className} date`}>12-JUNE-2023</p>
            <h1 className={poppins.className}>
              Advanced Advertising Tips for Amazon Sellers
            </h1>
            <p className={`${poppins.className} info`}>
              We were contacted by a multinational consumer personal healthcare
              brand to help manage their Amazon Vendor Central account. Our
              client had only achieve.
            </p>
            <Link
              href={"/"}
              className={`${poppins.className} read-more-para-blue`}
            >
              Read More
              <Image
                alt="growth eco"
                src={"/read-para-blue.png"}
                width={33}
                height={8}
              />
            </Link>
          </div>
          <div className="cards">
            <Image
              alt="growth eco"
              src={"/grey-img.png"}
              width={276}
              height={258}
            />
            <p className={`${poppins.className} date`}>12-JUNE-2023</p>
            <h1 className={poppins.className}>
              Advanced Advertising Tips for Amazon Sellers
            </h1>
            <p className={`${poppins.className} info`}>
              We were contacted by a multinational consumer personal healthcare
              brand to help manage their Amazon Vendor Central account. Our
              client had only achieve.
            </p>
            <Link
              href={"/"}
              className={`${poppins.className} read-more-para-blue`}
            >
              Read More
              <Image
                alt="growth eco"
                src={"/read-para-blue.png"}
                width={33}
                height={8}
              />
            </Link>
          </div>
        </div>
        <div className="load-more-wrapper">
          <Link href={"/"} className={`${poppins.className} link-lean-more`}>
            Load More
          </Link>
        </div>
      </section>
      <section className="news-letter">
        <h1 className={poppins.className}>
          Receive Our Content Straight to Your Inbox
        </h1>
        <input
          type="email"
          placeholder="Email"
          className={`${poppins.className} news-letter-cus`}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="submit-btn">
          <Link
            href={"/"}
            className={`${poppins.className} news-sub`}
            onClick={handleSubmit}
          >
            Get Our Newsletter
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Blog;
