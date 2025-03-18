"use client"; 

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthWrapper({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(auth);

    if (!auth && pathname !== "/login") {
      router.push("/login"); 
    }
  }, [pathname, router]);

  if (!isAuthenticated && pathname !== "/login") {
    return null; 
  }

  return <>{children}</>;
}
