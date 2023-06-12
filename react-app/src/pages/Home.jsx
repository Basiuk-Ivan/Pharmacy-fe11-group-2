import CreationHistory from '../components/PageHome/CreationHistory';
import HealthBlog from '../components/PageHome/HealthBlog';
import HowWeWork from '../components/PageHome/HowWeWork/HowWeWork';
import MainSlider from '../components/PageHome/MainSlider';
import OurPartners from '../components/PageHome/OurPartners';
import PromotionSlider from '../components/PageHome/PromotionSlider';
import Testimonials from '../components/PageHome/Testimonials';
import TodayPharmacy from '../components/PageHome/TodayPharmacy';

const Home = () => (
  <>
    <MainSlider />
    <PromotionSlider />
    <HowWeWork />
    <Testimonials />
    <OurPartners />
    <HealthBlog />
    <CreationHistory />
    <TodayPharmacy />
  </>
);
export default Home;
