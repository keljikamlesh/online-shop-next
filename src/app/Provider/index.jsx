'use client'
import {useState, useEffect} from 'react'
import {StoreContext} from '../Context'

export default function StoreProvider({children}) {
    const [data1, setData1] = useState([]);

    // fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    // .then(response => response.json())
    // .then(data => console.log(data));
    
    useEffect(()=>{
        fetch('http://fakestoreapi.com/products?limit=5')
        .then(response => response.json())
        .then((data) => {
            console.log('>>>>>>>>>>>>>>',data)
            setData1(data);
        });
    },[])

    
    return (
        <StoreContext.Provider value={{data1,setData1}} >
            {children}
        </StoreContext.Provider>
    )
}