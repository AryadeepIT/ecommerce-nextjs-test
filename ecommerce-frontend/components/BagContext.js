import { createContext, useEffect, useState } from "react";

export const BagContext = createContext({});


export function BagContextProvider({children}){
    const ls = typeof window !== 'undefined' ? window.localStorage : null;
    const [bagProducts, setBagProducts] = useState([]);
    useEffect(() => {
        if (bagProducts?.length >0){
            ls?.setItem('bag', JSON.stringify(bagProducts));

        }
    }, [bagProducts]);

    useEffect(() => {
        if(ls && ls.getItem('bag')){
            setBagProducts(JSON.parse(ls.getItem('bag')));
        }

    }, []);

    function addProduct(productId) {
        setBagProducts(prev => [...prev, productId])
    }

    function removeProduct(productId) {
        setBagProducts(prev => {
            const pos = prev.indexOf(productId);
            if (pos !== -1) {
                return prev.filter((value, index) => index !== pos);
            }
            return prev;
        });
    }

    function clearBag(){
        setBagProducts([]);
    }

    return (
        <BagContext.Provider value={{bagProducts, setBagProducts, addProduct, removeProduct, clearBag}}>
            {children}
        </BagContext.Provider>
    );
}