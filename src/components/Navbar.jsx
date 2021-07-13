import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import "../App.css";
const Navbar = () => {
    const video = "https://videos.ctfassets.net/u1nb1km7t5q7/7KEJRiE0QL22XNzwNZXKE5/a1d3f6c48de4a1d011e533e28e79e539/Aesop_Othertopias_Web_Homepage_Primary_Full_Bleed_Desktop_2880x1044px.mp4";
    return (
        <>
            <p className="topheader text-center">Enjoy complimentary carbon neutral shipping on orders over HKD 400  <span>+</span></p>
            <video autoPlay loop muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "5o%",
                    top: "-4%",
                    height: "90%",
                    objectFit: "cover",
                    zIndex: "-1"
                }}>
                <source src={video} type="video/mp4" />
            </video>
            <nav className="navbar navbar-expand-lg navbar-light ">

                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Read</a>
                            </li><li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Store</a>
                            </li><li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Search</a>
                            </li>

                        </ul>
                        <form className="log-cart d-flex">
                            <p className="log-cart">Login</p>
                            <p className="log-cart">Cart</p>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="textonvideo">
            <h1>Elsewhere here</h1>
                <p>Introducing Othertopias: three fragrances from <br />
                    elsewhere  </p>
                    <Button>Explore the collection 
                    <span><ArrowForwardIcon /></span></Button>
            </div>
        </>
    );
};

export default Navbar;