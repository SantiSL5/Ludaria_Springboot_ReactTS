import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "../pages/Home";
import Admin from '../pages/Admin';
import Layout from "../layout";
import AdminBrands from '../pages/Admin/brands';
import AdminCategories from '../pages/Admin/categories';


const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/admin" element={<Admin />}></Route>
                    <Route>
                        <Route path="/admin/" >
                        <Route index element={<Admin />} />
                            <Route path="brands/" element={<AdminBrands />}/>
                            <Route path="categories/" element={<AdminCategories />}/>
                            <Route path="products/" />
                        </Route>
                    </Route>
                </Routes>
            </Layout>
            <ToastContainer />
        </BrowserRouter>
    );
}

export default Router;