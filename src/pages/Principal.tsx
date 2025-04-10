const Principal = () => {
  return (
    <>
      <div className='w-full'>
        <div
          className='w-full'
          style={{ background: "url(/dark-bg.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-10 py-14 px-10 '>
            <div>
              <img
                src='./principal_rounded.png'
                className='max-h-[500px] lg:h-[80vh] md:h-[60vh] w-full object-contain'
                alt="Director's Image"
              />
            </div>
            <div className='text-white'>
              <p className='playfair italic text-3xl md:text-4xl'>
                Education Leadership Redefined: <br />
                Invitation from the
              </p>
              <p className='playfair font-semibold text-4xl md:text-6xl mt-4 mb-1'>
                PRINCIPAL
              </p>
              <p className='playfair italic text-3xl md:text-4xl'>
                - DR. ANKUSH KANSAL
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-7xl">
          <div className='px-5 md:px-10 py-20'>
            <div className='text-slate-800 font-light flex flex-col gap-4'>
              <span className='agenda-title italic text-4xl mb-5 font-medium'>
                Principal's Message
              </span>
              <div className='text-justify'>
                <p>
                  Education stands at a transformative juncture where traditional
                  methods must evolve to meet the ever-changing demands of the
                  modern world. As educators, we have the collective
                  responsibility to equip students with skills that go beyond
                  academics, preparing them for real-world challenges. This
                  requires a shift towards innovative learning approaches that
                  align with industry expectations and foster holistic
                  development.
                </p>
                <br />
                <p>
                  In this spirit, I am delighted to invite you to the Principals'
                  Conclave 2025, a gathering of over 125+ esteemed Principals from
                  schools and polytechnics across multiple states. This conclave
                  serves as a platform to exchange ideas, collaborate on
                  progressive strategies, and drive meaningful change in
                  education.
                </p>
                <br />
                <p>
                  Our discussions will focus on two key themes: "Outcome-Based
                  Learning: Shifting the Focus from Academics to Real-World
                  Competencies," which explores how education can evolve to
                  prioritize real-world skills and measurable outcomes over
                  traditional academic performance and "From College to Corporate:
                  Bridging the Gap with Skill-Based Learning," which highlights
                  the importance of practical skills, adaptability, and
                  problem-solving in enhancing employability and preparing
                  students for the professional world.
                </p>
                <br />
                <p>
                  Your insights and participation will play a pivotal role in
                  shaping a future-ready education system. I look forward to
                  engaging discussions, valuable takeaways, and collaborative
                  efforts that will redefine the educational landscape.
                </p>
              </div>
            </div>
            <p className='mt-8 text-right text-slate-700'>
              <span className='font-light'>Warm regards,</span>
              <br />
              <span className='text-2xl font-semibold text-red-600'>
                Dr. Ankush Kansal
              </span>
              <br />
              <span className='font-light mt-2'>
                Principal, Thapar Polytechnic College
                <br />
                Patiala, Punjab
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Principal;
