import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Message {
  image: string;
  title: string;
  name: string;
  message: string;
  link: string;
  designation: string;
  location: string;
}

const messages: Message[] = [
  {
    image: "./principal_rounded.png",
    title: "PRINCIPAL'S MESSAGE",
    name: "Dr. Ankush Kansal",
    message: `Education stands at a transformative juncture where traditional methods must evolve to meet the ever-changing demands of the modern world. As educators, we have the collective responsibility to equip students with skills that go beyond academics, preparing them for real-world challenges. This requires a shift towards innovative learning approaches that align with industry expectations and foster holistic development.
In this spirit, I am delighted to invite you to the Principals' Conclave 2025, a gathering of over 125+ esteemed Principals from schools and polytechnics across multiple states. This conclave serves as a platform to exchange ideas, collaborate on progressive strategies, and drive meaningful change in education.
Our discussions will focus on two key themes: "Outcome-Based Learning: Shifting the Focus from Academics to Real-World Competencies," which explores how education can evolve to prioritize real-world skills and measurable outcomes over traditional academic performance and "From College to Corporate: Bridging the Gap with Skill-Based Learning," which highlights the importance of practical skills, adaptability, and problem-solving in enhancing employability and preparing students for the professional world.
Your insights and participation will play a pivotal role in shaping a future-ready education system. I look forward to engaging discussions, valuable takeaways, and collaborative efforts that will redefine the educational landscape.`,
    link: "/principals-message",
    designation: "Principal, Thapar Polytechnic College",
    location: "Patiala, Punjab",
  },
  {
    image: "./chairman_rounded.png",
    title: "CHAIRMAN'S MESSAGE",
    name: "Sh. Anil Bhargava",
    message: `Education and industry are two sides of the same coin—one shapes minds, the other refines them. As an industry professional, I have witnessed firsthand how the gap between academic learning and workplace expectations continues to challenge both employers and graduates. The Principals' Conclave 2025 is a crucial step toward bridging this divide, fostering a future-ready education system that aligns with industry needs.
Today's world demands more than theoretical knowledge. Employability is driven by skills, adaptability, and problem-solving abilities. The shift from traditional education to skill-based and outcome-driven learning is no longer optional—it is essential. This conclave is a platform to redefine education, ensuring that our students graduate not just with degrees but with industry-relevant competencies that empower them to excel in the real world.
The session "Understanding Outcome-Based Learning: A Shift from Traditional Education" and "From College to Corporate: How Skill-Based Learning Enhances Employability" will provoke critical discussions, offering tangible strategies to create an education system that produces not just job seekers but future leaders, innovators, and problem-solvers.
I commend all participating principals and education leaders for your dedication to shaping the next generation. Let this conclave be a space for bold ideas, meaningful collaborations, and actionable reforms that redefine education's role in nation-building.
I look forward to an insightful and impactful exchange of ideas.`,
    link: "/chairmans-message",
    designation: "Chairman, Managing Committee",
    location: "Thapar Polytechnic College, Patiala",
  },
  {
    image: "./vice_chairman_rounded.png",
    title: "VICE CHAIRMAN'S MESSAGE",
    name: "Dr. Gurbinder Singh",
    message: `Education today is not just about imparting knowledge; it is about equipping students with the skills and mindset to thrive in a rapidly evolving world. The Principals' Conclave 2025 serves as a platform to reimagine our approach to learning, ensuring it remains relevant, future-focused, and impactful.
Traditional teaching methods must evolve to meet the changing demands of industry and society. Skill-based and outcome-driven education is the way forward—shifting our focus from rote learning to critical thinking, adaptability, and hands-on problem-solving. The real measure of education lies not in grades but in the ability to apply knowledge to real-world challenges.
As educators, we are the architects of transformation. Our collective responsibility is to bridge the gap between academia and industry, ensuring that students graduate not just with degrees, but with confidence, competence, and career readiness. Through collaboration and innovation, we can create an education system that truly prepares students for the future.
This conclave is an opportunity to exchange ideas, challenge outdated norms, and drive meaningful change. Your insights and leadership will be instrumental in building a stronger, more dynamic education ecosystem.
Wishing you all a thought-provoking and enriching conclave!`,
    link: "/vice-chairmans-message",
    designation: "Vice Chairman, Managing Committee TPC",
    location: "Registrar, TIET, Director LMTSM",
  },
  {
    image: "./coordinator_rounded.png",
    title: "COORDINATOR'S MESSAGE",
    name: "Dr. Dwarika Nath Ratha",
    message: `Education is the cornerstone of progress, and as leaders in academia, we must constantly adapt to ensure our students are prepared for the challenges ahead. The Principals' Conclave 2025 is a unique opportunity to explore innovative approaches that will redefine the way we teach, learn, and build future-ready professionals.
As an educator and engineer, I have always believed that knowledge without application is incomplete. Today's world demands more than just theoretical understanding—it requires practical skills, problem-solving abilities, and an industry-aligned mindset. The transition from education to employment must be seamless, equipping students with both technical expertise and real-world adaptability.
This conclave encourages us to move beyond conventional methods and embrace skill-based and outcome-driven learning. By focusing on experiential education, project-based learning, and interdisciplinary collaboration, we can ensure that students are not just degree-holders but solution-driven professionals who contribute meaningfully to society.
I extend my gratitude to all the principals and academic leaders present here. Your dedication to shaping young minds is commendable. Let us use this platform to share insights, foster collaboration, and drive impactful changes that will elevate education to new heights.
Looking forward to a stimulating and transformative dialogue!`,
    link: "/coordinators-message",
    designation: "Professor, Civil Engineering, TIET",
    location: "Coordinator, Thapar Polytechnic College",
  },
];

const MessageCard: React.FC<{ data: Message }> = ({ data }) => (
  <div className="p-4 w-full sm:w-1/2 lg:w-1/2">
    <div className='flex flex-col items-start gap-6 bg-white shadow rounded-2xl p-6 h-full'>
      <img
        src={data.image}
        className='w-full max-h-[300px] object-contain mx-auto'
        alt={`${data.title}'s Image`}
      />
      <div className='w-full'>
        <p className='playfair font-semibold text-2xl sm:text-3xl mt-4'>{data.title}</p>
        <p className='mt-4 font-light text-slate-600 text-justify whitespace-pre-line'>{data.message}</p>
        <p className='mt-8'>
          <span className='text-slate-600 font-light'>Warm regards,</span><br />
          <span className='text-xl sm:text-2xl font-semibold text-red-600'>{data.name}</span><br />
          <span className='font-light mt-2 block'>
            {data.designation}<br />
            {data.location}
          </span>
        </p>
      </div>
    </div>
  </div>
);

const Carousel: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [isLarge, setIsLarge] = useState<boolean>(window.innerWidth >= 1024);
  const step = isLarge ? 2 : 2;

  const updateIndex = (delta: number) => {
    setIndex((prev) => (prev + delta * step + messages.length) % messages.length);
  };

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => updateIndex(1), 4000);
    return () => clearInterval(interval);
  }, [step]);

  const visibleMessages = messages.slice(index, index + step).concat(
    index + step > messages.length ? messages.slice(0, (index + step) % messages.length) : []
  );

  const totalSlides = Math.ceil(messages.length / step);
  const getCurrentSlide = () => Math.floor(index / step);
  const goToSlide = (slideIndex: number) => setIndex(slideIndex * step);

  return (
    <div className='px-4 py-14'
      style={{ background: "url(./red_bg.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
    >
      <div className="container mx-auto max-w-7xl">

        <div className='flex justify-end gap-4 mb-4'>
          <button onClick={() => updateIndex(-1)} className='cursor-pointer p-2 rounded-full bg-white text-black' aria-label="Previous Slide">
            <ChevronLeft size={35} />
          </button>
          <button onClick={() => updateIndex(1)} className='cursor-pointer p-2 rounded-full bg-white text-black' aria-label="Next Slide">
            <ChevronRight size={35} />
          </button>
        </div>

        <div className='flex flex-wrap justify-center'>
          {visibleMessages.map((msg, i) => (
            <MessageCard key={i} data={msg} />
          ))}
        </div>

        <div className='flex justify-center items-center mt-6 gap-2'>
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`p-[6px] rounded-full transition-colors cursor-pointer ${getCurrentSlide() === i ? 'bg-white p-[7px]' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
