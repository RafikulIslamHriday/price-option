
import { useState } from 'react';
import Link from '../link/Link';
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Nav = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact Us" }
      ];
      
    return (
        <nav>
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <AiOutlineClose></AiOutlineClose>
                    : <AiOutlineMenu></AiOutlineMenu>
                }
            </div>
            <ul className='md:flex'>
                {
                    routes.map(route => <Link key={route.id} route = {route}></Link>)
                }
            </ul>
            
        </nav>
    );
};

export default Nav;