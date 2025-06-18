import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from 'react-icons/fa6';
// import { Link } from '@mui/material';
import { CiHome } from "react-icons/ci";
import { IoShirtOutline } from "react-icons/io5";
import { TbGenderDemiboy } from "react-icons/tb";
import { MdSlowMotionVideo } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { TbMoodKidFilled } from "react-icons/tb";
import { IoShirtSharp } from "react-icons/io5";
import { RiWomenFill } from "react-icons/ri";
import { BsBagHeart } from "react-icons/bs";
import { BsEmojiSunglassesFill } from "react-icons/bs";
import { PiHoodieDuotone } from "react-icons/pi";

const Navigation = ( ) => {
const [isopenSidebarVal, setisopenSidebarVal] = useState(true);

return (
    <nav>
    <div className='container'>
        <div className='row'>
            <div className='col-sm-3 navPart1'>
                <div className='catWrapper' >
                <Button className='allCatTab align-items-center' onClick={()=>setisopenSidebarVal(!isopenSidebarVal)}>
                    <span className='icon1 mr-2'><IoIosMenu/></span>
                    <span className="text">ALL CATEGORIES</span>
                    <span className='icon2 ml-2'><FaAngleDown/></span>
                </Button>
                <div className={`sidebarNav ${isopenSidebarVal===true ? 'open' : ''}`}>
                   <ul>
                    <li><Link to="/"><Button>women&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<RiWomenFill />
</Button></Link></li>
                    <li><Link to="/"><Button>Fashion&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsBagHeart />
</Button></Link></li>
   <li><Link to="/"><Button>men&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsEmojiSunglassesFill /></Button></Link></li>
  <li ><Link to="/"><Button>kids&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <TbMoodKidFilled /> </Button></Link></li>
<li><Link to="/"><Button>hoodies&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<PiHoodieDuotone />
</Button></Link></li>
  <li><Link to="/"><Button>t-shirts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <IoShirtSharp /></Button></Link></li>
  <li><Link to="/"><Button>women&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<RiWomenFill />
</Button></Link></li>
    <li><Link to="/"><Button>Fashion&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsBagHeart />
</Button></Link></li>
   <li><Link to="/"><Button>men&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsEmojiSunglassesFill /></Button></Link></li>
                   </ul>
                    </div> 
                </div> 
            </div>
            <div className='col-sm-9 navpart2 d-flex align-items-center'>
              <ul className='list list-inline ml-auto'>
              
              <li className='list-inline-item'><Link to="/"><CiHome/>&nbsp;  Home</Link></li>
              <li className='list-inline-item'><Link to="/"><CiHome/>&nbsp;  Hoodies</Link></li>
              <li className='list-inline-item'><Link to="/"><CiHome/>&nbsp;  New Arrivals</Link></li>
              <li className='list-inline-item'><Link to="/"> <IoShirtOutline />&nbsp;  Fashion</Link></li>
              <li className='list-inline-item'><Link to="/"><TbGenderDemiboy /> &nbsp;Mens</Link></li>
              <li className='list-inline-item'><Link to="/"> <MdSlowMotionVideo />&nbsp;Blog</Link></li>
              <li className='list-inline-item'><Link to="/"><IoMdContacts />  &nbsp;About</Link></li>
              <li className='list-inline-item'><Link to="/"><MdOutlinePermPhoneMsg />   &nbsp;Contact</Link></li>  
              </ul>

            </div>
        </div>
    </div>
</nav>

)
}
export default Navigation;
