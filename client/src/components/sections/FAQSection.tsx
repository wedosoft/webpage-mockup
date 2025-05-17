import { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "WeDo Desk는 어떤 규모의 기업에 적합한가요?",
      answer: "WeDo Desk는 소규모 스타트업부터 대규모 기업까지 모든 규모의 기업에 맞게 확장 가능한 솔루션입니다. 비즈니스 규모와 요구사항에 따라 Basic, Professional, Enterprise 플랜 중 선택할 수 있으며, 필요에 따라 커스터마이징도 가능합니다."
    },
    {
      question: "다른 시스템과의 연동은 어떻게 이루어지나요?",
      answer: "WeDo Desk는 Slack, Google Workspace, Microsoft Teams, Salesforce 등 다양한 서비스와 기본 통합을 제공합니다. 또한 RESTful API, Webhook 이벤트, SDK를 통해 자체 시스템과의 연동도 가능합니다. 필요한 경우 전문 통합 서비스도 제공합니다."
    },
    {
      question: "데이터 보안 및 개인정보 보호는 어떻게 관리되나요?",
      answer: "WeDo Desk는 데이터 보안을 최우선으로 생각합니다. 모든 데이터는 암호화되어 저장되며, GDPR 및 CCPA 등 글로벌 개인정보 보호 규정을 준수합니다. 또한 정기적인 보안 감사와 업데이트를 통해 최신 보안 표준을 유지하고 있습니다."
    },
    {
      question: "무료 체험 기간이 있나요?",
      answer: "네, 모든 플랜에 대해 14일간의 무료 체험 기간을 제공합니다. 체험 기간 동안 모든 기능을 자유롭게 사용해볼 수 있으며, 별도의 신용카드 정보 없이도 가입이 가능합니다. 체험 종료 후 결제하지 않으면 자동으로 해지됩니다."
    },
    {
      question: "고객 지원 및 기술 지원은 어떻게 이루어지나요?",
      answer: "Basic 플랜은 이메일 지원과 셀프 서비스 지식베이스를 제공합니다. Professional 플랜은 여기에 실시간 채팅 지원이 추가됩니다. Enterprise 플랜은 24/7 전화 지원과 전담 계정 관리자가 배정됩니다. 또한 모든 고객에게 정기적인 웨비나와 교육 자료를 제공합니다."
    },
    {
      question: "커스터마이징 옵션이 있나요?",
      answer: "Professional 플랜부터 워크플로우, 필드, 양식 등의 커스터마이징이 가능합니다. Enterprise 플랜에서는 UI/UX 커스터마이징, 브랜딩, 맞춤형 기능 개발 등 더 심층적인 커스터마이징 옵션을 제공합니다. 특별한 요구사항이 있으신 경우 영업팀에 문의해주세요."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">자주 묻는 질문</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            WeDo Desk에 대해 궁금한 점이 있으신가요? 아래에서 일반적인 질문에 대한 답변을 확인하세요.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-bold hover:text-[#3284D6] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
