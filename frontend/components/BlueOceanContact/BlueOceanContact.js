import Link from "next/link";
import React from "react";

const BlueOceanContact = () => {
  return (
    <footer className="tracking-wider">
      <section className="border-b border-white">
        <div className="my-12">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 text-center">
              GET THE LATEST OFFERS AND UPDATES
            </h3>
          </div>
          <div>
            <div>
              <form action="" className="flex my-4 flex justify-center">
                <input
                  className="p-1 md:w-2/4"
                  type="mail"
                  placeholder="ENTER MAIL ADDRESS"
                />
                <button class="mx-2 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:text-left text-center my-3 text-gray-700">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 lg:mt-6">
          <div className="my-5">
            <h3 className="text-2xl lg:mb-8">OUR SERVICES</h3>
            <div className="flex flex-col my-3">
              <Link href="/">
                <a>Air Freight</a>
              </Link>
              <Link href="/">
                <a>Ocean Freight</a>
              </Link>
              <Link href="/">
                <a>Customs</a>
              </Link>
              <Link href="/">
                <a>Transportation</a>
              </Link>
            </div>
          </div>
          <div className="my-5">
            <h3 className="text-2xl lg:mb-8">ABOUT US</h3>
            <div className="flex flex-col my-3 tracking-">
              <Link href="/">
                <a>About Company</a>
              </Link>
              <Link href="/">
                <a>Our Gallary</a>
              </Link>
              <Link href="/">
                <a>From Blog</a>
              </Link>
              <Link href="/">
                <a>Map Location</a>
              </Link>
            </div>
          </div>
          <div className="my-5">
            <h3 className="text-2xl lg:mb-8">OUR SERVICES</h3>
            <div className="flex flex-col my-3 tracking-">
              <Link href="/">
                <a>Air Freight</a>
              </Link>
              <Link href="/">
                <a>Ocean Freight</a>
              </Link>
              <Link href="/">
                <a>Customs</a>
              </Link>
              <Link href="/">
                <a>Transportation</a>
              </Link>
            </div>
          </div>
          <div className="my-5">
            <h3 className="text-xl lg:mb-8">WE’RE YOUR APPLIANCE AND HOME IMPROVEMENT EXPERTS.</h3>
            <div>
                <p className="text-lg mb-2">BOOK ONLINE OR CALL</p>
                <p className="text-2xl text-orange-500">+(84) 1755 - 123 668</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default BlueOceanContact;