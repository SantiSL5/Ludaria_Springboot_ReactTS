import ListComponent from '../../components/shop/listComponent'
import FilterComponent from '../../components/shop/filterComponent';
import { useProducts } from '../../hooks/useProducts';
import Spinner from '../../components/spinner/spinner.component';
import { useState } from 'react';
import PaginationComponent from '../../components/shop/paginationComponent';

const ShopPage = () => {
    const { products, getProductsFilters, pages } = useProducts();
    const [currentPage, setCurrentPage] = useState(1);

    if (!products) getProductsFilters(12,currentPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        getProductsFilters(12,page);
    };

    return (
    <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-6">
            <aside className="w-full lg:w-64 bg-gray-100 p-4 rounded-lg">
                <FilterComponent />
            </aside>

            <div className="flex-1">
                {products ? (<ListComponent items={products} />) : <Spinner />}
                {products ? (<PaginationComponent currentPage={currentPage} totalPages={pages-1} onPageChange={handlePageChange} />) : <Spinner />}
            </div>
        </div>
    </div>

    );
};

export default ShopPage;