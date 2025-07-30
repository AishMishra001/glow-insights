import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { channelData } from "@/data/mockData";

export function ChannelsChart() {
  const formatNumber = (value: number) => {
    return `${(value / 1000).toFixed(0)}K`;
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-3 border border-success/20">
          <p className="text-sm font-medium mb-2">{label}</p>
          <div className="space-y-1">
            <p className="text-success font-bold">
              Users: {formatNumber(payload[0].value)}
            </p>
            <p className="text-accent font-bold">
              Revenue: ${(payload[0].payload.revenue / 1000).toFixed(0)}K
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="glass-card p-6 animate-enter">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold gradient-text">User Acquisition Channels</h3>
          <p className="text-sm text-muted-foreground">Users by acquisition channel</p>
        </div>
        <div className="px-3 py-1 bg-gradient-success rounded-full">
          <span className="text-xs font-medium text-white">Top Performer: Google Ads</span>
        </div>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={channelData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              tickFormatter={formatNumber}
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="value" 
              fill="hsl(var(--success))"
              radius={[4, 4, 0, 0]}
              className="hover:opacity-80 transition-opacity"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}