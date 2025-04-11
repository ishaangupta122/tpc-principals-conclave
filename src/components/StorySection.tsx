const StorySection = () => {
  return (
    <div
      className="container max-w-7xl mx-auto py-14 md:px-10 px-5"
      id="our-story">
      <p className="agenda-title flex flex-col gap-1 justify-center items-start font-semibold mb-10">
        <span className="italic text-3xl ">
          Thapar Polytechnic College, Patiala:
        </span>
        <span className="italic text-2xl text-slate-700">
          A Legacy of Excellence in Technical Education
        </span>
      </p>

      <div className="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row justify-between items-start gap-8 bg-white col-span-2">
        <p className="text-slate-950 font-light w-full">
          Established in 1956 under the Thapar Education Trust, Thapar
          Polytechnic College (TPC), Patiala, is a Government-Aided Institute
          and a pioneer in technical education. With a rich history of producing
          skilled professionals, the college has consistently set benchmarks in
          academic excellence, industry collaboration, skill-based learning, and
          innovation-driven education.
          <br />
          <br />
          Thapar Polytechnic College (TPC) has received several prestigious
          awards, including the title of Best Polytechnic in the Northern Region
          for the years 1999-2000 and 2005-06. The college has maintained 100%
          admissions year after year, while its annual techno-cultural festival,
          TechUtsav, has become a landmark event featuring participation from
          over 60 schools. Principal Dr. Ankush Kansal was honored with the
          National Award for Best Principal by ISTE for 2022-23. Faculty members
          hold patents, contributing significantly to research and innovation,
          while TPC students have excelled in national-level competitions such
          as the Senior Nationals Archery Championship. Strong industry
          partnerships provide excellent placement opportunities, ensuring
          successful career pathways for graduates.
          <br />
          <br />
          TPC offers three-year diploma programs in engineering that align with
          evolving industry trends, blending theoretical knowledge with hands-on
          experience. The curriculum prioritizes outcome-based learning through
          project-based activities, industrial training, and research-driven
          education to enhance students' problem-solving skills. Regular
          seminars, workshops, and guest lectures by industry professionals
          further enrich their learning experience. The college's highly
          qualified faculty integrates academic excellence with industry
          exposure, playing a pivotal role in shaping students into skilled
          professionals ready to meet market demands.
        </p>
        <img
          src="./5th.png"
          alt="About Image"
          className="h-[90vh] max-h-[600px] rounded-xl object-contain"
        />
      </div>
    </div>
  );
};

export default StorySection;
