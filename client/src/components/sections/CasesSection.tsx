const CasesSection = () => {
  const testimonials = [
    {
      name: "김재현",
      position: "고객지원팀장, 테크놀로지 기업",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      text: "WeDo Desk 도입 후 고객 응대 시간이 45% 단축되었고, 고객 만족도는 30% 상승했습니다. 특히 AI 기반 자동 응답 기능은 팀의 업무 효율성을 크게 향상시켰습니다."
    },
    {
      name: "이수진",
      position: "운영이사, 이커머스 기업",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      text: "다양한 채널의 고객 문의를 한 곳에서 관리할 수 있게 되어 업무 프로세스가 크게 간소화되었습니다. 특히 피크 시즌에 급증하는 문의도 WeDo Desk로 효과적으로 대응할 수 있게 되었습니다."
    }
  ];

  return (
    <section id="cases" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">고객 사례</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            전 세계 다양한 기업들이 WeDo Desk로 고객 지원 프로세스를 혁신하고 있습니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "{testimonial.text}"
              </p>
              <div className="mt-6 flex items-center">
                <div className="w-24 h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">고객사 로고</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Client Logos */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold mb-6">신뢰하는 고객사</h3>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
              고객사 로고 {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
