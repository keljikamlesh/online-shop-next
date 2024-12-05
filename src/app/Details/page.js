// import Image from 'next/image'
import Header from '../../components/Header'
import CategoryHmTop from '../../components/Home/CategoryHmTop'
import DetailsCard from '../../components/Details/Details_card.tsx'


export default function Details() {
  return (
   <>
    <div className="w-full h-full"> 
      <Header/>
      <div className="container bg-white mx-auto"> 
        <CategoryHmTop/>
        <div className="w-full py-6 px-2">
            <DetailsCard/>
        </div>
      </div>
     
      {/* <div className="flex"> dd ddd </div> */}
    </div>
   </>
  )
}
