import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { 
  Database, 
  Plus, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  Filter,
  Search,
  Download,
  RefreshCw,
  Settings,
  Zap,
  Globe,
  Server,
  Cloud,
  Activity,
  BarChart3,
  Link,
  Unlink,
  Eye,
  EyeOff
} from "lucide-react";

const dataSources = [
  {
    id: 1,
    name: "Google Analytics",
    type: "analytics",
    status: "connected",
    lastSync: "2 minutes ago",
    dataPoints: 1250000,
    syncFrequency: "real-time",
    icon: "https://www.google.com/favicon.ico",
    description: "Website analytics and user behavior data"
  },
  {
    id: 2,
    name: "Facebook Ads",
    type: "advertising",
    status: "connected",
    lastSync: "5 minutes ago",
    dataPoints: 890000,
    syncFrequency: "hourly",
    icon: "https://www.facebook.com/favicon.ico",
    description: "Campaign performance and ad metrics"
  },
  {
    id: 3,
    name: "Shopify Store",
    type: "ecommerce",
    status: "connected",
    lastSync: "1 hour ago",
    dataPoints: 450000,
    syncFrequency: "daily",
    icon: "https://www.shopify.com/favicon.ico",
    description: "Sales data and customer information"
  },
  {
    id: 4,
    name: "Mailchimp",
    type: "email",
    status: "disconnected",
    lastSync: "3 days ago",
    dataPoints: 230000,
    syncFrequency: "daily",
    icon: "https://www.mailchimp.com/favicon.ico",
    description: "Email campaign analytics and subscriber data"
  },
  {
    id: 5,
    name: "HubSpot CRM",
    type: "crm",
    status: "connected",
    lastSync: "30 minutes ago",
    dataPoints: 670000,
    syncFrequency: "real-time",
    icon: "https://www.hubspot.com/favicon.ico",
    description: "Customer relationship and lead data"
  },
  {
    id: 6,
    name: "Stripe Payments",
    type: "payments",
    status: "connected",
    lastSync: "10 minutes ago",
    dataPoints: 340000,
    syncFrequency: "real-time",
    icon: "https://www.stripe.com/favicon.ico",
    description: "Payment processing and transaction data"
  }
];

const syncHistory = [
  { date: "2024-01-15", source: "Google Analytics", status: "success", records: 1250000 },
  { date: "2024-01-15", source: "Facebook Ads", status: "success", records: 890000 },
  { date: "2024-01-14", source: "Shopify Store", status: "success", records: 450000 },
  { date: "2024-01-14", source: "Mailchimp", status: "failed", records: 0 },
  { date: "2024-01-13", source: "HubSpot CRM", status: "success", records: 670000 },
  { date: "2024-01-13", source: "Stripe Payments", status: "success", records: 340000 }
];

export default function DataSources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showDisconnected, setShowDisconnected] = useState(true);

  const filteredSources = dataSources.filter(source => {
    const matchesSearch = source.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         source.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || source.status === statusFilter;
    const matchesVisibility = showDisconnected || source.status === "connected";
    return matchesSearch && matchesStatus && matchesVisibility;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected": return "bg-green-500";
      case "disconnected": return "bg-red-500";
      case "pending": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected": return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "disconnected": return <AlertCircle className="w-4 h-4 text-red-500" />;
      case "pending": return <Clock className="w-4 h-4 text-yellow-500" />;
      default: return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6 animate-enter">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Data Sources</h1>
          <p className="text-muted-foreground">Connect and manage your data integrations</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export Logs
          </Button>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Source
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="animate-enter" style={{ animationDelay: "0.1s" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sources</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-green-500" />
              5 connected, 1 disconnected
            </p>
          </CardContent>
        </Card>

        <Card className="animate-enter" style={{ animationDelay: "0.2s" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Data Points</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.8M</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-green-500" />
              +2.1M this month
            </p>
          </CardContent>
        </Card>

        <Card className="animate-enter" style={{ animationDelay: "0.3s" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sync Success Rate</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.5%</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-green-500" />
              +1.2% from last week
            </p>
          </CardContent>
        </Card>

        <Card className="animate-enter" style={{ animationDelay: "0.4s" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Sync</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2m ago</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-green-500" />
              All sources synced
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sync">Sync History</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardHeader>
              <CardTitle>Connected Sources</CardTitle>
              <CardDescription>Manage your data source connections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search sources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="connected">Connected</SelectItem>
                    <SelectItem value="disconnected">Disconnected</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={showDisconnected}
                    onCheckedChange={setShowDisconnected}
                  />
                  <Label className="text-sm">Show disconnected</Label>
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredSources.map((source, index) => (
                  <Card
                    key={source.id}
                    className="hover:shadow-lg transition-all duration-200 animate-enter cursor-pointer"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                            <img src={source.icon} alt={source.name} className="w-6 h-6" />
                          </div>
                          <div>
                            <CardTitle className="text-base">{source.name}</CardTitle>
                            <Badge variant="outline" className="text-xs">
                              {source.type}
                            </Badge>
                          </div>
                        </div>
                        {getStatusIcon(source.status)}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">{source.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Data Points:</span>
                          <span className="font-medium">{source.dataPoints.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Sync Frequency:</span>
                          <span className="font-medium">{source.syncFrequency}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Last Sync:</span>
                          <span className="font-medium">{source.lastSync}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Settings className="w-3 h-3 mr-1" />
                          Configure
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <RefreshCw className="w-3 h-3 mr-1" />
                          Sync Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sync" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sync History</CardTitle>
              <CardDescription>Recent data synchronization activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {syncHistory.map((sync, index) => (
                  <div
                    key={`${sync.date}-${sync.source}`}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors animate-enter"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(sync.status)}`} />
                      <div>
                        <h3 className="font-medium">{sync.source}</h3>
                        <p className="text-sm text-muted-foreground">{sync.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{sync.records.toLocaleString()} records</div>
                      <div className="text-sm text-muted-foreground capitalize">{sync.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sync Settings</CardTitle>
                <CardDescription>Configure data synchronization preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Auto Sync</Label>
                    <p className="text-xs text-muted-foreground">Automatically sync data sources</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Real-time Updates</Label>
                    <p className="text-xs text-muted-foreground">Enable real-time data streaming</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Error Notifications</Label>
                    <p className="text-xs text-muted-foreground">Get notified of sync failures</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Data Retention</Label>
                    <p className="text-xs text-muted-foreground">Keep historical data for 2 years</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance</CardTitle>
                <CardDescription>Monitor sync performance metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Average Sync Time</span>
                    <span className="text-sm text-muted-foreground">2.3s</span>
                  </div>
                  <Progress value={75} className="w-full" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Success Rate</span>
                    <span className="text-sm text-muted-foreground">98.5%</span>
                  </div>
                  <Progress value={98.5} className="w-full" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Data Throughput</span>
                    <span className="text-sm text-muted-foreground">1.2M records/hour</span>
                  </div>
                  <Progress value={85} className="w-full" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 