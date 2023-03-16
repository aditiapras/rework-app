import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import Signin from "./signin";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Signin />
      <Footer />
    </>
  );
}
