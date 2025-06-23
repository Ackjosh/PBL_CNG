import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignUp from "./(auth)/sign-up/sign-up.tsx";
import SignUp2 from "./(auth)/sign-up/page.tsx";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import StationPortal from "./pages/StationPortal";
import SignIn2 from "./(auth)/sign-in/page1.tsx";
import SignIn from "./(auth)/sign-in/sign-in.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} /> */}
          <Route path="/sign-up" element={<SignUp />} />
          {/* <Route path="/sign-up" element={<SignUp2 />} /> */}
          <Route path="/sign-in" element={<SignIn />} />
          {/* <Route path="/sign-up" element={<SignIn2 />} /> */}
          <Route path="/station" element={<StationPortal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
