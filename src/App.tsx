
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicePMOC from "./pages/ServicePMOC";
import ServiceClimatizacao from "./pages/ServiceClimatizacao";
import ServiceProjetos from "./pages/ServiceProjetos";
import ServiceAutomacao from "./pages/ServiceAutomacao";
import ServiceInfraestrutura from "./pages/ServiceInfraestrutura";
import ServiceDutos from "./pages/ServiceDutos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos/pmoc" element={<ServicePMOC />} />
          <Route path="/servicos/climatizacao" element={<ServiceClimatizacao />} />
          <Route path="/servicos/projetos" element={<ServiceProjetos />} />
          <Route path="/servicos/automacao" element={<ServiceAutomacao />} />
          <Route path="/servicos/infraestrutura" element={<ServiceInfraestrutura />} />
          <Route path="/servicos/dutos" element={<ServiceDutos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
