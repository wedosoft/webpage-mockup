import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FunctionsSection from "@/components/sections/FunctionsSection";
import CasesSection from "@/components/sections/CasesSection";
import PricingSection from "@/components/sections/PricingSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import SEO from "@/lib/seo";

const Home = () => {
  return (
    <>
      <SEO
        title="WeDo Desk - 고객 지원 및 서비스 관리 솔루션 | We Do Soft Inc."
        description="WeDo Desk는 기업의 고객 지원 및 서비스 관리를 더 스마트하게 만듭니다. 클라우드 기반 고객 서비스 플랫폼으로 응대 시간 단축 및 고객 만족도를 향상시키세요."
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80"
      />
      <div className="font-sans antialiased bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <FunctionsSection />
          <CasesSection />
          <PricingSection />
          <IntegrationsSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
