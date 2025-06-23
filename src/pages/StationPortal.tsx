import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { updateDoc} from "firebase/firestore";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpFromLine, Fuel, Gauge, Clock, History } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

export default function StationPortal() {
  const [fuelLevel, setFuelLevel] = useState(65);
  const [note, setNote] = useState("");
  const [stationName, setStationName] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  const db = getFirestore();

  useEffect(() => {
    const fetchStationName = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setStationName(userDoc.data().stationName);
        }
      }
    };

    fetchStationName();
  }, [auth, db]);

//   const stationData = {
//     id: "station-001",
//     name: "CNG Station - Downtown",
//     location: "123 Main St, Downtown",
//     currentFuelLevel: fuelLevel,
//     lastUpdated: new Date().toLocaleString(),
//   };

  const weeklyData = [
    { day: "Mon", level: 85 },
    { day: "Tue", level: 78 },
    { day: "Wed", level: 65 },
    { day: "Thu", level: 52 },
    { day: "Fri", level: 70 },
    { day: "Sat", level: 62 },
    { day: "Sun", level: fuelLevel },
  ];

  const hourlyData = [
    { time: "6 AM", level: 82 },
    { time: "8 AM", level: 75 },
    { time: "10 AM", level: 68 },
    { time: "12 PM", level: 60 },
    { time: "2 PM", level: 55 },
    { time: "4 PM", level: fuelLevel },
  ];

  const handleUpdateFuel = async () => {
    const user = auth.currentUser;
  
    if (user) {
      try {
        const docRef = doc(db, "users", user.uid);
  
        await updateDoc(docRef, {
          fuelLevel: fuelLevel,
          lastUpdated: new Date(),
          note: note.trim() || null,
        });
  
        toast({
          title: "Fuel data updated",
          description: `${stationName} fuel level updated to ${fuelLevel}%`,
        });
  
        setNote("");
      } catch (error) {
        toast({
          title: "Update failed",
          description: "There was an error updating the fuel data.",
          variant: "destructive",
        });
        console.error("Error updating document:", error);
      }
    }
  };
  

  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{stationName}</h1>
          {/* <p className="text-muted-foreground">{stationData.location}</p> */}
        </div>
        {/* <div className="flex items-center gap-2">
          <div className="text-sm text-muted-foreground">
            Last updated: {stationData.lastUpdated}
          </div>
        </div> */}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card className="col-span-full lg:col-span-1">
          <CardHeader>
            <CardTitle>Current Fuel Status</CardTitle>
            <CardDescription>Update your station's fuel level</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex flex-col items-center justify-center p-4">
                <div className="relative h-36 w-36 flex items-center justify-center">
                  <Gauge className="h-full w-full text-muted-foreground opacity-20" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">{fuelLevel}%</span>
                    <span className="text-xs text-muted-foreground">Fuel Level</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="fuel-level">Update Fuel Level</Label>
                    <span className="text-sm">{fuelLevel}%</span>
                  </div>
                  <Slider
                    id="fuel-level"
                    min={0}
                    max={100}
                    step={1}
                    value={[fuelLevel]}
                    onValueChange={([value]) => setFuelLevel(value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="note">Add Note (Optional)</Label>
                  <Textarea 
                    id="note" 
                    placeholder="Any additional information about this update..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full gap-2" 
              onClick={handleUpdateFuel}
            >
              <ArrowUpFromLine className="h-4 w-4" />
              Update Fuel Data
            </Button>
          </CardFooter>
        </Card>

        <Card className="col-span-full lg:col-span-2">
          <CardHeader>
            <CardTitle>Station Analytics</CardTitle>
            <CardDescription>Weekly fuel level trends</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="weekly">
              <TabsList className="mb-4">
                <TabsTrigger value="weekly">Weekly View</TabsTrigger>
                <TabsTrigger value="daily">Daily View</TabsTrigger>
              </TabsList>
              <TabsContent value="weekly" className="space-y-4">
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Bar dataKey="level" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="daily" className="space-y-4">
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
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Station Statistics</CardTitle>
            <CardDescription>Last 30 days overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Fuel className="h-3.5 w-3.5" />
                  Average Fuel Level
                </div>
                <div className="text-xl font-bold">73%</div>
                <div className="text-xs text-green-500">⬆️ 5% vs previous month</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  Refill Frequency
                </div>
                <div className="text-xl font-bold">3.2 days</div>
                <div className="text-xs text-green-500">⬆️ 0.3 days vs previous month</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Gauge className="h-3.5 w-3.5" />
                  Hours Below 20%
                </div>
                <div className="text-xl font-bold">4.5 hrs</div>
                <div className="text-xs text-red-500">⬆️ 1.2 hrs vs target</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <History className="h-3.5 w-3.5" />
                  Total Updates
                </div>
                <div className="text-xl font-bold">47</div>
                <div className="text-xs text-green-500">⬆️ 12 vs previous month</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Station Information</CardTitle>
            <CardDescription>Details and management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs text-muted-foreground">Station Name</Label>
                  <div className="font-medium">{stationName}</div>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Account Type</Label>
                  <div className="font-medium">Station Operator</div>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Operating Hours</Label>
                  <div className="font-medium">24/7</div>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Status</Label>
                  <div className="font-medium text-green-500">Active</div>
                </div>
              </div>
              
              {/* <div className="pt-2">
                <Button variant="outline" className="w-full" onClick={() => navigate("/settings")}>
                  Manage Station Settings
                </Button>
              </div> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}