import { 
  Headset, 
  Bot, 
  LineChart, 
  Share2, 
  Users, 
  Smartphone 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Headset className="h-8 w-8 text-[#3284D6]" />,
      title: "통합 고객 지원 센터",
      description: "이메일, 채팅, 전화, 소셜 미디어 등 모든 채널의 고객 문의를 한 곳에서 관리하세요."
    },
    {
      icon: <Bot className="h-8 w-8 text-[#3284D6]" />,
      title: "AI 기반 자동화",
      description: "반복적인 작업을 자동화하고 AI가 제안하는 답변으로 응대 시간을 단축하세요."
    },
    {
      icon: <LineChart className="h-8 w-8 text-[#3284D6]" />,
      title: "실시간 분석 및 보고서",
      description: "고객 지원 성과를 실시간으로 모니터링하고 데이터 기반 의사결정을 내리세요."
    },
    {
      icon: <Share2 className="h-8 w-8 text-[#3284D6]" />,
      title: "지식베이스 구축",
      description: "FAQ, 가이드, 튜토리얼을 체계적으로 구성하여 고객 셀프 서비스를 지원하세요."
    },
    {
      icon: <Users className="h-8 w-8 text-[#3284D6]" />,
      title: "팀 협업 도구",
      description: "내부 메모, 태스크 할당, 승인 워크플로우로 팀 협업을 효율적으로 관리하세요."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-[#3284D6]" />,
      title: "모바일 지원",
      description: "언제 어디서나 모바일 앱으로 고객 문의에 신속하게 대응하세요."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">주요 특징</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            WeDo Desk는 고객 지원팀에게 필요한 모든 기능을 갖춘 올인원 솔루션입니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-[#3284D6] text-4xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
