import { Sidebar, SidebarContent, SidebarHeader } from "@/app/(projects)/bora-codar/desafio-3-tipos-de-botoes/components/ui/sidebar";

export function AppSidebar () {
  return (
    <Sidebar side="right">
      <SidebarHeader className="mt-12 p-8 flex flex-col gap-2">
        <h1 className="font-bold text-2xl text-left">
          Teste os botões
        </h1>
        <p className="text-sm text-[#B1B0B5]">
          Interaja com os botões e observe a mudança de aparência e de cursores
        </p>
      </SidebarHeader>
      <SidebarContent className="p-8">
        <div className="w-full flex flex-col justify-center items-center gap-8">
          <button
            className="bg-[#8257E5] py-3 w-full rounded-full text-sm border-transparent border-2 hover:bg-[#9674E5] transition-colors focus:border-2 focus:border-[#D9CDF7]"
          >
            INTERAJA COMIGO
          </button>
          <button
            className="bg-[#3C3748] py-3 w-full rounded-full text-sm"
          >
            INTERAJA COMIGO
          </button>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}