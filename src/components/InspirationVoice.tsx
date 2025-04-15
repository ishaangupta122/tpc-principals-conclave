import { useState } from "react";

const InspirationVoice = () => {
  const [voices] = useState([
    {
      title: "Chairman",
      name: "SH. ANIL BHARGAVA",
      description:
        "Chairman, Managing Committee, Thapar Polytechnic College, Patiala",
      image: "/chairman_rounded.png",
    },
    {
      title: "Director",
      name: "Dr. Padmakumar Nair",
      description:
        "Director, Thapar Institute of Engineering & Technology Patiala, Punjab",
      image: "/nair_rounded.jpg",
    },
    {
      title: "Deputy Director",
      name: "Sh. Ravinder Singh Hundal",
      description: `Deputy Director,
       DTE Punjab`,
      image: "/ravinder_hundal_rounded.jpg",
    },
    {
      title: "Deputy Director",
      name: "Dr. Ajay Batish",
      description:
        "Deputy Director, Thapar Institute of Engineering & Technology Patiala, Punjab",
      image: "/batish_rounded.jpg",
    },
    {
      title: "Registrar-cum-Controller of Exams",
      name: "Sh. Sanjeev Goyal ",
      description: "Registrar-cum-Controller of Exams PSBTE Chandigarh",
      image: "/Sanjeev_Jain_rounded.jpg",
    },
    {
      title: "Vice Chairman",
      name: "DR. GURBINDER SINGH",
      description:
        "Vice Chairman, Managing Committee TPC, Registrar, TIET, Director LMTSM",
      image: "/vice_chairman_rounded.png",
    },
    {
      title: "Coordinator",
      name: "DR. DWARIKA NATH RATHA",
      description:
        "Professor, Civil Engineering, TIET, Coordinator, Thapar Polytechnic College",
      image: "/coordinator_rounded.png",
    },
    {
      title: "Principal",
      name: "DR. ANKUSH KANSAL",
      description: "Principal, Thapar Polytechnic College, Patiala, Punjab",
      image: "/principal_rounded.png",
    },
  ]);

  return (
    <div
      className="py-20"
      style={{
        background: "url(./dark-bg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div className="mx-auto container max-w-7xl text-white md:px-10 px-5">
        <p className="text-4xl md:text-5xl font-light">
          <span className="playfair italic">Voices of</span> <br /> INSPIRATION
        </p>

        <div className="mt-20 grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-24">
          {voices.map((voice, index) => (
            <div
              key={index}
              className="flex items-center justify-end flex-col md:flex-row text-right gap-4">
              <div className="flex justify-end md:block w-full md:w-1/3">
                <img
                  src={voice.image}
                  alt={voice.name}
                  className="h-44 w-fit object-contain rounded-full"
                />
              </div>
              <div className="w-full md:w-1/2 md:text-left">
                <p className="mt-3 text-2xl tracking-tight uppercase">
                  - {voice.name}
                </p>
                {/* <p className="playfair text-xl tracking-tight">
                  <span className="italic">{voice.title}</span>
                </p> */}
                <p className="text-lg  opacity-70 mt-3 font-light whitespace-pre-line">
                  {voice.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InspirationVoice;
