import React from 'react'

type Products = {
  data: {
    id: number,
    name: string,
    stock: number,
    price: number,
    imgurl: string,
  }
  
}

export default function ProductCard({data}:Products) {
  return (
    <div key={data.id} className=''>
      <h1>{data.name}</h1>
      <p>stock: {data.stock}</p>
      <img src={data.imgurl} alt="" />
      <p>{data.price}</p>
    </div>
  )
}
