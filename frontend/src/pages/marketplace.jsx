import React from 'react'
import ProductCard from '../components/ProductCard'
import Searchbar from '../components/Searchbar'
import Sidebar from '../components/Sidebar'
import "./marketplace.scss"

export default function marketplace() {
    return (
        <div className="marketplace">marketplace
        <Searchbar />
        <Sidebar />
        <ProductCard />
        </div>
    )
}
