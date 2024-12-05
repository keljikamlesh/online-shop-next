// import Image from 'next/image'

export default function CategoryHmTopC() {
  return (
   <>
    <div className="w-full h-[90px]"> 
        <div className=" py-6 px-5">
            <div className="flex items-center gap-8"> 
                <div className="inline-flex items-center gap-2"> 
                    <span className="w-[50px] min-w-[50px]  h-[50px] inline-flex"> <img src="https://images.jdmagicbox.com/standard/shopfront/a9480a5aa320dcb683fa0c929e62d56c.jpg"/> </span>
                    <span className="text-base font-semibold"> Mobile </span>
                </div>
                <div className="inline-flex items-center gap-2"> 
                    <span className="w-[50px] min-w-[50px]  h-[50px] inline-flex"> <img src="https://images.jdmagicbox.com/standard/shopfront/63402088d09e8dbcad27ab98297d6dbb.jpg"/> </span>
                    <span className="text-base font-semibold"> Electronics </span>
                </div>
                <div className="inline-flex items-center gap-2"> 
                    <span className="w-[50px] min-w-[50px]  h-[50px] inline-flex"> <img src="https://images.jdmagicbox.com/standard/shopfront/cba56c842de1fbdd1fe20d795ab618ba.jpg"/> </span>
                    <span className="text-base font-semibold"> Home & Kitchen </span>
                </div>
                <div className="inline-flex items-center gap-2"> 
                    <span className="w-[50px] min-w-[50px]  h-[50px] inline-flex"> <img src="https://images.jdmagicbox.com/standard/shopfront/aa3213da0054966607adace13e9a4c31.jpg"/> </span>
                    <span className="text-base font-semibold"> Beauty </span>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}
