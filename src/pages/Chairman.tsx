const Chairman = () => {
  return (
    <>
      <div className='w-full'>
        <div
          className='w-full'
          style={{ background: "url(/dark-bg.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-10 py-14 px-10 '>
            <div>
              <img
                src='./chairman_rounded.png'
                className='max-h-[400px] lg:h-[80vh] md:h-[60vh] w-full object-contain'
                alt="Director's Image"
              />
            </div>
            <div className='text-white'>
              <p className='playfair font-semibold text-4xl md:text-6xl mt-4 mb-1'>
                CHAIRMAN
              </p>
              <p className='playfair italic text-3xl md:text-4xl'>
                - SH. ANIL BHARGAVA
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-7xl">
          <div className='px-5 md:px-10 py-20'>
            <div className='text-slate-800 font-light flex flex-col gap-4'>
              <span className='agenda-title italic text-4xl mb-5 font-medium'>
                Chairman's Message
              </span>
              <div className='text-justify'>
                <p>
                  Education and industry are two sides of the same coin—one shapes
                  minds, the other refines them. As an industry professional, I
                  have witnessed firsthand how the gap between academic learning
                  and workplace expectations continues to challenge both employers
                  and graduates. The Principals' Conclave 2025 is a crucial step
                  toward bridging this divide, fostering a future-ready education
                  system that aligns with industry needs.
                </p>
                <br />
                <p>
                  Today's world demands more than theoretical knowledge.
                  Employability is driven by skills, adaptability, and
                  problem-solving abilities. The shift from traditional education
                  to skill-based and outcome-driven learning is no longer
                  optional—it is essential. This conclave is a platform to
                  redefine education, ensuring that our students graduate not just
                  with degrees but with industry-relevant competencies that
                  empower them to excel in the real world.
                </p>
                <br />
                <p>
                  The session "Understanding Outcome-Based Learning: A Shift from
                  Traditional Education" and "From College to Corporate: How
                  Skill-Based Learning Enhances Employability" will provoke
                  critical discussions, offering tangible strategies to create an
                  education system that produces not just job seekers but future
                  leaders, innovators, and problem-solvers.
                </p>
                <br />
                <p>
                  I commend all participating principals and education leaders for
                  your dedication to shaping the next generation. Let this
                  conclave be a space for bold ideas, meaningful collaborations,
                  and actionable reforms that redefine education's role in
                  nation-building.
                </p>
                <br />
                <p>
                  I look forward to an insightful and impactful exchange of ideas.
                </p>
              </div>
            </div>
            <p className='mt-8 text-right text-slate-700'>
              <span className='text-2xl font-semibold text-red-600'>
                Sh. Anil Bhargava
              </span>
              <br />
              <span className='font-light mt-2'>
                Chairman, Managing Committee
                <br />
                Thapar Polytechnic College, Patiala
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chairman;
