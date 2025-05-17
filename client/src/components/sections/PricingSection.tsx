import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const PricingSection = () => {
  const [annualBilling, setAnnualBilling] = useState(false);

  const plans = [
    {
      name: "Basic",
      description: "소규모 팀에 적합한 기본 기능",
      monthlyPrice: "₩29,000",
      yearlyPrice: "₩23,200",
      features: [
        { text: "최대 5명 사용자", included: true },
        { text: "이메일 및 채팅 채널 지원", included: true },
        { text: "티켓 관리 시스템", included: true },
        { text: "기본 보고서", included: true },
        { text: "지식베이스 (5GB)", included: true },
        { text: "AI 응답 추천", included: false },
        { text: "고급 분석", included: false },
        { text: "다중 브랜드 지원", included: false }
      ],
      cta: "지금 시작하기",
      popular: false
    },
    {
      name: "Professional",
      description: "성장하는 기업을 위한 고급 기능",
      monthlyPrice: "₩59,000",
      yearlyPrice: "₩47,200",
      features: [
        { text: "최대 20명 사용자", included: true },
        { text: "모든 통신 채널 지원", included: true },
        { text: "고급 티켓 관리 및 자동화", included: true },
        { text: "고급 보고서 및 대시보드", included: true },
        { text: "지식베이스 (20GB)", included: true },
        { text: "AI 응답 추천", included: true },
        { text: "SLA 관리", included: true },
        { text: "다중 브랜드 지원", included: false }
      ],
      cta: "지금 시작하기",
      popular: true
    },
    {
      name: "Enterprise",
      description: "대규모 기업을 위한 맞춤형 솔루션",
      monthlyPrice: "맞춤형 가격",
      yearlyPrice: "맞춤형 가격",
      priceNote: "영업팀에 문의하세요",
      features: [
        { text: "무제한 사용자", included: true },
        { text: "모든 통신 채널 지원", included: true },
        { text: "고급 티켓 관리 및 자동화", included: true },
        { text: "맞춤형 보고서 및 대시보드", included: true },
        { text: "지식베이스 (무제한)", included: true },
        { text: "고급 AI 기능", included: true },
        { text: "전용 계정 관리자", included: true },
        { text: "다중 브랜드 지원", included: true }
      ],
      cta: "상담 문의하기",
      isOutlined: true
    }
  ];

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
    <section id="pricing" className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">요금제 및 플랜</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            비즈니스 규모와 요구사항에 맞는 최적의 플랜을 선택하세요.
          </p>
          <div className="mt-8 inline-flex items-center justify-center bg-white p-1 rounded-lg shadow-sm">
            <button 
              onClick={() => setAnnualBilling(false)} 
              className={`px-4 py-2 rounded font-semibold ${!annualBilling ? 'bg-[#3284D6] text-white' : 'text-secondary'}`}
            >
              월간 결제
            </button>
            <button 
              onClick={() => setAnnualBilling(true)} 
              className={`px-4 py-2 rounded font-semibold ${annualBilling ? 'bg-[#3284D6] text-white' : 'text-secondary'}`}
            >
              연간 결제 (20% 할인)
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl ${plan.popular 
                ? 'shadow-lg transform md:scale-105 border-2 border-[#3284D6] relative' 
                : 'shadow-md hover:shadow-lg transition-shadow'} overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#3284D6] text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  가장 인기
                </div>
              )}
              <div className="p-8 border-b">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className={!annualBilling ? 'block' : 'hidden'}>
                  <div className="text-3xl font-bold text-[#3284D6]">
                    {plan.monthlyPrice}
                    {plan.name !== "Enterprise" && <span className="text-base font-normal text-gray-600">/월</span>}
                  </div>
                  {plan.priceNote && <p className="text-sm text-gray-600 mt-1">{plan.priceNote}</p>}
                  {!plan.priceNote && <p className="text-sm text-gray-600 mt-1">사용자당 가격</p>}
                </div>
                <div className={annualBilling ? 'block' : 'hidden'}>
                  <div className="text-3xl font-bold text-[#3284D6]">
                    {plan.yearlyPrice}
                    {plan.name !== "Enterprise" && <span className="text-base font-normal text-gray-600">/월</span>}
                  </div>
                  {plan.priceNote && <p className="text-sm text-gray-600 mt-1">{plan.priceNote}</p>}
                  {!plan.priceNote && (
                    <p className="text-sm text-gray-600 mt-1">연간 결제시 (20% 할인)</p>
                  )}
                </div>
                <div className="mt-6">
                  <Button 
                    onClick={scrollToContact}
                    className={`w-full ${plan.isOutlined 
                      ? 'border border-[#3284D6] text-[#3284D6] hover:bg-[#3284D6] hover:text-white' 
                      : 'bg-[#3284D6] text-white hover:bg-opacity-90'}`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-start ${feature.included ? '' : 'text-gray-400'}`}>
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                      )}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
