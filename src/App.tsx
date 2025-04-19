import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Articles from "./pages/Articles";
import { Navbar } from "./components/navbar"; import { ActiveTabProvider } from "./context/ActiveTabContext";
import { ThemeProvider } from "./components/theme-provider";
;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <ActiveTabProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {/* <Navbar /> */}

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />

              <Route path="/experience" element={<Index />} />
              <Route path="/projects" element={<Index />} />
              <Route path="/skills" element={<Index />} />
              <Route path="/contact" element={<Index />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ActiveTabProvider>
    </ThemeProvider>

  </QueryClientProvider>
);

export default App;
