import React, { createContext, useState } from 'react';

export const AddToWishlistContext = createContext();
export const AddToCartContext = createContext();
export const SearchkeyContext = createContext();


function ContextSharee({ children }) {
  const [addtowishlist, setaddtowishlist] = useState([]);
  const [addtocart, setaddtocart] = useState([]);
  const [searchkey,setSarchkey]=useState("")


  return (
    <div>
      <AddToWishlistContext.Provider value={{ addtowishlist, setaddtowishlist }}>
        <AddToCartContext.Provider value={{ addtocart, setaddtocart }}>
            <SearchkeyContext.Provider value={{searchkey,setSarchkey}}>
            {children}

            </SearchkeyContext.Provider>
        </AddToCartContext.Provider>
      </AddToWishlistContext.Provider>
    </div>
  );
}

export default ContextSharee;
