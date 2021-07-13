import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import "../App.css";

const Body = () => {
    const imgall = "https://www.aesop.com/u1nb1km7t5q7/NWjLeaoBuPiKSg8OtlAFm/f02f2543c7c6c9ef5ec6f3d0ed434374/Aesop_Fragrance_Karst_Eau_de_Parfum_50mL_Web_Large_684x668px.png";
    const imgcard1 = "https://www.aesop.com/u1nb1km7t5q7/cDCCbdBmZlxG4ZMPSpm1l/cd25c8694c04f3177ea1d04835ba60f3/Aesop-Generic-Images-Skin-Care-Workshop-1-Mid-Desktop-1690x950px.jpg";

    const facial = "https://www.aesop.com/u1nb1km7t5q7/6drioTnKlhfniNr1TFKcnO/edbe863a4b8b16099bac102904c302dc/Aesop-Skin-Purifying-Facial-Exfoliant-Paste-75mL-large.png";

    const card3 = "https://www.aesop.com/u1nb1km7t5q7/2jSCDpwwCpUSXS5jFvTDSH/ffdf421217556befa32c6e481d218c3f/Aesop_Sustainability_Web_Primary_Inset_Desktop_2560x1270px.jpg";

    const Carouselimages1 = "https://www.aesop.com/u1nb1km7t5q7/3b6KRiDt3QpNut8LoYGgB9/1d62a7373daa8a6ba4dff6ea300b891e/Aesop-HK-Hollywood-Road-Hero-Desktop-2880x1620.jpg";

    const Carouselimages2 = "https://www.aesop.com/u1nb1km7t5q7/DqJCGx3tPeDqODieHw5uA/48f50fbd1758ee27990a600c131bd2ce/Aesop-HK-New-Town-Plaza-Hero-Bleed-Desktop-2880x1620px.jpg";

    const Carouselimages3 = "https://www.aesop.com/u1nb1km7t5q7/40xVxq4tBdXpyJLXVTQPvO/aa8ef7a4cca7a713e12b58f1ab8cc6ea/Aesop-HK-K11-Hero-Bleed-Desktop-2880x1620px.jpg";
    return (
        <>
            <div class="card-group">
                <div class="card">
                    <img src={imgall} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-title">Miraceti Eau de Parfum</p>
                        <p class="card-text">Resinous, woody, spicy fragrance</p>

                    </div>
                </div>
                <div class="card">
                    <img src={imgall} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-title">Miraceti Eau de Parfum</p>
                        <p class="card-text">Resinous, woody, spicy fragrance</p>
                    </div>
                </div>
                <div class="card">
                    <img src={imgall} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-title">Miraceti Eau de Parfum</p>
                        <p class="card-text">Resinous, woody, spicy fragrance</p>

                    </div>
                </div>
            </div>
            <div className="mx-5">
                <hr className="product-hr" />

            </div>

            <div class="row g-0" style={{ marginTop: "100px" }}>
                <div class="col-md-7">
                    <img src={imgcard1} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-5">
                    <div class="card-body leftalign">
                        <p class="card-title">Daily rituals</p>
                        <h3 class="card-title">How to cleanse the skin</h3>
                        <p class="card-text">Both delicate and resilient, skin requires gentle, routine cleansing. To better understand cleansing and its foundational role in a healthy skin care routine, we invite you to read on.</p>
                        <Button>Explore cleansing
                            <span><ArrowForwardIcon /></span></Button>
                    </div>
                </div>
            </div>

            <div class="card-group">
                <div class="card">
                    <img src={facial} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-title">Miraceti Eau de Parfum</p>
                        <p class="card-text">Resinous, woody, spicy fragrance</p>

                    </div>
                </div>
                <div class="card">
                    <img src={facial} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-title">Miraceti Eau de Parfum</p>
                        <p class="card-text">Resinous, woody, spicy fragrance</p>
                    </div>
                </div>
                <div class="card">
                    <img src={facial} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-title">Miraceti Eau de Parfum</p>
                        <p class="card-text">Resinous, woody, spicy fragrance</p>

                    </div>
                </div>
            </div>
            <div className="mx-5">
                <hr className="product-hr" />

            </div>


            <div class="row g-0" style={{ marginTop: "100px" }}>
                <div class="col-md-7">
                    <img src={card3} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-5">
                    <div class="card-body leftalign">
                        <p class="card-title">Beyond the bathroom</p>
                        <h3 class="card-title">
                            Our commitment to sustainability</h3>
                        <p class="card-text">As a company founded on steadfast ethics, sustainability has always been at Aesop’s heart. We aim to continuously improve our practices with honesty, sincerity and transparency, and seek to be a progressive presence in the communities in which we operate. </p>
                        <Button>Learn more about our approach
                            <span><ArrowForwardIcon /></span></Button>
                    </div>
                </div>
            </div>


            <div class="row g-0" style={{ marginTop: "100px" }}>

                <div class="col-md-5">
                    <div class="card-body leftalign">
                        <h3 class="card-title">
                        Store Locator</h3>
                        <p class="card-text">Our consultants are available to host you in-store and provide tailored guidance on gift purchases.</p>
                        <Button>Find a nearby store
                            <span><ArrowForwardIcon /></span></Button>
                    </div>
                </div>
                <div class="col-md-7">
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={Carouselimages1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={Carouselimages2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={Carouselimages3} class="d-block w-100" alt="..." />

                            </div>
                        </div>
                 
                    </div>    
             </div>
            </div>
            
            <div className="allcenter">
                <h2>‘It is not down in any map; true places never are.’</h2>
                <p className="color text-center">Herman Melville</p>
            </div>
        </>
    );
};

export default Body;