
import { Outlet } from 'react-router-dom';
import Home from './Home';
import Header from './Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;