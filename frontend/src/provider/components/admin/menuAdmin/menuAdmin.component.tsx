import { NavLink } from "react-router-dom"
import "./style.css"


const MenuAdmin = () => {
    return (      
        <> 
            <nav className="bg-white py-4 border-b-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-base space-y-6 md:space-y-0 md:space-x-6">
                        <NavLink className={({ isActive }) => (isActive ? "admin-link-active" : "admin-link")} to="/admin/brands">
                            BRANDS
                        </NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "admin-link-active" : "admin-link")} to="/admin/categories">
                            CATEGORIES
                        </NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "admin-link-active" : "admin-link")} to="/admin/products">
                            PRODUCTS
                        </NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "admin-link-active" : "admin-link")} to="/admin/puzzles">
                            PUZZLES
                        </NavLink>
                    </div>
                </div>
            </nav>
        </> 
    )
}

export default MenuAdmin;