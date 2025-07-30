import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  UserPlus, 
  TrendingUp, 
  MapPin, 
  Globe, 
  Calendar,
  Filter,
  Search,
  Download,
  Mail,
  Phone,
  Building,
  Target,
  Activity,
  BarChart3
} from "lucide-react";

const audienceData = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@company.com",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    status: "active",
    engagement: 85,
    lastActivity: "2 hours ago",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.c@startup.io",
    company: "StartupIO",
    location: "New York, NY",
    status: "active",
    engagement: 92,
    lastActivity: "1 hour ago",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.r@enterprise.com",
    company: "Enterprise Solutions",
    location: "Austin, TX",
    status: "inactive",
    engagement: 45,
    lastActivity: "3 days ago",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "David Kim",
    email: "david.k@innovate.co",
    company: "InnovateCo",
    location: "Seattle, WA",
    status: "active",
    engagement: 78,
    lastActivity: "5 hours ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
  }
];

const demographicsData = [
  { label: "18-24", value: 15, color: "bg-blue-500" },
  { label: "25-34", value: 35, color: "bg-green-500" },
  { label: "35-44", value: 28, color: "bg-yellow-500" },
  { label: "45-54", value: 15, color: "bg-orange-500" },
  { label: "55+", value: 7, color: "bg-red-500" }
];

const locationData = [
  { country: "United States", users: 1250, percentage: 45 },
  { country: "United Kingdom", users: 680, percentage: 24 },
  { country: "Canada", users: 420, percentage: 15 },
  { country: "Australia", users: 280, percentage: 10 },
  { country: "Germany", users: 170, percentage: 6 }
];

export default function Audience() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredAudience = audienceData.filter(audience => {
    const matchesSearch = audience.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         audience.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         audience.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || audience.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-enter">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Audience</h1>
          <p className="text-muted-foreground">Manage and analyze your audience segments</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export Data
          </Button>
          <Button className="gap-2">
            <UserPlus className="w-4 h-4" />
            Add Audience
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="animate-enter" style={{ animationDelay: "0.1s" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Audience</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-green-500" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="animate-enter" style={{ animationDelay: "0.2s" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,923</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-green-500" />
              +8.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="animate-enter" style={{ animationDelay: "0.3s" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Engagement</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78.5%</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-green-500" />
              +5.3% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="animate-enter" style={{ animationDelay: "0.4s" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New This Month</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">324</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-green-500" />
              +15.7% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="locations">Locations</TabsTrigger>
          <TabsTrigger value="segments">Segments</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardHeader>
              <CardTitle>Audience List</CardTitle>
              <CardDescription>View and manage your audience members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search audience..."
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
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                {filteredAudience.map((audience, index) => (
                  <div
                    key={audience.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors animate-enter"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={audience.avatar} />
                        <AvatarFallback>{audience.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{audience.name}</h3>
                        <p className="text-sm text-muted-foreground">{audience.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Building className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{audience.company}</span>
                          <MapPin className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{audience.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{audience.engagement}%</span>
                          <Progress value={audience.engagement} className="w-20" />
                        </div>
                        <p className="text-xs text-muted-foreground">{audience.lastActivity}</p>
                      </div>
                      <Badge variant={audience.status === 'active' ? 'default' : 'secondary'}>
                        {audience.status}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Age Distribution</CardTitle>
                <CardDescription>Audience age demographics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {demographicsData.map((item, index) => (
                    <div key={item.label} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{item.label}</span>
                        <span className="text-sm text-muted-foreground">{item.value}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${item.color} transition-all duration-500`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gender Distribution</CardTitle>
                <CardDescription>Audience gender breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Male</span>
                    <span className="text-sm text-muted-foreground">42%</span>
                  </div>
                  <Progress value={42} className="w-full" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Female</span>
                    <span className="text-sm text-muted-foreground">58%</span>
                  </div>
                  <Progress value={58} className="w-full" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="locations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Geographic Distribution</CardTitle>
              <CardDescription>Audience locations worldwide</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {locationData.map((location, index) => (
                  <div
                    key={location.country}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors animate-enter"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{location.country}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{location.users.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">{location.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="segments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Audience Segments</CardTitle>
              <CardDescription>Manage your audience segments and targeting</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "High Value Customers", count: 234, color: "bg-green-500" },
                  { name: "New Subscribers", count: 156, color: "bg-blue-500" },
                  { name: "Inactive Users", count: 89, color: "bg-yellow-500" },
                  { name: "Enterprise Clients", count: 67, color: "bg-purple-500" },
                  { name: "Freelancers", count: 123, color: "bg-orange-500" },
                  { name: "Students", count: 45, color: "bg-pink-500" }
                ].map((segment, index) => (
                  <div
                    key={segment.name}
                    className="p-4 border rounded-lg hover:bg-accent/50 transition-all duration-200 cursor-pointer animate-enter"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${segment.color}`} />
                      <div className="flex-1">
                        <h3 className="font-medium">{segment.name}</h3>
                        <p className="text-sm text-muted-foreground">{segment.count} members</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Target className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 