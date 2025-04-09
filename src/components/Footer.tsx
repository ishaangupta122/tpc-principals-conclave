import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className='bg-black py-10'>
      <div className='container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-5 md:px-10'>
        <div>
          <Link to={"http://tpc.ac.in"} target='_blank'>
            <img src='./logo-white.png' className='h-40' alt='Logo' />
          </Link>
        </div>
        <div className='font-light text-white text-center md:text-left pt-4 md:pt-0'>
          <div className='flex justify-center md:justify-start items-start md:items-center gap-2 mt-1'>
            <MapPin className='w-5 h-5 mt-1 md:mt-0 text-white' />
            <span>
              P.O. BOX 1, Thapar Polytechnic College, Patiala, Punjab, India
            </span>
          </div>
          <div className='flex justify-center md:justify-start items-center gap-2 mt-2'>
            <Phone className='w-5 h-5 text-white' />
            <span>+91 99883-61230, +91 99883-71230</span>
          </div>
          <div className='flex justify-center md:justify-start items-center gap-2 mt-1'>
            <Mail className='w-5 h-5 text-white' />
            <Link to={"mailto:principaltpc@thapar.edu"}>
              principaltpc@thapar.edu
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
