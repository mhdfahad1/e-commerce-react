import React, { useContext } from 'react'
import Header from '../components/Header'
import { AddToCartContext, addtocartcontext } from '../Context/Contextsharee'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Cart() {
    const {addtocart,setaddtocart}=useContext(AddToCartContext)
    console.log(addtocart);

  return (
    <div>
        <Header/>
        <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {
                            addtocart.length > 0 ?
                                addtocart.map(product => (
                                    <div className="col mb-5">

                                        <Card className="card h-100 p-4 shadow">
                                            <div className='d-flex justify-content-between'>
                                                <button  className='btn fs-4'><i className='fa-solid fa-heart text-danger'></i></button>
                                                <button  className='btn fs-4'><i className="fa-solid fa-cart-shopping text-success"></i></button>

                                            </div>
                                            <Link to={`/details/${product.id}`}><Card.Img className="card-img-top" height="200px" variant="top" src={product.image} />
                                            </Link>
                                            <Card.Body>
                                                <Card.Title>{product.title}</Card.Title>
                                                <Card.Text>
                                                    {product.description.slice(0, 30)}...<br />
                                                    ₹ {product.price}
                                                </Card.Text>
                                                <Link to={`/details/${product.id}`} variant="primary" className='btn btn-dark'>Details</Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )) : <p className='text-danget'>Nothing to display</p>
                        }

                    </div>
                </div >
            </section >
    </div>
  )
}

export default Cart