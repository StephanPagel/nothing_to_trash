import ProductCard from "../components/ProductCard";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import "./alreadySold.scss"

import React from 'react'

export default function AlreadySold() {
  return (
    <div>
      <div>
        <h1>Mit diesen Artikeln konnten wir schon Müll vermeiden</h1>
        <Searchbar />
        <Sidebar />
        <ProductCard />
      </div>
    </div>
  )
}
