import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OurStoryLink = () => {
  return (
    <div
      className='h-screen max-h-[800px] bg-cover bg-center no-repeat flex flex-col justify-end px-5 md:px-10'
      style={{ backgroundImage: "url('/img2.jpg')" }}>
      <div className='container mx-auto max-w-7xl'>
        <div className='p-10 bg-black/80 text-white md:w-[40%]'>
          <p className='playfair text-4xl'>
            <span className='italic'>Our</span> STORY
          </p>
          <p className='mt-4 text-sm font-light opacity-80'>
            Established in 1956 under the Thapar Education Trust, Thapar
            Polytechnic College (TPC), Patiala, is a Government-Aided Institute
            and a pioneer in technical education. With a rich history of
            producing skilled professionals, the college has consistently set
            benchmarks in academic excellence, industry collaboration,
            skill-based learning, and innovation-driven education.
          </p>
          <Link
            className='text-amber-500 mt-4 flex items-center'
            to='/about#our-story'>
            Read More <ArrowRight className='ml-2' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurStoryLink;
