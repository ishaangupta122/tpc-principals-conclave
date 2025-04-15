import { voices } from "../data";

const InspirationVoice = () => {
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
              className="flex items-center justify-start flex-col md:flex-row text-left gap-4">
              <div className="flex md:block w-full md:w-1/3">
                <img
                  src={voice.image}
                  alt={voice.name}
                  className="h-44 w-fit object-contain rounded-full"
                />
              </div>
              <div className="w-full md:w-1/2 md:text-left">
                <p className="mt-3 text-2xl tracking-tight uppercase">
                  {voice.name}
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
