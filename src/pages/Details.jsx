import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getAproductsAPI } from '../services/allApi'
import { useParams } from 'react-router-dom'

function Details() {
    const [product,setProduct]=useState()
    const {id}=useParams()
    // console.log(id);
    const getAproduct=async()=>{
        const result=await getAproductsAPI(id)
        console.log(result);
        if(result.status===200){
            setProduct(result.data)
        }else{
            alert(result.response.data)
        }

    }

    useEffect(()=>{
        getAproduct()
    })
    return (
        <div>
            <Header />
            <div className='flex p-10'>
                <div className=' w-[900px]'>
                    <img src={product?.image} alt="" />

                </div>
                <div className='mt-10 ml-10'>
                    <h1>{product?.title}</h1>
                    <p>{product?.description}</p>
                    <h4>Price ₹{product?.price}</h4>

                    <div className=''>
                        <button className='btn '><i className='fa-solid fa-heart text-danger fs-4'></i> Add to Wishlist</button>
                        <button className='btn '><i className="fa-solid fa-cart-shopping text-success fs-4"></i>Add to cart</button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Details