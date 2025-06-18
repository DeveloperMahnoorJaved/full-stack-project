import React from 'react';
import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";

const Footer = ()=>{
    return(
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
               <span><TbTruckDelivery/></span>
                        <span className='ml-2'>Free Delivery for order over $70</span>

                    </div>

                     <div className="col d-flex align-items-center">
               <span><TbRosetteDiscountCheck /></span>
                        <span className='ml-2'>Daily Mega Discounts</span>

                    </div>

                     <div className="col d-flex align-items-center">
               <span><GiTakeMyMoney /></span>
                        <span className='ml-2'>Best Price onthe market </span>

                    </div>

                     <div className="col d-flex align-items-center">
               <span><FaHandsHelping /></span>
                        <span className='ml-2'>Need Help?</span>
</div>
 </div>
<div className='row mt-4'>
    <div className='col'>
            <h5>Fashion</h5>
               <ul>
            <li><link to="#" >
            T-shirts
            </link></li>
        </ul>
 </div>
</div>
           </div>
        </footer>
)
}
export default Footer;