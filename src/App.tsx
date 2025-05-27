
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import ServicePMOC from "./pages/ServicePMOC";
import ServiceClimatizacao from "./pages/ServiceClimatizacao";
import ServiceProjetos from "./pages/ServiceProjetos";
import ServiceAutomacao from "./pages/ServiceAutomacao";
import ServiceInfraestrutura from "./pages/ServiceInfraestrutura";
import ServiceDutos from "./pages/ServiceDutos";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/ui/custom-cursor";
import { SEOHead } from "./components/layout/SEOHead";
import { initializeAnalytics, trackPageView } from "./utils/analytics";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos
      gcTime: 10 * 60 * 1000, // 10 minutos
      retry: (failureCount, error: any) => {
        // Não tentar novamente para erros 4xx
        if (error?.status >= 400 && error?.status < 500) {
          return false;
        }
        return failureCount < 3;
      },
    },
  },
});

// Analytics tracker component
const AnalyticsTracker = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only track page views on push (not on replace or pop)
    if (navigationType === 'PUSH') {
      trackPageView(location.pathname + location.search);
    }
  }, [location, navigationType]);

  return null;
};

const App = () => {
  // Initialize analytics on app load
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SEOHead />
        <CustomCursor />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnalyticsTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicos/pmoc" element={<ServicePMOC />} />
            <Route path="/servicos/climatizacao" element={<ServiceClimatizacao />} />
            <Route path="/servicos/projetos" element={<ServiceProjetos />} />
            <Route path="/servicos/automacao" element={<ServiceAutomacao />} />
            <Route path="/servicos/infraestrutura" element={<ServiceInfraestrutura />} />
            <Route path="/servicos/dutos" element={<ServiceDutos />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos-de-servico" element={<TermsOfService />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
