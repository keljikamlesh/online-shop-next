


export default function DetailsCard() {

  return (
   <>
   <div className="flex">  
      <div className="w-[400px] inline-flex">
        <div className="size-full h-[400px] overflow-hidden flex justify-center items-center "> 
          <img className="max-w-[100%] max-h-[100%]" src="https://images.jdmagicbox.com//quickquotes/images_main/iphone-13-512-gb-midnight-240686687-i3714.jpg"/>
        </div>
      </div>
      <div className="flex-1">
        <div className="text-2xl font-semibold"> iPhone 13 (512GB, Midnight) </div>
        <div className="text-xs mt-1 flex items-center">
          <span className="w-[100px] h-5 inline-flex mr-2.5">
            <svg width="100%" height="100%" viewBox="0 0 1000 200">
              <polygon id="star17322603041335" points="100,10 40,198 190,78 10,78 160,198" fill="#FFE372" />
              <defs>
                <clipPath id="stars17322603041335">
                  <use xlinkHref="#star17322603041335" />
                  <use xlinkHref="#star17322603041335" x="21%" />
                  <use xlinkHref="#star17322603041335" x="41%" />
                  <use xlinkHref="#star17322603041335" x="61%" />
                  <use xlinkHref="#star17322603041335" x="81%" />
                </clipPath>
              </defs>
              <rect width="100%" height="100%" clipPath="url(#stars17322603041335)" style={{fill: 'rgb(215, 215, 215)', stroke: 'red', strokeWidth: 1, height: '100%', width: '100%'}} />
              <rect width="50%" height="100%" clipPath="url(#stars17322603041335)" style={{fill: 'rgb(255, 110, 0)', height: '100%'}} />
            </svg>
          </span> 
          <span className="inline-flex relative top-[2px]">93 Ratings</span> 
        </div>
        <div className="text-xl font-semibold mt-2.5"> ₹ 1,09,900.00 </div>
        <div className="mt-2.5"> 
          <div className="mb-[10px]"> Color:</div> 
          <label className="inline-flex mr-2.5 items-center mb-4">
            <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-primary bg-gray-100 border-gray-200 rounded" value="true" />
            <div className="ms-2 text-sm font-normal text-black-200 "> Black </div>
          </label>
          <label className="inline-flex mr-2.5 items-center mb-4">
            <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-primary bg-gray-100 border-gray-200 rounded" value="true" />
            <div className="ms-2 text-sm font-normal text-black-200 "> Red </div>
          </label>
          <label className="inline-flex mr-2.5 items-center mb-4">
            <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-primary bg-gray-100 border-gray-200 rounded" value="true" />
            <div className="ms-2 text-sm font-normal text-black-200 "> Blue </div>
          </label>
          <label className="inline-flex mr-2.5 items-center mb-4">
            <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-primary bg-gray-100 border-gray-200 rounded" value="true" />
            <div className="ms-2 text-sm font-normal text-black-200 "> Green </div>
          </label>
        </div>
        <div className="mt-2 5 border-t border-gray-200 pt-5 w-full">
            <div className="text-xl mb-5"> Product Description </div>
            <div className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>
      </div>
    </div>
    
    
   </>
  )
}
