import { CardVertical, CardHorizontal } from "./components/card";

const Desafio1PlayerDeMusica = () => {
  return (
    <div className="w-full h-full md:h-screen flex justify-center items-center py-20 md:py-0 p-3 md:p-0">
      <div className="flex-col md:flex-row flex gap-8">
        <CardVertical />
        <div className="flex flex-col gap-8">
          <CardHorizontal />
          <CardHorizontal 
            slider="hidden"
          />
        </div>
      </div>
    </div>
  )
}

export default Desafio1PlayerDeMusica