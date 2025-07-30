import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { trafficSourceData } from "@/data/mockData";

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--success))", 
  "hsl(var(--accent))",
  "hsl(var(--warning))",
  "hsl(var(--secondary))"
];

export function TrafficChart() {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-3 border border-accent/20">
          <p className="text-sm font-medium">{payload[0].name}</p>
          <p className="text-accent font-bold">
            {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }: any) => {
    return (
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-xs text-muted-foreground">
              {entry.value}: {trafficSourceData[index].value}%
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Card className="glass-card p-6 animate-enter">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold gradient-text">Traffic Sources</h3>
          <p className="text-sm text-muted-foreground">Distribution of website traffic</p>
        </div>
        <div className="px-3 py-1 bg-muted/50 rounded-full">
          <span className="text-xs font-medium">Total Sessions: 2.4M</span>
        </div>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={trafficSourceData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {trafficSourceData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}