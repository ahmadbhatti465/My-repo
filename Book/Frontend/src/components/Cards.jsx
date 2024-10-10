import React from 'react'

const Cards = ({ item }) => {
  
  return (
    <>
      <div className='flex justify-center mt-12  '>
        <div className="card w-80 bg-base-100 shadow-xl mx-6 hover:scale-105 duration-300 ">
          <figure><img src={item.image} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 text-white p-2">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
