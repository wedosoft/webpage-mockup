import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      onClick={() => setDark((d) => !d)}
      className="ml-4 p-2 rounded-full border border-transparent hover:border-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground"
      style={{ fontSize: 20 }}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Close menu when switching to desktop view
    if (!isMobile) {
      setIsMenuOpen(false);
    }

    // Handle scroll event to add shadow to header
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 bg-white ${isScrolled ? "shadow-md" : ""} transition-shadow`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
            <div className="text-primary font-bold text-2xl font-heading">
              <span className="text-foreground">WeDo</span>Desk
            </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('features')} className="font-medium hover:text-primary transition-colors">특징</button>
          <button onClick={() => scrollToSection('functions')} className="font-medium hover:text-primary transition-colors">기능</button>
          <button onClick={() => scrollToSection('cases')} className="font-medium hover:text-primary transition-colors">고객 사례</button>
          <button onClick={() => scrollToSection('pricing')} className="font-medium hover:text-primary transition-colors">가격</button>
          <button onClick={() => scrollToSection('integrations')} className="font-medium hover:text-primary transition-colors">연동</button>
          <button onClick={() => scrollToSection('faq')} className="font-medium hover:text-primary transition-colors">FAQ</button>
        </nav>
        
        {/* CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <button onClick={() => scrollToSection('contact')} className="text-primary font-semibold hover:underline">로그인</button>
          <Button onClick={() => scrollToSection('contact')} className="bg-[#3284D6] hover:bg-opacity-90">데모 신청</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        <DarkModeToggle />
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <button onClick={() => scrollToSection('features')} className="py-2 font-medium hover:text-primary transition-colors">특징</button>
            <button onClick={() => scrollToSection('functions')} className="py-2 font-medium hover:text-primary transition-colors">기능</button>
            <button onClick={() => scrollToSection('cases')} className="py-2 font-medium hover:text-primary transition-colors">고객 사례</button>
            <button onClick={() => scrollToSection('pricing')} className="py-2 font-medium hover:text-primary transition-colors">가격</button>
            <button onClick={() => scrollToSection('integrations')} className="py-2 font-medium hover:text-primary transition-colors">연동</button>
            <button onClick={() => scrollToSection('faq')} className="py-2 font-medium hover:text-primary transition-colors">FAQ</button>
            <div className="pt-3 flex flex-col space-y-3">
              <button onClick={() => scrollToSection('contact')} className="text-primary font-semibold hover:underline">로그인</button>
              <Button onClick={() => scrollToSection('contact')} className="bg-[#3284D6] hover:bg-opacity-90">데모 신청</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
