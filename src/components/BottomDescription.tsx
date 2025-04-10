import React from "react";

const BottomDescription: React.FC = () => {
  return (
    <div className='container max-w-5xl mx-auto w-full py-10'>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-4 p-4 px-5 md:px-10'>
        <div className='w-fit'>
          <span className='italic agenda-title font-medium mb-5 text-6xl text-slate-800'>
            Build Your
            <br />
            <span className='not-italic uppercase'>Future</span>
          </span>
          <p className='text-slate-800 mt-5 font-light w-full md:w-[70%]'>
            Discover a pathway to success with our acclaimed diploma courses,
            backed by cutting-edge labs and expert faculty across diverse
            disciplines. Embrace excellence as we take on a journey of
            knowledge, skills, and endless opportunities. Your success story
            starts here!
          </p>
        </div>
        <img
          src='./shapes.png'
          alt='Pattern'
          className='h-64 max-h-[500px] w-full md:w-1/3 object-contain'
        />
      </div>
    </div>
  );
};

export default BottomDescription;
