"use client"

import { ChevronLeft } from "lucide-react";
import { useRouter } from 'next/navigation';

export function ReturnBar(){
  const router = useRouter();

  return(
    <div 
      className="cursor-pointer absolute top-4 left-4 p-1 rounded-lg bg-background border-2 border-border transform hover:scale-110 transition-transform z-50"
      onClick={() => router.back()}
    >
      <ChevronLeft />
    </div>
  )
}