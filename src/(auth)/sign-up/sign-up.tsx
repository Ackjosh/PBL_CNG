import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, setDoc, addDoc, collection } from "firebase/firestore";
import { updateDoc} from "firebase/firestore";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const auth = getAuth(app);
const db = getFirestore(app);

interface LocationData {
    latitude: number;
    longitude: number;
}

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [username, setUsername] = useState("");
    const [stationName, setStationName] = useState("");
    const [location, setLocation] = useState<LocationData | null>(null);
    const [isLoadingLocation, setIsLoadingLocation] = useState(false);
    const [fuelLevel , setFuelLevel] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const getLocationData = () => {
            if (!navigator.geolocation) return;

            setIsLoadingLocation(true);

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    setIsLoadingLocation(false);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setLocation(null);
                    setIsLoadingLocation(false);
                },
                {
                    timeout: 5000,
                    maximumAge: 10000
                }
            );
        };

        getLocationData();
    }, []);

    const createUser = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!location) {
            setErrorMessage("Unable to fetch location. Please enable location services and try again.");
            return;
        }
    
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                email: email,
                username: username,
                stationName: stationName,
                createdAt: new Date(),
                latitude: location.latitude,
                longitude: location.longitude,
                fuelLevel: 65,
                password: password
            });
    
            console.log("User created and data stored:", user.uid);
            navigate("/station");
        } catch (error) {
            setErrorMessage(error.message);
            console.error("Error signing up:", error.message);
        }
    };
    

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={createUser} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="stationName">Station Name</Label>
                            <Input id="stationName" type="text" value={stationName} onChange={(e) => setStationName(e.target.value)} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-2 top-1/2 -translate-y-1/2"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                                </Button>
                            </div>
                        </div>
                        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                        <Button type="submit" className="w-full" onClick={createUser}>Sign Up</Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p className="text-sm text-gray-500">
                        Already have an account? <a href="/sign-in" className="font-medium text-blue-600 hover:underline">Sign in</a>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default SignUp;
