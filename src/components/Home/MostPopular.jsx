
// import Image from 'next/image'
import Card from './Card'

export default function MostPopularC() {
  return (
   <>
    <div className="w-full"> 
        <div className="container mx-auto px-5">
            <div className="w-full flex items-center py-4"> 
                <div className="flex-1"> 
                    <div className="text-2xl font-bold"> Most Popular </div>
                    <div className="text-sm font-medium"> Top Brands, Best Discounts </div>
                </div>
                <div> <div className="bg-black w-28 h-8 text-sm rounded-md text-white items-center inline-flex justify-center"> View More </div></div>
            </div>  
            <Card/>          
        </div>
    </div>
    
    <style>
        {`
            
        `}
    </style>
   </>
  )
}
