import { Check } from "lucide-react";

const FunctionsSection = () => {
  const functions = [
    {
      title: "티켓 관리 시스템",
      features: [
        "자동 티켓 분류 및 우선순위 지정",
        "SLA 설정 및 알림",
        "드래그 앤 드롭 기반 직관적 인터페이스",
        "고객 이력 및 상호작용 추적",
        "고급 필터링 및 검색 기능"
      ],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
      imageAlt: "WeDo Desk 티켓 관리 시스템 인터페이스"
    },
    {
      title: "AI 고객 응대 지원",
      features: [
        "자동 응답 추천",
        "감정 분석 및 고객 의도 파악",
        "지능형 챗봇으로 24/7 고객 지원",
        "다국어 자동 번역",
        "고객 문의 예측 및 선제적 지원"
      ],
      image: "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
      imageAlt: "WeDo Desk AI 기반 고객 응대 지원 시스템"
    },
    {
      title: "고급 보고서 및 분석",
      features: [
        "맞춤형 대시보드",
        "성과 지표(KPI) 실시간 모니터링",
        "팀별/개인별 성과 분석",
        "고객 만족도 추적",
        "추세 분석 및 예측 리포트"
      ],
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
      imageAlt: "WeDo Desk 고급 보고서 및 분석 대시보드"
    }
  ];

  return (
    <section id="functions" className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">상세 기능</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            WeDo Desk의 강력한 기능으로 고객 지원 프로세스를 혁신하세요.
          </p>
        </div>
        
        <div className="space-y-12">
          {functions.map((func, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{func.title}</h3>
                  <ul className="space-y-3">
                    {func.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-[#3284D6] mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src={func.image} 
                    alt={func.imageAlt} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionsSection;
