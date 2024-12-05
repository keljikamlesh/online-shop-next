// import Image from 'next/image'
'use client'
import {useContext} from 'react'
import Header from '../components/Header'
import CategoryHmTop from '../components/Home/CategoryHmTop'
import Banner from '../components/Home/Banner'
import MostPopular from '../components/Home/MostPopular'
import {StoreContext} from './Context'

export default function Home() {
  const {data1,setData1} = useContext(StoreContext)
  console.log(data1)


  const test1 = 'https://fakestoreapi.com/products?limit=5'
  
  return (
   <>
    <div className="w-full"> 
        <Header/>
      
      <div className="container mx-auto bg-white "> 
        <CategoryHmTop/>
        <Banner/>
        <MostPopular  />
        <MostPopular/>
        <MostPopular/>
      </div>
     
      {/* <div className="flex"> dd ddd </div> */}
    </div>
   </>
  )
}
