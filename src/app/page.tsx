import Instructors from "@/components/AnimatedToolTip";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection />
    <FeaturedSection />
    <WhyChooseUs />
    <TestimonialCards />
    <UpcomingWebinar />
    <Instructors />
    <Footer />
   </main>
  );
}
