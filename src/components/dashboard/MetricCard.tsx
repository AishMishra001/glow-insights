import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Users, Target } from "lucide-react";
import { MetricCard as MetricCardType } from "@/data/mockData";

interface MetricCardProps {
  metric: MetricCardType;
  index: number;
}

const iconMap = {
  DollarSign,
  Users,
  Target,
  TrendingUp
};

const colorMap = {
  primary: "from-primary to-primary-glow",
  success: "from-success to-accent",
  warning: "from-warning to-orange-400",
  accent: "from-accent to-cyan-400"
};

export function MetricCard({ metric, index }: MetricCardProps) {
  const Icon = iconMap[metric.icon as keyof typeof iconMap] || TrendingUp;
  const isPositive = metric.change > 0;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <Card 
      className="glass-card p-6 hover:shadow-primary/20 transition-all duration-300 animate-enter group animate-hover cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${colorMap[metric.color]} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
          isPositive 
            ? 'bg-success/20 text-success' 
            : 'bg-destructive/20 text-destructive'
        }`}>
          <TrendIcon className="w-3 h-3" />
          {Math.abs(metric.change)}%
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
          {metric.title}
        </h3>
        <p className="text-3xl font-bold gradient-text group-hover:animate-pulse-subtle">
          {metric.value}
        </p>
        <p className="text-xs text-muted-foreground">
          {metric.changeLabel}
        </p>
      </div>
    </Card>
  );
}