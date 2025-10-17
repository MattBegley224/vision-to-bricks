import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import ICF from "./pages/ICF";
import Rebates from "./pages/Rebates";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Handle redirects from 404.html for GitHub Pages SPA routing
const RedirectHandler = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const redirectPath = (window as any).__REDIRECT_PATH__;
    if (redirectPath && redirectPath !== '/') {
      delete (window as any).__REDIRECT_PATH__;
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <RedirectHandler />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/icf" element={<ICF />} />
          <Route path="/rebates" element={<Rebates />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
