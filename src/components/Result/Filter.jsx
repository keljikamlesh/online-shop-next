


export default function Filter() {
  const arrowIcn = <svg class="h-6 w-6 text-black-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
  const priceRangeData = ['Price Range','Brand','Type','Color', 'Size']
  return (
   <>
    <div className="w-full pt-3"> 
      <div className="w-full text-xl font-semibold px-5 py-2.5 border-gray-200 border-b-[1px]"> Filter </div>
      <div> 
        {priceRangeData.map((e,i) => {
          return (
            <div className="border-gray-200 border-b-[1px] px-5 py-2.5" key={i}>
              <div className="flex items-center justify-between"> 
                <div className="text-[15px] font-semibold"> {e}</div>
                <div> {arrowIcn} </div>
              </div>
              <div className="dropBox mt-2.5 hidden">
                <div>
                  <label className="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-primary bg-gray-100 border-gray-200 rounded"/>
                    <div className="ms-2 text-sm font-normal text-black-200 "> ₹ 1000 & Below </div>
                  </label>
                  <label className="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-primary bg-gray-100 border-gray-200 rounded"/>
                    <div className="ms-2 text-sm font-normal text-black-200 ">₹ 1000 & Below </div>
                  </label>
                </div>
              </div>
            </div>

        )
      })}
        
      </div>
    </div>
    
    <style>
        {`
            
        `}
    </style>
   </>
  )
}
