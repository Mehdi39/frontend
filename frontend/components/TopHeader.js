import { FiPhoneCall} from 'react-icons/fi'
import { MdMarkEmailUnread } from 'react-icons/md'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa'

const TopHeader = () => {
    return (
        <div className="flex justify-center lg:justify-between  py-3 border-b mx-5">
            <div className="lg:flex items-center hidden">
                <p>Your Trusted Freight Foward Provider!!</p>
            </div>
            <div className="flex flex-col items-center md:gap-5 md:flex-row">
                <div className="block"><FiPhoneCall className="inline text-orange-600 font-bold"/> Emergency Services: <span className="text-orange-600 font-bold">+88 02 55123243</span></div>
                <div><MdMarkEmailUnread className="inline text-orange-600 font-bold text-2xl" /> spport@<span className="text-orange-600 font-bold">blueocean</span>.com</div>
                <div className="md:flex text-3xl gap-2 text-sky-800 hidden">
                    <FaFacebookSquare className="hover:text-sky-400"/>
                    <FaLinkedin className="hover:text-sky-400"/>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;