import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  SiSlack, 
  SiGoogle, 
  SiMicrosoft, 
  SiSalesforce, 
  SiJira, 
  SiZapier,
  SiZoom,
  SiGithub,
  SiStripe,
  SiTwilio,
  SiDropbox,
  SiShopify
} from "react-icons/si";

const IntegrationsSection = () => {
  const integrations = [
    { icon: <SiSlack className="h-8 w-8" />, name: "Slack" },
    { icon: <SiGoogle className="h-8 w-8" />, name: "Google" },
    { icon: <SiMicrosoft className="h-8 w-8" />, name: "Microsoft" },
    { icon: <SiSalesforce className="h-8 w-8" />, name: "Salesforce" },
    { icon: <SiJira className="h-8 w-8" />, name: "Jira" },
    { icon: <SiZapier className="h-8 w-8" />, name: "Zapier" },
    { icon: <SiZoom className="h-8 w-8" />, name: "Zoom" },
    { icon: <SiGithub className="h-8 w-8" />, name: "GitHub" },
    { icon: <SiStripe className="h-8 w-8" />, name: "Stripe" },
    { icon: <SiTwilio className="h-8 w-8" />, name: "Twilio" },
    { icon: <SiDropbox className="h-8 w-8" />, name: "Dropbox" },
    { icon: <SiShopify className="h-8 w-8" />, name: "Shopify" }
  ];

  return (
    <section id="integrations" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">연동 및 확장성</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            WeDo Desk는 다양한 서비스와 쉽게 연동되어 업무 효율성을 향상시킵니다.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8 mb-16">
          {integrations.map((integration, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center h-20">
              <div className="text-gray-500 flex flex-col items-center justify-center">
                {integration.icon}
                <span className="text-xs mt-1">{integration.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">강력한 API 및 개발자 도구</h3>
              <p className="text-gray-600 mb-6">
                WeDo Desk의 API와 개발자 도구를 활용하여 자체 시스템에 통합하고 워크플로우를 자동화하세요.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#3284D6] mt-1 mr-2 flex-shrink-0" />
                  <span>RESTful API 지원</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#3284D6] mt-1 mr-2 flex-shrink-0" />
                  <span>Webhook 이벤트</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#3284D6] mt-1 mr-2 flex-shrink-0" />
                  <span>SDK 제공 (JavaScript, Python, PHP)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#3284D6] mt-1 mr-2 flex-shrink-0" />
                  <span>맞춤형 통합 개발 지원</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button variant="link" className="text-[#3284D6] hover:underline p-0 h-auto font-semibold">
                  개발자 문서 보기 <span className="ml-2">→</span>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 bg-[#F5F7FA] p-8 md:p-12 flex items-center justify-center">
              <div className="bg-[#383838] text-white p-6 rounded-lg w-full max-w-md font-mono text-sm overflow-hidden">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-xs md:text-sm overflow-x-auto"><code>
{`// WeDo Desk API 예시
const WedoDeskAPI = require('wedodesk-api');

// API 클라이언트 초기화
const client = new WedoDeskAPI({
  apiKey: 'YOUR_API_KEY'
});

// 티켓 생성하기
async function createTicket() {
  try {
    const ticket = await client.tickets.create({
      subject: '로그인 문제 해결 요청',
      description: '계정에 로그인할 수 없습니다.',
      email: 'customer@example.com',
      priority: 'high'
    });
    
    console.log('티켓이 생성되었습니다:', ticket.id);
  } catch (error) {
    console.error('오류:', error);
  }
}

createTicket();`}
                </code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
