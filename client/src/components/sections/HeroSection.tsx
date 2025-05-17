import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-[#F5F7FA] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#383838] mb-4">
              고객 지원을 <span className="text-[#3284D6]">스마트하게</span><br />
              관리하는 솔루션
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              클라우드 기반 고객 서비스 플랫폼으로 응대 시간 단축 및 고객 만족도를 향상시키세요.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={scrollToContact}
                className="bg-[#3284D6] hover:bg-opacity-90 px-6 py-3 rounded-md font-semibold"
              >
                데모 신청하기
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                className="border-[#3284D6] text-[#3284D6] hover:bg-[#3284D6] hover:text-white px-6 py-3 rounded-md font-semibold"
              >
                상담 문의하기
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="WeDo Desk 고객 지원 대시보드 인터페이스" 
              className="rounded-lg shadow-xl w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
