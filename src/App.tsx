
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
  console.log("App component rendering");
  
  // Fallback content in case of routing issues
  const FallbackContent = () => {
    console.log("Rendering fallback content");
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Truckee Meadows Handyman</h1>
        <p className="mb-4">Loading content...</p>
      </div>
    );
  };
  
  // Force fallback to display immediately for debugging
  setTimeout(() => {
    const fallbackContent = document.getElementById('fallback-content');
    if (fallbackContent) {
      console.log("Showing fallback content for debugging");
      fallbackContent.style.display = 'block';
    }
  }, 2000);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/submit-job" element={<JobSubmission />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          {/* Fallback content that will show if routes fail to render */}
          <div id="fallback-content" style={{ display: "block" }}>
            <FallbackContent />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
