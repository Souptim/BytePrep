"use client"


import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout");
    router.refresh();
  };
  

  return (
    <Button onClick={handleLogout} className="bg-purple-700 text-white font-bold">
      Logout
    </Button>
  );
};

export default LogoutButton;
