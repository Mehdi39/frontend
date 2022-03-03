import Image from 'next/image';
import AirFreight from '../../public/AirFreight.jpg'

const WhatWeDo = () => {
  return (
    <div className="container mx-auto">
      <div>
          <Image alt="Slider pictures" src={AirFreight}/>
      </div>
      <div className="mx-3 my-9 lg:grid lg:grid-cols-3  ">
        <div className="mb-5 ">
          <p className="text-xl text-orange-500">What We Do</p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-wider text-gray-600">
            THE BEST FREIGHT FORWARDER
          </h2>
        </div>
        <div className="p-4">
          <div className="mb-3">
            <h3 className="text-gray-400 mb-2 font-semibold">OUR MISSION</h3>
            <p className="tracking-wider mb-3 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quisquam, eveniet laudantium iusto explicabo, accusantium corrupti
              fuga ratione odit velit amet consectetur voluptas porro!
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-gray-400 mb-2 font-semibold">OUR VISION</h3>
            <p className="tracking-wider mb-3 text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              itaque iste fuga ratione dolores qui in, doloremque hic. Officia
              repellendus possimus nisi quisquam!
            </p>
          </div>
        </div>
        <div className="p-4">
          <p className="tracking-wider text-gray-500">
            If you have any questions or need help, feel free to contact with
            our team.
          </p>
          <h2 className="text-orange-500 text-4xl font-bold my-5 lg:my-10">
            +88 02 55123243
          </h2>
          <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded">
            QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
