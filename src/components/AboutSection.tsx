import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div>
      {/* About Section */}
      <div
        className='bg-cover bg-center py-32'
        style={{ backgroundImage: "url('./line-bg.jpg')" }}>
        <div className='container max-w-7xl mx-auto md:px-10 px-5'>
          <div className='w-full flex flex-wrap md:flex-nowrap items-center justify-between mb-10'>
            <p className='text-4xl font-semibold playfair '>
              <span className='italic'>About the</span> EVENT
            </p>

            <Link
              className='text-xl text-red-600 mt-4 flex items-center justify-center gap-2 hover:underline'
              to='/about'>
              Read More
              <ArrowRight className='mt-1' />
            </Link>
          </div>

          <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
            {/* Paragraph 1 */}
            <div className='p-5 border border-slate-400 shadow custom-gradient'>
              <h1 className='logo-title uppercase text-2xl font-medium text-slate-100 mb-4'>
                Principals' Conclave 2025
              </h1>
              <p className='logo-title italic font-light text-slate-100 mb-3 text-lg'>
                Educational Leadership Redefined:
                <br />A Conclave for Future Readiness
              </p>
              <p className='text-slate-100 font-light'>
                In an era of rapid technological advancements and shifting
                educational paradigms, the role of academic leadership has never
                been more critical. Principals’ Conclave 2025 is a premier
                gathering of visionary education leaders, dedicated to
                redefining strategies for a future-ready learning ecosystem.
              </p>
            </div>

            {/* Paragraph 2 */}
            <div className='p-5 border border-slate-400 shadow custom-gradient'>
              <h1 className='logo-title uppercase text-2xl font-medium text-slate-100 mb-4'>
                A Conclave for Visionary Educational Leaders
              </h1>
              <p className='text-slate-100 font-light'>
                In an era of rapid technological advancements and shifting
                educational paradigms, the role of academic leadership has never
                been more critical. Principals’ Conclave 2025 is a premier
                gathering of visionary education leaders, dedicated to
                redefining strategies for a future-ready learning ecosystem.
              </p>
            </div>
          </div>

          <div className='p-6 md:col-span-3 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 mt-8 custom-gradient'>
            {/* Date Section */}
            <div className='flex items-center gap-4 text-white'>
              <div className='p-3 rounded-full bg-black'>
                <Calendar size={24} strokeWidth={1.5} />
              </div>
              <p className='text-lg md:text-xl'>17 APRIL, 2025</p>
            </div>

            {/* Location Section */}
            <div className='flex items-center gap-4 text-white md:text-left'>
              <div className='p-3 rounded-full bg-black'>
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <p className='text-lg md:text-xl'>
                Auditorium, Thapar Institute of{" "}
                <br className='hidden md:block' />
                Engineering & Technology, Patiala
              </p>
            </div>

            {/* Register Now Button */}
            <div className='lg:mt-0 sm:mt-5 animate-bounce hover:animate-none'>
              <Link
                to='https://docs.google.com/forms/d/e/1FAIpQLSf1MfY8H_wI_NBAeV1-wRQ_I5MzYGH88I9S-qBoG2POeg6WEA/viewform'
                target='_blank'
                className='px-6 py-3 bg-black text-white font-semibold hover:shadow-lg rounded-lg'>
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
