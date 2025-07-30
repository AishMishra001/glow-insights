// Mock data for ADmyBRAND Insights Analytics Dashboard

export interface MetricCard {
  id: string;
  title: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: string;
  color: "primary" | "success" | "warning" | "accent";
}

export interface ChartDataPoint {
  name: string;
  value: number;
  date?: string;
  revenue?: number;
  users?: number;
  conversions?: number;
}

export interface TableRow {
  id: string;
  campaign: string;
  channel: string;
  clicks: number;
  conversions: number;
  revenue: number;
  ctr: number;
  status: "active" | "paused" | "completed";
  date: string;
}

// Key Metrics Data
export const metricsData: MetricCard[] = [
  {
    id: "revenue",
    title: "Total Revenue",
    value: "$2,847,293",
    change: 12.5,
    changeLabel: "vs last month",
    icon: "DollarSign",
    color: "primary"
  },
  {
    id: "users",
    title: "Active Users",
    value: "847,239",
    change: 8.2,
    changeLabel: "vs last month",
    icon: "Users",
    color: "success"
  },
  {
    id: "conversions",
    title: "Conversions",
    value: "23,847",
    change: 15.3,
    changeLabel: "vs last month",
    icon: "Target",
    color: "accent"
  },
  {
    id: "growth",
    title: "Growth Rate",
    value: "24.8%",
    change: 4.1,
    changeLabel: "vs last month",
    icon: "TrendingUp",
    color: "warning"
  }
];

// Revenue Chart Data (Line Chart)
export const revenueChartData: ChartDataPoint[] = [
  { name: "Jan", value: 2400000, date: "2024-01" },
  { name: "Feb", value: 2210000, date: "2024-02" },
  { name: "Mar", value: 2580000, date: "2024-03" },
  { name: "Apr", value: 2847293, date: "2024-04" },
  { name: "May", value: 2650000, date: "2024-05" },
  { name: "Jun", value: 2890000, date: "2024-06" }
];

// User Acquisition Channels (Bar Chart)
export const channelData: ChartDataPoint[] = [
  { name: "Google Ads", value: 324567, revenue: 1247000 },
  { name: "Facebook", value: 285431, revenue: 987000 },
  { name: "Instagram", value: 156789, revenue: 543000 },
  { name: "LinkedIn", value: 89234, revenue: 398000 },
  { name: "Twitter", value: 67891, revenue: 234000 },
  { name: "TikTok", value: 45623, revenue: 187000 }
];

// Traffic Sources (Pie Chart)
export const trafficSourceData: ChartDataPoint[] = [
  { name: "Organic Search", value: 35.4 },
  { name: "Paid Search", value: 28.7 },
  { name: "Social Media", value: 18.9 },
  { name: "Direct", value: 12.3 },
  { name: "Email", value: 4.7 }
];

// Campaign Performance Table Data
export const campaignTableData: TableRow[] = [
  {
    id: "1",
    campaign: "Summer Sale 2024",
    channel: "Google Ads",
    clicks: 45672,
    conversions: 2847,
    revenue: 284700,
    ctr: 6.23,
    status: "active",
    date: "2024-06-15"
  },
  {
    id: "2",
    campaign: "Brand Awareness Q2",
    channel: "Facebook",
    clicks: 34521,
    conversions: 1936,
    revenue: 193600,
    ctr: 5.61,
    status: "active",
    date: "2024-06-10"
  },
  {
    id: "3",
    campaign: "Product Launch",
    channel: "Instagram",
    clicks: 23456,
    conversions: 1874,
    revenue: 374800,
    ctr: 7.99,
    status: "completed",
    date: "2024-05-28"
  },
  {
    id: "4",
    campaign: "LinkedIn B2B Campaign",
    channel: "LinkedIn",
    clicks: 12847,
    conversions: 967,
    revenue: 145050,
    ctr: 7.53,
    status: "active",
    date: "2024-06-12"
  },
  {
    id: "5",
    campaign: "Retargeting Campaign",
    channel: "Google Ads",
    clicks: 56789,
    conversions: 3421,
    revenue: 512700,
    ctr: 6.02,
    status: "paused",
    date: "2024-06-08"
  },
  {
    id: "6",
    campaign: "Holiday Prep",
    channel: "TikTok",
    clicks: 67234,
    conversions: 2156,
    revenue: 172480,
    ctr: 3.21,
    status: "active",
    date: "2024-06-14"
  }
];

// Real-time simulation data
export const generateRealTimeData = () => {
  const baseRevenue = 2847293;
  const variation = Math.random() * 50000 - 25000; // ±25k variation
  return {
    revenue: Math.round(baseRevenue + variation),
    users: Math.round(847239 + Math.random() * 1000 - 500),
    conversions: Math.round(23847 + Math.random() * 100 - 50),
    timestamp: new Date().toISOString()
  };
};