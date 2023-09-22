import { Poppins } from "next/font/google";
import Capabilities from "./capabilities";
const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Amazon Services to Grow Your Business",
  description:
    "Amazon Services to Maximize Business Growth. Trusted solutions for sales, marketing, and fulfillment. Elevate your success on the Amazon platform.",
};
function CapabilitiesPage() {
  return (
    <section>
      <Capabilities refreshFlag={true} />
    </section>
  );
}

export default CapabilitiesPage;
