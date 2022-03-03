import Link from "next/link";
import Image from "next/image";
import Logo_1 from "../public/Logo_1.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiFillCaretDown } from "react-icons/ai";

const Nav = () => {
    return (
        <div className="border-b">
        <div className="flex justify-between items-center mx-7 my-4 border-b">
          <div className="text-5xl lg:hidden">
            <HiMenuAlt1 />
          </div>
          <div className="md:pl-5">
            <Link href="/">
              <Image
                className="cursor-pointer"
                alt="BlueOcean Logo"
                src={Logo_1}
                width={80}
                height={55}
              />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex gap-8">
              <li className="hover:text-orange-500">
                <Link href="/services">
                  <button className="active:">
                    Services <AiFillCaretDown className="inline text-gray-400" />
                  </button>
                </Link>
              </li>
              <li className="hover:text-orange-500">
                <Link href="/tools">
                  <button className="active:">
                    Tools <AiFillCaretDown className="inline text-gray-400" />
                  </button>
                </Link>
              </li>
              <li className="hover:text-orange-500">
                <Link href="/aboutus">
                  <button>About Us</button>
                </Link>
              </li>
              <li className="hover:text-orange-500">
                <Link href="/shipmenttracking">
                  <button className="active:">
                    Shipment Tracking
                    <AiFillCaretDown className="inline text-gray-400" />
                  </button>
                </Link>
              </li>
              <li className="hover:text-orange-500">
                <Link href="/contact">
                  <button className="active:">Contact </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded">
              QUOTE
            </button>
          </div>
        </div>
      </div>
    );
};

export default Nav;