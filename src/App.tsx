import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DevelopersPage from "./pages/Developers";
import PricingPage from "./pages/Pricing";
import DownloadPage from "./pages/Download";
import EarnPage from "./pages/Earn";
import SecurityPage from "./pages/Security";
import HowItWorksPage from "./pages/HowItWorks";
import CreatorsPage from "./pages/Creators";
import { Navbar } from "./components/layout/Navbar";
import RequestAccessForm from "@/components/sections/RequestAccessForm";

const queryClient = new QueryClient();
const PageWithNavbar = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Index />} />
          <Route element={<PageWithNavbar />}>
            <Route path="/developers" element={<DevelopersPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/earn" element={<EarnPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/creators" element={<CreatorsPage />} />
            <Route path="/request-access" element={<RequestAccessForm />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
