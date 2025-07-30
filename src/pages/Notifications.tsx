import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Bell, 
  Settings, 
  Search, 
  Filter,
  Check,
  X,
  AlertTriangle,
  Info,
  CheckCircle,
  Clock,
  Mail,
  MessageSquare,
  Zap,
  TrendingUp,
  Users,
  Target,
  Activity,
  BarChart3,
  Download,
  Trash2,
  Eye,
  EyeOff
} from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "success",
    title: "Campaign Performance Alert",
    message: "Your 'Summer Sale' campaign has exceeded 150% of its target performance.",
    time: "2 minutes ago",
    read: false,
    priority: "high",
    category: "campaigns"
  },
  {
    id: 2,
    type: "warning",
    title: "Data Sync Issue",
    message: "Google Analytics data sync failed. Retrying in 5 minutes.",
    time: "15 minutes ago",
    read: false,
    priority: "medium",
    category: "system"
  },
  {
    id: 3,
    type: "info",
    title: "New Audience Segment",
    message: "A new audience segment 'High-Value Customers' has been created.",
    time: "1 hour ago",
    read: true,
    priority: "low",
    category: "audience"
  },
  {
    id: 4,
    type: "success",
    title: "Revenue Milestone",
    message: "Monthly revenue has reached $50,000 milestone!",
    time: "3 hours ago",
    read: true,
    priority: "high",
    category: "analytics"
  },
  {
    id: 5,
    type: "warning",
    title: "Low Engagement Alert",
    message: "Email campaign 'Newsletter #45' has below-average open rates.",
    time: "5 hours ago",
    read: true,
    priority: "medium",
    category: "campaigns"
  },
  {
    id: 6,
    type: "info",
    title: "System Maintenance",
    message: "Scheduled maintenance will occur tonight at 2:00 AM EST.",
    time: "1 day ago",
    read: true,
    priority: "low",
    category: "system"
  }
];

const notificationSettings = [
  {
    category: "Campaigns",
    description: "Campaign performance and optimization alerts",
    email: true,
    push: true,
    sms: false
  },
  {
    category: "Analytics",
    description: "Revenue, traffic, and conversion alerts",
    email: true,
    push: true,
    sms: true
  },
  {
    category: "Audience",
    description: "New segments and audience insights",
    email: true,
    push: false,
    sms: false
  },
  {
    category: "System",
    description: "Technical issues and maintenance updates",
    email: true,
    push: true,
    sms: false
  }
];

export default function Notifications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [showRead, setShowRead] = useState(true);

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || notification.category === categoryFilter;
    const matchesPriority = priorityFilter === "all" || notification.priority === priorityFilter;
    const matchesRead = showRead || !notification.read;
    return matchesSearch && matchesCategory && matchesPriority && matchesRead;
  });

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "success": return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "warning": return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case "error": return <X className="w-5 h-5 text-red-500" />;
      case "info": return <Info className="w-5 h-5 text-blue-500" />;
      default: return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500";
      case "medium": return "bg-yellow-500";
      case "low": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6 animate-enter">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">Manage your alerts and notifications</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button variant="outline" className="gap-2">
            <Trash2 className="w-4 h-4" />
            Clear All
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="animate-enter" style={{ animationDelay: "0.1s" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Notifications</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{notifications.length}</div>
            <p className="text-xs text-muted-foreground">
              {unreadCount} unread
            </p>
          </CardContent>
        </Card>

        <Card className="animate-enter" style={{ animationDelay: "0.2s" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Priority</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Requires attention
            </p>
          </CardContent>
        </Card>

        <Card className="animate-enter" style={{ animationDelay: "0.3s" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +3 from last week
            </p>
          </CardContent>
        </Card>

        <Card className="animate-enter" style={{ animationDelay: "0.4s" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3h</div>
            <p className="text-xs text-muted-foreground">
              Average response
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
          <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
          <TabsTrigger value="high">High Priority (2)</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>All Notifications</CardTitle>
              <CardDescription>View and manage all your notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search notifications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="campaigns">Campaigns</SelectItem>
                    <SelectItem value="analytics">Analytics</SelectItem>
                    <SelectItem value="audience">Audience</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priorities</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={showRead}
                    onCheckedChange={setShowRead}
                  />
                  <Label className="text-sm">Show read</Label>
                </div>
              </div>

              <div className="space-y-4">
                {filteredNotifications.map((notification, index) => (
                  <div
                    key={notification.id}
                    className={`flex items-start gap-4 p-4 border rounded-lg hover:bg-accent/50 transition-all duration-200 animate-enter ${
                      !notification.read ? 'bg-accent/20 border-primary/20' : ''
                    }`}
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium">{notification.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              {notification.category}
                            </Badge>
                            <div className={`w-2 h-2 rounded-full ${getPriorityColor(notification.priority)}`} />
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          {!notification.read && (
                            <Badge variant="secondary" className="text-xs">
                              New
                            </Badge>
                          )}
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="unread" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Unread Notifications</CardTitle>
              <CardDescription>Notifications that require your attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.filter(n => !n.read).map((notification, index) => (
                  <div
                    key={notification.id}
                    className="flex items-start gap-4 p-4 border rounded-lg bg-accent/20 border-primary/20 hover:bg-accent/50 transition-all duration-200 animate-enter"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium">{notification.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              {notification.category}
                            </Badge>
                            <div className={`w-2 h-2 rounded-full ${getPriorityColor(notification.priority)}`} />
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <Badge variant="secondary" className="text-xs">
                            New
                          </Badge>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Check className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="high" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>High Priority Notifications</CardTitle>
              <CardDescription>Critical alerts that need immediate attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.filter(n => n.priority === 'high').map((notification, index) => (
                  <div
                    key={notification.id}
                    className="flex items-start gap-4 p-4 border rounded-lg border-red-200 bg-red-50/20 hover:bg-red-50/40 transition-all duration-200 animate-enter"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium">{notification.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              {notification.category}
                            </Badge>
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          {!notification.read && (
                            <Badge variant="destructive" className="text-xs">
                              Critical
                            </Badge>
                          )}
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Check className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {notificationSettings.map((setting, index) => (
                  <div
                    key={setting.category}
                    className="flex items-center justify-between p-4 border rounded-lg animate-enter"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <div className="flex-1">
                      <h3 className="font-medium">{setting.category}</h3>
                      <p className="text-sm text-muted-foreground">{setting.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <Switch defaultChecked={setting.email} />
                      </div>
                      <div className="flex items-center gap-2">
                        <Bell className="w-4 h-4 text-muted-foreground" />
                        <Switch defaultChecked={setting.push} />
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-muted-foreground" />
                        <Switch defaultChecked={setting.sms} />
                      </div>
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