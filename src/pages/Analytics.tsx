import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  Clock, 
  Users, 
  MousePointer,
  Download,
  Filter
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area } from "recharts";

const analyticsData = [
  { date: "Jan 1", pageViews: 1200, uniqueVisitors: 800, sessions: 650, bounceRate: 45 },
  { date: "Jan 2", pageViews: 1350, uniqueVisitors: 920, sessions: 750, bounceRate: 42 },
  { date: "Jan 3", pageViews: 1100, uniqueVisitors: 750, sessions: 580, bounceRate: 48 },
  { date: "Jan 4", pageViews: 1500, uniqueVisitors: 1100, sessions: 890, bounceRate: 38 },
  { date: "Jan 5", pageViews: 1680, uniqueVisitors: 1250, sessions: 980, bounceRate: 35 },
  { date: "Jan 6", pageViews: 1400, uniqueVisitors: 1000, sessions: 820, bounceRate: 41 },
  { date: "Jan 7", pageViews: 1750, uniqueVisitors: 1350, sessions: 1100, bounceRate: 32 },
];

const topPages = [
  { page: "/homepage", views: 12500, change: 12.5 },
  { page: "/products", views: 8900, change: -3.2 },
  { page: "/about", views: 6700, change: 8.1 },
  { page: "/contact", views: 4200, change: 15.3 },
  { page: "/blog", views: 3800, change: -1.5 },
];

const Analytics = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Analytics Overview</h1>
          <p className="text-muted-foreground mt-1">
            Detailed insights into your website performance and user behavior
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Page Views</span>
              </div>
              <Badge variant="secondary" className="bg-success/10 text-success">
                <TrendingUp className="w-3 h-3 mr-1" />
                12.5%
              </Badge>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-bold">125.4K</div>
              <div className="text-xs text-muted-foreground">vs last week</div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Unique Visitors</span>
              </div>
              <Badge variant="secondary" className="bg-warning/10 text-warning">
                <TrendingDown className="w-3 h-3 mr-1" />
                2.1%
              </Badge>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-bold">89.2K</div>
              <div className="text-xs text-muted-foreground">vs last week</div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Avg. Session</span>
              </div>
              <Badge variant="secondary" className="bg-success/10 text-success">
                <TrendingUp className="w-3 h-3 mr-1" />
                8.3%
              </Badge>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-bold">3m 42s</div>
              <div className="text-xs text-muted-foreground">vs last week</div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MousePointer className="w-4 h-4 text-warning" />
                <span className="text-sm font-medium">Bounce Rate</span>
              </div>
              <Badge variant="secondary" className="bg-success/10 text-success">
                <TrendingDown className="w-3 h-3 mr-1" />
                5.2%
              </Badge>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-bold">34.5%</div>
              <div className="text-xs text-muted-foreground">vs last week</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Charts */}
      <Tabs defaultValue="traffic" className="space-y-4">
        <TabsList className="bg-card border border-border">
          <TabsTrigger value="traffic">Traffic Overview</TabsTrigger>
          <TabsTrigger value="engagement">User Engagement</TabsTrigger>
          <TabsTrigger value="conversion">Conversion Funnel</TabsTrigger>
        </TabsList>

        <TabsContent value="traffic">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Website Traffic Trends
              </CardTitle>
              <CardDescription>
                Page views and unique visitors over the last 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={analyticsData}>
                    <defs>
                      <linearGradient id="pageViews" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="visitors" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Area
                      type="monotone"
                      dataKey="pageViews"
                      stroke="hsl(var(--primary))"
                      fillOpacity={1}
                      fill="url(#pageViews)"
                      strokeWidth={2}
                    />
                    <Area
                      type="monotone"
                      dataKey="uniqueVisitors"
                      stroke="hsl(var(--accent))"
                      fillOpacity={1}
                      fill="url(#visitors)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Top Performing Pages</CardTitle>
                <CardDescription>Most visited pages this week</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topPages.map((page, index) => (
                  <div key={page.page} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold text-primary">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium">{page.page}</div>
                        <div className="text-sm text-muted-foreground">{page.views.toLocaleString()} views</div>
                      </div>
                    </div>
                    <Badge variant={page.change > 0 ? "default" : "secondary"} className={
                      page.change > 0 ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
                    }>
                      {page.change > 0 ? "+" : ""}{page.change}%
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Session Duration</CardTitle>
                <CardDescription>Average time spent per session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={analyticsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Line
                        type="monotone"
                        dataKey="sessions"
                        stroke="hsl(var(--secondary))"
                        strokeWidth={3}
                        dot={{ fill: "hsl(var(--secondary))", strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: "hsl(var(--secondary))", strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="conversion">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Conversion Funnel Analysis</CardTitle>
              <CardDescription>Track user journey from visit to conversion</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Conversion funnel visualization coming soon...</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;