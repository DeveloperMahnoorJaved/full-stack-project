import HomeBanner from "../../Components/HomeBanner";
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner5 from '../../assets/images/banner5.jpg';
import coupon from '../../assets/images/coupon.png';
// import baner1 from '../../assets/images/baner1.mp4';
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide  } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules';
import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import { FaRegHeart } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import banner3 from '../../assets/images/banner3.gif';
import banner4 from '../../assets/images/banner4.gif';
import { useEffect, useRef } from "react";
import { IoMailOutline } from "react-icons/io5";


const AutoScroll = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const scrollSpeed = 1; 
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (sliderRef.current) {
          sliderRef.current.scrollLeft += scrollSpeed;
        }
      }, 20); 
    };

    startScrolling();

    return () => clearInterval(scrollInterval); 
  }, []);

  return (
    <div className="swiper-container" ref={sliderRef}>
      <div className="swiper-wrapper">
        <div className="productItem">Item 1</div>
        <div className="productItem">Item 2</div>
        <div className="productItem">Item 3</div>
        <div className="productItem">Item 4</div>
      </div>
    </div>
  );
};

export { AutoScroll };



const Home =() => {
  var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:true, };
    return(  <>
<HomeBanner />
<section className="homeProducts">
<div className="container">
<div className="row">

<div className="col-md-3">
<div className="banner">
    
 <img src={banner1}  className="cursor "/> 
</div>
<div className="banner mt-4">
 <img src={banner2}  className="cursor "/> 
</div>
<div className="banner mt-4">
 <img src={banner5}  className="cursor "/> 
</div>
{/* 
<div className="video-banner mt-4">
  <video 
    src={baner1} 
    autoPlay 
    muted 
    loop 
    className="video"
  />
</div> */}


</div>
<div className="col-md-9 productRow">
    <div className="d-flex align-items-center">
        <div className="info w-75">
            <h3 className="mb-0 hd">BEST SELLERS &nbsp; (Men)</h3>
            <p className="text-light text-sml mb-0">Do not miss the current offers until the end of the March</p>
        </div>
        <Button className="viewAllBtn ml-auto"> View All < IoIosArrowRoundForward /></Button>
    </div>
    
    <div className="product_row mt-4">
    <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[ Navigation]}
        className="mySwiper">
        <SwiperSlide> <div className="item productItem">
                <div className="imgWrapper">
                    <img src="z.png" className="w-100"/> 
                    <span className="badge badge-primary">28%</span> 
                    <div className="actions">
                        <Button></Button>
                        </div>         
                        </div>
                <div className="info">
                <h4>Do not miss the current offers </h4>
                <span className="text-success d-block">In Stock</span>
                <Rating name="read-only" value={5} readOnly  size="small"  />
                <div className="d-flex">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-2">$14.00</span>
                    <div className="actions">
                        <Button><TfiFullscreen /></Button> <Button><FaRegHeart /></Button>
                    </div>
                </div>
                </div>
                          </div>
                          </SwiperSlide>
                   <SwiperSlide> 
                    <div className="item productItem">
                <div className="imgWrapper">
                    <img src="z1.png" className="w-100"/>   
                    <span className="badge badge-primary">28%</span> 
                            </div>
                    <div className="info">
                <h4>Do not miss the current offers </h4>
                <span className="text-success d-block">In Stock</span>
                <Rating name="read-only" value={5} readOnly  size="small"  />
                <div className="d-flex">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-2">$14.00</span>
                    <div className="actions">
                        <Button><TfiFullscreen /></Button> <Button><FaRegHeart /></Button> 
                      
                    </div>
                </div>
                </div>
                        </div></SwiperSlide>
            <SwiperSlide> <div className="item productItem">
                <div className="imgWrapper">
                    <img src="z2.png" className="w-100"/>
                    <span className="badge badge-primary">28%</span> 
                </div>
                <div className="info">
                <h4>Do not miss the current offers </h4>
                <span className="text-success d-block">In Stock</span>
                <Rating name="read-only" value={5} readOnly  size="small"  />
                <div className="d-flex">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-2">$14.00</span>
                    <div className="actions">
                        <Button><TfiFullscreen /></Button> <Button><FaRegHeart /></Button> 
                      
                    </div>
                </div>
                </div>   
            </div></SwiperSlide>
            <SwiperSlide> <div className="item productItem">
                <div className="imgWrapper">
                    <img src="z3.png" className="w-100"/>
                    <span className="badge badge-primary">28%</span> 
                </div>
                <div className="info">
                <h4>Do not miss the current offers </h4>
                <span className="text-success d-block">In Stock</span>
                <Rating name="read-only" value={5} readOnly  size="small"  />
                <div className="d-flex">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-2">$14.00</span>
                    <div className="actions">
                        <Button><TfiFullscreen /></Button> <Button><FaRegHeart /></Button> 
                      
                    </div>
                </div>
                </div>
                            </div></SwiperSlide>
            <SwiperSlide> <div className="item productItem">
                <div className="imgWrapper">
                    <img src="z4.png" className="w-100"/>
                    <span className="badge badge-primary">28%</span> 
                </div>
                <div className="info">
                <h4>Do not miss the current offers </h4>
                <span className="text-success d-block">In Stock</span>
                <Rating name="read-only" value={5} readOnly  size="small"  />
                <div className="d-flex">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-2">$14.00</span>
                    <div className="actions">
                        <Button><TfiFullscreen /></Button> <Button><FaRegHeart /></Button> 
                      
                    </div>
                </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className="item productItem">
                <div className="imgWrapper">
                    <img src="z5.png" className="w-100"/>
                    <span className="badge badge-primary">28%</span> 
                </div>
                <div className="info">
                <h4>Do not miss the current offers </h4>
                <span className="text-success d-block">In Stock</span>
                <Rating name="read-only" value={5} readOnly  size="small"  />
                <div className="d-flex">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-2">$14.00</span>
                    <div className="actions">
                        <Button><TfiFullscreen /></Button> <Button><FaRegHeart /></Button> 
                      
                    </div>
                </div>
                </div>
    </div></SwiperSlide>
    <SwiperSlide> <div className="item productItem">
                <div className="imgWrapper">
                    <img src="z6.png" className="w-100"/>
                    <span className="badge badge-primary">28%</span> 
                </div>
                <div className="info">
                <h4>Do not miss the current offers </h4>
                <span className="text-success d-block">In Stock</span>
                <Rating name="read-only" value={5} readOnly  size="small"  />
                <div className="d-flex">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-2">$14.00</span>
                    <div className="actions">
                        <Button><TfiFullscreen /></Button> <Button><FaRegHeart /></Button> 
                      
                    </div>
                </div>
                </div>
    </div></SwiperSlide>
    <SwiperSlide> <div className="item productItem">
                <div className="imgWrapper">
                    <img src="z5.png" className="w-100"/>
                    <span className="badge badge-primary">28%</span> 
                </div>
                <div className="info">
                <h4>Do not miss the current offers </h4>
                <span className="text-success d-block">In Stock</span>
                <Rating name="read-only" value={5} readOnly  size="small"  />
                <div className="d-flex">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-2">$14.00</span>
                    <div className="actions">
                        <Button><TfiFullscreen /></Button> <Button><FaRegHeart style={{fontSize:'20px'}}/></Button> 
                      
                    </div>
                </div>
                </div>
    </div></SwiperSlide>
    

    </Swiper>

     </div>
 

     <div className="d-flex align-items-center mt-5">
        <div className="info w-75">
            <h3 className="mb-0 hd"> NEW ARRIVALS</h3>
            <p className="text-light text-sml mb-0">New products with updated staocks</p>
        </div>
        <Button className="viewAllBtn ml-auto"> View All < IoIosArrowRoundForward /></Button>
    </div>
    
    <div className="product_row productRow2 mt-4 d-flex">
    <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[ Navigation]}
        className="mySwiper">
        <SwiperSlide> <div className="item productItem">
                <div className="imgWrapper">
                    <img src="z5.png" className="w-100"/> 
                    <span className="badge badge-primary">28%</span> 
                    <div className="actions">
                        <Button></Button>
                        </div>         
                        </div>
                <div className="info">
                <h4>Do not miss the current offers </h4>
                <span className="text-success d-block">In Stock</span>
                <Rating name="read-only" value={5} readOnly  size="small"  />
                <div className="d-flex">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-2">$14.00</span>
                    <div className="actions">
                        <Button><TfiFullscreen /></Button> <Button><FaRegHeart /></Button>
                    </div>
                </div>
                </div>
                          </div>
                          </SwiperSlide>
                   <SwiperSlide> <div className="item productItem">
                <div className="imgWrapper">
                    <img src="z6.png" className="w-100"/>   
                    <span className="badge badge-primary">28%</span> 
                            </div>
                    <div className="info">
                <h4>Do not miss the current offers </h4>
                <span className="text-success d-block">In Stock</span>
                <Rating name="read-only" value={5} readOnly  size="small"  />
                <div className="d-flex">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-2">$14.00</span>
                    <div className="actions">
                        <Button><TfiFullscreen /></Button> <Button><FaRegHeart /></Button> 
                      
                    </div>
                </div>
                </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div className="item productItem">
                <div className="imgWrapper">
                    <img src="z6.png" className="w-100"/>   
                    <span className="badge badge-primary">28%</span> 
                            </div>
                    <div className="info">
                <h4>Do not miss the current offers </h4>
                <span className="text-success d-block">In Stock</span>
                <Rating name="read-only" value={5} readOnly  size="small"  />
                <div className="d-flex">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-2">$14.00</span>
                    <div className="actions">
                        <Button><TfiFullscreen /></Button> <Button><FaRegHeart /></Button> 
                      
                    </div>
                </div>
                </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div className="item productItem">
                <div className="imgWrapper">
                    <img src="z6.png" className="w-100"/>   
                    <span className="badge badge-primary">28%</span> 
                            </div>
                    <div className="info">
                <h4>Do not miss the current offers </h4>
                <span className="text-success d-block">In Stock</span>
                <Rating name="read-only" value={5} readOnly  size="small"  />
                <div className="d-flex">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-2">$14.00</span>
                    <div className="actions">
                        <Button><TfiFullscreen /></Button> <Button><FaRegHeart /></Button> 
                      
                    </div>
                </div>
                </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div className="item productItem">
                <div className="imgWrapper">
                    <img src="z6.png" className="w-100"/>   
                    <span className="badge badge-primary">28%</span> 
                            </div>
                    <div className="info">
                <h4>Do not miss the current offers </h4>
                <span className="text-success d-block">In Stock</span>
                <Rating name="read-only" value={5} readOnly  size="small"  />
                <div className="d-flex">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-2">$14.00</span>
                    <div className="actions">
                        <Button><TfiFullscreen /></Button> <Button><FaRegHeart /></Button> 
                      
                    </div>
                </div>
                </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div className="item productItem">
                <div className="imgWrapper">
                    <img src="z6.png" className="w-100"/>   
                    <span className="badge badge-primary">28%</span> 
                            </div>
                    <div className="info">
                <h4>Do not miss the current offers </h4>
                <span className="text-success d-block">In Stock</span>
                <Rating name="read-only" value={5} readOnly  size="small"  />
                <div className="d-flex">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-2">$14.00</span>
                    <div className="actions">
                        <Button><TfiFullscreen /></Button> <Button><FaRegHeart /></Button> 
                      
                    </div>
                </div>
                </div>
                        </div></SwiperSlide>
            <SwiperSlide> <div className="item productItem">
                <div className="imgWrapper">
                    <img src="7.png" className="w-100"/>
                    <span className="badge badge-primary">28%</span> 
                </div>
                <div className="info">
                <h4>Do not miss the current offers </h4>
                <span className="text-success d-block">In Stock</span>
                <Rating name="read-only" value={5} readOnly  size="small"  />
                <div className="d-flex">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-2">$14.00</span>
                    <div className="actions">
                        <Button><TfiFullscreen /></Button> <Button><FaRegHeart /></Button> 
                      
                    </div>
                </div>
                </div>   
            </div></SwiperSlide>
            <SwiperSlide> <div className="item productItem">
                <div className="imgWrapper">
                    <img src="z5.png" className="w-100"/>
                    <span className="badge badge-primary">28%</span> 
                </div>
                <div className="info">
                <h4>Do not miss the current offers </h4>
                <span className="text-success d-block">In Stock</span>
                <Rating name="read-only" value={5} readOnly  size="small"  />
                <div className="d-flex">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-2">$14.00</span>
                    <div className="actions">
                        <Button><TfiFullscreen /></Button> <Button><FaRegHeart /></Button> 
                      
                    </div>
                </div>
                </div>
                            </div></SwiperSlide>
           
   
    

    </Swiper>

     </div>

 <div className="d-flex mt-5 bannerSec">
 <div className="banner">
 <img src={banner3}  className="cursor "/> 
</div>
<div className="banner">
 <img src={banner4}  className="cursor "/> 
</div>
 </div>

     
     </div>
     </div>
     </div>
     </section> 
               <section className="newsletterSection  d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                <h6 className="text-white mb-1 ">$20 discount for your first order</h6>
                <h4 className="text-white ">Join our newsletter and get...</h4>
                <p className="text-light">Join our email subscription now to get updates on<br/> promotions and coupons</p>
                <form>
                <IoMailOutline/>
                <input type="text" placeholder="Your Email Address.." />
<Button>Send your email</Button>

                </form>
                        </div>
                        <div className="col-md-6">
                            <img src={coupon}/>
                        </div>

                    </div>
                    </div>
                      <br/>    <br/>    <br/>    <br/>  
               </section>
              

         

        </> 
           ) ;
           } 
              export default Home;