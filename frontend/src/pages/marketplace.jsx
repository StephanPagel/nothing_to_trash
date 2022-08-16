import React from 'react'
import HeroSection from '../components/HeroSection'
import Searchbar from '../components/Searchbar'
import Sidebar from '../components/Sidebar'
import ProductCard from '../components/ProductCard'
import "./marketplace.scss"

export default function marketplace() {
    return (
        <div className="marketplace">marketplace
        <HeroSection />
        <Searchbar />
        <Sidebar />
        <ProductCard />
        </div>
    )
}
