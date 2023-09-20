import { Poppins } from "next/font/google";
import CaseStudies from "./case-studies";
const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Case Studies",
  description:
    "Amazon Services to Maximize Business Growth. Trusted solutions for sales, marketing, and fulfillment. Elevate your success on the Amazon platform.",
};
function CaseStudiesPage() {
  return (
    <section>
      <CaseStudies />
    </section>
  );
}

export default CaseStudiesPage;
