import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {

    let navigate = useNavigate();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#FAD961", backgroundImage: "linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">SHOPLANE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cart</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Men's Clothing</a></li>
                                    <li><a className="dropdown-item" href="#">Women's Clothing</a></li>
                                    <li><a className="dropdown-item" href="#">Electronics</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Jewellery</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-warning" type="submit">Search</button>
                        </form>
                        <button type="button" className="btn" onClick={() => {navigate("/")}}>Log Out</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar