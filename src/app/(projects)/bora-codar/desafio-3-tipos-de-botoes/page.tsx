import { SidebarProvider } from "@/app/(projects)/bora-codar/desafio-3-tipos-de-botoes/components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";

const Desafio3TiposDeBotoes = () => {
  return (
    <SidebarProvider>
      <main className="w-full h-screen bg-[#0B0911] flex justify-center items-center py-20 px-3">
        <p>Teste</p>
      </main>
      <AppSidebar />
    </SidebarProvider>
  )
}

export default Desafio3TiposDeBotoes;