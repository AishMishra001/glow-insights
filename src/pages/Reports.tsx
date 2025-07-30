import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Download, 
  Calendar, 
  FileText, 
  PieChart, 
  BarChart3, 
  TrendingUp,
  Clock,
  Share,
  Filter
} from "lucide-react";

const reportsData = [
  {
    id: "1",
    name: "Monthly Performance Report",
    type: "Performance",
    lastGenerated: "2024-01-15",
    status: "ready",
    description: "Comprehensive overview of all marketing channels performance"
  },
  {
    id: "2",
    name: "Campaign ROI Analysis",
    type: "Financial",
    lastGenerated: "2024-01-14", 
    status: "processing",
    description: "Return on investment analysis for all active campaigns"
  },
  {
    id: "3",
    name: "Audience Insights Report",
    type: "Audience",
    lastGenerated: "2024-01-13",
    status: "ready",
    description: "Demographics and behavior analysis of your target audience"
  },
  {
    id: "4",
    name: "Weekly Traffic Summary",
    type: "Traffic",
    lastGenerated: "2024-01-12",
    status: "ready",
    description: "Website traffic patterns and user engagement metrics"
  }
];

const scheduledReports = [
  { name: "Daily Campaign Summary", frequency: "Daily", nextRun: "Tomorrow at 9:00 AM" },
  { name: "Weekly Performance Review", frequency: "Weekly", nextRun: "Monday at 8:00 AM" },
  { name: "Monthly Executive Summary", frequency: "Monthly", nextRun: "1st of next month" }
];

const Reports = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ready":
        return <Badge className="bg-success/10 text-success">Ready</Badge>;
      case "processing":
        return <Badge className="bg-warning/10 text-warning">Processing</Badge>;
      case "error":
        return <Badge className="bg-destructive/10 text-destructive">Error</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Performance":
        return <TrendingUp className="w-4 h-4" />;
      case "Financial":
        return <PieChart className="w-4 h-4" />;
      case "Audience":
        return <BarChart3 className="w-4 h-4" />;
      case "Traffic":
        return <FileText className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Generate, schedule, and download comprehensive analytics reports
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Report
          </Button>
          <Button className="bg-gradient-primary">
            <FileText className="w-4 h-4 mr-2" />
            Create Report
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="glass-card cursor-pointer hover:scale-105 transition-transform">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Performance Report</h3>
                <p className="text-sm text-muted-foreground">Campaign & channel metrics</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card cursor-pointer hover:scale-105 transition-transform">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <PieChart className="w-6 h-6 text-success" />
              </div>
              <div>
                <h3 className="font-semibold">ROI Analysis</h3>
                <p className="text-sm text-muted-foreground">Financial performance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card cursor-pointer hover:scale-105 transition-transform">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">Audience Insights</h3>
                <p className="text-sm text-muted-foreground">User behavior analysis</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recent" className="space-y-4">
        <TabsList className="bg-card border border-border">
          <TabsTrigger value="recent">Recent Reports</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="recent">
          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Reports</CardTitle>
                  <CardDescription>Your latest generated reports</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {reportsData.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/20 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-muted/20 rounded-lg flex items-center justify-center">
                      {getTypeIcon(report.type)}
                    </div>
                    <div>
                      <div className="font-medium">{report.name}</div>
                      <div className="text-sm text-muted-foreground">{report.description}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Last generated: {report.lastGenerated}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{report.type}</Badge>
                    {getStatusBadge(report.status)}
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Scheduled Reports</CardTitle>
              <CardDescription>Automatically generated reports on schedule</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {scheduledReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{report.name}</div>
                      <div className="text-sm text-muted-foreground">
                        Next run: {report.nextRun}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{report.frequency}</Badge>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Executive Summary", description: "High-level overview for leadership", icon: TrendingUp },
              { name: "Campaign Deep Dive", description: "Detailed campaign analysis", icon: FileText },
              { name: "ROI Dashboard", description: "Financial performance metrics", icon: PieChart },
              { name: "Audience Analysis", description: "User demographics and behavior", icon: BarChart3 },
              { name: "Traffic Report", description: "Website traffic insights", icon: TrendingUp },
              { name: "Custom Template", description: "Build your own report", icon: FileText }
            ].map((template, index) => (
              <Card key={index} className="glass-card cursor-pointer hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <template.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{template.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      Use Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;