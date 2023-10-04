interface CountProps {
  count?: number
}

export function Count({ count }: CountProps) {
  return (
    <div className="absolute top-[-6px] right-[-6px] px-[8px] py-[2px] text-[10px] text-white rounded-full bg-gradient-to-r from-[#F99500] to-[#FFCD29]">
      {count}
    </div>
  )
}
