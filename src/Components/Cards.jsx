import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";


function Cards() {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        setProducts(await response.json());
    }

    useEffect(() => {
        getProducts();
    }, []);


    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    {
                        products.map((data) => {
                            return (
                                <div className="col-lg-3 mb-4 d-flex align-items-stretch mt-1">
                                    <div className="card border-warning mb-3" style={{ width: '20rem'}}>
                                        <img className="card-img-top" src={data.image} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{data.title.substring(0, 25)}...</h5>
                                            <p className="card-text mb-4">{data.description.substring(0, 100)}...</p>
                                            <p className="card-text">Price: ${data.price}</p>
                                            <ReactStars count={5} isHalf={true} activeColor="#ffd700" value={data.rating.rate}/>
                                            <p className="align-self-end">Available: {data.rating.count} Counts</p>
                                            <a href="/lol" className="btn btn-warning">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Cards;