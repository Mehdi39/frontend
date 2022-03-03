import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";



const CoreValues = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col">
        <div className="text-center">
          <p className="text-orange-500 tracking-wider text-2xl mb-3">
            Why Choose Us
          </p>
          <h2 className="text-gray-600 tracking-wider text-5xl font-semibold underline">
            CORE VALUES
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="text-center flex flex-col items-center my-10 p-5 gap-3">
            <AiOutlineSafety className="text-8xl text-orange-500" />
            <h3 className="text-3xl">VERIFIED PROFESSIONALS</h3>
            <p className="text-gray-500">
              All our professinals are background checked and verified to ensure
              your complete safety.
            </p>
          </div>
          <div className="text-center flex flex-col items-center my-10 p-5 gap-3">
            <MdHealthAndSafety className="text-8xl text-orange-500" />
            <h3 className="text-3xl">INSURED WORK</h3>
            <p className="text-gray-500">
              To make sure your trust in us is a 100%, we provide insurance
              converage across our services. The insurance period & amount
              varies from service to service.
            </p>
          </div>
          <div className="text-center text-white rounded-lg flex flex-col items-center my-10 p-5 gap-3 bg-gradient-to-r from-orange-500 to-orange-700">
            <FaHandshake className="text-8xl hover:text-9xl" />
            <h3 className="text-3xl ">SATISFACTION GUARANTEED</h3>
            <p>
              We hire only the most qualified professionals to ensure high
              quality services, such that your satisfaction levels are always at
              a 100%.
            </p>
          </div>
          <div className="text-center flex flex-col items-center my-10 p-5 gap-3">
            <GiReceiveMoney className="text-8xl text-orange-500" />
            <h3 className="text-3xl">EASY PAYMENT</h3>
            <p className="text-gray-500 ">
              We ensure that you always have more to choose from! Housejoy
              provides cash, credit/debit card and net-banking facilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
