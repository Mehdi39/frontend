import Link from 'next/link';
import React from 'react';
import { FiRepeat } from 'react-icons/fi';
import { GiCommercialAirplane, GiFastForwardButton } from 'react-icons/gi'

const ServiceComponent = () => {
    return (
        <div>
            <div style={{
                backgroundImage: 'url("https://fiata.org/fileadmin/_processed_/7/a/csm_air_8e8a431f8c.jpg")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }} >
                <GiCommercialAirplane className="text-8xl text-white"/>
            </div>
            <div className="w-full">
                <Link href="/services" className="">
                    <button className="flex items-center justify-between">Hello <GiFastForwardButton className="text-8xl text-red-500"/></button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceComponent;