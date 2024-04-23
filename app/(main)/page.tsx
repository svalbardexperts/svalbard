import Attractions from '@/components/Home/Attractions';
import FAQs from '@/components/Home/FAQs';
import GetInTouch from '@/components/shared/GetInTouch';
import HomeBanner from '@/components/Home/HomeBanner';
import HomeTrips from '@/components/Home/HomeTrips';
import NatureTouchSection from '@/components/Home/NatureTouchSection';
import PersonalizedPathways from '@/components/Home/PersonalizedPathways';
import Reviews from '@/components/shared/Reviews';

export default async function Home() {
  return (
    <div>
      <HomeBanner />
      <HomeTrips />
      <PersonalizedPathways />
      <NatureTouchSection />
      <Attractions />
      <Reviews />
      <FAQs />
      <GetInTouch />
    </div>
  );
}
