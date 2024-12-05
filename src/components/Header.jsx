// import Image from 'next/image'

export default function Header() {
  const jdLogo = 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg' 



  return (
   <>
    <div className="w-full h-[90px] bg-white border-b-2 border-y-slate-200"> 
      <div className="container mx-auto h-full px-2 py-3">
        <div className="flex h-full items-center"> 
          <div className="inline-flex w-[150px] "> <span className="cursor-pointer"> <img src={jdLogo} width={120} /> </span> </div>
          <div className="flex w-[200px] cursor-pointer items-center">
            <div className=""> <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/hyperlocal/hl_map_icon.svg"/></div>
            <div className="text-sm px-2">
              <div> Location </div>
              <div> Mumbai-400064 </div>
            </div>
            <div className=""> <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/hyperlocal/hl_bluedown_arrow.svg"/></div>
          </div>
          <div className="flex-1 px-7"> 
              <div className="border border-slate-400 rounded-md h-[50px] w-full overflow-hidden p-2">
                <input className="w-full h-full outline-none" type="text" placeholder="Search Here" />
              </div>
          </div>
          <div className="inline-flex w-[250px] cursor-pointer"> Login/Signup </div>
        </div>  
      </div>
    </div>
   </>
  )
}
