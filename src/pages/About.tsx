const HeroSection = () => {
  return (
    <div className='h-[85vh] max-h-[600px] relative'>
      <img
        src='./img3.jpg'
        alt='TPC Image'
        className='h-full w-full object-cover'
      />
      <div className='absolute bg-black/10 z-10 h-full w-full inset-0'></div>
    </div>
  );
};

const PrincipalConclave = () => {
  return (
    <div className='py-12 mt-10' id='principals-conclave'>
      <div
        className='bg-cover bg-left bg-no-repeat container max-w-7xl mx-auto md:px-10 px-5'
        style={{ backgroundImage: "url('./pattern-bg.jpg')" }}>
        <p className='agenda-title flex flex-col gap-1 justify-center items-start font-semibold mb-10'>
          <span className='italic text-4xl '>
            Principal's
            <br />
            Conclave - 2025
          </span>
        </p>

        <div className='col-span-2'>
          <span className='text-3xl text-slate-700'>
            Educational Leadership Redefined:
          </span>
          <br />
          <span className='text-2xl text-slate-700'>
            A Conclave for Future Readiness
          </span>
          <p className='text-slate-800 mt-5 font-light'>
            In an era of rapid technological advancements and shifting
            educational paradigms, the role of academic leadership has never
            been more critical. Principals’ Conclave 2025 is a premier gathering
            of visionary education leaders, dedicated to redefining strategies
            for a future-ready learning ecosystem.
            <br />
            <br />
            The conclave serves as a dynamic platform for dialogue,
            collaboration, and innovation, bringing together principals,
            policymakers, and thought leaders to explore the evolving landscape
            of education. It aims to empower institutions with insights and best
            practices that drive academic excellence, industry relevance, and
            holistic student development.
            <br />
            <br />
            With the growing need to align education with real-world demands,
            this conclave fosters progressive discussions on rethinking
            traditional methodologies, integrating emerging trends, and
            enhancing institutional effectiveness. It is a step towards building
            agile and future-focused educational institutions that nurture
            talent, adaptability, and lifelong learning.
            <br />
            <br />
            At the heart of this event lies the vision to bridge the gap between
            education and employability, theory and practice, leadership, and
            execution. The conclave will provide a unique opportunity for
            networking, knowledge exchange, and strategic collaborations,
            ensuring that education leaders are well-equipped to drive
            meaningful change in their institutions and beyond.
            <br />
            <br />
            Join us in this transformative journey as we redefine educational
            leadership and shape the future of learning!
          </p>
        </div>
      </div>
    </div>
  );
};

const LeadersConclave = () => {
  return (
    <div className='custom-gradient py-16' id='leaders-conclave'>
      <div className='container max-w-7xl mx-auto md:px-10 px-5'>
        <p className='text-gray-50 agenda-title flex flex-col gap-1 justify-center items-start font-medium mb-10'>
          <span className='italic text-4xl '>
            A Conclave for Visionary
            <br />
            Educational Leaders
          </span>
        </p>

        <div className='col-span-2'>
          <p className='text-white mt-5 font-light'>
            Principals' Conclave 2025 is a premier platform designed to bring
            together forward-thinking School and Polytechnic Principals
            dedicated to shaping the future of learning. As key architects of
            academic excellence, principals and institutional heads play a
            crucial role in driving innovation, ensuring student success, and
            adapting to the ever-evolving educational landscape.
            <br />
            <br />
            This conclave offers a unique opportunity for knowledge exchange,
            allowing participants to engage in thought-provoking discussions,
            share best practices, and explore groundbreaking institutional
            strategies. The event will delve into emerging educational trends,
            transformative leadership methodologies, and industry-aligned
            learning approaches that prepare students for the challenges of the
            21st century.
            <br />
            <br />
            Beyond discussions, Principals' Conclave 2025 serves as a
            collaborative hub for networking and forming meaningful
            partnerships. It encourages dialogue among School and Polytechnic
            leaders from diverse educational backgrounds, paving the way for the
            development of progressive, inclusive, and future-ready
            institutions. Through interactive sessions, and expert panels,
            attendees will gain actionable insights to implement within their
            institutions, cultivating a culture of excellence and adaptability.
            <br />
            <br />
            More than just a talk, this conclave is a collective movement toward
            redefining educational leadership—bridging the gap between
            traditional methodologies and the evolving demands of a globalized,
            technology-driven world.
          </p>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <PrincipalConclave />
      <LeadersConclave />
    </>
  );
};

export default AboutPage;
