import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StationCard } from "@/components/dashboard/StationCard";
import { FuelDataModal } from "@/components/dashboard/FuelDataModal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Fuel, Users, TrendingUp, Clock } from "lucide-react";

export default function Dashboard() {
  // Sample data - in a real app, this would come from an API
  const stations = [
    {
      id: "1",
      name: "CNG Station - Downtown",
      location: "123 Main St, Downtown",
      fuelLevel: 85,
      lastUpdated: "Today, 2:30 PM",
    },
    {
      id: "2",
      name: "Green Fuel - Highway 95",
      location: "Highway 95, Mile 23",
      fuelLevel: 42,
      lastUpdated: "Today, 11:15 AM",
    },
    {
      id: "3",
      name: "EcoFill - Industrial Zone",
      location: "45 Industry Road",
      fuelLevel: 68,
      lastUpdated: "Today, 9:45 AM",
    },
    {
      id: "4",
      name: "CNG Express - North Side",
      location: "789 North Avenue",
      fuelLevel: 17,
      lastUpdated: "Yesterday, 8:20 PM",
    },
  ];

  const stats = [
    {
      title: "Stations",
      value: "24",
      description: "Active monitoring",
      icon: <Fuel className="h-4 w-4" />,
    },
    {
      title: "Users",
      value: "1,342",
      description: "App downloads",
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "Updates",
      value: "147",
      description: "Last 24 hours",
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      title: "Response Time",
      value: "3.4s",
      description: "Average",
      icon: <Clock className="h-4 w-4" />,
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <FuelDataModal />
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">About CNG Fuel View</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="prose max-w-none">
              <p>
                Welcome to CNG Fuel View - your real-time CNG fuel station monitoring platform. Our service allows you to:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>View real-time fuel levels at CNG stations across the network</li>
                <li>Receive updates when stations are refilled or running low</li>
                <li>Contribute data to help other drivers find available fuel</li>
                <li>Track historical fuel level trends to plan your refueling strategy</li>
              </ul>
              <p className="mt-2">
                Start by monitoring the stations below, or add new fuel data if you've visited a station recently.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center">
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Stations Overview</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {stations.map((station) => (
            <StationCard key={station.id} station={station} />
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
}