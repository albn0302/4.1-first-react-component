import React, {useState, useEffect} from 'react'
import ProductCard from '../components/ProductCards'

export default function Shop() {
    const [products, setProducts] = useState([])
    async function fetchData() {
      const res = await fetch('http://10.111.3.78:3001/api/products')
      const data = await res.json()
      setProducts(data)
      console.log(data)
    }
    
    useEffect(() => {
      fetchData()
    }, [])
    // fetch data from api
  return (
    <div>
        {products.map((product) => (
            <ProductCard data={product} />
        ))}
    </div>
  )
}