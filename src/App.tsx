import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { LoadingProvider } from "@/hooks/useLoading";
import Index from "./pages/Index";
import Analytics from "./pages/Analytics";
import Campaigns from "./pages/Campaigns";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Audience from "./pages/Audience";
import DataSources from "./pages/DataSources";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="glow-insights-theme">
      <LoadingProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppLayout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/campaigns" element={<Campaigns />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/audience" element={<Audience />} />
                <Route path="/data-sources" element={<DataSources />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/settings/notifications" element={<Notifications />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AppLayout>
          </BrowserRouter>
        </TooltipProvider>
      </LoadingProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
