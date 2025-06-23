import { cn } from "@/lib/utils";
import { Gauge, BarChart2, Menu, X, MapPin } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const location = useLocation();
  const pathname = location.pathname;

  const navigation = [
    { name: "Station Portal", href: "/station", icon: MapPin },
  ];

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 bg-green-500",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-full flex-col bg-cng-600 text-white shadow-lg">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <span className="text-xl font-semibold">CNG Fuel View</span>
          </div>
          <button
            className="block lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-5">
          <nav className="flex flex-col px-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "group flex items-center px-3 py-3 rounded-md mb-1",
                  pathname === item.href
                    ? "bg-cng-700/80 font-medium"
                    : "hover:bg-cng-700/40 transition-colors"
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-cng-700">
          <div className="text-xs opacity-70">
            © 2025 CNG Fuel View
          </div>
        </div>
      </div>
    </div>
  );
}