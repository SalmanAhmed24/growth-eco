import OurStoryComp from "./ourStoryComp";

export const metadata = {
  title: "Our Story",
  description:
    "Full potential to your Amazon business with our powerhouse solutions",
};
function OurStory() {
  return (
    <section className="main-our-st-wrap">
      <OurStoryComp />
      <div className="cus-height"></div>
    </section>
  );
}

export default OurStory;
