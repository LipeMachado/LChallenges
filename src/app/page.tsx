import { NavBar } from "@/components/nav-bar";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Separator } from "@/components/ui/separator";
import { Pastes } from "./data/projects";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Separator />
      <main className="flex items-center justify-between mx-0 lg:mx-32 px-2 py-4">
        <HoverEffect items={Pastes} />
      </main>
    </div>
  );
}
