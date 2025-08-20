import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Projects from "./pages/NewProjects.jsx";
import NotFound from "./pages/NotFound.jsx";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import SecondaryNavbar from "./components/SecondaryNavbar.jsx";
import Developers from "./pages/Developers.jsx";
import ReSale from "./pages/ReSale.jsx";
import Footer from "./components/Footer.jsx";




const queryClient = new QueryClient();

const App = () => {
  const [activeSection, setActiveSection] = useState('plots-city');
    return (
  <>
    <QueryClientProvider client={queryClient}>

      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <SecondaryNavbar activeSection={activeSection} onSectionChange={setActiveSection} />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/developers" element={<Developers />}/>
            <Route path="/resale" element={<ReSale/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </>
    )

};

export default App;
