import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface StationCardProps {
  station: {
    id: string;
    name: string;
    location: string;
    fuelLevel: number;
    lastUpdated: string;
  };
}

export function StationCard({ station }: StationCardProps) {
  // Determine fuel status color based on level
  const getFuelStatusColor = (level: number) => {
    if (level < 20) return "bg-red-500";
    if (level < 50) return "bg-amber-500";
    return "bg-cng-500";
  };

  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{station.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{station.location}</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Fuel Level</span>
            <span className="text-sm font-bold">{station.fuelLevel}%</span>
          </div>
          <Progress 
            value={station.fuelLevel} 
            className={cn("h-2", getFuelStatusColor(station.fuelLevel))} 
          />
          <p className="text-xs text-muted-foreground mt-2">
            Last updated: {station.lastUpdated}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}