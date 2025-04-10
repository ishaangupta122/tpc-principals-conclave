import AboutSection from "../components/AboutSection";
import PanelDiscussion from "../components/PanelDiscussion";
import Agenda from "../components/AgendaSection";
import StorySection from "../components/StorySection";
import InspirationVoice from "../components/InspirationVoice";
import OrganisingCommittee from "../components/OrganisingCommittee";
import MasonryGallery from "../components/MasonryLayout";
import BottomDescription from "../components/BottomDescription";
import Carousel from "../components/MessageCarousel";
import HomeBanner from "../components/HomeBanner";

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <AboutSection />
      <InspirationVoice />
      <PanelDiscussion />
      <StorySection />
      <Carousel />
      <MasonryGallery />
      {/* TIET Image */}
      <div className='container mx-auto max-w-7xl w-full'>
        <div className='grid grid-cols-1'>
          <img
            src='./TIET_intro.jpg'
            alt='TIET INFO IMAGE'
            className='w-full aspect-auto'
          />
        </div>
      </div>
      <Agenda />
      <BottomDescription />
      <OrganisingCommittee />
    </>
  );
};

export default HomePage;
