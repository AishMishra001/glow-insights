import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bell, 
  Settings, 
  Download, 
  RefreshCw, 
  Activity,
  Calendar,
  Users
} from "lucide-react";
import { generateRealTimeData } from "@/data/mockData";

export function DashboardHeader() {
  const [isLive, setIsLive] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isLive) {
      interval = setInterval(() => {
        setLastUpdate(new Date());
      }, 5000); // Update every 5 seconds
    }
    
    return () => clearInterval(interval);
  }, [isLive]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Main Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold gradient-text">
                ADmyBRAND Insights
              </h1>
              <p className="text-muted-foreground">
                AI-Powered Analytics Dashboard for Digital Marketing Excellence
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Live Status */}
          <Badge 
            variant="secondary" 
            className={`gap-2 ${isLive ? 'bg-success/20 text-success' : 'bg-muted'}`}
          >
            <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-success animate-pulse' : 'bg-muted-foreground'}`} />
            {isLive ? 'LIVE' : 'STATIC'}
          </Badge>

          {/* Control Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsLive(!isLive)}
            className="gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${isLive ? 'animate-spin' : ''}`} />
            {isLive ? 'Stop Live' : 'Go Live'}
          </Button>

          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>

          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4" />
          </Button>

          <Button variant="outline" size="sm" className="relative">
            <Bell className="w-4 h-4" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full flex items-center justify-center">
              <span className="text-[10px] text-white font-bold">3</span>
            </div>
          </Button>
        </div>
      </div>

      {/* Status Bar */}
      <Card className="glass-card p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long',
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">2,847 active sessions</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {isLive && (
              <div className="text-xs text-muted-foreground">
                Last updated: {formatTime(lastUpdate)}
              </div>
            )}
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-xs font-medium text-success">All systems operational</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}