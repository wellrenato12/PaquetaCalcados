import ModaFeminina from '../../../assets/ModaFeminina.png'
import ModaMasculina from '../../../assets/ModaMasculina.png'
import HoverModaFeminina from '../../../assets/HoverFeminino.png'
import HoverModaMasculina from '../../../assets/HoverMasculino.png'
import { Link } from 'react-scroll'

export function Fashion() {
  return (
    <div className="xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] m-auto">
      <div className="flex flex-col lg:flex-row gap-8 mt-24 justify-between items-center">
        <div className="relative">
          <img
            className="w-[350px] h-[350px] md:w-[650px] md:h-[622px] object-cover"
            src={ModaFeminina}
            alt="Moda Feminina"
          />
          <div className="absolute top-0">
            <div className="relative">
              <img
                className="w-[350px] h-[350px] md:w-[650px] md:h-[622px]"
                src={HoverModaFeminina}
                alt=""
              />
              <h2 className="absolute bottom-0 pb-12 pl-12 text-[24px] md:text-[48px] text-[#ffffff] w-40">
                Calçados Femininos
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 items-center md:items-end text-[16px] md:text-[22px] text-center md:text-end md:w-[580px]">
          <p>
            Escolher o seu sapato favorito entre nossa
            <strong> variedade de modelos e cores</strong> não será uma tarefa
            fácil, mas o que uma mulher não consegue fazer?
          </p>
          <Link to="/shoes" spy={true} smooth={true} offset={0} duration={1000}>
            <button className="w-[257px] rounded px-4 py-2 font-bold text-[#ffffff] bg-gradient-to-r from-[#F99500] to-[#FFCD29]">
              CONFERIR
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-8 lg:flex-row mt-24 justify-between items-center">
        <div className="flex flex-col items-center md:items-start gap-12 md:w-[580px] text-[16px] text-center md:text-start md:text-[22px]">
          <p>
            Tenha em seu guarda roupa sapatos de qualidade e confortáveis, para
            o dia a dia, trabalho e até mesmo para praticar esportes!
          </p>
          <Link to="/shoes" spy={true} smooth={true} offset={0} duration={1000}>
            <button className="w-[257px] rounded px-4 py-2 font-bold text-[#ffffff] bg-gradient-to-r from-[#F99500] to-[#FFCD29]">
              CONFERIR
            </button>
          </Link>
        </div>
        <div>
          <div className="relative">
            <img
              className="w-[350px] h-[350px] md:w-[650px] md:h-[622px] object-cover"
              src={ModaMasculina}
              alt="Moda Masculina"
            />
            <div>
              <img
                className="absolute top-0 w-[350px] h-[350px] md:w-[650px] md:h-[622px]"
                src={HoverModaMasculina}
                alt=""
              />
              <h2 className="flex text-right absolute bottom-0 right-0 pr-12 pb-12 text-[24px] md:text-[48px] text-[#ffffff] w-40 md:w-[360px]">
                Calçados Masculinos
              </h2>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-px my-20 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  )
}
