import AboutSection from "./components/about";
import Activities from "./components/activity";
import BlogSection from "./components/blog";
import FacilityDetails from "./components/facilties";
import FeaturedSites from "./components/feature";
import HeroSection from './components/HeroSection';
import TestimonialImageSection from "./components/image";
import InstagramSlider from "./components/instagram";
import TestimonialSlider from "./components/testimonial";




export default function Home() {
  return (
    <>
   <HeroSection/>
    <AboutSection/>
    <FeaturedSites/>
    <Activities/>
    <FacilityDetails/>
    <TestimonialSlider/>
    <TestimonialImageSection/>
    <BlogSection/>
    <InstagramSlider/>

    
  
      
    </>
  );
}
