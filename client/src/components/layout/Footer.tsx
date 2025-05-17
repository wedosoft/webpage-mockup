import { Link } from "wouter";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ChevronRight
} from "lucide-react";

const Footer = () => {
  // Helper function to scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#383838] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold font-heading mb-6">
              <span className="text-white">WeDo</span><span className="text-[#3284D6]">Desk</span>
            </div>
            <p className="mb-6 text-gray-300">
              클라우드 기반 고객 지원 및 서비스 관리 솔루션으로 고객 만족도를 높이세요.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#3284D6] transition-colors" aria-label="페이스북">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#3284D6] transition-colors" aria-label="트위터">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#3284D6] transition-colors" aria-label="링크드인">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#3284D6] transition-colors" aria-label="인스타그램">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">제품</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-[#3284D6] transition-colors">주요 특징</button></li>
              <li><button onClick={() => scrollToSection('functions')} className="text-gray-300 hover:text-[#3284D6] transition-colors">상세 기능</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-[#3284D6] transition-colors">요금제</button></li>
              <li><button onClick={() => scrollToSection('integrations')} className="text-gray-300 hover:text-[#3284D6] transition-colors">연동</button></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3284D6] transition-colors">로드맵</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">지원</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[#3284D6] transition-colors">도움말 센터</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3284D6] transition-colors">개발자 문서</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3284D6] transition-colors">커뮤니티</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3284D6] transition-colors">웨비나</a></li>
              <li><button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-[#3284D6] transition-colors">FAQ</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">회사</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[#3284D6] transition-colors">소개</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3284D6] transition-colors">블로그</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3284D6] transition-colors">채용</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3284D6] transition-colors">파트너</a></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-[#3284D6] transition-colors">문의하기</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0 text-gray-400 text-sm">
            &copy; 2023 We Do Soft Inc. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-[#3284D6] transition-colors">이용약관</a>
            <a href="#" className="hover:text-[#3284D6] transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-[#3284D6] transition-colors">쿠키 정책</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
