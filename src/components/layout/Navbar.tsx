import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
}

export function Navbar({ sidebarOpen, setSidebarOpen }: NavbarProps) {

  const auth = getAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("User signed out successfully");
            navigate("/");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          {/* <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:mr-2 text-gray-700 hover:text-gray-900"
          >
            <Menu className="h-6 w-6" />

            <span className="sr-only">Toggle sidebar</span>
          </button> */}
        </div>
        {/* <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarFallback className="bg-cng-500 text-white">
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <SignedIn>
            <UserButton/>
          </SignedIn>
          <Button onClick={handleLogout} className="bg-green-500 text-white">Sign Out</Button>
        </div> */}
      </div>
    </header>
  );
}