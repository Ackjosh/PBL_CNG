import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Analytics() {
  // Sample data - in a real app, this would come from an API
  const dailyData = [
    { name: "Mon", downtown: 65, highway: 78, industrial: 82 },
    { name: "Tue", downtown: 72, highway: 85, industrial: 67 },
    { name: "Wed", downtown: 58, highway: 90, industrial: 73 },
    { name: "Thu", downtown: 63, highway: 72, industrial: 79 },
    { name: "Fri", downtown: 80, highway: 68, industrial: 84 },
    { name: "Sat", downtown: 85, highway: 92, industrial: 88 },
    { name: "Sun", downtown: 70, highway: 85, industrial: 75 },
  ];

  const hourlyData = [
    { time: "6 AM", level: 90 },
    { time: "8 AM", level: 85 },
    { time: "10 AM", level: 75 },
    { time: "12 PM", level: 65 },
    { time: "2 PM", level: 58 },
    { time: "4 PM", level: 50 },
    { time: "6 PM", level: 45 },
    { time: "8 PM", level: 40 },
    { time: "10 PM", level: 35 },
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
      </div>

      <div className="grid gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Station Fuel Levels</CardTitle>
            <CardDescription>Weekly average fuel levels by station</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="downtown" name="Downtown" fill="#22c55e" />
                <Bar dataKey="highway" name="Highway 95" fill="#15803d" />
                <Bar dataKey="industrial" name="Industrial Zone" fill="#86efac" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Daily Usage Pattern</CardTitle>
              <CardDescription>Downtown Station - Today</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="chart">
                <TabsList className="mb-4">
                  <TabsTrigger value="chart">Chart</TabsTrigger>
                  <TabsTrigger value="summary">Summary</TabsTrigger>
                </TabsList>
                <TabsContent value="chart">
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={hourlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="level"
                        stroke="#22c55e"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="summary">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-secondary p-3 rounded-md">
                        <div className="text-xs text-muted-foreground">Peak Hours</div>
                        <div className="font-medium">8 AM - 10 AM</div>
                      </div>
                      <div className="bg-secondary p-3 rounded-md">
                        <div className="text-xs text-muted-foreground">Low Hours</div>
                        <div className="font-medium">6 PM - 10 PM</div>
                      </div>
                      <div className="bg-secondary p-3 rounded-md">
                        <div className="text-xs text-muted-foreground">Average Level</div>
                        <div className="font-medium">60%</div>
                      </div>
                      <div className="bg-secondary p-3 rounded-md">
                        <div className="text-xs text-muted-foreground">Refill Needed</div>
                        <div className="font-medium">In ~8 hours</div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Statistics</CardTitle>
              <CardDescription>Last 30 days overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">Average Fuel Level</div>
                    <div className="text-xl font-bold">67%</div>
                    <div className="text-xs text-green-500">⬆️ 3% vs previous month</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">Refill Frequency</div>
                    <div className="text-xl font-bold">3.4 days</div>
                    <div className="text-xs text-green-500">⬆️ 0.2 days vs previous month</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">Time Below 20%</div>
                    <div className="text-xl font-bold">4.2%</div>
                    <div className="text-xs text-red-500">⬇️ 1.1% vs target</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">Station Coverage</div>
                    <div className="text-xl font-bold">94%</div>
                    <div className="text-xs text-green-500">⬆️ 2% vs previous month</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}