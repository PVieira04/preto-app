import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
    return (
        <div className="flex justify-evenly py-6 items-center bg-white ">
            <div><h1 className="text-5xl font-bold cyan-550">Branco</h1></div>
            <div className="">
                <ul className="flex space-x-11 text-xl">
                    <li className="uppercase text-green-600 font-bold pl-3">Our Food</li>
                    <li className="uppercase text-yellow-600 font-bold pl-3">Locations & Menus</li>
                    <li className="uppercase text-purple-600 font-bold pl-3">Offers</li>
                    <li className="uppercase text-red-600 font-bold pl-3">Book a Table</li>
                    <li className="uppercase text-blue-600 font-bold pl-3">The Experience</li>
                    <li className="uppercase text-yellow-600 font-bold pl-3">Delivery</li>
                </ul>
            </div>
            <div className="space-x-5">
                <a href="https://www.facebook.com/PretoRestaurant/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookSquare} size="3x" className='cyan-550' /></a>
                <a href="https://www.instagram.com/pretorestaurant/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagramSquare} size="3x" className='cyan-550' /></a>
                <a href="https://twitter.com/PretoRestaurant" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitterSquare} size="3x" className='cyan-550' /></a>
            </div>
        </div>
     );
}
 
export default Navbar;