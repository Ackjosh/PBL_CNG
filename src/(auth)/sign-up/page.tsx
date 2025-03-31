import React, { useState, useEffect } from 'react';
import { useSignUp } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';

import {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface LocationData {
    latitude: number;
    longitude: number;
}

function SignUp() {
    const { isLoaded, signUp, setActive } = useSignUp();
    const { signOut } = useClerk();
    const [emailAddress, setEmailAddress] = useState("");
    const [username, setUsername] = useState("");
    const [stationName, setStationName] = useState("");
    const [password, setPassword] = useState("");
    const [pendingVerification, setPendingVerification] = useState(false);
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [location, setLocation] = useState<LocationData | null>(null);
    const [isLoadingLocation, setIsLoadingLocation] = useState(false);
    
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

    if (!isLoaded) {
        return null;
    }

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        if (!isLoaded) return;

        try {
            await signOut(); // Sign out all previous sessions before creating a new user
            console.log("signUp object:", signUp);

            await signUp.create({
                emailAddress,
                password,
                unsafeMetadata: {
                    username,
                    stationName,
                    location: JSON.stringify(location) // Convert location object to string
                }
            });
            
            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
            setPendingVerification(true);
        } catch (error: any) {
            console.error("Sign up error:", error);
            setError("An error occurred during sign up. If the issue persists, try signing in or using a different email.");
        }
    }

    async function onPressVerify(e: React.FormEvent) {
        e.preventDefault();
        if (!isLoaded) return;

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({ code });
            if (completeSignUp.status === "complete") {
                await setActive({ session: completeSignUp.createdSessionId });
                navigate("/dashboard");
            }
        } catch (error: unknown) {
            console.error("Verification error:", error);
            setError("An error occurred during verification. Try again or request a new code.");
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
                    <CardDescription>
                        {pendingVerification 
                            ? "Check your email for a verification code" 
                            : "Enter your details to get started"}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {error && (
                        <Alert variant="destructive" className="mb-4">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    {!pendingVerification ? (
                        <form onSubmit={submit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="stationName">Station Name</Label>
                                <Input id="stationName" type="text" value={stationName} onChange={(e) => setStationName(e.target.value)} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Input id="password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    <Button type="button" variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                                    </Button>
                                </div>
                            </div>
                            <Button type="submit" className="w-full" disabled={isLoadingLocation}>{isLoadingLocation ? "Getting location..." : "Sign Up"}</Button>
                        </form>
                    ) : (
                        <form onSubmit={onPressVerify} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="code">Verification Code</Label>
                                <Input id="code" value={code} onChange={(e) => setCode(e.target.value)} required />
                            </div>
                            <Button type="submit" className="w-full">Verify Email</Button>
                        </form>
                    )}
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p className="text-sm text-gray-500">Already have an account? <a href="/sign-in" className="font-medium text-blue-600 hover:underline">Sign in</a></p>
                </CardFooter>
            </Card>
        </div>
    );
}

export default SignUp;