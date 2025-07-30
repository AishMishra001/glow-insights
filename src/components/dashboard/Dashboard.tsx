import { DashboardHeader } from "./DashboardHeader";
import { MetricCard } from "./MetricCard";
import { RevenueChart } from "./RevenueChart";
import { ChannelsChart } from "./ChannelsChart";
import { TrafficChart } from "./TrafficChart";
import { CampaignTable } from "./CampaignTable";
import { metricsData } from "@/data/mockData";

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gradient-glow),transparent_50%)] pointer-events-none" />
      
      <div className="relative z-10 space-y-8">
          {/* Header */}
          <DashboardHeader />

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metricsData.map((metric, index) => (
              <MetricCard 
                key={metric.id} 
                metric={metric} 
                index={index}
              />
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <ChannelsChart />
            <TrafficChart />
          </div>

          {/* Data Table */}
          <CampaignTable />

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-sm text-muted-foreground">
            Powered by ADmyBRAND Insights AI Analytics Engine
          </p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-xs text-success">Real-time Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs text-primary">AI-Powered Insights</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs text-accent">Secure & Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}