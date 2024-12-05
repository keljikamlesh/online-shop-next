'use client'
import {useContext, useEffect} from 'react'
import {StoreContext} from '../../app/Context/index.jsx'


export default function CardC() {

    const {data1,setData1} = useContext(StoreContext)
    console.log(data1)

  return (
   <>
    <div className="w-full flex gap-6 overflow-hidden"> 

        {data1.map((e,i)=> {
            return(
                <>
                    <div className="w-1/5 h-[320px] min-w-[280px] ">
                        <div className="w-full rounded-lg border overflow-hidden">
                            <div className="imgbx h-[240px] overflow-hidden">
                                <img className="min-w-full min-h-full" src={e.image}/>
                            </div>
                            <div className="contbx h-[70px] text-center py-3">
                                <div className="text-sm font-semibold"> {e.title} </div>
                                <div className="text-sm font-semibold text-green-900"> {e.category} </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        })}
        
        {/* <div className="w-1/5 h-[310px]">
            <div className="w-full rounded-lg border overflow-hidden">
                <div className="imgbx h-[240px] overflow-hidden">
                    <img className="min-w-full min-h-full" src="https://images.jdmagicbox.com/quickquotes/images_main/dsc-cricket-accessories-01-09-2021-346-240363745-fh6au.jpg"/>
                </div>
                <div className="contbx h-[70px] text-center py-3">
                    <div className="text-sm font-semibold"> Cricket Umpire Counters </div>
                    <div className="text-sm font-semibold text-green-900"> Latest Edition </div>
                </div>
            </div>
        </div>
        <div className="w-1/5 h-[310px]">
            <div className="w-full rounded-lg border overflow-hidden">
                <div className="imgbx h-[240px] overflow-hidden">
                    <img className="min-w-full min-h-full" src="https://images.jdmagicbox.com/quickquotes/images_main/dsc-cricket-accessories-01-09-2021-346-240363745-fh6au.jpg"/>
                </div>
                <div className="contbx h-[70px] text-center py-3">
                    <div className="text-sm font-semibold"> Cricket Umpire Counters </div>
                    <div className="text-sm font-semibold text-green-900"> Latest Edition </div>
                </div>
            </div>
        </div>
        <div className="w-1/5 h-[310px]">
            <div className="w-full rounded-lg border overflow-hidden">
                <div className="imgbx h-[240px] overflow-hidden">
                    <img className="min-w-full min-h-full" src="https://images.jdmagicbox.com/quickquotes/images_main/dsc-cricket-accessories-01-09-2021-346-240363745-fh6au.jpg"/>
                </div>
                <div className="contbx h-[70px] text-center py-3">
                    <div className="text-sm font-semibold"> Cricket Umpire Counters </div>
                    <div className="text-sm font-semibold text-green-900"> Latest Edition </div>
                </div>
            </div>
        </div>
        <div className="w-1/5 h-[310px]">
            <div className="w-full rounded-lg border overflow-hidden">
                <div className="imgbx h-[240px] overflow-hidden">
                    <img className="min-w-full min-h-full " src="https://images.jdmagicbox.com/quickquotes/images_main/dsc-cricket-accessories-01-09-2021-346-240363745-fh6au.jpg"/>
                </div>
                <div className="contbx h-[70px] text-center py-3">
                    <div className="text-sm font-semibold"> Cricket Umpire Counters </div>
                    <div className="text-sm font-semibold text-green-900"> Latest Edition </div>
                </div>
            </div>
        </div> */}
    </div>
   
   </>
  )
}
