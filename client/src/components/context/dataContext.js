import React, { useState, createContext, useEffect } from 'react';

export const dataContext = createContext();
export const ProductProvider = ({ children }) => {
  const [productId, setProductId] = useState(42370);

  useEffect(() => {

  }, [productId])

  return (
    <dataContext.Provider
      value={{
        productId,
        setProductId,
        productInfo,
        setProductInfo,
        productStyles,
        setProductStyles,
        averageRating,
        getAllReviews,
        setRecordInteraction,
        outfitIds,
        setOutfitIds,
        theme,
        setTheme,
      }}
    >
      {children}
    </dataContext.Provider>
  )
}