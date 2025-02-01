
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='flex flex-col container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;