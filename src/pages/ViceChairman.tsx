const ViceChairman = () => {
  return (
    <>
      <div className='w-full'>
        <div
          className='w-full'
          style={{ background: "url(/dark-bg.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-10 py-14 px-10 '>
            <div>
              <img
                src='./vice_chairman_rounded.png'
                className='max-h-[400px] lg:h-[80vh] md:h-[60vh] w-full object-contain'
                alt="Director's Image"
              />
            </div>
            <div className='text-white'>
              <p className='playfair font-semibold text-4xl md:text-6xl mt-4 mb-1'>
                VICE CHAIRMAN
              </p>
              <p className='playfair italic text-3xl md:text-4xl'>
                - DR. GURBINDER SINGH
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-7xl">
          <div className='px-5 md:px-10 py-20'>
            <div className='text-slate-800 font-light flex flex-col gap-4'>
              <span className='agenda-title italic text-4xl mb-5 font-medium'>
                Vice Chairman's Message
              </span>
              <div className='text-justify'>
                <p>
                  Education today is not just about imparting knowledge; it is
                  about equipping students with the skills and mindset to thrive
                  in a rapidly evolving world. The Principals' Conclave 2025
                  serves as a platform to reimagine our approach to learning,
                  ensuring it remains relevant, future-focused, and impactful.
                </p>
                <br />
                <p>
                  Traditional teaching methods must evolve to meet the changing
                  demands of industry and society. Skill-based and outcome-driven
                  education is the way forward—shifting our focus from rote
                  learning to critical thinking, adaptability, and hands-on
                  problem-solving. The real measure of education lies not in
                  grades but in the ability to apply knowledge to real-world
                  challenges.
                </p>
                <br />
                <p>
                  As educators, we are the architects of transformation. Our
                  collective responsibility is to bridge the gap between academia
                  and industry, ensuring that students graduate not just with
                  degrees, but with confidence, competence, and career readiness.
                  Through collaboration and innovation, we can create an education
                  system that truly prepares students for the future.
                </p>
                <br />
                <p>
                  This conclave is an opportunity to exchange ideas, challenge
                  outdated norms, and drive meaningful change. Your insights and
                  leadership will be instrumental in building a stronger, more
                  dynamic education ecosystem.
                </p>
                <br />
                <p>Wishing you all a thought-provoking and enriching conclave!</p>
              </div>
            </div>
            <p className='mt-8 text-right text-slate-700'>
              <span className='text-2xl font-semibold text-red-600'>
                Dr. Gurbinder Singh
              </span>
              <br />
              <span className='font-light mt-2'>
                Vice Chairman, Managing Committee
                <br />
                Registrar, TIET
                <br />
                Director, LMTSM
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViceChairman;
