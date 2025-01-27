'use client';

import { useState } from "react";
import Image from "next/image";
import ProductImage from "./assets/sofa.jpg";
import AnimatedProductImage from "./assets/sofa.gif";
import Btn360 from "./assets/btn-360.png";
import BtnClose from "./assets/btn-close.png";

const Desafio2CardDeProduto = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const toggleAnimation = () => {
    setIsAnimated((prev) => !prev);
  };

  return (
    <div className="w-full h-screen bg-[#D9CDF7] flex justify-center items-center py-20 px-3">
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="relative flex justify-start px-2 py-5">
          <div>
            <Image
              id="static"
              src={ProductImage}
              alt="Sofá Margot II - Rosé"
              width={640}
              height={480}
              className={`object-cover w-[439px] md:w-[449px] h-[222px] md:h-[222px] ${isAnimated ? "hidden" : ""}`}
            />
            <Image
              id="animated"
              src={AnimatedProductImage}
              alt="Sofá animado"
              width={640}
              height={480}
              className={`object-cover w-[439px] md:w-[449px] h-[222px] md:h-[222px] ${!isAnimated ? "hidden" : "rotate"}`}
            />
            <button
              id="btn-360"
              className={`absolute top-2 right-2 bg-transparent p-2 ${isAnimated ? "hidden" : ""}`}
              onClick={toggleAnimation}
            >
              <Image src={Btn360} alt="Clique para animar a imagem" width={30} height={30} />
            </button>
            <button
              id="btn-close"
              className={`absolute top-2 right-16 bg-transparent p-2 ${!isAnimated ? "hidden" : ""}`}
              onClick={toggleAnimation}
            >
              <Image src={BtnClose} alt="Clique para animar a imagem" width={18} height={18} />
            </button>
          </div>
        </div>

        <div className="p-5">
          <h4 className="font-light text-sm text-black">CÓDIGO: <span>42404</span></h4>
          <h1 className="font-serif font-semibold text-3xl mt-3 text-black">Sofá Margot II - Rosé</h1>
          <p className="mt-3 opacity-67 text-black">R$ 4.000</p>

          <button className="mt-4 p-2 bg-transparent border border-gray-700 rounded-full text-sm font-light w-full hover:bg-gray-700 hover:text-white transition ease-in-out duration-300 text-black">
            ADICIONAR À CESTA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Desafio2CardDeProduto;