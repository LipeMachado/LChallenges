import { BoraCodarProjects } from "@/app/data/projects";
import { NavBar } from "@/components/nav-bar";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Separator } from "@/components/ui/separator";

export default function BoraCodarPage(){
  return(
    <div className="bg-background">
      <NavBar
        title="Desafios Bora Codar"
      />
      <Separator />
      <main className="flex items-center justify-between mx-0 lg:mx-32 px-2 py-4">
        <HoverEffect items={BoraCodarProjects} />
      </main>
    </div>
  )
}