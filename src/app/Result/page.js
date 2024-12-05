// import Image from 'next/image'
import Header from '../../components/Header'
import CategoryHmTop from '../../components/Home/CategoryHmTop'
import FilterLeft from '../../components/Result/Filter'
import ResultRight from '../../components/Result/Result_right'


export default function Result() {
  return (
   <>
    <div className="w-full h-full"> 
      <Header/>
      <div className="container bg-white mx-auto"> 
        <CategoryHmTop/>
        <div className="w-full py-6 px-2">
          <div className="flex">  
            <div className="w-[250px]"><FilterLeft/></div>
            <div className="flex-1 pl-5"><ResultRight/></div>
          </div>
        </div>
      </div>
     
      {/* <div className="flex"> dd ddd </div> */}
    </div>
   </>
  )
}
