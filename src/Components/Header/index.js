import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Button from '@mui/material/Button';
import CountryDropdown from '../CountryDropdown';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox';
import Navigation from './Navigation';

const Header = () => {
return(  
<>
<div className="headerWrapper">
    <div className="top-strip bg-blue">
    <div className="container">
        <p className="mb-0 mt-0 text-center">  <b>Free Shipping</b> on orders above Rs 2000...</p>
    </div>
    </div>
<header className="header">
<div className="container">
    <div className="row">
        <div className="logoWrapper align-items-center  col-sm-2"><Link to={'/'}><img src={Logo} alt ='Logo' /></Link>       
</div>
<div className='col-sm-10 d-flex align-items-center part2'>

   <CountryDropdown/>
   <div style={{ marginRight: "30px" }}></div>
  <SearchBox/>

<div className='part3 d-flex align-items-center ml-auto'>
    <Button className='circle mr-3'><FiUser/></Button>
    <div className=' cartTab ml-auto d-flex align-items-center'>
        <span className='price'>$3.29</span>
      <div className='position-relative ml-2'>
      <Button className='circle'><IoBagOutline/></Button>
      <span className='count d-flex align-items-center justify-content-center'>o</span>
      </div>
    </div>

</div>
</div>
</div>
</div>
</header>
< Navigation/>
</div>
</>
)}
export default Header;