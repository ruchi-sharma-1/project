import React from 'react'
import Header from './Header'
import Footer from './Footer'
export default function Shop() {
    return (
      <>
        <Header />
        <section>
            <div className="main_section">
                <div className="sidebar">
                    <div className="product_left">
                        <h3 className="pro">Products</h3>
                        <div className="product_right">
                            <div className="product_right_1">Facial Products<sup>4</sup></div>
                            <div className="product_right_2">Hair Products<sup>8</sup></div>
                            <div className="product_right_3">Body Products<sup>8+</sup></div>
                        </div>
                    </div>
                    <div className="pro_1">
                        <div className="product_img">
                            <div className="lip1"></div>
                            <div className="lip2"></div>
                            <div className="lip3"></div>
                        </div>
                    </div>
                </div>
                <div className="mid">
                    <img src="images/lip1.webp"/>
                    <img src="images/lip2.webp"/>
                    <img src="images/lip3.webp"/>
                </div>
                <div className="product_detail">
                    <div className="star">
                        <a href=""><i className="fa fa-star"></i></a>
                        <a href=""><i className="fa fa-star"></i></a>
                        <a href=""><i className="fa fa-star"></i></a>
                        <a href=""><i className="fa fa-star"></i></a>
                        <a href=""><i className="fa fa-star-half"></i>
                            <span className="rating">4.5/5</span></a>
                    </div>
                    <h2 className="head_pro">RENEE Matte Lipstick</h2>
                    <p className="head_par">A limited-edition, nourishing lip gel to top off your look and feel fantastic.
                    </p>
                    <div className="size mb-4">
                        <span className="s_ize">Size</span>
                        <span className="ml1">30ml</span>
                        <span className="ml2">50ml</span>
                    </div>
                    <div className="btn_1">
                        <button type="submit" className="sub_mit">
                            <span className="flex-grow-1">Add to cart</span>
                            <span className="line">$24</span>
                        </button>
                    </div>
                    <div className="sign">Shipping and return
                        <img src="images/plus.png"/>
                    </div>
                    <div className="sign">Details
                        <img src="images/plus.png"/>
                    </div>
                </div>
            </div>
            <div className="reviews">
                <div className="row">
                    <div className="mb-3">
                        <p className="star_head">4.3 stars from 10 reviews</p>
                    </div>
                    <div className="border_">
                        <div className="space col-6">
                            <div className="star">
                                <a href=""><i className="fa fa-star"></i></a>
                                <a href=""><i className="fa fa-star"></i></a>
                                <a href=""><i className="fa fa-star"></i></a>
                                <a href=""><i className="fa fa-star"></i></a>
                                <a href=""><i className="fa fa-star"></i></a>
                                <span className="rating">5/5</span><a/>
                                <p className="perfect">Perfect</p>
                                <p className="mb-3">Great fit and feel. They elevate lounging to the next level!</p>
                                <p className="caption">Heidi C. | December, 2019</p>
                            </div>
                        </div>
                        <div className="space_2 col-6">
                            <div className="star">
                                <a href=""><i className="fa fa-star"></i></a>
                                <a href=""><i className="fa fa-star"></i></a>
                                <a href=""><i className="fa fa-star"></i></a>
                                <a href=""><i className="fa fa-star"></i></a>
                                <a href=""><i className="fa fa-star"></i>
                                    <span className="rating">4.5/5</span></a>
                                <p className="perfect">Long Lasting</p>
                                <p className="mb-3">I sized up just in case and kind of wished I hadnot. Very comfortable
                                    and I live in them exclusively during the weekend.</p>
                                <p className="caption">Heidi C. | December, 2020</p>
                            </div>
                        </div>
                        <div className="space_3 col-6">
                            <div className="star">
                                <a href=""><i className="fa fa-star"></i></a>
                                <a href=""><i className="fa fa-star"></i></a>
                                <a href=""><i className="fa fa-star"></i></a>
                                <a href=""><i className="fa fa-star"></i></a>
                                <span className="rating">4/5</span><a/>
                                <p className="perfect">Matte Finish</p>
                                <p className="mb-3">Formulated to indulge you into vibrant and long-lasting lip color
                                    experience, our weightless and highly pigmented lipstick is specially crafted to
                                    deliver a bold, matte finish that stays put for long, without smudging or fading.
                                </p>
                                <p className="caption">Heidi C. | December, 2021</p>
                            </div>
                        </div>
                        <div className="space_4 col-6">
                            <div className="star">
                                <a href=""><i className="fa fa-star"></i></a>
                                <a href=""><i className="fa fa-star"></i></a>
                                <a href=""><i className="fa fa-star"></i></a>
                                <a href=""><i className="fa fa-star"></i></a>
                                <span className="rating">4/5</span><a/>
                                <p className="perfect">Enriched with Vitamin E & Hyaluronic acid</p>
                                <p className="mb-3">RENEE Stunner Matte Lipsticks velvety texture glides effortlessly onto
                                    your lips, providing an even and intense coverage with just one swipe along with the
                                    goodness of Hyaluronic acid and Vitamin E which helps keep your lips soft and
                                    moisturized. </p>
                                <p className="caption">Heidi C. | December, 2023</p>
                            </div>
                        </div>
                        <button type="button" className="btn_review ">View all reviews</button>
                    </div>


                    <div className="container py-5 my-5 ">
          <div className="d-flex flex-column align-items-center mb-5 pb-4">
            <p className="mb-4 latest">Introducing Our Latest Products</p>
            <p className="mb-3 limit">Limited reservations on upcoming <br /> products and restocks.</p>
            <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
              <a className="find_" href="">
                <p className="me-3">See more products</p>
                <div className="right_arrow">
                  <img src="/images/right-arrow.png" />
                </div>
              </a>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-6 col-sm-6 col-lg-3 main">
              <div className="mb-3 row_img"></div>
              <p className="mb-2 head_">Lip Fantastic</p>
              <p className="mb-2 sub_head">A limited-edition, nourishing lip gel to top off your look and feel fantastic.
              </p>
              <p className="pb-2 price">$24.00</p>
            </div>
            <div className="col-6 col-sm-6 col-lg-3 main">
              <div className="mb-3 row_img2"></div>
              <p className="mb-2 head_">Eye Purity Gels</p>
              <p className="mb-2 sub_head">Treat your skin with active pore enzymes that replenish sun damaged skin.</p>
              <p className="pb-2 price">$18.00</p>
            </div>
            <div className="col-6 col-sm-6 col-lg-3 main">
              <div className="mb-3 row_img3"></div>
              <p className="mb-2 head_">Complexion Cream</p>
              <p className="mb-2 sub_head">Nourish your face with a natural vitamin burst for that perfectly balanced
                glow.</p>
              <p className="pb-2 price">$32.00</p>
            </div>
            <div className="col-6 col-sm-6 col-lg-3 main">
              <div className="mb-3 row_img4"></div>
              <p className="mb-2 head_">Hair, Beauty & Bath</p>
              <p className="mb-2 sub_head">Made for your hair, a bath foam that brings your hair back to life.</p>
              <p className="pb-2 price">$28.00</p>
            </div>
          </div>
        </div>

        <div className="py-5 mb-5 hero4">
          <div className="hero_cont">
            <div className="new_img">
            </div>
            <div className="hero_text">
              <p className="mb-4 new_">A new shopping experience</p>
              <a className="find_1" href="">
                <p className="me-3">Explore products</p>
                <div className="right_arrow">
                  <img src="/images/right-arrow.png" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="custom">
          <div className="footer_title">
            <p className="flw_text mb-3 ">Follow us on Instagram for more updates</p>
            <div className="d-flex">
              <a className="find_" href="">
                <p className="me-3">Follow us</p>
                <div className="right_arrow">
                  <img src="/images/right-arrow.png" />
                </div>
              </a>
            </div>
          </div>
          <div className="d-flex footer_img">
            <div className="img_1">
              <div className="ftr_img1"></div>
            </div>
            <div className="img_1">
              <div className="ftr_img2"></div >
            </div>
            <div className="img_1">
              <div className="ftr_img3"></div>
            </div>
            <div className="img_1">
              <div className="ftr_img4"></div>
            </div>
            <div className="img_1">
              <div className="ftr_img5"></div>
            </div>

          </div>
        </div></div> </div>
        </section>


        <Footer />
    </>
  )
}