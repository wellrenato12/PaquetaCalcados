import { EnvelopeSimple, User } from '@phosphor-icons/react'
// import Linha from '../../../assets/Linha.png'
// import Seta from '../../../assets/seta.png'
import Mastercard from '../../../assets/mastercard.png'
import American from '../../../assets/american.png'
import Elo from '../../../assets/elo.png'
import PaquetaPagamento from '../../../assets/paqueta-pagamento.png'
import Gaston from '../../../assets/gaston.png'
import Visa from '../../../assets/visa.png'
import Hipercard from '../../../assets/hipercard.png'
import Itau from '../../../assets/itau.png'
import Boleto from '../../../assets/boleto.png'
import Instagram from '../../../assets/instagram.png'
import Facebook from '../../../assets/facebook.png'
import Twiter from '../../../assets/twiter.png'
import Youtube from '../../../assets/youtube.png'
import Pix from '../../../assets/p.png'
import Premios from '../../../assets/premios.png'
import Seguranca from '../../../assets/segurança.png'
import PaquetaFooter from '../../../assets/logo-footer.png'

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#FF8A29] to-[#CF5D00] to-70%">
      <div className="flex justify-center md:justify-between m-auto xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] h-[600px] lg:h-[400px]">
        <div className="flex gap-8 flex-col md:flex-row items-center justify-between py-8 xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px]">
          <div className="flex relative">
            <h2 className="font-bold lg:text-[34px] text-[26px] text-white w-[300px] md:w-[400px]">
              SEJA O PRIMEIRO A RECEBER NOSSAS OFERTAS E NOVIDADES EXCLUSIVAS!
            </h2>
            {/* <div className="hidden xl:flex">
              <img
                className="w-[124px] h-[67px] absolute left-[430px] bottom-6"
                src={Linha}
                alt=""
              />
              <img
                className="w-[49px] h-[49px] absolute left-[540px] bottom-0"
                src={Seta}
                alt=""
              />
            </div> */}
          </div>
          <form className="flex items-center flex-col gap-8 md:w-[650px]">
            <p className="font-medium text-center text-white text-[16px] lg:text-[20px]">
              Nos informe o seu e-mail e nome para o melhor atendimento!
            </p>
            <div className="flex flex-col xl:flex-row gap-8">
              <div className="flex items-center border-b-[1px] gap-4 w-[300px] py-[4px]">
                <EnvelopeSimple size={24} color="#ffffff" />
                <input
                  required
                  className="bg-transparent text-white placeholder-zinc-100 placeholder-opacity-70 outline-none"
                  type="text"
                  placeholder="maria@seuemail.com"
                />
              </div>
              <div className="flex items-center border-b-[1px] gap-4 w-[300px] py-[4px]">
                <User size={24} color="#ffffff" />
                <input
                  required
                  className="bg-transparent text-white placeholder-zinc-100 placeholder-opacity-70 outline-none"
                  type="text"
                  placeholder="Maria da Silva"
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 justify-between">
              <div className="flex flex-col gap-6 xl:flex-row justify-between">
                <p className="text-white font-medium text-[18px]">
                  Tenho interesse na categoria:
                </p>
                <div className="flex gap-8">
                  <label className="flex gap-4">
                    <input type="radio" name="opcao" id="Masculino" />
                    <span className="text-white text-[18px]">Masculino</span>
                  </label>
                  <label className="flex gap-4 ">
                    <input type="radio" name="opcao" id="Feminino" />
                    <span className="text-white text-[18px]">Feminino</span>
                  </label>
                </div>
              </div>
              <button className="w-[257px] rounded px-4 py-2 font-bold text-[#ffffff] bg-gradient-to-r from-[#F99500] to-[#FFCD29]">
                CONFERIR
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-[#ececec] flex flex-wrap justify-center gap-16 py-12">
        <ul className="flex flex-col gap-6 text-[14px] text-gray-400">
          <li>
            <strong className="text-[18px] font-bold text-[#383838]">
              Institucional
            </strong>
          </li>
          <li>
            <a href="">Quem Somos</a>
          </li>
          <li>
            <a href="">Nossas Lojas</a>
          </li>
          <li>
            <a href="">Soluções Corporativas</a>
          </li>
          <li>
            <a href="">Política de Privacidade</a>
          </li>
          <li>
            <a href="">Contrato de Compra e Venda</a>
          </li>
          <li>
            <a href="">Crédito Pessoal</a>
          </li>
        </ul>

        <ul className="flex flex-col gap-6 text-[14px] text-gray-400">
          <li>
            <strong className="text-[18px] font-bold text-[#383838]">
              Ajuda e Suporte
            </strong>
          </li>
          <li>
            <a href="">Troca e Devolução</a>
          </li>
          <li>
            <a href="">2&ordf; Via do Boleto</a>
          </li>
          <li>
            <a href="">Detalhamento de Fatura</a>
          </li>
          <li>
            <a href="">Entregas</a>
          </li>
          <li>
            <a href="">Meus Pedidos</a>
          </li>
          <li>
            <a href="">Dúvidas Frequentes</a>
          </li>
          <li>
            <a href="">Status do Pedido</a>
          </li>
        </ul>

        <ul className="flex flex-col gap-6 text-[14px] text-gray-400">
          <li>
            <strong className="text-[18px] font-bold text-[#383838]">
              Atendimento
            </strong>
          </li>
          <li>
            <a href="">Fale Conosco</a>
          </li>
          <li>
            <strong className="text-[18px] font-bold text-[#383838]">
              Endereço
            </strong>
          </li>
          <li className="flex flex-col">
            <a href="">Rua Antonio Frederico Ozanan, 2601</a>
            <a href="">Canoas - RS | CNPJ: 01.0998.983/0175-02</a>
          </li>
          <li>
            <strong className="text-[18px] font-bold text-[#383838]">
              Trabalhe Conosco
            </strong>
          </li>
          <li>
            <a href="">Venha crescre com a Paquetá</a>
          </li>
        </ul>

        <ul className="flex flex-col gap-6 text-[14px] text-gray-400">
          <li>
            <strong className="text-[18px] font-bold text-[#383838]">
              Formas de Pagamento
            </strong>
          </li>
          <div className="flex gap-4">
            <li>
              <a href="">
                <img
                  className="w-[80px] h-[45px]"
                  src={Mastercard}
                  alt="Mastercard"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  className="w-[80px] h-[45px]"
                  src={American}
                  alt="American"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img className="w-[80px] h-[45px]" src={Elo} alt="Elo" />
              </a>
            </li>
          </div>
          <div className="flex gap-4">
            <li>
              <a href="">
                <img
                  className="w-[80px] h-[45px]"
                  src={PaquetaPagamento}
                  alt="Paqueta Pagamento"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img className="w-[80px] h-[45px]" src={Gaston} alt="Gaston" />
              </a>
            </li>
            <li>
              <a href="">
                <img className="w-[80px] h-[45px]" src={Visa} alt="Visa" />
              </a>
            </li>
          </div>
          <div className="flex gap-4">
            <li>
              <a href="">
                <img
                  className="w-[80px] h-[45px]"
                  src={Hipercard}
                  alt="Hipercard"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img className="w-[80px] h-[45px]" src={Itau} alt="Itau" />
              </a>
            </li>
            <li>
              <a href="">
                <img className="w-[80px] h-[45px]" src={Boleto} alt="Boleto" />
              </a>
            </li>
          </div>
          <li>
            <strong className="text-[18px] font-bold text-[#383838]">
              Redes Sociais
            </strong>
          </li>
          <div className="flex gap-4">
            <li>
              <a href="">
                <img
                  className="w-[25px] h-[25px]"
                  src={Instagram}
                  alt="Instagram"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  className="w-[20px] h-[25px]"
                  src={Facebook}
                  alt="Facebook"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img className="w-[30px] h-[25px]" src={Twiter} alt="Twiter" />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  className="w-[35px] h-[25px]"
                  src={Youtube}
                  alt="Youtube"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img className="w-[25px] h-[25px]" src={Pix} alt="Pix" />
              </a>
            </li>
          </div>
        </ul>

        <ul className="flex flex-col justify-between pb-8 gap-6 text-[14px] text-gray-400">
          <div className="flex flex-col gap-4">
            <li>
              <strong className="text-[18px] font-bold text-[#383838]">
                Prêmios e Cretificações
              </strong>
            </li>
            <li>
              <a href="">
                <img
                  className="w-[80px] h-[100px]"
                  src={Premios}
                  alt="Premios"
                />
              </a>
            </li>
          </div>
          <div className="flex flex-col gap-4">
            <li>
              <strong className="text-[18px] font-bold text-[#383838]">
                Segurança
              </strong>
            </li>
            <li>
              <a href="">
                <img
                  className="w-[150px] h-[40px]"
                  src={Seguranca}
                  alt="Seguranca"
                />
              </a>
            </li>
          </div>
        </ul>
      </div>
      <div className="bg-[#383838] h-[130px] md:h-[96px] flex flex-col md:flex-row items-center justify-center gap-8">
        <h2 className="text-white font-medium text-[20px]">EMPRESA DO GRUPO</h2>
        <img src={PaquetaFooter} alt="Logo Footer" />
      </div>
    </footer>
  )
}
