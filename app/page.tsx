"use client"

import { useMode } from "@/contexts/ModeContext";
import MemberView from "@/components/memberView/MemberView";
import AdminView from "@/components/adminView/AdminView";

export default function Home() {
  const { mode } = useMode();
  if(mode === "Member") return <MemberView/>
  if(mode === "Admin") return <AdminView/>
  return <div>Loading...</div>
}
