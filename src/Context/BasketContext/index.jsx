import React, { createContext, useState } from 'react'
import useLocalStorage from '../../hook/useLocalStorage';

export const BasketContext = createContext()


function BasketProvider({children}) {
    const [basket, setBasket] = useLocalStorage("basket",[])
    

    function AddBasket(item) {
        const index = basket.findIndex((x)=>x.id===item.id)
        if(index === -1){
            setBasket([...basket,{...item,count:1}]);
            
            return
        }
        basket[index].count++
        setBasket([...basket])
    }
    function increase(item) {
        const index = basket.findIndex((x)=>x.id===item.id)
        basket[index].count++
        setBasket([...basket])   
    }
    function decrease(item) {
        const index = basket.findIndex((x)=>x.id===item.id)
       if (basket[index].count === 1) {
        return
       }  
       basket[index].count--
       setBasket([...basket])
    }
    function RemoveItem(item) {
        setBasket(basket.filter(x=>x.id !==item.id))
        
    }
    function getTotalPrice() {
        return basket.reduce((sum, basket) => sum + basket.count * basket.price,0).toFixed(1)
    }
const data = {
    basket,AddBasket,increase,decrease,RemoveItem,getTotalPrice
}

  return (
    <BasketContext.Provider value={data}>
        {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider