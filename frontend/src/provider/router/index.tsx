import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from "../layout";

import Home from "../pages/Home";
import Admin from '../pages/Admin';
import Register from '../pages/Register';
import Login from '../pages/Login';

import AdminBrands from '../pages/Admin/brands';
import AdminCategories from '../pages/Admin/categories';
import AdminProducts from '../pages/Admin/products';
import AdminPuzzles from '../pages/Admin/puzzles';
import AdminGames from '../pages/Admin/games';
import AdminAccessories from '../pages/Admin/accesories';


const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/admin" element={<Admin />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route>
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
                </Routes>
            </Layout>
            <ToastContainer />
        </BrowserRouter>
    );
}

export default Router;