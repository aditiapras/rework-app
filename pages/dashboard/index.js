import Footer from "@/components/Footer";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col justify-center w-full items-center gap-3 border h-screen py-16">
        <div className="w-2/3">
          <h1 className="font-bold text-3xl mt-2">Dashboard</h1>
        </div>
        <div className="flex w-2/3 h-full  rounded-xl ">
          <div className="flex flex-col justify-between border-r-2  w-1/6 px-3 py-5">
            <div className="flex flex-col items-start w-full gap-7">
              <Link href="#">
                <div className="group flex items-center gap-2 w-full">
                  <FaPlusCircle className="group-hover:text-blue-600"></FaPlusCircle>
                  <h1 className="text-xl font-bold group-hover:text-blue-600">
                    Input Barcode
                  </h1>
                </div>
              </Link>
              <Link href="#">
                <div className="group flex items-center gap-2 w-full">
                  <FaPlusCircle className="group-hover:text-blue-600"></FaPlusCircle>
                  <h1 className="text-xl font-bold group-hover:text-blue-600">
                    Performance
                  </h1>
                </div>
              </Link>
              <Link href="#">
                <div className="group flex items-center gap-2 w-full">
                  <FaPlusCircle className="group-hover:text-blue-600"></FaPlusCircle>
                  <h1 className="text-xl font-bold group-hover:text-blue-600">
                    View Sheet
                  </h1>
                </div>
              </Link>
            </div>
            <div className="">
              <Link href="#">
                <div className="group flex items-center gap-2 w-full">
                  <FaSignOutAlt className="group-hover:text-blue-600"></FaSignOutAlt>
                  <h1 className="text-xl font-bold group-hover:text-blue-600">
                    Sign out
                  </h1>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex w-5/6 p-2 border-dashed border ml-2 rounded-xl">
            {/* Component Place */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
