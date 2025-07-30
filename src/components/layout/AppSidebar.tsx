import { useState } from "react";
import { 
  BarChart3, 
  Users, 
  Settings, 
  FileText, 
  Target,
  TrendingUp,
  Database,
  Bell,
  Search,
  ChevronDown,
  LogOut,
  User
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainNavItems = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
  { title: "Analytics", url: "/analytics", icon: TrendingUp },
  { title: "Campaigns", url: "/campaigns", icon: Target },
  { title: "Reports", url: "/reports", icon: FileText },
  { title: "Audience", url: "/audience", icon: Users },
  { title: "Data Sources", url: "/data-sources", icon: Database },
];

const settingsItems = [
  { title: "General", url: "/settings", icon: Settings },
  { title: "Notifications", url: "/settings/notifications", icon: Bell },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const getNavCls = (path: string) =>
    isActive(path) 
      ? "bg-sidebar-primary/10 text-sidebar-primary border-r-2 border-sidebar-primary font-medium" 
      : "text-sidebar-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50";

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} border-r border-border/50 bg-sidebar backdrop-blur-xl transition-all duration-300 animate-slide-in`} collapsible="icon">
      <SidebarHeader className="p-4 border-b border-border/50">
        {!collapsed ? (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold gradient-text truncate">ADmyBRAND</h2>
              <p className="text-xs text-muted-foreground truncate">Insights</p>
            </div>
          </div>
        ) : (
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
            <BarChart3 className="w-4 h-4 text-white" />
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="py-4">
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={`${getNavCls(item.url)} transition-all duration-200 group flex items-center px-3 py-2 rounded-md animate-hover`}
                      end={item.url === "/"}
                    >
                      <item.icon className={`h-4 w-4 ${collapsed ? "mx-auto" : "mr-3"} group-hover:scale-110 transition-transform flex-shrink-0`} />
                      {!collapsed && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Settings
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={`${getNavCls(item.url)} transition-all duration-200 group flex items-center px-3 py-2 rounded-md animate-hover`}
                    >
                      <item.icon className={`h-4 w-4 ${collapsed ? "mx-auto" : "mr-3"} group-hover:scale-110 transition-transform flex-shrink-0`} />
                      {!collapsed && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border/50">
        {!collapsed ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start gap-3 h-auto p-3">
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                  <AvatarFallback className="bg-gradient-primary text-white">JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-sm font-medium truncate">John Doe</p>
                  <p className="text-xs text-muted-foreground truncate">john@company.com</p>
                </div>
                <ChevronDown className="w-4 h-4 flex-shrink-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <User className="w-4 h-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                <LogOut className="w-4 h-4 mr-2" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Avatar className="w-8 h-8 mx-auto">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
            <AvatarFallback className="bg-gradient-primary text-white">JD</AvatarFallback>
          </Avatar>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}