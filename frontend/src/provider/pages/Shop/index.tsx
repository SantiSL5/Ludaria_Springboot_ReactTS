import ListComponent from '../../components/shop/listComponent'
import FilterComponent from '../../components/shop/filterComponent';
import { useProducts } from '../../hooks/useProducts';
import Spinner from '../../components/spinner/spinner.component';
import { useEffect, useState } from 'react';
import PaginationComponent from '../../components/generic/paginationComponent';
import { useCategories } from '../../hooks/useCategories';
import { useBrands } from '../../hooks/useBrands';
import { useLikes } from '../../hooks/useLike';
import { useCart } from '../../hooks/useCart';
import { useLocation } from 'react-router-dom';

const ShopPage = () => {
    const { setLike } = useLikes();
    const { products, getProductsFilters, pages } = useProducts();
    const { categories, getAllCategories } = useCategories();
    const { brands, getAllBrands } = useBrands();
    const { addCartLine } = useCart();
    const [currentPage, setCurrentPage] = useState(1);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    
    const categoryParam = queryParams.get('category');

    const [filters, setFilters] = useState({
        type: null,
        category: null,
        brand: null,
        minPrice: null,
        maxPrice: null,
        search: null,
    });

    useEffect(() => {
        getProductsFilters(12,currentPage-1, filters);
    }, [filters, currentPage]);

    useEffect(() => {
        if (categoryParam) {
            setFilters(prevFilters => ({
                ...prevFilters,
                category: categoryParam ?? null,
            }));
        }
    }, [categoryParam]);


    if (!categories) getAllCategories();
    if (!brands) getAllBrands();

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        getProductsFilters(12, page-1, filters);
    };

    const handleFiltersChange = (newFilters: typeof filters) => {
        setFilters(newFilters);
        setCurrentPage(1);
        getProductsFilters(12, 0, newFilters);
    };

    const handleLike = async (product: number) => {
        try {
            await setLike(product);
            getProductsFilters(12,currentPage-1, filters);
        } catch (e){
            console.log(e);
        }
    };

    const handleAddToCart = (product:number) => {
        try {
            addCartLine({"cant":1, "product":product})
        } catch (e) {
            console.log(e);
        }
    }

    return (
    <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-6">
            <aside className="w-full lg:w-72 bg-gray-100 p-4 rounded-lg">
                {categories && brands ? (<FilterComponent categories={categories} brands={brands} onFiltersChange={handleFiltersChange} initialFilters={filters}/>) : <Spinner />}
            </aside>

            <div className="flex-1">
                {products ? (<ListComponent items={products} onLike={handleLike} onAddToCard={handleAddToCart} />) : <Spinner />}
                {products ? (<PaginationComponent currentPage={currentPage} totalPages={pages} onPageChange={handlePageChange} />) : <Spinner />}
            </div>
        </div>
    </div>

    );
};

export default ShopPage;