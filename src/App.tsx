
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import JobSubmission from "./components/JobSubmission";

// Create a new query client
const queryClient = new QueryClient();

const App = () => {
  // Debug log outside JSX
  console.log("App component rendering");
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Debug log properly wrapped to not return void in JSX */}
          <div style={{ display: "none" }}>
            {(() => { console.log("BrowserRouter rendering"); return null; })()}
          </div>
          
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/submit-job" element={<JobSubmission />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
