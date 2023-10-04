import {
  ArrowsClockwise,
  CreditCard,
  MapPin,
  Package,
  Percent,
} from '@phosphor-icons/react'

export function PurchaseInformation() {
  return (
    <div className="bg-gradient-to-r from-[#FF8A29] to-[#CF5D00] to-70%">
      <div className="flex flex-wrap gap-8 justify-center lg:justify-between py-4 xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] m-auto h-96 sm:h-36 text-xs text-zinc-50">
        <span className="flex gap-2 items-center w-44">
          <CreditCard size={38} color="#ffffff" />
          <p>
            PAGUE EM ATÉ 10X <strong>SEM JUROS*</strong>
          </p>
        </span>
        <span className="flex gap-2 items-center w-44">
          <MapPin size={38} color="#ffffff" />
          <p>
            <strong>RETIRE GRÁTIS </strong>EM NOSSAS LOJAS
          </p>
        </span>
        <span className="flex gap-2 items-center w-44">
          <Percent size={38} color="#ffffff" />
          <p>
            <strong>GANHE 24% DE DESCONTO*</strong>
          </p>
        </span>
        <span className="flex gap-2 items-center w-44">
          <Package size={38} color="#ffffff" />
          <p>
            <strong>FRETE GRÁTIS </strong>PARA REGIÕES SUL E SUDENTES*
          </p>
        </span>
        <span className="flex gap-2 items-center w-44">
          <ArrowsClockwise size={38} color="#ffffff" />
          <p>PRIMEIRA TROCA GRÁTIS</p>
        </span>
      </div>
    </div>
  )
}
