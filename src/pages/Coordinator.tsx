const Coordinator = () => {
  return (
    <>
      <div className='w-full'>
        <div
          className='w-full'
          style={{ background: "url(/dark-bg.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-10 py-14 px-10 '>
            <div>
              <img
                src='./coordinator_rounded.png'
                className='max-h-[400px] lg:h-[80vh] md:h-[60vh] w-full object-contain'
                alt="Director's Image"
              />
            </div>
            <div className='text-white'>
              <p className='playfair font-semibold text-4xl md:text-6xl mt-4 mb-1'>
                COORDINATOR
              </p>
              <p className='playfair italic text-3xl md:text-4xl'>
                - DR. DWARIKA NATH RATHA
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-7xl">
          <div className='px-5 md:px-10 py-20'>
            <div className='text-slate-800 font-light flex flex-col gap-4'>
              <span className='agenda-title italic text-4xl mb-5 font-medium'>
                Coordinator's Message
              </span>
              <div className='text-justify'>
                <p>
                  Education is the cornerstone of progress, and as leaders in
                  academia, we must constantly adapt to ensure our students are
                  prepared for the challenges ahead. The Principals' Conclave 2025
                  is a unique opportunity to explore innovative approaches that
                  will redefine the way we teach, learn, and build future-ready
                  professionals.
                </p>
                <br />
                <p>
                  As an educator and engineer, I have always believed that
                  knowledge without application is incomplete. Today's world
                  demands more than just theoretical understanding—it requires
                  practical skills, problem-solving abilities, and an
                  industry-aligned mindset. The transition from education to
                  employment must be seamless, equipping students with both
                  technical expertise and real-world adaptability.
                </p>
                <br />
                <p>
                  This conclave encourages us to move beyond conventional methods
                  and embrace skill-based and outcome-driven learning. By focusing
                  on experiential education, project-based learning, and
                  interdisciplinary collaboration, we can ensure that students are
                  not just degree-holders but solution-driven professionals who
                  contribute meaningfully to society.
                </p>
                <br />
                <p>
                  I extend my gratitude to all the principals and academic leaders
                  present here. Your dedication to shaping young minds is
                  commendable. Let us use this platform to share insights, foster
                  collaboration, and drive impactful changes that will elevate
                  education to new heights.
                </p>
                <br />
                <p>
                  Looking forward to a stimulating and transformative dialogue!
                </p>
              </div>
            </div>
            <p className='mt-8 text-right text-slate-700'>
              <span className='text-2xl font-semibold text-red-600'>
                Dr. Dwarika Nath Ratha
              </span>
              <br />
              <span className='font-light mt-2'>
                Professor, Civil Engineering, TIET
                <br />
                Coordinator, Thapar Polytechnic College
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coordinator;
