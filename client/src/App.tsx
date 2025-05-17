import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { Helmet } from "react-helmet";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <title>WeDo Desk - 고객 지원 및 서비스 관리 솔루션 | We Do Soft Inc.</title>
        <meta 
          name="description" 
          content="WeDo Desk는 기업의 고객 지원 및 서비스 관리를 더 스마트하게 만듭니다. 클라우드 기반 고객 서비스 플랫폼으로 응대 시간 단축 및 고객 만족도를 향상시키세요."
        />
      </Helmet>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
