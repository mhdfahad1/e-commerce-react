import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { getAllproductsAPI } from '../services/allApi';
import { Link } from 'react-router-dom';
import { AddToCartContext, AddToWishlistContext, SearchkeyContext } from '../Context/Contextsharee';

function Home() {
    const { addtocart, setaddtocart } = useContext(AddToCartContext)
    const { addtowishlist, setaddtowishlist } = useContext(AddToWishlistContext)
    const { searchkey, setSarchkey } = useContext(SearchkeyContext)

    const [products, setProducts] = useState([])
    console.log(searchkey);

    const getAllproducts = async () => {
        const result = await getAllproductsAPI(searchkey)
        console.log(result);
        if (result.status === 200) {
            setProducts(result.data)
        } else {
            alert(result.response.data)
        }
    }
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchkey.searchkey?.toLowerCase())
    );


    useEffect(() => {
        getAllproducts();
    }, []); // empty dependency array to run the effect only once on mount


    const addtoCartproduct = (product) => {
        alert('added to cart');
        setaddtocart((prevCart) => [...prevCart, product]);
    };

    const addtowishlistproduct = (product) => {
        alert('added to wishlist');

        setaddtowishlist((prevWishlist) => [...prevWishlist, product]);
    };
    return (
        <div>
            <Header />

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {searchkey ?

                            filteredProducts.length > 0 ?
                                filteredProducts.map(product => (
                                    <div className="col mb-5">

                                        <Card className="card h-100 p-4 shadow">
                                            <div className='d-flex justify-content-between'>
                                                <button onClick={() => addtowishlistproduct(product)} className='btn fs-4'><i className='fa-solid fa-heart text-danger'></i></button>
                                                <button onClick={() => addtoCartproduct(product)} className='btn fs-4'><i className="fa-solid fa-cart-shopping text-success"></i></button>

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
                                )) : <p className='text-danget'>Nothing to display</p> :
                            products.length > 0 ?
                                products.map(product => (
                                    <div className="col mb-5">

                                        <Card className="card h-100 p-4 shadow">
                                            <div className='d-flex justify-content-between'>
                                                <button onClick={() => addtowishlistproduct(product)} className='btn fs-4'><i className='fa-solid fa-heart text-danger'></i></button>
                                                <button onClick={() => addtoCartproduct(product)} className='btn fs-4'><i className="fa-solid fa-cart-shopping text-success"></i></button>

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

        </div >
    )
}

export default Home