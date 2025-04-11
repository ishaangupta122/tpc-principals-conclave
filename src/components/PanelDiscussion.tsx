import { useState } from "react";

const PanelDiscussion: React.FC = () => {
  const [themes] = useState([
    {
      title:
        "Understanding Outcome-Based Learning: A Shift from Traditional Education",
      description:
        "The future of education lies in measurable learning, not just the completion of syllabi. Outcome-Based Learning (OBL) transforms classrooms into spaces where students develop critical thinking, problem-solving, and real-world application skills. Moving beyond conventional teaching, OBL focuses on what students can do with their knowledge, ensuring deeper understanding and long-term retention. For school principals, this shift means embracing student-centric approaches that drive meaningful and impactful learning, preparing young minds for success beyond academics.",
      image: "./img3.jpg",
    },
    {
      title:
        "From College to Corporate: How Skill-Based Learning Enhances Employability",
      description:
        "In today’s competitive job market, practical skills matter as much as degrees. Skill-based learning bridges the gap between education and industry, equipping students with hands-on expertise, adaptability, and problem-solving abilities. For polytechnic institutions, integrating industry-driven curricula and experiential learning is key to producing job-ready graduates. This discussion explores how skill-based education enhances employability, ensuring a seamless transition from college to corporate.",
      image: "./img2.jpg",
    },
  ]);

  return (
    <div
      className="py-10"
      style={{
        background: "url(./pattern-bg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}>
      <div className="mx-auto container max-w-7xl text-white md:px-10 px-5">
        <div className="py-5">
          <p className="logo-title text-black text-4xl font-medium italic md:ml-4">
            Topics for Panel Discussion
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
            {themes.map((theme, index) => (
              <div
                key={index}
                className="my-4 md:mx-5 rounded-md custom-gradient p-7">
                <div className="flex items-center gap-3">
                  <p className="logo-title text-xl font-semibold">
                    {theme.title}
                  </p>
                </div>
                <p className="mt-3 font-light opacity-80">
                  {theme.description}
                </p>
                {/* <img
                  src={theme.image}
                  alt={theme.title}
                  className='h-44 object-contain'
                /> */}
              </div>
            ))}
          </div>
          <img src="./4th.png" alt="" className="py-7 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default PanelDiscussion;
