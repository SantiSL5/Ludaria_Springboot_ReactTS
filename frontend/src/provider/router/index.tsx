import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from "../layout";

import Home from "../pages/Home";
import Admin from '../pages/Admin';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Shop from '../pages/Shop';

import AdminBrands from '../pages/Admin/brands';
import AdminCategories from '../pages/Admin/categories';
import AdminProducts from '../pages/Admin/products';
import AdminPuzzles from '../pages/Admin/puzzles';
import AdminGames from '../pages/Admin/games';
import AdminAccessories from '../pages/Admin/accesories';
import DetailsPage from '../pages/Details';
import { AuthGuard } from './guards/AuthGuard';
import AdminGuard from './guards/AdminGuard';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';


const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/admin" element={<Admin />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/shop" element={<Shop />}></Route>
                    <Route path="/shop/details/:id" element={<DetailsPage />} />
                    <Route element={<AdminGuard />}>
                        <Route path="/admin/" >
                        <Route index element={<Admin />} />
                            <Route path="brands/" element={<AdminBrands />}/>
                            <Route path="categories/" element={<AdminCategories />}/>
                            <Route path="products/" element={<AdminProducts />}/>
                            <Route path="puzzles/" element={<AdminPuzzles />}/>
                            <Route path="games/" element={<AdminGames />}/>
                            <Route path="accessories/" element={<AdminAccessories />}/>
                        </Route>
                    </Route>
                    <Route element={<AuthGuard />}>
                        <Route path="/cart/" element={<Cart />}></Route>
                        <Route path="/profile/" element={<Profile />}></Route>
                    </Route>
                </Routes>
            </Layout>
            <ToastContainer />
        </BrowserRouter>
    );
}

export default Router;