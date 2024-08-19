import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inventory from '../pages/inventory/Inventory'
import ConstructionPage from '../pages/constructionPage/ConstructionPage'

const AllRoutes = () => {
  return (
    <>
        <Routes>
              <Route path="/" element={<Inventory/>}/> 
              <Route path="/home" element={<ConstructionPage/>}/> 
              <Route path="/online-sales" element={<ConstructionPage/>}/> 
              <Route path="/car-finance" element={<ConstructionPage/>}/> <Route path="/home" element={<ConstructionPage/>}/> <Route path="/home" element={<ConstructionPage/>}/> 
              <Route path="/online-sales" element={<Inventory/>}/> 
              

         </Routes>
    </>
  )
}

export default AllRoutes
